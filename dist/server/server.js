"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const graphqlHTTP = require("express-graphql");
const graphql_1 = require("graphql");
const environment_1 = require("../common/environment");
const repository_1 = require("./repository");
class Server {
    initServer() {
        return new Promise((resolve, reject) => {
            let schema = graphql_1.buildSchema(`
        type Query {
          hello: String
        }
      `);
            const repository = new repository_1.Repository();
            repository
                .connection()
                .then((conn) => {
                conn.connect((err) => {
                    if (err) {
                        console.error(`Database connection error: ${err}`);
                    }
                    console.log(`Database connection state: ${conn.state}`);
                });
            })
                .catch((err) => {
                console.error(`An error ocurred when connecting to database: ${err}`);
            });
            let root = { hello: () => 'Hello world!' };
            let app = express();
            app.use('/graphql', graphqlHTTP({
                schema,
                rootValue: root,
                graphiql: true
            }));
            app.listen(environment_1.environment.server.port, () => {
                resolve(express);
            });
        });
    }
}
exports.Server = Server;
