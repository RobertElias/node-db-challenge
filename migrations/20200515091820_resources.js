
exports.up = function(knex) {
    return knex.schema
        .createTable('resources', tbl => {
            //add an id column that auto-increments
            tbl.increments(); //primary key
            //resources name
            tbl.string('resourceName', 128).unique();
            //description
            tbl.string('description', 500);
            tbl.boolean('completed').notNullable();

        })

};
// knex migrate:latest
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('resources')
};