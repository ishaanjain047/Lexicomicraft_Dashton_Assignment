import React from 'react'
import PanelGenerator from "./PanelGenerator";
import "./index.css";
const Generator = ({
  panels,
  setPanels,
}) => {
  return (
    <div className="generatorWrapper" id="section-generate">
      <div className="generatorHeading">Unleash Your Creativity !</div>
      <div className="generatorHeading Sub">
        Welcome to our Comic Maker ! Enter Text to get AI generated panels for
        you comic
      </div>
      <div className="panels">
        <PanelGenerator
          panels={panels}
          setPanels={setPanels}
        ></PanelGenerator>
      </div>
    </div>
  );
};

export default Generator