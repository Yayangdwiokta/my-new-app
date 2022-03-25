import './index.css';
import Song from "./components/song";

import data from "./data/dataAlbum";
function App() {
  return (
    <div className="App">
      <form/>
      <Song img={data.album.images[0].url} title={data.name} artist={data.artists[0].name}/>
    </div>
  );
}

export default App;