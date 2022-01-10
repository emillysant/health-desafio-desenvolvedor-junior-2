import React from "react";
import { Container, IconContainer, RightContainer } from "./styled";
import { ArrowRightCircleFill } from "@styled-icons/bootstrap/ArrowRightCircleFill";
import { TrashFill } from "@styled-icons/bootstrap/TrashFill";

function AnimalCard(props) {
  return (
    <Container>
      <RightContainer>
        <p class="h4">Nome: {props.name.toUpperCase()}</p>
        <p>Animal: {props.specie}</p>
      </RightContainer>

      <IconContainer>
        <button type="button" class="btn btn-link">
          <ArrowRightCircleFill width={"25px"} onClick={props.onClick} />
        </button>
      </IconContainer>
      <IconContainer>
        <button type="button" class="btn btn-link">
          <TrashFill width={"25px"} onClick={props.delete} />
        </button>
      </IconContainer>
    </Container>
  );
}

export default AnimalCard;
