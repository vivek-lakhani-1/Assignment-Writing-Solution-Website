import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/dessertation-hero.png";
import Faq from "../../Components/Faq/Faq";
import Review from "../../Components/Reviews/Review";
import DissNeed from "../../Components/DissNeed/DissNeed";
import DissertationWrite from "../../Components/DissertationWrite/DissertationWrite";
import PcardService from "../../Components/PcardServicepage/PcardService";
import { TabTitle } from "../../utils/dynamicTitle";

const DissertationPage = () => {
  TabTitle('Dissertation Writing Services | Dissertation Services')
  return (
    <>
      <Hero
         normalText1="Get Our Help In Your "
         image={image}
         normalText2=" Writing"
         normalText3=""
         normalText4="Get Your Dessertaions done at just"
         normalText5="a page"
         highlightedText1="Dessertation"
         highlightedText2=" "
         highlightedText3="$9.99"
         highlightedText4="Assignment"
         buttonText="Hire Expert"
      />
      <DissNeed/>
      <DissertationWrite/>
      <PcardService
      heading="Our Expert Desseration Writers"
      para="For providing you the best Desseration writing service UK, we have assembled a team of expert Desseration writers and professionals with years of writing experience. Our team of professional Desseration writers are all skilled in their academic fields and are experienced with writing Desseration. They have all completed their degrees and passed our rigorous selection criteria."
      />
      <Review/>
      <Faq/>
      
      </>
      
    
  );
};

export default DissertationPage;
