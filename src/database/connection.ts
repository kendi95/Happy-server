import {createConnection} from 'typeorm';
import consola from 'consola';
import { resolve } from 'path';

import { CustomLogger } from './utils/CustomLogger';

const { success, error } = consola;

try {
  if (process.env.NODE_ENV === 'development') {
    createConnection({
      name: 'default',
      type: 'sqlite',
      database: resolve(__dirname, 'database.sqlite'),
      entities: [ resolve(__dirname, '..', 'models', '*{.ts, .js}') ],
      migrations: [ resolve(__dirname, 'migrations') ],
      logging: true,
      logger: new CustomLogger(),
      cli: {
        migrationsDir: resolve(__dirname, 'migrations'),
      }
    })
  }

  if (
    process.env.NODE_ENV === 'straight' || process.env.NODE_ENV === 'production'
    ) {
    createConnection({
      name: 'default',
      type: 'postgres',
      host: process.env.HOSTNAME,
      database: process.env.DATABASE,
      username: process.env.USERNAME,
      password: process.env.PASSWORD,
      port: Number(process.env.PORT),
      entities: [ resolve(__dirname, '..', 'models', '*{.ts, .js}') ],
      migrations: [ resolve(__dirname, 'migrations') ],
      cli: {
        migrationsDir: resolve(__dirname, 'migrations'),
      }
    })
  }
  success('Database connection successful...');
} catch (err) {
  error(`❌  ${err}`);
}

