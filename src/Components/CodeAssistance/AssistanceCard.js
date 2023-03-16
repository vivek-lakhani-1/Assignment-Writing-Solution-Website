import React from "react";
import PropTypes from "prop-types";
import "../CodeAssistance/CodeAssistance.css";

const AssistanceCard = (props) => {
  return (
    <>
      <div className="col-md-4 col-lg-2 col-10 mx-auto ">
        <div class="card-container6">
          <div className="card flip-flop-card codeassis-card card-front">
            <div id="assiscode">
              <img className="kkk" src={props.image} />
            </div>
            <div className="card-body">
              <h5 className="card-title codeassis-title">{props.title}</h5>
            </div>
          </div>
        
        <div className="card flip-flop-card codeassis-card-back card-back">
          <div className="card-body back--body">
            <h5 className="card-desc">{props.desc}</h5>
          </div>
        </div>
      </div>
      </div>
    </>
  );
};

export default AssistanceCard;

AssistanceCard.prototype = {
  title: PropTypes.string.isRequired,
};

AssistanceCard.defaultProps = {
  title: "Title here",
};
