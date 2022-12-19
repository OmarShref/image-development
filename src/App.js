import "./App.css";
import Landing from "./components/landing/Landing";
import Navbar from "./components/navbar/Navbar";
import AboutCompany from "./components/about-company/AboutCompany";
function App() {
  return (
    <div className="main-app">
      <Navbar />
      <Landing />
      <AboutCompany />
    </div>
  );
}

export default App;
