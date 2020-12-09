import "./App.css";
import React, { Component } from "react";
import API from "./utils/API";


class App extends Component {
  state = {
    topTracks: [],
  };


  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then(res => {
      this.setState({ topTracks: res.data.tracks.track});
    })
  };
  

  // createTopTrack = () => {
  //   let res = topTracksApi.post("/", {
  //     topTracks
  //   });
  //   console.log(res);
  //   this.getTracks();
  // };


  render() {
    console.log(this.state.topTracks[0])
    return (
      <div className="App">
        <button onClick={this.getTracks}>click</button>
        {/* <h2>{this.state.topTracks[0]}</h2> */}
      </div>
    );
  }
}
export default App;
