import React from 'react'
import deleteImg from "../../../assets/delete.png"
import "./index.css";
import insert_image from "../../../assets/Insert_image.png";
const PanelInput = ({
  loading,
  handleTextChange,
  deletePanel,
  generate,
  desc,
  imagesrc,
}) => {
  console.log("imagesrc is ", imagesrc);
  return (
    <div className="generatedWrapper">
      <div className="generateImageWrapper">
        <img
          className="generatedImage"
          src={imagesrc ? imagesrc : insert_image}
        />
      </div>
      <div className="panelText">
        <input
          className="inputPanel"
          placeholder="Enter text to get comic panel"
          onChange={handleTextChange}
          value={desc}
        ></input>
      </div>
      <div className="generateAndDelete">
        <div className="generateButtonCon">
          <button
            className="generateBtn Btn"
            style={{ backgroundColor: loading ? "rgb(200,35,25)" : "#0096FF" }}
            onClick={generate}
            disabled={loading ? true : false}
          >
            {loading ? "Generating" : "Generate"}
          </button>
        </div>
        <div className="panelDeleteBtn" onClick={deletePanel}>
          <img alt="deleteBtn" src={deleteImg} />
        </div>
      </div>
    </div>
  );
};

export default PanelInput