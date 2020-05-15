const express = require("express");

const Projects = require("./project-model.js");

const router = express.Router();


/**************PROJECT SECTION***************/
// for projects
// list the projects
//localhost:5000/api/projects/
router.get("/", (req, res) => {
    Projects.list()
        .then(projects => {
            res.json(projects);
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to retrieve Project Data" });
        });
});


/*******POST PROJECTS*********/
//localhost:5000/api/projects/
router.post("/", (req, res) => {
    const newProject = req.body;
    Projects.create(newProject)
        .then(project => {
            res.status(201).json(project);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Error failed to create a new project" });
        });
});

/**************RESOURCES SECTION***************/
// Getting a list of resources
//localhost:5000/api/resources
router.get('/resources', (req, res) => {
    Projects
        .listResources()
        .then(resource => {
            res.json(resource);
        })
        .catch(err => {
            res.status(500).json({ message: 'I failed you master... ' });
        });
});


module.exports = router;