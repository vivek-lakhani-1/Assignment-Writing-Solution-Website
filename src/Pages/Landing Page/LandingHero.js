import React from "react";
import PropTypes from "prop-types";
import LandingForm from "./LandingForm";

const LandingHero = (props) => {
  return (
    <>
      <div className="landing-hero">
        <div className="landing-text">
          <h1 className="landing-text--heading">
            {props.landingFirst}
            <span className="grad-span"> {props.landingHighlight} </span>{" "}
            {props.landingSecond}
          </h1>
          <h2 className="landing-text--subtitle">
            {props.landingSubTitle1}
            <span className="grad-span"> {props.landingHighlightSub} </span>
            {props.landingSubTitle2}
          </h2>
        </div>
        
      </div>
      <LandingForm className="landing-form"/>
    </>
  );
};

export default LandingHero;
