const server = {
  port: process.env.PORT || 4000
}

const connection = {
  host: 'mysql.uhserver.com',
  port: 3306,
  database: 'offshore',
  user: 'offshore',
  password: '@projeto21@'
}

export default { connection, server };