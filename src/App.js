import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import AboutCompany from "./components/about-company/AboutCompany";
import OurProjects from "./components/our-projects/OurProjects";
import ContactUs from "./components/contact-us/ContactUs";
import { useEffect } from "react";
import { useSelector } from "react-redux";

function App() {
  const { isEnglish } = useSelector((state) => state.language);
  useEffect(() => {
    isEnglish
      ? document.body.style.setProperty("--font-family", "Cairo")
      : document.body.style.setProperty("--font-family", "Almarai");
  }, [isEnglish]);
  return (
    <div id="main-app" className="main-app">
      <Navbar />
      <Landing />
      <AboutCompany />
      <OurProjects />
      <ContactUs />
    </div>
  );
}

export default App;
