import React from "react";
import "./Style.css";
import Myimage1 from "../image/Group_146891.svg";
import Myimage2 from "../image/Group_146905.svg";
import Myimage3 from "../image/Group_146909.svg";
import Myimage4 from "../image/Group_146914.svg";
import Myimage5 from "../image/Group_146919.svg";
import Myimage6 from "../image/Group_146891-1.svg";
import Myimage7 from "../image/Group_146926.svg";
import Myimage8 from "../image/Group_146929.svg";
import Myimage9 from "../image/Group_146932.svg";

const Contact = () => {
  return (
    <>
      <div className="contact-header">
        <div>WE ARE WORKING</div>
        <div> WITH THESE INDUSTRIES</div>
      </div>

      <div className="flex-row">
        <div style={{ display: "flex" }}>
          <div >
            <img src={Myimage1} alt="" width="70px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}>
            <p>MEDIA &</p> 
            <p>ENTERTAINMENT</p></div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{paddingLeft:"10.5rem"}}>
            <img src={Myimage2} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}>
            <p>HEALTH CARE &</p> 
            <p>WELLNESS</p></div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{paddingLeft:"6rem"}}>
            <img src={Myimage3} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>HOSPITALITY &</p> 
          <p>REAL ESTATE</p></div>
        </div>
      </div>

      <div className="flex-row">
        <div style={{ display: "flex" }}>
          <div>
            <img src={Myimage4} alt="" width="70px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>RETAIL &</p> 
          <p>E COMMERCE</p></div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{paddingLeft:"12.5rem"}}>
            <img src={Myimage5} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>EDUCATION &</p> 
          <p>LEARNING</p></div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{paddingLeft:"6.5rem"}}>
            <img src={Myimage6} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>TRAVEL &</p> 
          <p>TRANSPORT</p></div>
        </div>
      </div>

      <div className="flex-row">
        <div style={{ display: "flex", paddingBottom:"3rem" }}>
          <div>
            <img src={Myimage7} alt="" width="70px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>MOBILE &</p> 
          <p>TELECOM</p></div>
        </div>
        <div style={{ display: "flex", paddingBottom:"3rem" }}>
          <div style={{paddingLeft:"14rem"}}>
            <img src={Myimage8} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }} ><p>IT &</p> 
          <p>ITES</p></div>
        </div>
        <div style={{ display: "flex", paddingBottom:"3rem" }}>
          <div style={{paddingLeft:"11rem"}}>
            <img src={Myimage9} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "1.875rem" }}><p>AGRITECH</p></div>
        </div>
      </div>
    </>
  );
};

export default Contact;
