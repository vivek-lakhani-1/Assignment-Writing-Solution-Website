import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/essay-hero.png";
import ProvideCard from "../../Components/ProvideCard/ProvideCard";
import Faq from "../../Components/Faq/Faq";
import Services from "../../Components/Services/Service";
import Review from "../../Components/Reviews/Review";
import PcardService from "../../Components/PcardServicepage/PcardService";
import { TabTitle } from "../../utils/dynamicTitle";

const EssayWriteService = () => {
  TabTitle('Essay Writing Service | Essay Writing Help Online');
  return (
    <>
      <Hero
        normalText1="Get Assistance in Writing Your"
        image={image}
        normalText2=""
        normalText3=""
        normalText4="Get Your Essays done at just"
        normalText5="a page"
        highlightedText1=" Essay"
        highlightedText2=" "
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <Services/>
      <ProvideCard/>
     <PcardService
     heading="Our Expert Essay Writers"
     para="For providing you the best Essay writing service UK, we have assembled a team of expert Essay writers and professionals with years of writing experience. Our team of professional Essay writers are all skilled in their academic fields and are experienced with writing Essay. They have all completed their degrees and passed our rigorous selection criteria."
     />
      <Review/>
      <Faq/>
      
      
      
    </>
  );
};

export default EssayWriteService;
