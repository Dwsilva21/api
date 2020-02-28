import { IResolvers } from 'graphql-tools';
import eventos from './tml_off_eventos';

const resolverMap: IResolvers = {
  Query: {
    ...eventos
  }
}

export default resolverMap;