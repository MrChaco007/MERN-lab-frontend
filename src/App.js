import "./App.css";
import { Route, Link, Switch } from "react-router-dom";
import Display from "./Display";
import Form from "./Form"
import React from "react";

function App() {
  const url = "https://mern-lab-back.herokuapp.com";
  const [artists, setArtists] = React.useState([]);
  const emptyArtist = {
    name: "",
    genre: "",
    albums: [],
  };
  const [selectedArtist, setSelectedArtist] = React.useState(emptyArtist);
  const getArtists = () => {
    fetch(url + "/artist")
      .then((response) => response.json())
      .then((data) => {
        setArtists(data.data);
      });
    console.log(artists);
  };

  const handleCreate = (newArtist) => {
    fetch(url + "/artist", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(newArtist),
    }).then(() => {
      getArtists();
    });
  };

const handleUpdate = (artist) => {
  fetch(url + "/artist/updateArtist/" + artist._id, {
    method: "put",
    headers: { "Content-Type": "application/json" }, body: JSON.stringify(artist)}).then(() => {getArtists()})
}
const deleteArtist = (artist) => {
  fetch (url + "/artist/" + artist._id, {method: "delete"}).then(() => {getArtists()})
}

  const selectArtist = (artist) => {
    setSelectedArtist(artist);
  };

  React.useEffect(() => getArtists(), []);
  return (
    <div className="App">
      <h1> ARTIST LISTING SITE</h1>
      <Link to="/create">
        <button>CREATE AN ARTIST</button>
      </Link>
      <hr />
      <main>
        <Switch>
          <Route
            exact
            path="/"
            render={(rp) => <Display deleteArtist= {deleteArtist}{...rp} selectArtist={selectArtist} artists={artists} />}
          />
          <Route
            exact
            path="/create"
            render={(rp) => (
              <Form
                {...rp}
                label="Create"
                artist={emptyArtist}
                handleSubmit={handleCreate}
              />
            )}
          />
          <Route exact path = "/edit" render = {(rp) => (
            <Form {...rp} label="Update" artist={selectedArtist} handleSubmit={handleUpdate} />
          )}
          />
        </Switch>
      </main>
    </div>
  );
}

export default App;
