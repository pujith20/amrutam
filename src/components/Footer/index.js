import "./index.css";

const Footer = () => {
  return (
    <div className="last-con col-12 col-lg-12">
      <div className="d-none d-md-block">
        <h6>Information</h6>
        <p>About Us</p>
        <p>Terms and Conditions</p>
        <p>Privacy Policy</p>
        <p>Privacy Policy for Mobile Apps</p>
        <p>Shipping and Returns policy</p>
        <p>International Delivery</p>
        <p>For Businesses, Hotels and Resorts</p>
      </div>
      <div className="d-block d-md-none">
        <p>Get in touch</p>
        <p>
          support @amrutam.co.in
          <br />
          <br />
          Amrutam Pharmaceuticals Pvt Ltd., chitragupt ganj, Nai Sadak, Lashkar,
          Gwalior - 474001
          <br />
          <br />
          +91 9713771999
        </p>
        <div clas="d-flex mb-3">
          <i class="fa-brands fa-facebook icon"></i>
          <i class="fa-brands fa-instagram icon"></i>
          <i class="fa-brands fa-youtube icon"></i>
          <i class="fa-brands fa-twitter icon"></i>
          <i class="fa-brands fa-linkedin-in icon"></i>
          <i class="fa-brands fa-pinterest icon"></i>
        </div>
        <div className="mt-3">
          <h6>Information</h6>
          <p>About Us</p>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Privacy Policy for Mobile Apps</p>
          <p>Shipping and Returns policy</p>
          <p>International Delivery</p>
          <p>For Businesses, Hotels and Resorts</p>
        </div>
        <h6>Subscribe to our Newsletter and join Amrutam Family today!</h6>
        <div className="d-flex">
            <input type="text" />
            <button className="btn btn-dark text-white">Subscribe</button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
