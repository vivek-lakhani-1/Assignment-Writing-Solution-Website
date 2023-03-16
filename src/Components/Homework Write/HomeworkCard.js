import React from "react";
import PropTypes from "prop-types";
import "../Homework Write/HomeworkWrite.css";

const HomeworkCard = (props) => {
  return (
    <>
      <div className="col-sm-10 col-md-3 col-lg-2 col-10 mx-auto ">
      <div class="card-container6">
            <div className="card flip-flop-card homework-card card-front">
            <div id="hwcode"><img className="hwimg" src={props.image}/></div>
  <div className="card-body">
    <h5 className="card-title home-title">{props.title}</h5>
  </div>
</div>
<div className="card flip-flop-card homework-card-back card-back">
          <div className="card-body back--body">
            <h5 className="card-desc">{props.desc}</h5>
          </div>
        </div>
</div>
</div>
    </>
  );
};

export default HomeworkCard;

HomeworkCard.prototype = {
  title: PropTypes.string.isRequired,
  
};

HomeworkCard.defaultProps = {
  title: "Title here",
  
};
