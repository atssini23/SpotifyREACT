import React from "react";
import { useParams } from "react-router-dom";

const PlaylistPage = () => {
  let { id } = useParams();

  return (
    <div className="playlistPage">
      <div className="mainInner">
        <div className="playlistPageInfo">
          <div className="playlistPageImage">
            <img
              src="https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80"
              alt="pic"
            />
          </div>
          <div className="playlistPageContent">
            <p className="smallText uppercase bold">Playlist</p>
            <h1>A Perfect Day</h1>

            <p className="tagline">
              Minimalism, electronica and modern classical to conentrate to.{" "}
            </p>
            <div className="playlistPageDesc">
              <p className="spotify">Spotify</p>
              <span>699,428 likes</span>
              <span>4 hr 35 min</span>
            </div>
          </div>
        </div>
        <div className="playlistPageSongs">
          <button>Play</button>
          <div className="icons">
            <div className="iconsHeart"></div>
            <div className="iconsDots"></div>
          </div>
          <ul>
            <li>Song </li>
            <li>Song </li>
            <li>Song </li>
            <li>Song </li>
            <li>Song </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PlaylistPage;
