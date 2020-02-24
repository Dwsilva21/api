"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
new server_1.Server()
    .initServer()
    .then(server => {
    console.log(`Server is listening on: 4000`);
})
    .catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
