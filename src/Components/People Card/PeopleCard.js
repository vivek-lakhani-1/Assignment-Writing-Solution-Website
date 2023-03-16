import React from "react";
import "./PeopleCard.css"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Pic from "../People Card/Pimage/Andrew.svg";
import PC from "./pc";
import leftArrow from "../People Card/Pimage/Vector-left.png"
import rightArrow from "../People Card/Pimage/Vector-right.png"


  const NextBtn = (props) => {
    const { className, onClick } = props;
    console.log(props);
    return (
      <>
          <div className={className} onClick={onClick} >
            <img src={rightArrow} alt="next"/>
          </div>
      </>
    );
  };
  const PreviousBtn = (props) => {
    console.log(props);
    const { className, onClick } = props;
    return (
      <>
        
          <div className={className} onClick={onClick}>
            <img src={leftArrow} alt="prev" />
          </div>
      </>
    );
  };
  

const PeopleCard = (props) => {
    const settings = {
      arrows: true,
      dots: false,
      infinite: true,
      autoplay: true,
      autoplaySpeed: 1700,
      slidesToShow: props.slides,
      slidesToScroll: 1,
      nextArrow: <NextBtn />,
      prevArrow: <PreviousBtn />,
      className: "center",
      centerMode: true,
      centerPadding: "1.5rem",
      variableWidth: true,
      responsive: [
        {
          breakpoint: 1275,
          settings: {
            slidesToShow: 3,
          }
        },
        {
          breakpoint: 739,
          settings: {
            slidesToShow: 1,
          }
        }
      ]
    };
    return (
      <>
        <div>
          <Slider {...settings}>
            <div>      
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating = "5"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div>
            <div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="4"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div><div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="5"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div><div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="3"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div><div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="5"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div><div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="3"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div><div>
              <PC
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating="5"
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </div>
          </Slider>
          </div>



      </>
  );
};

export default PeopleCard;


