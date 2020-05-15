exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('projects').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('projects').insert([
        {projectName: 'Graduate Lambda School', description: 'Full Stack Developer'},
        {projectName: 'Network', description: 'Maximize LinkedIN'},
        {projectName: 'Interview for Jobs', description: 'Prepare yourself with mock interview practice'},
        {projectName: 'Get Hired', description: 'Software Developer'}
      ]);
    });
};