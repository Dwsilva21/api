import { IResolvers } from 'graphql-tools';
import tml_off_eventos from './tml_off_eventos';
import tml_off_motivos from './tml_off_motivos';

const resolverMap: IResolvers = {
  Query: {
    ...tml_off_eventos.eventosQuery,
    ...tml_off_motivos.eventosQuery
  },
  Mutation: {
    ...tml_off_eventos.eventosMutation
  }
}

export default resolverMap;