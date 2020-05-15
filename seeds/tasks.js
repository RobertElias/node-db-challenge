exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').truncate()
      .then(function() {
          // Inserts seed entries
          return knex('tasks').insert([
              { projectID: 1, taskDescription: 'Get a workout today', notes: 'Do 5X5 Squat, Press' },
              { projectID: 2, taskDescription: 'Get a workout tomarrow', notes: 'Do 5X5 Squat, Bench' },
              { projectID: 3, taskDescription: 'Get a workout everyday', notes: 'Do 5X5 Squat, Press' }
          ]);
      });
};