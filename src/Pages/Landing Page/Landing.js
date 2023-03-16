import React from "react";
import Coupon from "../../Components/CouponCard/Coupon";
import "./Landing.css";
import LandingForm from "./LandingForm";
import LandingHero from "./LandingHero";
const Landing = () => {
  return (
    <>
      <div className="landing1">
        <LandingHero
          landingFirst="Premium"
          landingHighlight="Assignment Writing"
          landingSecond="Service For
          University Students"
          landingSubTitle1="Choose Best In Class Assignment Writing Service at just"
          landingSubTitle2="a page"
          landingHighlightSub="$9.99"
        />
        <Coupon />
        <p className="landing-warning"><a href="">Visit out main website</a> (Currently under-maintainance)</p>
      </div>
    </>
  );
};

export default Landing;
