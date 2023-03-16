import React from "react";
import PropTypes from "prop-types";
import "../CodeWonder/CodeWonder.css";
import Badge from "../CodeWonder/WonderImg/badge.svg"

const WonderCard = (props) => {
  return (
    <>
      <div className="col-md-5 col-lg-2 col-10 mx-auto ">
      <div className="container">
        <div className="card-container5">
        <div className="flip-flop-card card-front card">
        <div id="wondercode"><img className="wonderimg" src={props.image}/></div>
          <div className="card-body">
            <h5 className="card-title codewonder-title">{props.title}</h5>
          </div>
        </div>
        <div className="card flip-flop-card codewonder-card-back card-back">
          <div className="card-body back--body">
            <h5 className="card-desc">{props.desc}</h5>
          </div>
        </div>
        </div>
        </div>
      </div>
    </>
  );
};

export default WonderCard;

WonderCard.prototype = {
  title: PropTypes.string.isRequired,
  
};

WonderCard.defaultProps = {
  title: "Title here",
  image:{Badge},
 
};
