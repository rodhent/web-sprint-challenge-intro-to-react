import React, { useState, useEffect } from "react";
import "./App.css";
import axios from "axios";
import Character from "./components/Character";
import styled from "styled-components";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [cards, setCards] = useState([]);
  const URL = "https://rickandmortyapi.com/api/character/";

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    axios.get(URL).then((res) => {
      console.log(res.data.results);
      setCards(res.data.results);
    });
  }, []);

  return (
    <div className="App">
      <h2>Characters</h2>
      <Character cards={cards} />
    </div>
  );
};

export default App;
