import knex from "knex";
import dotenv from "dotenv";

dotenv.config();

export class BaseDatabase {

  protected connection = knex({
    client: "mysql",
    connection: {
      host: process.env.DB_HOST,
      user: process.env.DB_USER,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      port: 3306,
      multiStatements: true,
    },
  });
}

