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
      document
        .getElementsByClassName("navbar")[0]
        .classList.remove("scrolled-up");
    } else {
      document.getElementsByClassName("navbar")[0].classList.add("scrolled-up");
    }
    scrollPos = document.body.getBoundingClientRect().top;

    // ------------------------------------------------------------------------
    // for (const link of [...document.getElementsByTagName("a")]) {
    //   link.classList.remove("current-link");
    // }
    // if (window.scrollY < window.innerHeight) {
    //   [...document.getElementsByTagName("a")][0].classList.add("current-link");
    //   [...document.getElementsByTagName("a")][4].classList.add("current-link");
    // } else if (
    //   window.scrollY >= window.innerHeight &&
    //   window.scrollY < 2 * window.innerHeight
    // ) {
    //   [...document.getElementsByTagName("a")][1].classList.add("current-link");
    //   [...document.getElementsByTagName("a")][5].classList.add("current-link");
    // } else if (
    //   window.scrollY >= 2 * window.innerHeight &&
    //   window.scrollY < 3 * window.innerHeight
    // ) {
    //   [...document.getElementsByTagName("a")][2].classList.add("current-link");
    //   [...document.getElementsByTagName("a")][6].classList.add("current-link");
    // } else if (
    //   window.scrollY >= 3 * window.innerHeight &&
    //   window.scrollY < 4 * window.innerHeight
    // ) {
    //   [...document.getElementsByTagName("a")][3].classList.add("current-link");
    //   [...document.getElementsByTagName("a")][7].classList.add("current-link");
    // }
  }
  window.addEventListener("scroll", scrollListener);

  return (
    <div className="navbar">
      <div className="navbar-contents">
        <div className="navbar-background"></div>
        <div>
          <img className="logo" src={logo} alt="Company logo" />
        </div>
        <ul className="dropdown-menu">
          <li>
            <a onClick={handleClose} href="#landing">
              الصفحة الرئيسية
            </a>
          </li>
          <li>
            <a onClick={handleClose} href="#about-company">
              حول الشركة
            </a>
          </li>
          <li>
            <a onClick={handleClose} href="">
              المشاريع
            </a>
          </li>
          <li>
            <a onClick={handleClose} href="">
              اتصل بنا
            </a>
          </li>
        </ul>
        <div className="nav-links">
          <ul>
            <li>
              <a onClick={handleClose} href="#landing">
                الصفحة الرئيسية
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="#about-company">
                حول الشركة
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="">
                المشاريع
              </a>
            </li>
            <li>
              <a onClick={handleClose} href="">
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
