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
//localhost:5000/api/projects/resources
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
            res.status(201).json({ proj });
        })
        .catch(err => {
            res.status(500).json({ message: 'Failed to create new resource' });
        });
});

/*************************TASK LISTS*******************/
//localhost:5000/api/projects/2/tasks
//localhost: 5000/api/projects/1/tasks
//** */ get task lists by project id
router.get('/tasks', (req, res) => {
	Projects.listTasks()
		.then(tasks => {
			res.status(201).json(tasks);
		})
		.catch(error => {
			res.status(500).json({message: error});
		});
});

/* POST TASKS by project id */
//localhost:5000/api/projects/1/tasks
router.post("/tasks", (req, res) => {
    const newTask = req.body;
    //const { id } = req.params;

    Projects.createTask(newTask)
        .then(tasks => {
            res.status(201).json({
                message: "Created new task", newTask
            });
        })
        .catch(err => {
            console.log(err);
            res.status(500).json({ message: "Failed to create new task" });
        });
});
module.exports = router;