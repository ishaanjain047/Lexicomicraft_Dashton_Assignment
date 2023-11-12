import React from "react";
import Comic from "../../../assets/Comic.png";
import "./index.css";
const Landing = (props) => {
  return (
    <div className="landingWrapper">
      <div className="landingImgWrapper">
        <img className="landingImg" src={Comic} alt=""/>
      </div>
      <div className="landingInfo">
        <div className="landingHeading1">Welcome to <span style={{padding:0,color:"#0096FF"}}className="landingHeading1">LexiComicraft</span></div>
        <div className="landingHeading2">Taking your progress to the next level, In this fast world, Comics is a great way to relive our childhood, Wanna create your own Comic by just inputting some text, Let our AI do the work !</div>
      </div>
    </div>
  );
};

export default Landing;
