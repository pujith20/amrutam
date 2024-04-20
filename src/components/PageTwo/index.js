import img6 from "../assets/yogaman.png";
import img7 from "../assets/c1.png";
import img8 from "../assets/c2.png";
import img9 from "../assets/c3.png";
import img10 from "../assets/c4.png";
import img11 from "../assets/c5.png";
import img12 from "../assets/c6.png";
import "./index.css";

const PageTwo = () => {
  return (
    <div className="home-con-2 col-12 col-md-12 col-lg-12 col-xlg-12">
      <div className="home-con-2-main-text-con">
        <h1>Discover Ayurvedic's Magic With Us</h1>
        <p>
          Ayurvedic treatment aims to balance your body and mind, bringing
          harmony and vitality. It's like a journey to better health using
          ancient wisdom, a totally effective approach for a better life.{" "}
        </p>
      </div>
      <div className="d-block d-md-none">
      <div className="home-con-2-align-con-dev">
        <img src={img6} alt="title" />
      </div>
      <div className="home-con-2-cards-con-dev">
        <div className="home-con-2-card-con">
          <div>
            <span>Personalized Wellness</span>
            <p>
              Get treatments made just for you based on your individual doshas (
              body type)
            </p>
          </div>
          <img src={img7} alt="card" />
        </div>
        <div className="home-con-2-card-con">
          <div>
            <span>Focus on prevention</span>
            <p>Stop problems even before they start.</p>
          </div>
          <img src={img8} alt="card" />
        </div>
        <div className="home-con-2-card-con">
          <div>
            <span>Mind-Body Connection</span>
            <p>Keep your mind and body in sync for a happy life.</p>
          </div>
          <img src={img9} alt="card" />
        </div>
        <div className="home-con-2-card-con">
          <div>
            <span>Personalized Wellness</span>
            <p>
              Get treatments made just for you based on your individual doshas (
              body type)
            </p>
          </div>
          <img src={img7} alt="card" />
        </div>
        <div className="home-con-2-card-con">
          <div>
            <span>Focus on prevention</span>
            <p>Stop problems even before they start.</p>
          </div>
          <img src={img8} alt="card" />
        </div>
        <div className="home-con-2-card-con">
          <div>
            <span>Mind-Body Connection</span>
            <p>Keep your mind and body in sync for a happy life.</p>
          </div>
          <img src={img9} alt="card" />
        </div>
      </div>
      </div>
      <div className="home-con-2-align-con col-12 col-md-12 col-lg-12 d-none d-md-flex">
        <div className="home-con-2-align-con-1 col-lg-3">
          <div className="home-con-2-card-con first-card">
            <div>
              <span>Personalized Wellness</span>
              <p>
                Get treatments made just for you based on your individual doshas
                ( body type)
              </p>
            </div>
            <img src={img7} alt="card" />
          </div>
          <div className="home-con-2-card-con">
            <div>
              <span>Focus on prevention</span>
              <p>Stop problems even before they start.</p>
            </div>
            <img src={img8} alt="card" />
          </div>
          <div className="home-con-2-card-con first-card">
            <div>
              <span>Mind-Body Connection</span>
              <p>Keep your mind and body in sync for a happy life.</p>
            </div>
            <img src={img9} alt="card" />
          </div>
        </div>
        <div className="home-con-2-align-con-2 col-lg-6">
          <img src={img6} alt="person" />
        </div>
        <div className="home-con-2-align-con-3 col-lg-3">
          <div className="home-con-2-card-con right-card">
            <img src={img10} alt="card" className="mr-3" />
            <div>
              <span>Personalized Wellness</span>
              <p>
                Get treatments made just for you based on your individual doshas
                ( body type)
              </p>
            </div>
          </div>
          <div className="home-con-2-card-con">
            <img src={img11} alt="card" className="mr-3" />
            <div>
              <span>Focus on prevention</span>
              <p>Stop problems even before they start.</p>
            </div>
          </div>
          <div className="home-con-2-card-con right-card">
            <img src={img12} alt="card" className="mr-3" />
            <div>
              <span>Mind-Body Connection</span>
              <p>Keep your mind and body in sync for a happy life.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageTwo;
