"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_1 = require("graphql");
const environment_1 = require("../common/environment");
class Server {
    initServer() {
        return new Promise((resolve, reject) => {
            let schema = graphql_1.buildSchema(`
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
            app.listen(environment_1.environment.server.port, () => {
                resolve();
            });
        });
    }
}
exports.Server = Server;
