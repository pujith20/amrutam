import img1 from "../assets/play1.png";
import img2 from "../assets/play2.png";
import img3 from "../assets/phone.png";
import "./index.css";

const PageEight = () => {
  return (
    <div className="col-12 col-lg-12 home-con-8">
      <div className="col-12 col-lg-8 home-con-main-con">
        <h2>Amrutam Home App</h2>
        <p>
          The Amrutam Home App is your one-stop app for all things Ayurveda!
          Apart from mimicking the significant characteristics of our website,
          this app offers a wide range of additional features.
        </p>
        <img src={img3} alt="phone" height={400}  className="col-12 col-lg-12 d-block d-md-none" />
        <h4>Get a diet & lifestyle consultation with ayurvedic experts across the globe </h4>
        <h3>Get The App Now</h3>
        <div className="apps-img-con">
            <img src={img1} alt="playstore" height={80} width={270} />
            <img src={img2} alt="appstore" height={80} />
        </div>
      </div>
      <img src={img3} alt="phone" height={400} className="col-12 col-lg-4 d-none d-md-block" />
    </div>
  );
};

export default PageEight;
