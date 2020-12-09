import "./App.css";
import React, { Component } from "react";
import API from "./API";

class Home extends Component {

  state = {
    topTracks: [],
    likedtracks: [],
  };

  componentDidMount(){
    this.getTracks()
  }

  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then((res) => {
      this.setState({ topTracks: res.data.tracks.track });
    });
  };

  likeTracks = (id ,artist, name) => {
   console.log( "I have been clicked")

  }


  render() {
   
    console.log(this.state.topTracks)

    return (
      <div className="App">
        {this.state.topTracks.map((track) => {
          {
          return <h2>{track.artist.name} - {track.name} <button onClick = {this.likeTracks}>LIKE</button></h2>
          }
        })}
      </div>
    );
  }
}
export default Home;
