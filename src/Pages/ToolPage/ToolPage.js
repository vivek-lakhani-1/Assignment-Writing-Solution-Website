import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/homepage-hero.png";
import ToolsCard from "../../Components/ToolsCard/ToolsCard";

const ToolPage = () => {
  return (
    <>
      <Hero
        normalText1="Explore our "
        image={image}
        normalText2=""
        normalText3=""
        normalText4="Make your assignments flawless with our Assignment Writing Tools."
        normalText5=""
        normalText6=" Our Online Tools will assist you in creating the most perfect Assignments."
        normalText7=" Try them now!"
        highlightedText1="Tools "
        highlightedText2=""
        highlightedText3=""
        highlightedText4=""
        buttonText="Hire Expert"
      />
      <ToolsCard/>
      
      </>
      
    
  );
};

export default ToolPage;
