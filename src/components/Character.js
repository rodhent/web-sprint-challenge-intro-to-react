import React from "react";
import styled from "styled-components";
import "../App.css";
import cuid from "cuid";

const StyledDiv = styled.div`
  .card {
    background: WHITESMOKE;
    border-radius: 2px;
    display: inline-block;
    height: 325px;
    margin: 1rem;
    position: relative;
    width: 300px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
    transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  }

  .card:hover {
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }

  h2 {
    color: black;
    transition: all 0.5s ease-in-out;
    &:hover {
      color: #ffe81f;
      transition: all 0.5s ease-in-out;
    }
  }
  body {
    text-align: center;
  }
`;

const Character = ({ list }) => {
  console.log("props info", list);
  return (
    <>
      {list.map((list) => (
        <StyledDiv key={cuid()}>
          <div className="card">
            <h2>{list.name}</h2>
            <p>Height: {list.height}</p>
            <p>Mass: {list.mass}</p>
            <p>Hair Color: {list.hair_color}</p>
            <p>Skin Color: {list.skin_color}</p>
            <p>Eye Color: {list.eye_color}</p>
            <p>Birth Year: {list.birth_year}</p>
            <p>Gender: {list.gender}</p>
          </div>
        </StyledDiv>
      ))}
    </>
  );
};

export default Character;
