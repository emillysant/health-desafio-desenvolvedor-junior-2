import React from "react";
import useForm from "../../hooks/useForm";
import { updateAnimal } from "../../services/animal";
import { useState } from "react";
import { FormContainer } from "./styled";

function AnimalForm(props) {
  const [form, handleInputChange, clear] = useForm({
    name: props.animalDetails.name,
    age: props.animalDetails.age,
    specie: props.animalDetails.specie,
    breed: props.animalDetails.breed,
    owner_name: props.animalDetails.owner_name,
    owner_phone: props.animalDetails.owner_phone,
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    updateAnimal(
      props.animalDetails.id,
      form,
      clear,
      setIsLoading,
      props.getData,
      props.setEdition
    );
  };

  return (
    <FormContainer>
      <form onSubmit={onSubmitForm} class="mb-3 row">
        <label for="name" class="col-sm-2 col-form-label">
          Nome
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="name"
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Nome"
          />
        </div>
        <label for="age" class="col-sm-2 col-form-label">
          Idade
        </label>

        <div class="col-sm-10">
          <input
            type="text"
            id="age"
            name={"age"}
            value={form.age}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Idade"
          />
        </div>

        <label for="specie" class="col-sm-2 col-form-label">
          Tipo
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="specie"
            name={"specie"}
            value={form.specie}
            onChange={handleInputChange}
            class="form-control"
            placeholder="tipo do animal"
          />
        </div>

        <label for="breed" class="col-sm-2 col-form-label">
          Raça
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="breed"
            name={"breed"}
            value={form.breed}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Raça"
          />
        </div>

        <label for="owner_name" class="col-sm-2 col-form-label">
          Dono
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="owner_name"
            name={"owner_name"}
            value={form.owner_name}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Dono"
          />
        </div>

        <label for="owner_phone" class="col-sm-2 col-form-label">
          Telephone
        </label>
        <div class="col-sm-10">
          <input
            type="text"
            id="owner_phone"
            name={"owner_phone"}
            value={form.owner_phone}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Telefone"
          />
        </div>
        <br />
        <div class="d-grid gap-2 col-6 mx-auto">
          <input
            type="submit"
            value="Enviar"
            class="btn btn-primary"
            fullwidth
          />
        </div>
      </form>
    </FormContainer>
  );
}

export default AnimalForm;
