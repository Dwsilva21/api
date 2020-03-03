import dotenv from 'dotenv'
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import depthLimit from 'graphql-depth-limit';
import { createServer } from 'http';
import compression from 'compression';
import cors from 'cors';
import schema from './schema';
import * as serverEnv from './common/environment';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const server = new ApolloServer({
  schema,
  validationRules: [depthLimit(7)],
});

app.use('*', cors());
app.use(compression());
app.use(bodyParser.text({ type: 'application/graphql' }));

server.applyMiddleware({ app, path: '/graphql' });

const httpServer = createServer(app);
const { port } = serverEnv.default.server;

httpServer.listen({ port }, (): void => {
  console.log(`\n🚀   Server is now running on http://localhost:${port}/graphql`)
});