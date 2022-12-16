import React from "react";
import "./Style.css";

import Image1 from "../image/Group_146831.svg";
import Image2 from "../image/Group_146822.svg";
import Image3 from "../image/Group_146826.svg";
import Image4 from "../image/Group_146868.svg";
import Image5 from "../image/Group_146836.svg";
import Image6 from "../image/Group_146841.svg";
import Image7 from "../image/img1.svg";
import Image8 from "../image/Group_146867.svg";

const About = () => {
  return (
    <>
      <div className="about-header">
        <div>MEASUREMENT</div>
        <div>TO OUR SUCCESS</div>
        <div className="title">Our process-driven approach keeps us going</div>
      </div>

      <div className="about-flex-row">
        <div style={{ display: "flex" }}>
          <div>
            <img src={Image1} alt="" width="56px" />
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>TRANSPARENCY AND </p>
            <p>RELIABILITY</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "8rem" }}>
            <img src={Image2} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>REAL TIME PROJECT </p>
            <p>STATUS</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "6rem" }}>
            <img src={Image3} alt="" width="60px" />
          </div>
          <div style={{ paddingLeft: "2rem" }}>
            <p>WELL STRUCTURED </p>
            <p>COMMUNICATION</p>
          </div>
        </div>
      </div>

      <div className="about-flex-row">
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "0rem" }}>
            <img src={Image4} alt="" width="90px" height="90px" />
          </div>
          <div style={{ paddingLeft: "0rem" }}>
            <p>AGILE</p>
            <p>METHODOLOGY</p>
            </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "10.5rem" }}>
            <img src={Image5} alt="" width="60px" height="60px" />
          </div>
          <div style={{ paddingLeft: "2rem" }}>
          <p>ONSITE</p>
            <p>COLLABORATION</p>
          </div>
        </div>
        <div style={{ display: "flex" }}>
          <div style={{ paddingLeft: "7rem" }}>
            <img src={Image6} alt="" width="65px" />
          </div>
          <div style={{ paddingLeft: "2rem" }}>
          <p>INNOVATION AT</p>
            <p>WORK</p>
          </div>
        </div>
      </div>

      <div className="about-flex-row">
        <div style={{ display: "flex", paddingBottom:"3rem" }}>
          <div style={{ paddingLeft: "0rem" }}>
            <img src={Image7} alt="" width="80px" height="80px" />
          </div>
          <div style={{ paddingLeft: "1.8rem" }}>
            <p>CLIENT'S INVOLVEMENT</p>
            <p>IN EACH MILESTONE</p>
          </div>
        </div>
        <div style={{ display: "flex", paddingBottom:"3rem"}}>
          <div style={{ paddingLeft: "5.2rem" }}>
            <img src={Image8} alt="" width="80px" height="80px" />
          </div>
          <div style={{ paddingLeft: "1.5rem" }}>
          <p>DEDICATED</p>
            <p>TEAM</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
