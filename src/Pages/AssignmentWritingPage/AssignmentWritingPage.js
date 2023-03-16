import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/assignmentwriting-hero.png";
import Faq from "../../Components/Faq/Faq";
import CodeWonder from "../../Components/CodeWonder/CodeWonder";
import Review from "../../Components/Reviews/Review";
import AssignmentCoursework from "../../Components/AssignmentCoursework/AssignmentCoursework";
import PcardService from "../../Components/PcardServicepage/PcardService";
import {TabTitle} from "../../utils/dynamicTitle";

const AssignmentWritingPage = () => {

  TabTitle('Assignment Writing Serivce | Assignment Help');


  return (
    <>
      <Hero
        normalText1="Struggling with Assignments? We provide"
        image={image}
        normalText2="services"
        normalText3=" "
        normalText4="Get Your Dessertations Written at just "
        normalText5=" a page"
        highlightedText1=" Assignment writing "
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <AssignmentCoursework/>
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

export default AssignmentWritingPage;
