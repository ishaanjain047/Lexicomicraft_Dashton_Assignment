import React from 'react'
import "./index.css";
const Panel = ({imgsrc}) => {
  return (
    <div className='panelWrapper'>
        <img className="panelImg" src={imgsrc} alt="not found"/>
    </div>
  )
}

export default Panel