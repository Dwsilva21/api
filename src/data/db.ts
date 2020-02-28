import config from '../common/knexfile';
import Knex from 'knex';

const db = Knex(config.development);

export default db;