import config from '../knexfile';
import Knex from 'knex';

const db = Knex(config.development);

export default db;