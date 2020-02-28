// import * as db from '../data/db';
const db = require('../data/db');

const eventos = {
  async buscarEventos(): Promise<Array<any>> {
    const eventos = 
      await db('TML_OFF_EVENTOS')
      .select('codigo', 'descricao', 'cor');

    return Promise.resolve(eventos);
  }
};

export default eventos;