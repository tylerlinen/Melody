import "./App.css";
import React, { Component } from "react";
import API from "./utils/API";

class App extends Component {
  state = {
    topTracks: [],
  };

  componentDidMount(){
    this.getTracks()
  }

  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then((res) => {
      this.setState({ topTracks: res.data.tracks.track });
    });
  };

  likeTracks = () => {
    console.log( this.state.track.artist.name + "Clicked")
  }


  render() {
   
    console.log(this.state.topTracks);

    return (
      <div className="App">
        <button onClick={this.getTracks}>click</button>
        {this.state.topTracks.map((track) => {
          {
          return <h2>{track.artist.name} - {track.name} <button onClick = {this.likeTracks}>LIKE</button></h2>
          }
        })}
      </div>
    );
  }
}
export default App;
