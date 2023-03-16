import React from "react";
import PropTypes from "prop-types";
import "../DissertationWrite/DissertationWrite.css";
import Badge from "../DissertationWrite/DissImg/badge.svg"

const DissertationCard = (props) => {
  return (
    <>
      <div className="col-md-6 col-lg-3 col-10 mx-auto ">
      <div class="card-container6">
      
        <div className="card flip-flop-card codewonder-card card-front">
        <div id="wondercode"><img className="wonderimg" src={props.image}/></div>
          <div className="card-body">
            <h5 className="card-title codewonder-title123">{props.title}</h5>
          </div>
      
        </div>
        
        <div className="card flip-flop-card codewonder-card-back card-back">
          <div className="card-body back--body">
            <h5 className="card-desc">{props.desc}</h5>
          </div>
        </div>
			
        </div>

      </div>
    </>
  );
};

export default DissertationCard;

DissertationCard.prototype = {
  title: PropTypes.string.isRequired,
  
};

DissertationCard.defaultProps = {
  title: "Title here",
  image:{Badge},
 
};
