import React from "react";
import styled from "styled-components";

const StyledDiv = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  border: 4px solid gold;
  padding: 20px;
  background-color: pink;
  color: #83d2e4;
  h1 {
    font-family: Verdana, sans-serif;
    text-decoration: underline;
    color: darkseagreen;
    text-shadow: 1px 1px 3px black;
  }

  img {
    border: 4px solid #83d2e4;
  }
`;

const Character = ({ cards }) => {
  console.log("propsss", cards);

  return (
    <div>
      {cards.map((item) => (
        <>
          <StyledDiv>
            <img src={item.image} alt="Ricky and Morty Character" />
            <h1>{item.name}</h1>
          </StyledDiv>
        </>
      ))}
    </div>
  );
};

export default Character;
