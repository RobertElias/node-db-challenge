exports.seed = function(knex) {
    // Deletes ALL existing entries
    return knex('projResources').del()
        .then(function() {
            // Inserts seed entries
            return knex('projResources').insert([
                { projectID: 1, resourceID: 1 },
                { projectID: 1, resourceID: 2 },
                { projectID: 2, resourceID: 1 },
                { projectID: 2, resourceID: 2 },
                { projectID: 3, resourceID: 3 },
                { projectID: 3, resourceID: 4 }
            ]);
        });
};
  