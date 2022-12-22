import "./Landing.css";
import landingVideo from "../../assets/landing-video.mp4";
import logo from "../../assets/logo.png";

const Landing = () => {
  const mousemoveListener = (e) => {
    if (window.innerWidth > 600) {
      document.body.style.setProperty(
        "--mouse-x",
        (e.clientX / document.body.offsetWidth) * 100
      );
      document.body.style.setProperty(
        "--mouse-y",
        (e.clientY / document.body.offsetHeight) * 100
      );
    }
  };
  window.addEventListener("mousemove", mousemoveListener, false);
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
