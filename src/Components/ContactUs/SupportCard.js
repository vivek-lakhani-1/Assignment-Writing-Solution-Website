import React from "react";
import "./Contact.css"

const SupportCard = ({image,title,content,link,href}) => {
  return (
    <div className="card support-card">
      <div className="card-img-container">
        <img className="card-img" src={image} alt="Card image cap"/>
      </div>  
    
      <div className="card-body support-card-body">
        <h5 className="support-card-title">{title}</h5>
        <p className="support-card-text">
         {content}
        </p>
      </div>
      <div className="support-link">
        <a href={href} className="card-link">
          {link}
        </a>
        <i class="fa-solid fa-chevron-right"></i>
      </div>
    </div>
  );
};

export default SupportCard;
