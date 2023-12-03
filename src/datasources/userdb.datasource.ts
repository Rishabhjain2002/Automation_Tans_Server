import {inject, lifeCycleObserver, LifeCycleObserver} from '@loopback/core';
import {juggler} from '@loopback/repository';

const config = {
  name: 'userdb',
  connector: 'postgresql',
  url: process.env.DATABASE_URL,
  host: process.env.DATABASE_HOST || '127.0.0.1',
  port: process.env.DATABASE_PORT || 5432,
  user: process.env.DATABASE_USER || 'postgres',
  password: process.env.DATABASE_PASSWORD || 'password',
  database: process.env.DATABASE_NAME || 'Unlock/Reset'
};

// Observe application's life cycle to disconnect the datasource when
// application is stopped. This allows the application to be shut down
// gracefully. The `stop()` method is inherited from `juggler.DataSource`.
// Learn more at https://loopback.io/doc/en/lb4/Life-cycle.html
@lifeCycleObserver('datasource')
export class UserdbDataSource extends juggler.DataSource
  implements LifeCycleObserver {
  static dataSourceName = 'userdb';
  static readonly defaultConfig = config;

  constructor(
    @inject('datasources.config.userdb', {optional: true})
    dsConfig: object = config,
  ) {
    super(dsConfig);
  }
}
