import "./OurProjects.css";
import { useState } from "react";
import aboutCompany1 from "../../assets/about-company-1.jpeg";
import project2 from "../../assets/project-2.jpg";
import project3 from "../../assets/project-3.jpeg";
import project4 from "../../assets/project-4.jpeg";
import project5 from "../../assets/project-5.jpeg";
import project6 from "../../assets/project-6.jpeg";

const OurProjects = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const projects = [
    { name: "جنة مصر بالشيخ زايد", image: aboutCompany1 },
    { name: "الإسكان الإجتماعي بالشيخ زايد", image: project2 },
    { name: "صواري بالإسكندرية", image: project3 },
    { name: "مجمع الصناعات بالعاشر من رمضان", image: project4 },
    { name: "مدارس النيل بالشيخ زايد", image: project5 },
    { name: "مركز شباب السادات", image: project6 },
  ];
  const handleMovingRight = () => {
    const isLast = currentIndex === projects.length - 1;
    const newIndex = isLast ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    console.log("current index : ", currentIndex);
    console.log("new index : ", newIndex);
    document.getElementById(
      "projects-container"
    ).style.left = `calc(-100vw * ${newIndex})`;
  };
  const handleMovingLeft = () => {
    const isFirst = currentIndex === 0;
    const newIndex = isFirst ? projects.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    document.getElementById(
      "projects-container"
    ).style.left = `calc(-100vw * ${newIndex})`;
  };

  function resizeListener() {
    setCurrentIndex(0);
    document.getElementById("projects-container").style.left = `0`;
  }
  window.addEventListener("resize", resizeListener);
  return (
    <div id="our-projects" className="our-projects">
      <i
        className="fa-solid fa-angle-left left-arrow"
        onClick={() => handleMovingLeft()}
      ></i>
      <i
        className="fa-solid fa-angle-right right-arrow"
        onClick={() => handleMovingRight()}
      ></i>

      <div id="projects-container" className="projects-container">
        {projects.map((project) => (
          <div
            className="project"
            style={{ backgroundImage: `url(${project.image})` }}
          >
            <div className="project-card">
              <p>{project.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OurProjects;
