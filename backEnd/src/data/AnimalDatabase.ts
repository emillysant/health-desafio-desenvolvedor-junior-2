import { animal } from "../model/animal";
import { BaseDatabase } from "./BaseDatabase";

export class AnimalDatabase extends BaseDatabase {
  getAnimalById = async (id: String): Promise<animal | any> => {
    const animal = await this.connection("animals").select("*").where({ id });

    return animal[0];
  };

  getAllAnimals = async (): Promise<animal[] | any> => {
    const animals: animal[] = [];
    const result = await this.connection("animals").select(
      "id",
      "name",
      "specie"
    );
    for (let animal of result) {
      animals.push(animal);
    }
    return animals;
  };

  insertAnimal = async (animal: animal): Promise<void> => {
    await this.connection("animals").insert({
      id: animal.id,
      name: animal.name,
      age: animal.age,
      specie: animal.specie,
      breed: animal.breed,
      owner_name: animal.owner_name,
      owner_phone: animal.owner_phone,
    });
  };

  updateAnimalById = async (animal: animal): Promise<void> => {
    const id = animal.id
    await this.connection("animals").where({ id }).update(animal);
  };

  deleteAnimalById = async (id: String): Promise<void> => {
    await this.connection("animals").where({ id }).delete();
  };
}
