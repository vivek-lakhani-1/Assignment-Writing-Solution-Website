import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/expert-hero.png";
import WritersPageCard from "../../Components/WritersPageCard/WritersPageCard";

const WriterPage = () => {
  return (
    <>
      <Hero
        normalText1="Know our"
        image={image}
        normalText2=""
        normalText3=""
        normalText4="Lorem ipsum dolor sit amet, consectetur adipiscing elit."
        normalText5=""
        normalText6=" Lorem ipsum dolor sit amet"
        highlightedText1=" Experts "
        highlightedText2=""
        highlightedText3=""
        highlightedText4=""
        buttonText="Hire Expert"
      />
     <WritersPageCard/>
      
     
     </> 
    
  );
};

export default WriterPage;
