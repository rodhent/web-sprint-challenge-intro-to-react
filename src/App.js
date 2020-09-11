import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./components/Character";
import "./App.css";

const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.

  const [characters, setCharacters] = useState([]);
  const URL = `https://swapi.dev/api/people/`;

  useEffect(() => {
    axios
      .get(URL)
      .then((res) => {
        // console.log(res.data.results);
        setCharacters(res.data.results);
      })
      .catch((err) => console.log("Error", err));
  }, []);

  console.log(characters);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Character list={characters} />
    </div>
  );
};

export default App;
