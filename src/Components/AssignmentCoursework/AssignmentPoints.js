import React from "react";
import PropTypes from "prop-types";
import "../AssignmentCoursework/AssignmentCoursework.css";

const AssignmentPoints = (props) => {
  return (
    <>
      <div className="col-md-2 col-lg-2 col-10 mx-auto ">
            
            <h5 className="points-title"><span className="spanpadd--points"><i className="fa-solid fa-circle icon-points"/></span>{props.title}</h5>
  
</div>
    </>
  );
};

export default AssignmentPoints;

AssignmentPoints.prototype = {
  title: PropTypes.string.isRequired,
 
};

AssignmentPoints.defaultProps = {
  title: "Title here",
  
};
