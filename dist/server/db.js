"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const environment_1 = require("../common/environment");
class DB {
    connect() {
        let { host, port, user, password } = environment_1.environment.db;
        return new Promise((resolve, reject) => {
            mysql.createConnection({
                host,
                port,
                user,
                password
            }).connect((err) => {
                if (err)
                    reject(err.message);
                resolve();
            });
        });
    }
}
exports.DB = DB;
