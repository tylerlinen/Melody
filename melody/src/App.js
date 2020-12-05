import "./App.css";
import React, { Component } from "react";
import API from "./utils/API";


class App extends Component {
  state = {
    topTracks: [],
  };


  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then(res => {
      this.setState({ topTracks: res.data.tracks.track });
    })
  };
  

  // createTopTrack = async () => {
  //   let res = topTracksApi.post("/", {
  //     name: "Blinding Lights"
  //   });
  //   console.log(res);
  //   this.getTopTracks();
  // };


  render() {
    console.log(this.state.topTracks)
    return (
      <div className="App">
        <button onClick={this.getTracks}>createTopTrack</button>
        {/* {this.state.topTracks.map((topTrack) => (
          <h2 key={topTrack.id}>
            {topTrack.title}
          </h2>
        ))} */}
      </div>
    );
  }
}
export default App;
