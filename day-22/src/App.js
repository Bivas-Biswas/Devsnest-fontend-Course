import { useState, useEffect } from "react";
import Templates from "./components/Templates";
import Meme from "./components/Meme";
import "./styles/App.css";

function App() {
  // for render api memeTeplates 
  const [templates, setTemplates] = useState([]);
  // for show meme edit Page
  const [meme, setMeme] = useState(null);

  // fetch from api, only one
  useEffect(() => {
    fetch("https://api.imgflip.com/get_memes")
      .then((res) => res.json())
      .then((data) => {
        // console.log(data.data);
        setTemplates(data.data.memes);
      });
  }, []);

  return (
    <div className="App">
      <h1>Meme Generator</h1>
      {meme === null ? (
        <Templates templates={templates} setMeme={setMeme} />
      ) : (
        <Meme meme={meme} setMeme={setMeme} />
      )}
    </div>
  );
}

export default App;
