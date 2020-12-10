import "./App.css";
import React, { Component } from "react";
import API from "./API";
import {useStateValue} from "./StateProvider"

class GetTrack extends Component {
  state = {
    topTracks: [],
    likedtracks: [],
  };

  componentDidMount() {
    this.getTracks();
  }
  getTracks = () => {
    API.getTopTracks(this.state.topTracks).then((res) => {
      this.setState({ topTracks: res.data.tracks.track });
      console.log(this.state.topTracks);
    });
  };

  addToBasket = () => {
    console.log("added");
    
  };

  render() {
    return (
      <div className="App">
        {this.state.topTracks.map((track) => {
          {
            return (
              <h2>
                {track.artist.name} - {track.name}
                <button onClick={this.addToBasket}>LIKE</button>
              </h2>
            );
          }
        })}
      </div>
    );
  }
}
export default GetTrack;
