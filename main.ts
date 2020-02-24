import {Server} from './server/server';

new Server()

.initServer()
.then(server => {
  console.log(`Server is listening on: 4000`)
})
.catch(error => {
  console.log('Server failed to start');
  console.error(error);
  process.exit(1);
});