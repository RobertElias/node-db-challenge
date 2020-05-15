exports.up = function(knex) {
    return knex.schema.createTable("projResources", tbl => {
      //add an id column that auto-increments
      tbl
        .integer("projectID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("projects")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl
        .integer("resourceID")
        .unsigned()
        .notNullable()
        .references("id")
        .inTable("resources")
        .onUpdate("CASCADE")
        .onDelete("CASCADE");
      tbl.primary(["projectID", "resourceID"]);
    });
  };
  
  // knex migrate:latest
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists("projResources");
  };
