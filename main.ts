import {Server} from './server/server';
import { DB } from './server/db';

const server = new Server();

server.initServer().then(server => {
  console.log(`Server is listening on: 4000`)

  const db = new DB();
  db.connect().then(() => {
    console.log(`Database connection sucessfully`);
  })
  .catch((err) => {
    console.error(`An error ocurred when connecting to database: ${err}`);
  })
})
.catch(error => {
  console.log('Server failed to start');
  console.error(error);
  process.exit(1);
});