import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Nav from "./Nav";
import GetArtist from "./GetArtist"
import GetAlbum from "./GetAlbum"
import GetTrack from "./GetTrack"
import Profile from "./Profile"


function App() {
  return (
    //BEM
    <Router>
      <div className="app">
        <Nav />
        <Switch>
          <Route path="/GetTrack">
            <GetTrack />
          </Route>
          <Route path="/GetAlbum">
            <GetAlbum />
          </Route>
          <Route path="/GetArtist">
            <GetArtist />
          </Route>
          <Route path="/Profile">
            <Profile />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
