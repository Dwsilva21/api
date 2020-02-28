import { IResolvers } from 'graphql-tools';
import tml_off_eventos from './tml_off_eventos';

const resolverMap: IResolvers = {
  Query: {
    ...tml_off_eventos.eventosQuery
  },
  Mutation: {
    ...tml_off_eventos.eventosMutation
  }
}

export default resolverMap;