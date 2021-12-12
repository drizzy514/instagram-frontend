import { useContext, useState } from "react";
import "./write.css";
import axios from "axios";
import Header from "../../components/header/Header";

export default function Write() {
  const [title, setTitle] = useState("");
  const [text, setDesc] = useState("");
  const [poster, setFile] = useState(null);
  console.log(poster)
  const handleSubmit = async (e) => {
    e.preventDefault();
   
   
    try {
      const data =new FormData();
      const postername = Date.now() + poster.name;
      data.append("title", title);
      data.append("text", text)
      data.append("poster", poster);
      const res = await axios.post("https://blog-siteuz.herokuapp.com/createpost", data ).then((res) => {
        console.log(res.data)
        window.location.replace("/public/" + res.data.post_img);
      });
    } catch (err) {}
  };
  return (
    <div className="write">
      <Header />
      {poster && (
        <img className="writeImg" src={URL.createObjectURL(poster)} alt="" />
      )}
      <form className="writeForm" onSubmit={handleSubmit}>
        <div className="writeFormGroup">
          <label htmlFor="fileInput">
            <i className="writeIcon fas fa-plus"></i>
          </label>
          <input
            type="file"
            id="fileInput"
            style={{ display: "none" }}
            onChange={(e) => setFile(e.target.files[0])}
          />
          <input
            type="text"
            placeholder="Title"
            className="writeInput"
            autoFocus={true}
            onChange={e=>setTitle(e.target.value)}
          />
        </div>
        <div className="writeFormGroup">
          <textarea
            placeholder="Tell your story..."
            type="text"
            className="writeInput writeText"
            onChange={e=>setDesc(e.target.value)}
          ></textarea>
        </div>
        <button className="writeSubmit" type="submit">
          Publish
        </button>
      </form>
    </div>
  );
}
