
export enum ANIMAL_SPECIE {
  CAT = "GATO",
  DOG = "CACHORRO",
}

export interface animal extends animalInput{
  id: String;
}

export interface animalInput  {
  name: String;
  age: String;
  specie: string;
  breed: String;
  owner_name: String;
  owner_phone: String;
}