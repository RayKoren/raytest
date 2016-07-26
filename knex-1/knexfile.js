module.exports = {

  development: {
    client: 'pg',
    connection: 'postgres://localhost/students'
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }

};
