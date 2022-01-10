import { app } from "./controller/app";
import { AnimalController } from "./controller/AnimalController";

const animalController = new AnimalController();

app.get("/animals", animalController.getAllAnimals);
app.get("/animal/:id", animalController.getAnimalById);
app.post("/create", animalController.createAnimal);
app.put("/update/:id", animalController.updateAnimal);
app.delete("/delete/:id", animalController.deleteAnimal);