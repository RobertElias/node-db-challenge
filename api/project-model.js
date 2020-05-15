const db = require("../data/dataConfig.js");
module.exports = {
    // addTasks,
    list,
    listById, // id
    //getAllTasks,
   listTasks, // id
    listResources,
    listProjResources, // id
    create,
    createTask,
    createResource
};

function create(requestBody) {
    return db("projects")
        .insert(requestBody)
        .then(([id]) => {
            return listById(id);
        });
}

function list() {
    return db("projects");
}

function listById(id) {
    return db("projects")
        .where({ id })
        .first();
}

function createTask(task) {
    task.completed ? (task.completed = true) : (task.completed = false);
    return db('tasks').insert(task, 'id');
}

//The list of tasks should include the project name and project description.
function listTasks() {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.projectId')
        .select('t.id', 't.taskDescription', 't.notes', 't.completed',"p.projectName", "p.description");
};


function listProjResources(id) {
    return db("proj-resources as pr")
        .join("projects as p", "p.id", "pr.projectID")
        .join("resources as r", "r.id", "pr.resourceID")
        .select("p.projectName", "p.description", "r.resourceName", "r.description")
        .where("p.id", id);
}


function createResource(resource) {
    return db("resources as r")
        .insert(resource)
        .then(() => {
            return listResources();
        });
}
function listResources() {
    return db("resources");
}