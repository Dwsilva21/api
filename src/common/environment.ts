import dotenv from 'dotenv';

dotenv.config();

const server = {
  port: process.env.PORT || 4000
}

const connection = {
  host: process.env.APP_DB_HOST,
  port: 3306,//process.env.APP_DB_PORT,
  database: process.env.APP_DB_NAME,
  user: process.env.APP_DB_USER,
  password: process.env.APP_DB_PASSWORD
}

export default { connection, server };