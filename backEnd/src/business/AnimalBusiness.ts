import { AnimalDatabase } from "../data/AnimalDatabase";
import { animalInput, animal } from "../model/animal";
import { IdGenerator } from "../services/IdGenerator";

export class AnimalBusiness {
  getAnimalById = async (id: String): Promise<animal | undefined> => {
    const animal = await new AnimalDatabase().getAnimalById(id);

    if (!animal) {
      throw new Error("Animal não encontrado no nosso Banco de dados");
    }
    return animal;
  };

  getAllAnimals = async (): Promise<animal[] | undefined> => {
    const animals = await new AnimalDatabase().getAllAnimals();

    if (!animals) {
      throw new Error("Animais não encontrados no nosso Banco de dados");
    }
    return animals;
  };

  insertAnimal = async (animal: animalInput): Promise<void> => {
    const { name, age, specie, breed, owner_name, owner_phone } = animal;
    const id = new IdGenerator().generate();

    if (!name) {
      throw new Error("Animal deve ter um nome");
    }
    await new AnimalDatabase().insertAnimal({
      id,
      name,
      age,
      specie,
      breed,
      owner_name,
      owner_phone,
    });
  };

  updateAnimalById = async (
    animal: animal,
    animalUpdate: animalInput
  ): Promise<void> => {
    if (animalUpdate.name) animal.name = animalUpdate.name;
    if (animalUpdate.age) animal.age = animalUpdate.age;
    if (animalUpdate.breed) animal.breed = animalUpdate.breed;
    if (animalUpdate.specie) animal.specie = animalUpdate.specie;
    if (animalUpdate.owner_name) animal.owner_name = animalUpdate.owner_name;
    if (animalUpdate.owner_phone) animal.owner_phone = animalUpdate.owner_phone;

    await new AnimalDatabase().updateAnimalById(animal);
  };

  deleteAnimalById = async (id: String): Promise<void> => {
    await new AnimalDatabase().deleteAnimalById(id);
  };
}
