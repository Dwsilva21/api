import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import { environment } from '../common/environment'

export class Server {
  initServer(): Promise<any>{
    return new Promise((resolve, reject) => {
      let schema = buildSchema(`
        type Query {
          hello: String
        }
      `);

      let root = { hello: () => 'Hello world!' };

      let app = express();

      app.use('/graphql', graphqlHTTP({
        schema, 
        rootValue: root,
        graphiql: true
      }));
  
      app.listen(environment.server.port, () => {
        resolve();
      });
    });
  }
}