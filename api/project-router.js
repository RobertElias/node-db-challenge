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

// adding new resources  -----------/////
//localhost:5000/api/projects/resources
router.post('/resources', (req, res) => {
    const addResource = req.body;
    Projects
        .createResource(addResource)
        .then(proj => {
            res.status(201).json({ message: 'Added a new resource' });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

/*************************TASK LISTS*******************/
//localhost:5000/api/projects/2/tasks
//localhost: 5000/api/projects/1/tasks
//** */ get task lists by project id
router.get("/:id/tasks", (req, res) => {
    const { id } = req.params;

    Projects.listTasks(id)
        .then(tasks => {
            res.status(201).json(tasks);
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to get tasks" });
        });
});
module.exports = router;