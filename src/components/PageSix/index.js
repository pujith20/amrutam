import React, { useState, useEffect } from "react";
import img1 from "../assets/star.jpeg";
import "./index.css";

const DotsContainer = ({ activeIndex, totalCards }) => {
  return (
    <div className="dots-container">
      {[...Array(totalCards)].map((_, index) => (
        <span
          key={index}
          className={activeIndex === index ? "dot active-dot" : "dot"}
        ></span>
      ))}
    </div>
  );
};

const PageSix = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "17/02/24",
      stars: 5,
      review:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 2,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "18/02/24",
      stars: 5,
      review:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
    {
      id: 3,
      title: "Consulted for Skin",
      name: "Sophie Moore",
      location: "Chennai",
      date: "19/02/24",
      stars: 5,
      review:
        "Ultrices eros in cursus turpis massa tincidunt sem nulla pharetra diam sit amet nisl suscipit adipis.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="home-con-6">
      <h1>Stories from our valued customers!</h1>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-block d-md-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`carousel-item ${
                index === activeCardIndex ? "active" : ""
              }`}
            >
              <div className="home-con-6-card">
                <div className="home-con-6-card-top">
                  <p>{card.title}</p>
                </div>
                <div className="home-con-6-card-body">
                  <div className="home-con-6-card-header">
                    <div className="profile-pic"></div>
                    <div className="name-con">
                      <p>{card.name}</p>
                      <p>{card.location}</p>
                    </div>
                  </div>
                  <p className="mt-1 mr-2">{card.date}</p>
                </div>
                <div className="p-3">
                  <div className="d-flex">
                    {[...Array(card.stars)].map((_, i) => (
                      <img key={i} src={img1} alt="stars" className="star" />
                    ))}
                  </div>
                  <span>"{card.review}"</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-md-none">
        <DotsContainer
          activeIndex={activeCardIndex}
          totalCards={cards.length}
        />
      </div>
      <div className="d-none d-md-flex home-con-6-cards-con">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`home-con-6-card ${
              activeCardIndex === index ? "active" : ""
            }`}
          >
            <div className="home-con-6-card-top">
              <p>{card.title}</p>
            </div>
            <div className="home-con-6-card-body">
              <div className="home-con-6-card-header">
                <div className="profile-pic"></div>
                <div className="name-con">
                  <p>{card.name}</p>
                  <p>{card.location}</p>
                </div>
              </div>
              <p className="mt-1 mr-2">{card.date}</p>
            </div>
            <div className="p-3">
              <div className="d-flex">
                {[...Array(card.stars)].map((_, i) => (
                  <img key={i} src={img1} alt="stars" className="star" />
                ))}
              </div>
              <span>"{card.review}"</span>
              <p>{card.content}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageSix;
