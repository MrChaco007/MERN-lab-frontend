import "./App.css";
import { Route, Link, Switch } from "react-router-dom";

import React from "react";

function App() {
  const url = "https://mern-lab-back.herokuapp.com";
  const [albums, setAlbums] = React.useState([])
  const emptyAlbum = {
title: "",
img: "",
albums: []
  }
  const [selectedAlbum, setSelectedAlbum] = React.useState(emptyAlbum)
  const getAlbums = () => {
    fetch(url + "/album/").then((response) => response.json()).then((data) => {setAlbums(data.albums)})
    console.log(albums)
  }

  React.useEffect(() => getAlbums(), [])
    const loaded = () => {
    return (
      <div style={{ textAlign: "center" }}>
        {albums.map((album) => {
          return (
            <article key={album._id}>
              <h1>{album.title.toUpperCase()}</h1>
              <h3>{album.yearReleased}</h3>  
              <img src = {album.img}/> 
            </article>
          );
        })}
      </div>
    );
  };
  const loading = <h1>Loading...</h1>;
  return albums.length > 0 ? loaded() : loading;
};

export default App;
