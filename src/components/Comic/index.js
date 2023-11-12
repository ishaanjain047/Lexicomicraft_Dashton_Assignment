import React from 'react'
import Panel from './Panel';
import ComicNotGenerated from "../../assets/ComicFail.jpg";
import "./index.css";
import { useNavigate } from 'react-router-dom';


const Comic = ({panels}) => {
  console.log(panels);
  const navigate = useNavigate();
  const backNav = () =>{
      navigate("/");
  };
  console.log("panels size in comic is ",panels.length)
  return (
    <div className='comicWrapper'>
    <div className='pageHeading'>Your Generated Comic !</div>
    <div className='comicPanel'>
    {panels.length>=10 ? panels.map((panel)=>{
    return(<div className='childPanel'>
        <Panel imgsrc={panel.imgsrc}></Panel>
      </div>); 
  }) : <div className='failComic'>
          <div className="failText">Please generate the comic first !</div>
          <div className='failImgWrapper'>
            <img className="failImg" src={ComicNotGenerated} alt="/"/>
          </div>
          <button style={{textDecoration : "underline",color:"white"}}className="backBtn Btn" onClick={backNav}>Back</button>
    </div>}
  </div>
  </div>
  )
}

export default Comic
