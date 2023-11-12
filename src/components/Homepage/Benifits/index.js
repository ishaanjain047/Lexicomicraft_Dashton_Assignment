import React from "react";
import BenifitsImg from "../../../assets/BenifitsImg.png";
import Benifit1 from "../../../assets/benifit1.png";
import Benifit2 from "../../../assets/benifit2.png";
import Benifit3 from "../../../assets/benifit3.png";
import Benifit4 from "../../../assets/benifit4.png";
import "./index.css";

const Benifits = () => {
  return (
    <div className="benifitWrapper">
      <div className="benifitHeading1">
        Benifits
        <span className="benifitHeading1" style={{ color: "#0096FF" }}>
          of using
        </span>{" "}
        Lexicomicraft
        <span className="benifitHeading1" style={{ color: "#0096FF" }}>
          over boring comic tools !
        </span>
      </div>
      <div className="benifitsInfo">
        <div className="benifitsLeft">
          <img className="BenifitsImg" src={BenifitsImg} alt="/" />
        </div>
        <div className="benifitsRight">
          <div className="benifitInfo">
            <div className="benifitImg">
              <img className="benifitImg" src={Benifit1} alt="/" />
            </div>
            <div className="benifitText">Exclusive access to 1000+ comics</div>
          </div>
          <div className="benifitInfo">
            <div className="benifitImg">
              <img className="benifitImg" src={Benifit2} alt="/" />
            </div>
            <div className="benifitText">Best AI generated images</div>
          </div>
          <div className="benifitInfo">
            <div className="benifitImg">
              <img className="benifitImg" src={Benifit3} alt="/" />
            </div>
            <div className="benifitText">
              We are global !
            </div>
          </div>
          <div className="benifitInfo">
            <div className="benifitImg">
              <img className="benifitImg" src={Benifit4} alt="/" />
            </div>
            <div className="benifitText">One stop destination for all comic enthusiasts</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Benifits;
