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