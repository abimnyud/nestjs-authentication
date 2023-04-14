import { DataSource, DataSourceOptions } from 'typeorm';
import { join } from 'path';

export const dataSourceOptions: DataSourceOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'password',
  database: 'user_management',
  entities: [__dirname + '/../**/*.entity.{js,ts}'],
  migrations: [join(__dirname, '..', 'database/migrations/*.{ts,js}')],
};

const dataSource = new DataSource(dataSourceOptions);
export default dataSource;
