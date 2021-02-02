import React from "react";
import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

function App() {
  const url = "https://mern-lab-back.herokuapp.com";
  const [authors, setAuthors] = React.useState([])
  const emptyAuthor = {
name: "",
genre: "",
albums: []
  }
  return (
    <div className="App">
    
    </div>
  );
}

export default App;
