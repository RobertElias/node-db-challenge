
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').del()
    .then(function () {
      // Inserts seed entries
      return knex('resources').insert([
        {resourceName: 'https://www.w3schools.com/', description: 'reference website'},
        {resourceName: 'Front End Masters Subscription', description: 'FrontEnd development training'},
        {resourceName: 'MDN Documentation', description: 'Documentation for all things web development.'}
      ]);
    });
};

