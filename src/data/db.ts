const config = require('../../knexfile');
const knex = require('knex')

module.exports = require('knex')(config.development);
//export default knex(config.development);