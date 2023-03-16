import React from "react";

const ContactCard = ({ title, content, contact, image }) => {
  return (
    <div className="contactcard-container-wrapper">
      {title && <h1 className="contactcard-title">{title}</h1>}
      <p className="contactcard-content">{content}</p>

      <div className="contacts">
        {image.map((src, idx) => {
          return (
            <div className="contacts-img">
              <a href="/">
                <img className="img-icon" key={idx} src={src} alt="img" />
              </a>
            </div>
          );
        })}
        {contact && <div className="contacts-details">{contact}</div>}
      </div>
    </div>
  );
};

export default ContactCard;
