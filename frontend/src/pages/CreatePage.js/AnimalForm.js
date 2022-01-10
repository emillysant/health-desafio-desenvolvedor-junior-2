import React from "react";
import useForm from "../../hooks/useForm";
import { createAnimal } from "../../services/animal";
import { useState } from "react";
import { FormContainer } from "./styled";

function AnimalForm() {
  const [form, handleInputChange, clear] = useForm({
    name: "",
    age: "",
    specie: "",
    breed: "",
    owner_name: "",
    owner_phone: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const onSubmitForm = (event) => {
    event.preventDefault();
    createAnimal(form, clear, setIsLoading);
  };

  return (
    <FormContainer>
      <div class="mb-3 row">
        <p class="h4">Digite as dados do Animalzinho</p>
        <form onSubmit={onSubmitForm}>
          <input
            type="text"
            id="name"
            name={"name"}
            value={form.name}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Nome"
          />
          <br />

          <input
            type="text"
            id="age"
            name={"age"}
            value={form.age}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Idade"
          />
          <br />

          <input
            type="text"
            id="specie"
            name={"specie"}
            value={form.specie}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Especie"
          />
          <br />

          <input
            type="text"
            id="breed"
            name={"breed"}
            value={form.breed}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Raça"
          />
          <br />

          <input
            type="text"
            id="owner_name"
            name={"owner_name"}
            value={form.owner_name}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Dono"
          />
          <br />

          <input
            type="text"
            id="owner_phone"
            name={"owner_phone"}
            value={form.owner_phone}
            onChange={handleInputChange}
            class="form-control"
            placeholder="Telefone"
          />
          <br />

          <input type="submit" value="Enviar" class="btn btn-primary" />
        </form>
      </div>
    </FormContainer>
  );
}

export default AnimalForm;
