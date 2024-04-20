import img1 from "../assets/oil1.jpeg";
import img2 from "../assets/oil2.png";
import img3 from "../assets/oil3.jpeg";
import "./index.css";

const PageThree = () => {
  return (
    <div className="home-con-3 col-lg-12">
      <h1 className="home-con-3-main-title">
        What sets Ayurvedic consultations Apart ?
      </h1>
      <div className="col-lg-12 home-con-3-cards-con">
        <div className="card col-12 col-lg-4">
          <div className="text-center">
            <h1>स्वस्थस्य स्वास्थ्य रक्षणं, आतुरस्य विकार प्रशमनं ।"</h1>
            <p>
              [ Meaning: The Goal of Ayurveda is to maintain the health of a
              healthy person and to cure the disease of a diseased person. ]
            </p>
          </div>
        </div>
        <img src={img1} alt="card-image" className="col-lg-3 col-12 card-img" />
        <div className="card col-12 col-lg-3">
          <div className="ml-2">
            <h1>Precise diagnosis</h1>
            <p>
              Ayurveda's core principles revolve around Vata, Pitta, and Kapha
              doshas, guiding you with precise diagnosis and treatment.
            </p>
          </div>
        </div>
        <div className="card col-12 col-lg-2">
          <h1>Precise diagnosis</h1>
          <p>
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
        <img src={img2} alt="card-image" className="col-lg-3 col-12 card-img" />
        <div className="card col-12 col-lg-2">
          <h1>Precise diagnosis</h1>
          <p>
            Ayurveda's core principles revolve around Vata, Pitta, and Kapha
            doshas, guiding you with precise diagnosis and treatment.
          </p>
        </div>
        <img src={img3} alt="card-image" className="col-12 col-lg-3 card-img" />
      </div>
    </div>
  );
};

export default PageThree;
