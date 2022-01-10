import { Request, Response } from "express";
import { AnimalBusiness } from "../business/AnimalBusiness";
import { animal, animalInput } from "../model/animal";

export class AnimalController {
  getAnimalById = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const animal = await new AnimalBusiness().getAnimalById(id);

      res.status(200).send(animal);
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Algo deu errado. Animal não encontrado");
    }
  };

  getAllAnimals = async (req: Request, res: Response) => {
    try {
      const animals = await new AnimalBusiness().getAllAnimals();

      res.status(200).send(animals);
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Algo deu errado. Animais não encontrados");
    }
  };

  createAnimal = async (req: Request, res: Response) => {
    try {
      const { name, age, specie, breed, owner_name, owner_phone } = req.body;
      const animal: animalInput = {
        name,
        age,
        specie,
        breed,
        owner_name,
        owner_phone,
      };
      await new AnimalBusiness().insertAnimal(animal);
      res.status(200).send("Animal criado com sucesso");
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Animal não inserido no banco de dados");
    }
  };

  updateAnimal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      const { name, age, specie, breed, owner_name, owner_phone } = req.body;

      const animal: animal | undefined =
        await new AnimalBusiness().getAnimalById(id);

      if (!animal) {
        throw new Error("Animal não encontrado para atualização");
      }
      const animalUpdate: animalInput = {
        name,
        age,
        specie,
        breed,
        owner_name,
        owner_phone,
      };

      await new AnimalBusiness().updateAnimalById(animal, animalUpdate);

      res.status(200).send("Animal atualizado com sucesso");
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Animal não atualizado");
    }
  };

  deleteAnimal = async (req: Request, res: Response) => {
    try {
      const { id } = req.params;
      await new AnimalBusiness().deleteAnimalById(id);

      res.status(200).send("Animal deletado com sucesso");
    } catch (error: any) {
      console.log(error);
      res.status(500).send("Animal não deletado");
    }
  };
}
