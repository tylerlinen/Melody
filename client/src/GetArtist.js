import "./App.css";
import React, { Component } from "react";
import API from "./API";


class GetArtist extends Component {
  state = {
    topArtist: [],
    likedArtist: [],
  };

  componentDidMount() {
    this.getArtist();
  }
  getArtist = () => {
    API.getTopArtists(this.state.topArtist).then((res) => {
      this.setState({ topArtist: res.data.artists.artist });
      console.log(this.state.topArtist);
    });
  };

  addToBasket = () => {
    console.log("added to artist");
  };

  render() {
    return (
      <div className="App">
        {this.state.topArtist.map((artist) => {
          return (
            <h2 key={artist.name}>
              {artist.name} - {artist.playcount}
              <button onClick={this.addToBasket}>LIKE</button>
            </h2>
          );
        })}
      </div>
    );
  }
}
export default GetArtist;
