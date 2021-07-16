import { useState } from "react";
import { saveAs } from "file-saver";

const Meme = ({ meme, setMeme }) => {
  // console.log(meme)

  // for get update meme from api
  const [form, setForm] = useState({
    template_id: meme.id,
    username: "forLOL",
    password: "LTfW@6rXy7wX6gQ",
    boxes: [],
  });

  // for handling api error
  const [error, setError] = useState(false);
  // handle download button
  const [download, setDownload] = useState(false);

  // after geting intput from user, update the url and fetch data
  // render its related data
  const handleGenerateMeme = () => {
    // console.log(form);
    let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}&`;
    form.boxes.map(
      (box, index) => (url += `&boxes[${index}][text]=${box.text}`)
    );

    // console.log(url);
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        // console.log(data);
        if (data.success) {
          // api call sucessfull
          setMeme({ ...meme, url: data.data.url });
          setError(false);
          setDownload(true);
        } else {
          // api call unsucessfull
          setError(true);
          setDownload(false);
        }
      });
  };

  // for download the current meme image
  const handleDownload = () => {
    saveAs(`${meme.url}`, `${meme.name}.jpg`);
  };

  return (
    <div className="meme">
      <p>{meme.name}</p>
      <img src={meme.url} alt="" />

      {/* creating input field accrounding box_count according the api request  */}
      <div>
        {[...Array(meme.box_count)].map((_, index) => (
          <input
            key={index}
            type="text"
            placeholder={`Meme Caption ${index + 1}`}
            onChange={(e) => {
              const newBoxes = form.boxes;
              newBoxes[index] = { text: e.target.value };
              setForm({ ...form, boxes: newBoxes });
            }}
          />
        ))}
      </div>

      {/* render error message when api status unsucessfull*/}
      {error && <p className="error_message">Fill the Caption field</p>}
      <div className="buttons">
        <button onClick={handleGenerateMeme}>Generate Meme</button>

        {/* render download button when api status sucessfull */}
        {download && <button onClick={handleDownload}>Download</button>}
        <button onClick={() => setMeme(null)}>Choose Templates</button>
      </div>
    </div>
  );
};

export default Meme;
