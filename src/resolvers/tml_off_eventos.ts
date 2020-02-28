// import * as db from '../data/db';
const db = require('../data/db');

const eventosQuery = {
  async buscarEventos(): Promise<Array<any>> {
    const eventos = 
      await db('TML_OFF_EVENTOS')
      .select('codigo', 'descricao', 'cor');

    return Promise.resolve(eventos);
  }
};

const eventosMutation = {
  async novoEvento(_: void, {dados}: any): Promise<string>{
    const { codigo, descricao } = dados;

    const novoEvento = {
      codigo,
      descricao
    };

    const retorno = await db('TML_OFF_EVENTOS')
      .insert(novoEvento)
      .then((res: any) => {
        return Promise.resolve('OK');
      })
      .catch((err: any) => {
        return Promise.resolve(err.sqlMessage);
      });

    return retorno;
  }
};

export default { eventosQuery, eventosMutation };