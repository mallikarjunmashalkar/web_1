import React from "react";
import "./Style.css";
import background from "../image/bacground.svg";

const HeaderComponent = () => {
  return (
    <div>
      <div className="main-home">
        <div className="header-left">
          <div style={{ display: "flex" }}>
            <div>
              <label style={{ fontSize: "2rem", fontWeight: "bold" }}>
                DESIGN
              </label>
              <br />
              <label>AGENCY</label>
            </div>
            <div
              style={{
                marginLeft: "3.5rem",
                marginTop: "1.5rem",
                display: "flex",
                justifyContent: "space-between",
                fontWeight: "bold",
              }}
            >
              <button className="header-left-second">Specialize in</button>
              <button className="header-left-second"> Case Study </button>
              <button className="header-left-second"> Process </button>
              <button className="header-left-second"> Industries</button>
            </div>
          </div>
          <div>
            <button className="header-right-first-btn">Schedule A Call</button>
            <button className="header-right-second-btn">We are Hiring</button>
          </div>
        </div>
        <div
          style={{
            backgroundImage: `url(${background})`,
            backgroundRepeat: "no-repeat",
            marginTop: "3.8744444rem",
            height: "40rem",
            position: "sticky",
          }}
        >
          <div
            style={{
              fontSize: "4.1rem",
              fontWeight: "bold",
              paddingLeft: "10.5rem",
              paddingTop: "9rem",
            }}
          >
            INNOVATION DIGITAL <br />
            TECHNOLOGY
          </div>
          <div
            style={{
              fontSize: "1.4rem",
              paddingLeft: "10.5rem",
              fontWeight: "bold",
            }}
          >
            everything we do is the consumer, imagination and you.
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;