import React, { useState } from "react";
import img1 from "../assets/p7.png";
import img2 from "../assets/star.jpeg";
import img3 from "../assets/cap.jpeg";
import "./index.css";

const PageSeven = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const handlePrevClick = () => {
    if (activeCardIndex > 0) {
      setActiveCardIndex(activeCardIndex - 1);
    }
  };

  const handleNextClick = () => {
    if (activeCardIndex < 2) {
      setActiveCardIndex(activeCardIndex + 1);
    }
  };
  return (
    <div className="col-12 home-con-7">
      <h4>Meet our Ayurveda Experts</h4>
      <div className="col-12 home-con-7-cards-con">
          <i class="col-2 col-lg-1 fas fa-arrow-left arrow" onClick={handlePrevClick}></i>
        <div className="col-10 col-lg-8 home-con-7-cards-main-con">
          <div className="home-con-7-card" style={{display: activeCardIndex === 0 ? "flex" : "none"}}>
            <div className="profile-con">
              <img src={img1} alt="profile" height={150} width={149} />
              <div className="star-con">
                <p>4.5</p>
                <img src={img2} alt="star" />
              </div>
            </div>
            <h6>Dr. Vaishali Sharma</h6>
            <p>Ayurveda Practitioner (BAMS, MD)</p>
            <div className="work-con">
              <img src={img3} alt="hat" />
              <p>25 years of experience</p>
            </div>
            <div className="special-con">
              <img src={img3} alt="pin" />
              <p>Skin Specialist</p>
            </div>
            <div className="book-con">
              <button className="btn btn-success">Book a session</button>
            </div>
          </div>
          <div className="home-con-7-card" style={{display: activeCardIndex === 1 ? "flex" : "none"}}>
            <div className="profile-con">
              <img src={img1} alt="profile" height={150} width={149} />
              <div className="star-con">
                <p>4.5</p>
                <img src={img2} alt="star" />
              </div>
            </div>
            <h6>Dr. Vaishali</h6>
            <p>Ayurveda Practitioner (BAMS, MD)</p>
            <div className="work-con">
              <img src={img3} alt="hat" />
              <p>25 years of experience</p>
            </div>
            <div className="special-con">
              <img src={img3} alt="pin" />
              <p>Skin Specialist</p>
            </div>
            <div className="book-con">
              <button className="btn btn-success">Book a session</button>
            </div>
          </div>
          <div className="home-con-7-card" style={{display: activeCardIndex === 2 ? "flex" : "none"}}>
            <div className="profile-con">
              <img src={img1} alt="profile" height={150} width={149} />
              <div className="star-con">
                <p>4.5</p>
                <img src={img2} alt="star" />
              </div>
            </div>
            <h6>Dr. Vaishali Sharma</h6>
            <p>Ayurveda Practitioner (BAMS, MD)</p>
            <div className="work-con">
              <img src={img3} alt="hat" />
              <p>25 years of experience</p>
            </div>
            <div className="special-con">
              <img src={img3} alt="pin" />
              <p>Skin Specialist</p>
            </div>
            <div className="book-con">
              <button className="btn btn-success">Book a session</button>
            </div>
          </div>
        </div>
          <i class="col-2 col-lg-1 fas fa-arrow-right arrow" onClick={handleNextClick}></i>
      </div>
      <div className="dot-container">
        <span className={activeCardIndex === 0 ? "dot active-dot" : "dot"} onClick={() => setActiveCardIndex(0)}></span>
        <span className={activeCardIndex === 1 ? "dot active-dot" : "dot"} onClick={() => setActiveCardIndex(1)}></span>
        <span className={activeCardIndex === 2 ? "dot active-dot" : "dot"} onClick={() => setActiveCardIndex(2)}></span>
      </div>
      <button className="btn btn-outline-success mt-4">{`Find More Experts >`}</button>
    </div>
  );
};

export default PageSeven;
