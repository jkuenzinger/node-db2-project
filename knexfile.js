// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/cars.db3',
    },
    useNullasDefault: true,
    migrations: {
      directory: "./data/migrations",
    },
  },

 
  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user:     'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    useNullasDefault: true,
    migrations: {
      tableName: 'knex_migrations'
    }
  }

};
