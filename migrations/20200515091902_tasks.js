exports.up = function(knex) {
    return knex.schema
        .createTable('tasks', tbl => {
            //add an id column that auto-increments
            tbl.increments()
                // description
            tbl.string('taskDescription', 128).notNullable();
            // task notes
            tbl.string('notes', 500);
            // task status using boolean
            tbl.boolean('completed').notNullable();
            //project id
            tbl.integer('projectId')
                .unsigned()
                .notNullable()
                .references('id')
                .inTable('projects')
                .onUpdate('CASCADE')
                .onDelete('CASCADE');
        })
};
//knex migrate:latest
exports.down = function(knex) {
    return knex.schema.dropTableIfExists('tasks')

};
