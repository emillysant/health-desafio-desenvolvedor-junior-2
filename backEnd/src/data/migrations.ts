import { BaseDatabase } from "./BaseDatabase";
import animal from "./mock/animal.json";

const printError = (error: any) => {
  console.log(error.sqlMessage || error.message);
};

export class CreateTable extends BaseDatabase {
  public async createAnimals(): Promise<any> {
    await this.connection
      .raw(
        `
    CREATE TABLE IF NOT EXISTS animals(
       id VARCHAR(255) PRIMARY KEY,
       name VARCHAR(255) NOT NULL,
       age VARCHAR(255),
       specie VARCHAR(255),
       breed VARCHAR(255),
       owner_name VARCHAR(255) NOT NULL,
       owner_phone VARCHAR(255)
    );
    `
      )
      .then(() => {
        console.log("Tabela de animais criada");
      })
      .catch(printError);
  }

  insertAnimals = () =>
    this.connection("animals")
      .insert(animal)
      .then(() => {
        console.log("Animais inseridos na tabela");
      })
      .catch(printError);

  closeConnection = () => {
    this.connection.destroy();
  };
}

const createTable = new CreateTable();
createTable
  .createAnimals()
  .then(createTable.insertAnimals)
  .finally(createTable.closeConnection);
