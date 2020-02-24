import * as mysql from 'mysql';
import { environment } from '../common/environment'

export class Repository {
  connection(): Promise<mysql.Connection>{
    let { host, port, user, password } = environment.db;

    return new Promise((resolve, reject) => {
        try{
          let conn = mysql.createConnection({
            host,
            port,
            user,
            password,
            timeout: 60000
          });

          resolve(conn);
        }
        catch(err){
          reject(err);
        }
    });
  }
}