import React from "react";
import Hero from "../../Components/Hero/Hero";
import LandingHero from "../Landing Page/LandingHero";
import image from "../../assets/ContactUs/Bg.png";
import Contact from "../../Components/ContactUs/Contact";


const Home = () => {
  return (
    <>
    
    <Hero
        normalText1="We would love to hear from you."
        image={image}
        normalText2=""
        normalText3=""
        normalText4="Have an inquiry or feedback for us? Choose any convinent way of communication."
        normalText5=""
        break={true} // To add a break between normalText & highlightedText1
        highlightedText1="Get In Touch!"
        highlightedText2=""
        smallHighlightedText1={true}
        highlightedText3="Our team is here to help you."
        highlightedText4="Assignment"
      />
      <Contact/>
    </>
  );
};

export default Home;