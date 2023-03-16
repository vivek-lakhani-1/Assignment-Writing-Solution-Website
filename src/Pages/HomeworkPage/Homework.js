import React from "react";
import Hero from "../../Components/Hero/Hero";
import image from "../../assets/Hero/coursework-hero.png";
import HomeworkWrite from "../../Components/Homework Write/HomeworkWrite";
import Faq from "../../Components/Faq/Faq";
import PcardService from "../../Components/PcardServicepage/PcardService";
import Review from "../../Components/Reviews/Review";
import { TabTitle } from "../../utils/dynamicTitle";

const Homework = () => {
  TabTitle("Coursework Help Online | Coursework Help Australia");
  return (
    <>
      <Hero
        normalText1="You can rely on us for your "
        image={image}
        normalText2=" writing "
        normalText3=""
        normalText4="Get Your Coursework done at just "
        normalText5=" a page"
        highlightedText1="Coursework"
        highlightedText2=" Time"
        highlightedText3="$9.99"
        highlightedText4="Assignment"
        buttonText="Hire Expert"
      />
      <HomeworkWrite />
      <PcardService
        heading="Our Expert Coursework Writers"
        para="For providing you the best Coursework writing service UK, we have assembled a team of expert Coursework writers and professionals with years of writing experience. Our team of professional Coursework writers are all skilled in their academic fields and are experienced with writing Coursework. They have all completed their degrees and passed our rigorous selection criteria."
      />
      <Review />

      <Faq />
    </>
  );
};

export default Homework;
