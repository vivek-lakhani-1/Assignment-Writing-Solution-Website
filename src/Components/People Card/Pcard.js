import React from "react";
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay, Navigation } from "swiper";
import Pic from "../People Card/Pimage/Andrew.svg";
import Exp from "../People Card/Pimage/Our Experts.svg";
// import "./Pcard.css";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Pc from "./pc";


const Pcard = () => {
  SwiperCore.use([Autoplay]);

  return (
    <div className="Testimonial-main1">
      <div className="subjects-heading--container--exp">
        <h1 className="subjects-heading--text--exp">Our Experts</h1>
        <img src={Exp} className="subjects-heading--background--exp" alt="" />
      </div>

      <div className="Testimonials-container1">
        <div>
          <Swiper
            slidesPerView={5}
            spaceBetween={5}
            pagination={{
              clickable: true,
            }}
            loop={true}
            autoplay={{ delay: 3000 }}
            navigation={true}
            breakpoints={{
              0: {
                slidesPerView: 1,
              },
              250: {
                slidesPerView: 2,
              },
              500: {
                slidesPerView: 3,
              },
              750: {
                slidesPerView: 4,
              },
              1000: {
                slidesPerView: 5,
              },
            }}
            modules={[Pagination, Autoplay, Navigation]}
            className="mySwiper"
          >
            <SwiperSlide>
 
              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
            <SwiperSlide>

              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
            <SwiperSlide>
    
              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
            <SwiperSlide>
    
              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
            <SwiperSlide>
      
              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
            <SwiperSlide>
    
              <Pc
                image={Pic}
                name="Simon Andrew"
                position="Management"
                rating={[<StarIcon style={{ color: "#F2C94C" }}/>, <StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>,<StarIcon style={{ color: "#F2C94C" }}/>]}
                review="220"
                experience="14"
                projects="178"
                citations="121"
              />
            </SwiperSlide>
          </Swiper>

          <div className="subjects-heading--container--exp container btn-hire">
            <button type="button" className="btn ">
              Hire an Expert
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pcard;
