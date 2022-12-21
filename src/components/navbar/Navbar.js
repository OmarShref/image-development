import "./Navbar.css";
import logo from "../../assets/logo.png";
import { useState } from "react";

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(true);
  const handleOpen = () => {
    setShowLinks(false);
    document.getElementsByClassName("dropdown-menu")[0].classList.add("opened");
    document.getElementsByClassName("menu-icon")[0].classList.add("flipped");
  };
  const handleClose = () => {
    setShowLinks(true);
    document
      .getElementsByClassName("dropdown-menu")[0]
      .classList.remove("opened");
    document.getElementsByClassName("menu-icon")[0].classList.remove("flipped");
  };

  function resizeListener() {
    if (window.innerWidth >= 851) {
      setShowLinks(true);
      document
        .getElementsByClassName("dropdown-menu")[0]
        .classList.remove("opened");
      document
        .getElementsByClassName("menu-icon")[0]
        .classList.remove("flipped");
    }
  }
  window.addEventListener("resize", resizeListener);

  let scrollPos = 0;
  function scrollListener() {
    if (document.body.getBoundingClientRect().top > scrollPos) {
      document.getElementById("navbar").classList.remove("scrolled-up");
    } else {
      document.getElementById("navbar").classList.add("scrolled-up");
    }
    scrollPos = document.body.getBoundingClientRect().top;

    // ------------------------------------------------------------------------

    document.getElementById("1").classList.remove("current-link");
    document.getElementById("2").classList.remove("current-link");
    document.getElementById("3").classList.remove("current-link");
    // document.getElementById("4").classList.remove("current-link");
    document.getElementById("5").classList.remove("current-link");
    document.getElementById("6").classList.remove("current-link");
    document.getElementById("7").classList.remove("current-link");
    // document.getElementById("8").classList.remove("current-link");
    const aboutCompanyHeight = window.innerWidth <= 850 ? 1909 : 1069;
    if (window.scrollY < window.innerHeight) {
      document.getElementById("1").classList.add("current-link");
      document.getElementById("5").classList.add("current-link");
    } else if (
      window.scrollY >= window.innerHeight &&
      window.scrollY < window.innerHeight + aboutCompanyHeight
    ) {
      document.getElementById("2").classList.add("current-link");
      document.getElementById("6").classList.add("current-link");
    } else if (
      window.scrollY >= window.innerHeight + aboutCompanyHeight &&
      window.scrollY < 2 * window.innerHeight + aboutCompanyHeight
    ) {
      document.getElementById("3").classList.add("current-link");
      document.getElementById("7").classList.add("current-link");
    }
  }
  window.addEventListener("scroll", scrollListener);

  return (
    <div className="navbar" id="navbar">
      <div className="navbar-contents">
        <div className="navbar-background"></div>
        <div>
          <img className="logo" src={logo} alt="Company logo" />
        </div>
        <ul className="dropdown-menu">
          <li>
            <a
              id="1"
              onClick={handleClose}
              href="#landing"
              className="current-link"
            >
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a id="2" onClick={handleClose} href="#about-company">
              حول الشركة
            </a>
          </li>
          <li>
            <a id="3" onClick={handleClose} href="#our-projects">
              المشاريع
            </a>
          </li>
          <li>
            <a id="4" onClick={handleClose} href="">
              اتصل بنا
            </a>
          </li>
        </ul>
        <div className="nav-links">
          <ul>
            <li>
              <a
                id="5"
                onClick={handleClose}
                href="#landing"
                className="current-link"
              >
                الصفحة الرئيسية
              </a>
            </li>
            <li>
              <a id="6" onClick={handleClose} href="#about-company">
                حول الشركة
              </a>
            </li>
            <li>
              <a id="7" onClick={handleClose} href="#our-projects">
                المشاريع
              </a>
            </li>
            <li>
              <a id="8" onClick={handleClose} href="">
                اتصل بنا
              </a>
            </li>
          </ul>

          {showLinks ? (
            <div>
              <i
                onClick={handleOpen}
                className="fa-solid fa-bars menu-icon"
              ></i>
            </div>
          ) : (
            <div>
              <i
                onClick={handleClose}
                className="fa-solid fa-bars menu-icon"
              ></i>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
