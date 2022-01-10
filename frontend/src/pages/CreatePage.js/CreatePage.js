import React from "react";
import AnimalForm from "./AnimalForm";
import { goToList } from "../../routes/coordinator";
import { useHistory } from "react-router";
import { Container } from "./styled";

const CreatePage = () => {
  const history = useHistory();

  const onClickButton = () => {
    goToList(history);
  };

  return (
    <Container>
      <AnimalForm />
      <button type="button" class="btn btn-primary" onClick={onClickButton}>
        Voltar
      </button>
    </Container>
  );
};

export default CreatePage;
