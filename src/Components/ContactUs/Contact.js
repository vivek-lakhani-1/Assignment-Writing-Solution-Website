import React from "react";
import headerBg from "../../assets/ContactUs/contactBg.svg";
import SupportCard from "./SupportCard";
import "./Contact.css";
import customerImg from "../../assets/ContactUs/customer.svg";
import mediaImg from "../../assets/ContactUs/news.svg";
import writerImg from "../../assets/ContactUs/pen.svg";
import callImg from "../../assets/ContactUs/call.svg";
import mailImg from "../../assets/ContactUs/mail.svg";
import fbImg from "../../assets/ContactUs/fb.svg";
import instaImg from "../../assets/ContactUs/insta.svg";
import twtImg from "../../assets/ContactUs/twitter.svg";
import linkedinImg from "../../assets/ContactUs/linkedin.svg";
import ContactCard from "./ContactCard";
import Location from "./Location";

const Contact = () => {
  return (
    <div className="contact-container">
      <div className="contact-header">
        <img src={headerBg} alt="header" className="contact-bg-header" />
        <h1>Contact Us</h1>
      </div>
      <div className="supportcard-container">
        <SupportCard
          image={customerImg}
          title={"For Customer"}
          content={"Request information concerning our service."}
          link={"Get Support"}
          href={"/"}
        />
        <SupportCard
          image={mediaImg}
          title={"For Media Personnel"}
          content={"Contact us for Media/PR related inquires"}
          link={"Get Support"}
          href={"/"}
        />
        <SupportCard
          image={writerImg}
          title={"For Writers"}
          content={"Opportunities to write for Assignment Writing Services"}
          link={"Get Support"}
          href={"/"}
        />
      </div>
      <div className="contactcard-container">
        <ContactCard
          title={"Talk to Customer Care"}
          content={"Our friendly support team is ready to assist you over a call."}
          contact={"+1 (888) 337 5415"}
          image={[callImg]}
        />
        <ContactCard
          title={"Write to Us"}
          content={"Get immediate responses with our email support."}
          contact={"xpertzy@support.com"}
          image={[mailImg]}
        />
        <ContactCard
          title={"Follow Us"}
          content={"Join our social media community for more updates."}
          image={[fbImg,instaImg,twtImg,linkedinImg]}
        />
      </div>
        <Location/>
    </div>
  );
};

export default Contact;
