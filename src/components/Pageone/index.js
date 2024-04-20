import img1 from "../assets/messaging.png";
import img2 from "../assets/security.png";
import img3 from "../assets/person.png";
import img4 from "../assets/tablets.png";
import PageTwo from "../PageTwo";
import PageThree from "../PageThree";
import PageFour from "../PageFour";
import PageFive from "../PageFive";
import PageSix from "../PageSix";
import PageSeven from "../PageSeven";
import PageEight from "../PageEight";
import "./index.css";
import Footer from "../Footer";

const Pageone = () => {
  return (
    <div className="app-con col-12 col-md-12">
      <div className="banner-con col-12 col-md-12">
        <div className="top d-md-none">
          <i class="fa-solid fa-bars bars"></i>
          <h4>Amrutam</h4>
        </div>
        <div className="banner-text-con">
          <h1 className="subtext">Namaste, Welcome to Amrutam</h1>
          <div className="text-con">
            <h1>
              Step into Holistic Healing with <span className="highlight">Ayurveda</span> Book
              Consultation with certified Experts.
            </h1>
            <p>
              Dive into the world of ayurveda and Experience Personalized Health
              Solutions and Holistic Guidance from Trusted Ayurvedic Doctors
              Anytime, anywhere.
            </p>
            <button className="btn nav-btn">BOOK AN APPOINTMENT</button>
          </div>
        </div>
        <div className="banner-cards-con">
          <div className="banner-card">
            <div className="banner-img-con">
              <img src={img1} alt="banner" />
            </div>
            <p>convenient online & In-clinic consultations</p>
          </div>
          <div className="banner-card">
            <div className="banner-img-con">
              <img src={img2} alt="banner" />
            </div>
            <p>Safe and effective tratement</p>
          </div>
          <div className="banner-card">
            <div className="banner-img-con">
              <img src={img3} alt="banner" />
            </div>
            <p>Experienced Ayurvedic practitioners</p>
          </div>
          <div className="banner-card">
            <div className="banner-img-con">
              <img src={img4} alt="banner" />
            </div>
            <p>Personalized Treatment Plans & Guidance</p>
          </div>
        </div>
      </div>
      <PageTwo />
      <PageThree />
      <PageFour />
      <PageFive />
      <PageSix />
      <PageSeven />
      <PageEight />
      <Footer />
    </div>
  );
};

export default Pageone;
