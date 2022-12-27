import "./ContactUs.css";

import React from "react";

const ContactUs = () => {
  const pointerDivMove = (e) => {
    const pointerDiv = document.getElementById("pointer-div");
    try {
      let x = e.pageX;
      let y = e.pageY - 2448;
      pointerDiv.style.top = `${y}px`;
      pointerDiv.style.left = `${x}px`;
    } catch (error) {
      console.log(error);
    }
  };

  document.addEventListener("mousemove", (e) => pointerDivMove(e));

  return (
    <div className="contactus">
      <div id="pointer-div" className="pointer-div"></div>
      <div className="section-title">
        <p>اتصل بنا</p>
      </div>
      <div className="contents">
        <p>رقم الهاتف : 19087</p>
        <p>الإيميل : info@imageegy.com</p>
        <p>العنوان : 1 أبراج سيتي ستار - المحور المركزي - 6 أكتوبر</p>
      </div>
    </div>
  );
};

export default ContactUs;
