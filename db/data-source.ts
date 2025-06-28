// db/data-source.ts
import { DataSource } from 'typeorm';
import { config } from 'dotenv';
import { User } from 'src/user/entities/user.entity';

config({ path: '.env' }); // tùy môi trường

export const AppDataSource = new DataSource({
  type: 'mariadb',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  database: process.env.DB_NAME,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  synchronize: false,
  logging: true,
  entities: [`src/**/*.entity{.ts,.js}`],
  migrations: ['db/migrations/*.js'],
});
