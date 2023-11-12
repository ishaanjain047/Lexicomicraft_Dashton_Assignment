import React from "react";
import Navbar from "../Navbar";
import Landing from "./Landing";
import Benifits from "./Benifits";
import "./index.css";
import Generator from "../Generator";

const Homepage = ({panels,setPanels}) => {
  return (
    <div className="HomeWrapper">
      <div className="homeSection">
        <Navbar panels={panels}></Navbar>
      </div>
      <div className="homeSection">
        <Landing
        ></Landing>
      </div>
      <div className="homeSection">
        <Benifits></Benifits>
      </div>
      <div className="homeSection">
        <Generator
          panels={panels}
          setPanels={setPanels}
        ></Generator>
      </div>
    </div>
  );
};

export default Homepage;
