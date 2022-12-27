import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import AboutCompany from "./components/about-company/AboutCompany";
import OurProjects from "./components/our-projects/OurProjects";
import ContactUs from "./components/contact-us/ContactUs";

function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Landing />
      <AboutCompany />
      <OurProjects />
      <ContactUs />
    </div>
  );
}

export default App;
