import "./Landing.css";
import landingVideo from "../../assets/landing-video.mp4";
import logo from "../../assets/logo.png";

const Landing = () => {
  return (
    <div id="landing" className="landing">
      <video
        src={landingVideo}
        autoPlay
        muted
        loop
        className="landing-background-video"
      ></video>
      <div className="landing-card">
        <img src={logo} alt="company logo" />
        <p>إحدى شركات دلتا النيل للمقاولات</p>
      </div>
    </div>
  );
};

export default Landing;
