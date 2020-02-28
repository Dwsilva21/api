// schema.ts
import 'graphql-import-node';
import * as SchemaPrincipal from './schema.graphql';
import * as TML_OFF_EVENTOS from './tml_off_eventos.graphql';
import * as TML_OFF_MOTIVOS from './tml_off_motivos.graphql';
import { makeExecutableSchema } from 'graphql-tools';
import resolvers from '../resolvers/index';
import { GraphQLSchema } from 'graphql';

const schema: GraphQLSchema = makeExecutableSchema({
  typeDefs: [
    TML_OFF_EVENTOS, 
    TML_OFF_MOTIVOS,
    SchemaPrincipal
  ],
  resolvers,
});

export default schema;