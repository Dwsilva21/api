import * as mysql from 'mysql';
import { environment } from '../common/environment'

export class DB {
  connect(): Promise<any>{
    let { host, port, user, password } = environment.db;

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
      })
    });
  }
}