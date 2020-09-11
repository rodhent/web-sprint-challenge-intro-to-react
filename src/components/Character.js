import React, { useState, useEffect } from "react";
import App from "../App";
import axios from "axios";
import styled from "styled-components";
import "../App.css";
import cuid from "cuid";

const StyledDiv = styled.div`
  background-color: grey;
  color: white;
  max-width: 80%;
  width: 400px;
  padding: 10px;
  border-radius: 5px;
  box-shadow: 0 0 10px 2px;
  margin: 2.5% auto;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    color: black;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: yellow;
      transition: all 0.5s ease-in-out;
    }
  }
`;

const Character = ({ list }) => {
  console.log("props info", list);
  return (
    <>
      {list.map((list) => (
        <StyledDiv key={cuid()}>
          <h2>{list.name}</h2>
          <p>Gender: {list.gender}</p>
          <p>Birth Year: {list.birth_year}'</p>
        </StyledDiv>
      ))}
    </>
  );
};

export default Character;
