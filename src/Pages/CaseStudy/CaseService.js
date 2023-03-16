import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/casestudy-hero.png";
import CodeWonder from "../../Components/CodeWonder/CodeWonder";
import Faq from "../../Components/Faq/Faq";
import CaseStudy from "../../Components/CaseStudy/CaseStudy";
import Review from "../../Components/Reviews/Review";
import PcardService from "../../Components/PcardServicepage/PcardService";
import { TabTitle } from "../../utils/dynamicTitle";

const CaseService = () => {
  TabTitle('Case Study Writing | Professional Case Study Writing Services')
  return (
    <>
      <Hero
        normalText1="We have covered your"
        image={image}
        normalText2=" writing"
        normalText3=""
        normalText4="Get Your Case Studies Written at just "
        normalText5="a page"
        highlightedText1=" Case Study"
        highlightedText2=" Time"
        highlightedText3="$9.99 "
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <CaseStudy/>
      <CodeWonder/>
      <PcardService
       heading="Our Expert Programmers"
       para="For providing you the best Programming service UK, we have assembled a team of expert Programmers and professionals with years of writing experience. Our team of professional Programmers are all skilled in their academic fields and are experienced with writing Programs. They have all completed their degrees and passed our rigorous selection criteria."
       />
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default CaseService;
