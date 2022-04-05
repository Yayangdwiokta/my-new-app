import React from "react";
import data from "../data/dataAlbum";

const Music= ()=> {
    return(
<div className="App">
    <justify>
{data.map((data) => (
          <div className="cardsong" key= {data.id}>
            <img className="album" id="albumImage" src={data.album.images[0].url} alt="albumImage" height="200px" width="200px"/>
            <h2 className="songTitle">Title : {data.name}</h2>
            <h2 className="songArtist">Artist : {data.artists[0].name}</h2>
            <button className="playSong">Select</button>
          </div>
        ))}
        </justify>
      </div>
    )
};

export default Music;