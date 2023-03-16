import React from "react";
import PropTypes from "prop-types";
import "../ToolsCard/ToolsCard.css";
import Shieldp from "../ProvideCard/proImg/shield.svg"

const SingleToolCard = (props) => {
  return (
    <>
     <div className="col-sm-6 col-md-6 col-lg-3 col-12 mx-auto ">
     <div className="card tool--card--box">
        <div id="SingleToolCard--img--box">
  <img src={props.image} className="SingleToolCard--img" alt="..."/>
  </div>
  <div className="card-body">
    <h5 className="SingleToolCard-title">{props.title}</h5>
    <p className="SingleToolCard-text">{props.para}</p>
    <a href="#" className="btn btn-primary SingleToolCard--btn">{props.btn}</a>
  </div>
</div>
</div>
    </>
  );
};

export default SingleToolCard;

SingleToolCard.prototype = {
  title: PropTypes.string.isRequired,
  para: PropTypes.string.isRequired,
  btn: PropTypes.string.isRequired,
  
};

SingleToolCard.defaultProps = {
  title: "Title here",
  image: {Shieldp},
  para: "para here",
  btn: "btn here",
};
