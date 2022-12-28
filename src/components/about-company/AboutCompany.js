import "./AboutCompany.css";
import { useSelector } from "react-redux";
import logo from "../../assets/logo.png";

const AboutCompany = () => {
  const text = {
    aboutCompany: ["About Company", "حول الشركة"],
    whatCompanyOffers: ["What Company Offers", "ما تقدمه الشركة"],
    boardOfDirectors: ["Board of Directors", "أعضاء مجلس الإدارة"],
  };

  const { projects, currentIndex } = useSelector((state) => state.projects);
  const { isEnglish } = useSelector((state) => state.language);

  return (
    <div
      id="about-company"
      className="about-company"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="section-title">
        <p>{isEnglish ? text.aboutCompany[0] : text.aboutCompany[1]}</p>
      </div>
      <div className="cards-container">
        <div
          className="card"
          style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
        ></div>
        <div className="card text">
          <h2>
            {isEnglish ? text.whatCompanyOffers[0] : text.whatCompanyOffers[1]}
          </h2>
          <div>
            <p>
              <span>التطوير العقاري</span> هو ما تقدمه الشركة بوضع الرؤية
              والفكرة الاستراتيجية وعمل لادراسات الجدوى للمشروعات التي سيتم
              انشاؤها أو تطويرها من خلال الشركة من أجل الحصول على وحدات عقارية
              ناجحة تلبي احتياجات العميل
            </p>
          </div>
        </div>
        <div className="card fourth text">
          <h2>
            {isEnglish ? text.boardOfDirectors[0] : text.boardOfDirectors[1]}
          </h2>
          <div>
            <p>
              هي شركة مساهمة مصرية يرئسها <span>م / حسن عبدالوهاب</span> والعضو
              المنتدب <span>م / أيمن عبد الحي جماز</span> وقد أنشأت الشركة
              للقيام بأعمال التنمية والتطوير من خلال إنشاء المولات التجارية
              وتطوير المنشات القائمة ( فيلات - مباني إدارية ) من أجل رفع قيمة
              العقار وذلك بإنشاء وحدات عقارية ناجحة تتناسب مع إحتياجات المجتمع
              وتلبي جميع الأذواق
            </p>
          </div>
        </div>
        <div
          className="card third"
          style={{ backgroundImage: `url(${projects[currentIndex].image})` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutCompany;
