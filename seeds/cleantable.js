const ignore = require('knex-cleaner');

exports.seed = function(knex) {
  return ignore.clean(knex, {
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], 
  });
};
