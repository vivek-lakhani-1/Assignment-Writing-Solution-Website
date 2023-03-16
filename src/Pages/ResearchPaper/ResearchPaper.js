import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/research-hero.png";
import CodeWonder from "../../Components/CodeWonder/CodeWonder";
import Faq from "../../Components/Faq/Faq";
import Review from "../../Components/Reviews/Review";
import ResearchType from "../../Components/ResearchTypes/ResearchTypes";
import PcardService from "../../Components/PcardServicepage/PcardService";
import { TabTitle } from "../../utils/dynamicTitle";

const ResearchPaper = () => {
  TabTitle('Research Paper Writing Service | Assignment Writing Service');
  return (
    <>
      <Hero
        normalText1="We have covered your"
        image={image}
        normalText2="  writing"
        normalText3=" "
        normalText4="Get Your Research Paper at just "
        normalText5=" a page"
        highlightedText1=" Research Papers"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <ResearchType/>
      <CodeWonder/>
      <PcardService
      heading="Our Expert Research Paper Writers"
      para="For providing you the best Research Paper writers service UK, we have assembled a team of expert Research Paper writers and professionals with years of writing experience. Our team of professional Research Paper writers are all skilled in their academic fields and are experienced with writing Research Papers. They have all completed their degrees and passed our rigorous selection criteria."
      />
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default ResearchPaper;
