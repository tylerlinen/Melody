import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  return (
    <div>
      <Link to="/GetTrack">
        <div className="">
          <h1>Track</h1>
        </div>
      </Link>

      <Link to="/GetArtist">
        <div className="">
          <h1>Artists</h1>
        </div>
      </Link>

      <Link to="/GetAlbum">
        <div className="">
          <h1>Albums</h1>
        </div>
      </Link>
      <Link to="/Profile">
        <div className="">
          <h1>Profile</h1>
        </div>
      </Link>
    </div>
  );
}

export default Nav;
