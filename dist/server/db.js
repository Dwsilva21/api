"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require("mysql");
const environment_1 = require("../common/environment");
class DB {
    connection() {
        let { host, port, user, password } = environment_1.environment.db;
        return new Promise((resolve, reject) => {
            try {
                let conn = mysql.createConnection({
                    host,
                    port,
                    user,
                    password,
                    timeout: 60000
                });
                resolve(conn);
            }
            catch (err) {
                reject(err);
            }
        });
    }
}
exports.DB = DB;
