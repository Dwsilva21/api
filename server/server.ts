import * as express from 'express'
import * as graphqlHTTP from 'express-graphql'
import { buildSchema } from 'graphql'
import { environment } from '../common/environment'
import { Repository } from './repository';

export class Server {
  initServer(): Promise<Express.Application>{
    return new Promise((resolve, reject) => {
      let schema = buildSchema(`
        type Query {
          hello: String
        }
      `);

      const repository = new Repository();
      repository
        .connection()
        .then((conn) => {
          conn.connect((err) => {
            if (err){
              console.error(`Database connection error: ${err}`)
            }

            console.log(`Database connection state: ${conn.state}`);
          });
        })
        .catch((err) => {
          console.error(`An error ocurred when connecting to database: ${err}`);
        })




      let root = { hello: () => 'Hello world!' };

      let app = express();

      app.use('/graphql', graphqlHTTP({
        schema, 
        rootValue: root,
        graphiql: true
      }));
  
      app.listen(environment.server.port, () => {
        resolve(express);
      });
    });
  }
}