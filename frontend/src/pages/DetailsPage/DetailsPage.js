import React from "react";
import { useParams } from "react-router-dom";
import useRequestData from "../../hooks/useRequestData";
import { BASE_URL } from "../../constants/url";
import { Container, RightContainer } from "./styled";
import { Edit } from "@styled-icons/boxicons-regular/Edit";
import { useState } from "react";
import AnimalFormDetails from "./AnimalFormDetails";
import { useHistory } from "react-router";
import { goToList } from "../../routes/coordinator";

const DetailsPage = () => {
  const params = useParams();
  const history = useHistory();
  const [edition, setEdition] = useState(false);
  const [animalDetails, isLoading, error, getData] = useRequestData(
    [],
    `${BASE_URL}/animal/${params.id}/`
  );

  const edit = () => {
    if (!edition) setEdition(true);
    if (edition) setEdition(false);
  };

  const onClickButton = () => {
    goToList(history);
  };

  return (
    <div>
      <Container>
        <div>
          <p>Nome: {animalDetails.name}</p>
          <p>Tipo: {animalDetails.specie}</p>
        </div>
        <div>
          <p>Idade: {animalDetails.age}</p>
          <p>Raça: {animalDetails.breed}</p>
          <p>Dono: {animalDetails.owner_name}</p>
          <p>Telephone: {animalDetails.owner_phone}</p>
        </div>
        <RightContainer>
          <button type="button" class="btn btn-link">
            <Edit width={"25px"} onClick={edit} />
          </button>
        </RightContainer>
      </Container>

      <div>
        {edition && (
          <AnimalFormDetails
            animalDetails={animalDetails}
            getData={getData}
            setEdition={setEdition}
          />
        )}
        <button type="button" class="btn btn-primary" onClick={onClickButton}>
          Volta
        </button>
      </div>
    </div>
  );
};

export default DetailsPage;
