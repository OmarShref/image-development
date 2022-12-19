import "./AboutCompany.css";
import aboutCompany1 from "../../assets/about-company-1.jpeg";
import logo from "../../assets/logo.png";

const AboutCompany = () => {
  return (
    <div
      id="about-company"
      className="about-company"
      style={{ backgroundImage: `url(${logo})` }}
    >
      <div className="section-title">
        <p>حول الشركة</p>
      </div>
      <div className="cards-container">
        <div
          className="card"
          style={{ backgroundImage: `url(${aboutCompany1})` }}
        ></div>
        <div className="card text">
          <h2>ما تقدمه الشركة</h2>
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
          <h2>أعضاء مجلس الإدارة</h2>
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
          style={{ backgroundImage: `url(${aboutCompany1})` }}
        ></div>
      </div>
    </div>
  );
};

export default AboutCompany;
