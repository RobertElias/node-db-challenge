const db = require("../data/dataConfig.js");
module.exports = {
    // addTasks,
    list,
    listById, // id
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

function listTasks(id) {
    return db('tasks as t')
        .join('projects as p', 'p.id', 't.projectId')
        .select('t.id', 't.taskDescription', 't.notes', 't.completed')
        .where('p.id', id);
};