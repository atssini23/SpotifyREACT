import React from "react";

const Playlists = (props) => {
  const dataPlaylists = [
    {
      id: 101,
      category_id: 3,
      name: "Home playlist 1 ",
      img:
        "https://images.unsplash.com/photo-1525183995014-bd94c0750cd5?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 102,
      category_id: 3,
      name: "Home playlist 2",
      img:
        "https://images.unsplash.com/photo-1527556897832-0c6492fa56cd?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 103,
      category_id: 3,
      name: "Home playlist 3",
      img:
        "https://images.unsplash.com/photo-1512547782667-4786bfbd0754?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=967&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 104,
      category_id: 1,
      name: "Sunday playlist 1",
      img:
        "https://images.unsplash.com/photo-1493663284031-b7e3aefcae8e?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 105,
      category_id: 4,
      name: "Focus playlist 2",
      img:
        "https://images.unsplash.com/photo-1454391304352-2bf4678b1a7a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 106,
      category_id: 2,
      name: "Mood playlist 1",
      img:
        "https://images.unsplash.com/photo-1500099817043-86d46000d58f?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
      des: "Lorem ipsun"
    },
    {
      id: 107,
      category_id: 2,
      name: "Mood playlist 2",
      img:
        "https://images.unsplash.com/photo-1517487881594-2787fef5ebf7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
      des: "Lorem ipsun"
    }
  ];
  const matchedPlaylists = dataPlaylists.filter(
    (playlist) => playlist.category_id === props.category_id
  );

  return (
    <div className="cardsWrapInner">
      {matchedPlaylists.map((playlist) => (
        <div className="card">
          <div className="cardImage">
            <img src={playlist.img} alt="Pic 1" />
          </div>
          <div className="cardContent">
            <h3>{playlist.name}</h3>
            <span>{playlist.des}</span>
          </div>
          <span className="playIcon">></span>
        </div>
      ))}
    </div>
  );
};
export default Playlists;
