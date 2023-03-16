import React from "react";
import world from "../../assets/ContactUs/world.svg";
import LocationCard from "./LocationCard";
import location from "../../assets/ContactUs/location.svg";

const Location = () => {
  return (
    <div className="location-container">
      <h1 className="locationcard-title">Mailing Address</h1>
      <div className="worl-img-container">
        <img className="world-img" src={world} alt="world" />
      </div>

      <div className="location-card-container">
        <LocationCard
          subheading={"Assignment Writing Services"}
          content={
            " Louki Akrita, 23 Bellapris, Court, Flat/Office 46 1100, Noida, Delhi."
          }
          image={[location]}
        />
        <LocationCard
          subheading={"Assignment Writing Services"}
          content={
            " Louki Akrita, 23 Bellapris, Court, Flat/Office 46 1100, Noida, Delhi."
          }
          image={[location]}
        />
        <LocationCard
          subheading={"Assignment Writing Services"}
          content={
            " Louki Akrita, 23 Bellapris, Court, Flat/Office 46 1100, Noida, Delhi."
          }
          image={[location]}
        />
      </div>
    </div>
  );
};

export default Location;
