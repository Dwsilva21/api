const { connection } = require('./.env')

module.exports = {
  development: {
    client: 'mysql',
    connection
  },

  staging: {
    client: 'mysql',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'mysql',
    connection,
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
};
