import React, { useState, useEffect }from 'react'
import config from '../../lib/config'
import { useSelector } from 'react-redux';
const Search= ({ onSuccess}) =>{
  const accessToken = useSelector((state)=>state.auth.accessToken);

const [text,setText] = useState('')
const handleInput=(e)=>{
    setText(e.target.value)
}
const onSubmit = async (e) => {
    e.preventDefault();

    const requestOptions = {
      headers: {
        'Authorization': 'Bearer ' + accessToken,
        'Content-Type': 'application/json',
      },
    };

    try {
      const response = await fetch(`${config.SPOTIFY_BASE_URL}/search?type=track&q=${text}`, requestOptions)
        .then((data) => data.json());

      const tracks = response.tracks.items;
      onSuccess(tracks);
    } catch (e) {
      alert(e);
    }
}

    return(
        <form className='form-search' onSubmit={onSubmit}>
        <input type="text" placeholder="Search.." className='form-input' required onChange={ handleInput}/>
        <button type='submit'>Search</button>
        </form>
    )
    }
 

 export default Search;