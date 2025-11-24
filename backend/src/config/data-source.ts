import 'dotenv/config';
import { DataSource } from 'typeorm';
import { Client } from '../modules/clients/entities/client.entity';
import { Deal } from '../modules/deals/entities/deal.entity';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.POSTGRES_HOST,
  port: Number(process.env.POSTGRES_PORT),
  username: process.env.POSTGRES_USER,
  password: process.env.POSTGRES_PASSWORD,
  database: process.env.POSTGRES_DB,
  entities: [Client, Deal],
  migrations: [__dirname + '/../migrations/*{.ts,.js}'],
  synchronize: false,
});
