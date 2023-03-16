import React from "react";
import Referrals from "./ReferAssets/Referrals.svg"
import "../ReferAFriend/ReferAFriend.css";
import ReferalCard from "./ReferralCard";


const refer = () => {
    return (
      <>
        <div className="refer-main">
            <div className="refferal-heading1--container my-0">
                <h1 className="refferal-heading1--text">Our Referral Program</h1>
                <img
                src={Referrals}
                className="refferal-heading1--background"
                alt=""
                />
          </div>
          <ReferalCard />
        </div>

      </>
  );
};


export default refer;
