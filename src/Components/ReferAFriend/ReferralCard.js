import React from "react";
import "./ReferralCard.css";
import leftQuote from "./ReferAssets/ri_double-quotes-l.png";
import rightQuote from "./ReferAssets/ri_double-quotes-r.png";

const RefferalCard = () => {
  return (
    <>
      <div className="referral-card-container">
        <div className="referral-card-subheading">
            
            <h2 className="referral-card-subheading--text"><img src={leftQuote} className="lq" />A friend in need is a friend indeed!<img src={rightQuote} className="rq"/></h2>
            
        </div>
        <div className="referral-card-subheading">
          <p  >
            <h2 className="referral-card-subheading--text" style={{color: "#565D5C"}}>Do you know a friend who may be in trouble, and needs help?</h2>
          </p>
        </div>
        <div className="referral-card-details">
          <p className="referral-card-details--text">
            Don’t forget to help. Refer your friend to our website. Our team of experts will help you to outsource your efforts to support your friend.
            And at the same time, you can earn coupons to avail benefits further on your next order.
          </p>
        </div>
        <div className="referral-card-subheading">
          <p  style={{paddingTop: "5px"}} >
            <h2 className="referral-card-subheading--text sh2">Hurry! Refer a friend now and get free credits NOW!</h2>
          </p>
        </div>
      </div>
    </>
  );
};

export default RefferalCard;
