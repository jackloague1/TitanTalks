const knex = require('knex');

module.exports = function (app) {
  const { client, connection, useNullAsDefault } = app.get('sqlite');
  const db = knex({ client, connection, useNullAsDefault });

  app.set('knexClient', db);
};
