import "./App.css";
import React, { Component } from "react";
import API from "./utils/API";

class App extends Component {
  state = {
    topTracks: [],
  };

  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then((res) => {
      this.setState({ topTracks: res.data.tracks.track });
    });
  };


 
  


  render() {
   
    console.log(this.state.topTracks[0]?.artist?.name);

    return (
      <div className="App">
        <button onClick={this.getTracks}>click</button>
        {this.state.topTracks.map((track) => {
          {
           return <h2>{track.artist.name}</h2>;
          }
        })}
      </div>
    );
  }
}
export default App;
