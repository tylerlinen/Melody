import "./App.css";
import React, { Component } from "react";
import API from "./API";

class GetAlbum extends Component {
  state = {
    topAlbums: [{}],
    likedAlbums: [],
  };

  componentDidMount() {
    this.getAlbum();
  }
  getAlbum = () => {
    API.getTopAlbums(this.state.topAlbums).then((res) => {
      this.setState({ topAlbums: res.data.albums.album });
      console.log(this.state.topAlbums);
    });
  };

  addToBasket = () => {
    console.log("added to album");
  };

  render() {
    return (
      <div className="App">
        {this.state.topAlbums.map((album) => {
          return (
            <h2 key={album.name}>
              {album.name} - {album.name}
              <button onClick={this.addToBasket}>LIKE</button>
            </h2>
          );
        })}
      </div>
    );
  }
}
export default GetAlbum;
