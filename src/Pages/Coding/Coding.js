import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/programming-hero.png";
import Compose from "../../Components/Compose/Compose";
import CodeAssistance from "../../Components/CodeAssistance/CodeAssistance";
import Faq from "../../Components/Faq/Faq";
import Review from "../../Components/Reviews/Review";
import ProgrammingTypes from "../../Components/ProgrammingTypes/ProgrammingTypes";
import PcardService from "../../Components/PcardServicepage/PcardService";
import { TabTitle } from "../../utils/dynamicTitle";

const Coding = () => {
  TabTitle('Programming Assignment Help | Coding Assignment Help')
  return (
    <>
      <Hero
        normalText1="Stuck In A"
        image={image}
        normalText2="Assignment?"
        normalText3=""
        normalText4="Get your Programming Assignment done at just "
        normalText5="a page"
        highlightedText1=" Programming"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
    <ProgrammingTypes/>
      <Compose/>
      
      <CodeAssistance/>
     
      <PcardService
      heading="Our Expert Programmers"
      para="For providing you the best Programming service UK, we have assembled a team of expert Programmers and professionals with years of writing experience. Our team of professional Programmers are all skilled in their academic fields and are experienced with writing Programs. They have all completed their degrees and passed our rigorous selection criteria."
      />
      
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default Coding;
