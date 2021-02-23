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
          <div className="playlistButtons">
            <span className="playIcon">
              <svg
                height="16"
                role="img"
                width="16"
                viewBox="0 0 24 24"
                aria-hidden="true"
              >
                <polygon
                  points="21.57 12 5.98 3 5.98 21 21.57 12"
                  fill="currentColor"
                ></polygon>
              </svg>
            </span>
            <div className="icons">
              <div className=" icon iconsHeart">
                <svg
                  fill="currentColor"
                  role="img"
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path d="M27.672 5.573a7.904 7.904 0 00-10.697-.489c-.004.003-.425.35-.975.35-.564 0-.965-.341-.979-.354a7.904 7.904 0 00-10.693.493A7.896 7.896 0 002 11.192c0 2.123.827 4.118 2.301 5.59l9.266 10.848a3.196 3.196 0 004.866 0l9.239-10.819A7.892 7.892 0 0030 11.192a7.896 7.896 0 00-2.328-5.619zm-.734 10.56l-9.266 10.848c-.837.979-2.508.979-3.346 0L5.035 16.104A6.9 6.9 0 013 11.192 6.9 6.9 0 015.035 6.28a6.935 6.935 0 014.913-2.048 6.89 6.89 0 014.419 1.605A2.58 2.58 0 0016 6.434c.914 0 1.555-.53 1.619-.585a6.908 6.908 0 019.346.431C28.277 7.593 29 9.337 29 11.192s-.723 3.6-2.062 4.941z"></path>
                </svg>
              </div>
              <div className="icon iconsDots">
                <svg
                  fill="currentColor"
                  role="img"
                  height="32"
                  width="32"
                  viewBox="0 0 32 32"
                  class="Svg-ulyrgf-0 hJgLcF"
                >
                  <path d="M5.998 13.999A2 2 0 105.999 18 2 2 0 005.998 14zm10.001 0A2 2 0 1016 18 2 2 0 0016 14zm10.001 0A2 2 0 1026.001 18 2 2 0 0026 14z"></path>
                </svg>
              </div>
            </div>
          </div>
          <ul className="songList">
            <li>
              <div className="songIcon">
                <svg
                  height="32"
                  role="img"
                  width="32"
                  viewBox="0 0 24 24"
                  class="_61eb6013554e346ba715319eaf489008-scss"
                >
                  <polygon
                    points="21.57 12 5.98 3 5.98 21 21.57 12"
                    fill="currentColor"
                  ></polygon>
                </svg>
              </div>
              <div className="songDetails">
                <h3>Greenlight </h3>
                <span>Lorde</span>
              </div>
              <div className="songTime">
                <span>3:55</span>
              </div>
            </li>
            <li>
              <div className="songIcon"></div>
              <div className="songDetails">
                <h3>Greenlight </h3>
                <span>Lorde</span>
              </div>
              <div className="songTime">
                <span>3:55</span>
              </div>
            </li>
            <li>
              <div className="songIcon"></div>
              <div className="songDetails">
                <h3>Greenlight </h3>
                <span>Lorde</span>
              </div>
              <div className="songTime">
                <span>3:55</span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default PlaylistPage;
