import db from '../data/db';

const eventosQuery = {
  async buscarMotivos(): Promise<Array<any>> {
    const motivos = 
      await db('TML_OFF_MOTIVOS')
      .select('codigo', 'descricao', 'ativo');

    return Promise.resolve(motivos);
  }
};

export default { eventosQuery };