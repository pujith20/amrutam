import React, { useState, useEffect } from "react";
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

const PageFive = () => {
  const [activeCardIndex, setActiveCardIndex] = useState(0);
  const cards = [
    {
      id: 1,
      title: "Make Appointment",
      content:
        "You must make an appointment in advance, to choose the service and date.",
    },
    {
      id: 2,
      title: "Consultations",
      content:
        "The next stage involves a thorough consultation with an Ayurveda practitioner.",
    },
    {
      id: 3,
      title: "Treatment Planning",
      content:
        "The Ayurvedic practitioner creates a personalized treatment plan for you",
    },
    {
      id: 4,
      title: "Maintenance",
      content:
        "These visits allow for assessment of progress, adjustments to the treatment.",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveCardIndex((prevIndex) => (prevIndex + 1) % cards.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [cards.length]);

  return (
    <div className="home-con-5">
      <div className="home-con-5-text">
        <h1>Our Ayurvedic Approach</h1>
        <p className="w-50">
          At Amrutam we follow a unique and personalized approach to healing.
          Our expert practitioners begin each treatment process by conducting a
          thorough analysis of the patient’s body type, medical history, and
          current health conditions.
        </p>
      </div>
      <div
        id="carouselExampleSlidesOnly"
        className="carousel slide d-flex d-md-none"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          {cards.map((card, index) => (
            <div
              key={card.id}
              className={`carousel-item ${
                activeCardIndex === index ? "active" : ""
              }`}
            >
              <div className="home-con-5-card-1">
                <div className="serial">
                  <p>{index + 1}</p>
                </div>
                <h6 className="mb-3">{card.title}</h6>
                <p>{card.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="d-md-none">
      <DotsContainer activeIndex={activeCardIndex} totalCards={cards.length} />
      </div>
      <div className="home-con-5-cards-con d-none d-md-flex">
        {cards.map((card, index) => (
          <div
            key={card.id}
            className={`home-con-5-card-1 ${
              activeCardIndex === index ? "active" : ""
            }`}
          >
            <div className="serial">
              <p>{index + 1}</p>
            </div>
            <h6 className="mb-3">{card.title}</h6>
            <p>{card.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PageFive;
