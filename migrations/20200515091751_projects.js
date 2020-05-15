exports.up = function(knex) {
    return knex.schema
        .createTable('projects', tbl => {
            //add an id column that auto-increments
            tbl.increments(); //primary key
            //project name
            tbl.string('projectName', 128).notNullable();
            //description
            tbl.string('description', 500).optional();
            // status completed with boolen
            tbl.boolean('completed').boolean(false).required();
        })

};
// knex migrate:latest
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('projects')
};
