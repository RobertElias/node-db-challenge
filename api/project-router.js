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
module.exports = router;