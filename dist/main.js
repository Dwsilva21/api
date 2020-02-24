"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const server_1 = require("./server/server");
const db_1 = require("./server/db");
const server = new server_1.Server();
server.initServer().then(server => {
    console.log(`Server is listening on: 4000`);
    const db = new db_1.DB();
    db.connect().then(() => {
        console.log(`Database connection sucessfully`);
    })
        .catch((err) => {
        console.error(`An error ocurred when connecting to database: ${err}`);
    });
})
    .catch(error => {
    console.log('Server failed to start');
    console.error(error);
    process.exit(1);
});
