import React from 'react';
import data from '../data/dataAlbum';

const Song=({title,artist,img})=> {
    return (
       <div className="Song">
           <div className="Song-wrap">
               <img src={img} alt={title} className="song_img"/>

               <h3 className="Song_album">{title}</h3>
               <h3 className="Song_artist">{artist}</h3>
           </div>
           <div className="btn-wrap">
            <input type="submit" id="btn-sub" values="Search" />
           </div>
        </div>
    )
}

export default Song;