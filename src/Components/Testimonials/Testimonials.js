import React from 'react';
import StarIcon from '@mui/icons-material/Star';
import Slider from "react-slick";
import R from "../../assets/Testimonials/R.png";
import L from "../../assets/Testimonials/L.png";
import header from "../../assets/Testimonials/header.svg";
import "./Testimonials.css";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


const LeftTestimonials = [
  {
    id:1,
    testimonial: 'Please accept my heartfelt gratitude to Team Assignment Writing Services for all of your hard work in assisting me with my academic assignment!',
    client:'Roberto Anaya',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:2,
    testimonial: "I'm amazed at how quickly you returned the tasks to my inbox. You have the best service for doing homework on the internet.",
    client:'Kevin Harner',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:3,
    testimonial: "The first time I sought an internet assignment writing service for aid with my university assignment, I was pleasantly surprised. I'm now completely dependent on it.",
    client:'Reinaldo Brown',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:4,
    testimonial: "Because of the excellent service I received from Assignment Writing Services, I expect to use them again next semester.",
    client:'Brandon Miller',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:5,
    testimonial: "I used Assignment Writing Services to get through a particularly trying period leading up to the Assignment Submission deadline.",
    client:'Felipe Herzberg',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:6,
    testimonial: "It has been a pleasure working with your assignment help service. I'm sure I'll do better than last year.",
    client:'Joe Kennedy',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:7,
    testimonial: "Because of Assignment Writing Services, I probably wouldn't have completed my University Assignments on time.",
    client:'Virginia Hill',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:8,
    testimonial: "In my wildest dreams, I had no idea such a thing was even conceivable. Great effort by a great team.",
    client:'Brenda Tillery',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:9,
    testimonial: "I'm very happy I found your service when I needed help with an assignment. You're the greatest!",
    client:'Minnie Babin',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:10,
    testimonial: "There is so much I could say. You've made such an impact that I'm sure another Custom Assignment Writing Service cannot match your skills.",
    client:'Judith Gamble',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  
  {
    id:11,
    testimonial: 'My search for the best assignment writing service came to an end after several unsuccessful tries.',
    client:'Mary Serna',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:12,
    testimonial: "I wish the Assignment Writing Team well and thank them for the wonderful assignments I've received.",
    client:'Janie Frazierv',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:13,
    testimonial: "Thank you so much for all of your hard work in helping me with my academic assignment, Team Assignment Writing Services!",
    client:'Mary Edwards',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:14,
    testimonial: "Thanks for getting the tasks back so promptly. You have access to the best Assignment Writing Service.",
    client:'Kathleen Lowe',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:15,
    testimonial: "I was pleasantly delighted the first time I turned to an Assignment Writing Service for help with a university project. I'm reliant on it now.",
    client:'Theresa Fair',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:16,
    testimonial: "I plan to utilise Assignment Writing Services again next semester because of the wonderful service I received.",
    client:'Brianna Richmond',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:17,
    testimonial: "After an extremely stressful period leading up to the deadline for my Assignment Submission, I turned to Assignment Writing Services.",
    client:'Archie Falkiner',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:18,
    testimonial: "When I required help with an assignment, I'm glad I found your service. Thank you so much!",
    client:'Nicholas Jeffcott',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:19,
    testimonial: "I'm amazed at how quickly you returned the tasks to my inbox. You have the best service for doing homework on the internet.",
    client:'Max Fielder',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  {
    id:20,
    testimonial: "The first time I sought an Assignment Writing Service for aid with my university assignment, I was pleasantly surprised. I'm now completely dependent on it.”",
    client:'Eliza Trouette',
    date: '24 March 2022',
    star: <StarIcon style={{ color: "#F2C94C" }}/>,
  },
  
]


const RightTestimonials = [
{
  id:1,
  testimonial: "It has been a pleasure working with your Assignment Writing Service. I'm sure I'll do better than last year.",
  client:'Leah Boas',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:2,
  testimonial: "I wish the Assignment Writing Team well and thank them for the wonderful assignments I've received.",
  client:'Natalie Carrington',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:3,
  testimonial: "Let Team Assignment Writing Services know how much I appreciate their hard work in helping me with my academic assignment." , 
  client:'Jesse West',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>, 
},
{
  id:4,
  testimonial: "My experience with your Assignment Writing Service has been excellent. I'm confident that this year will be an improvement over the previous year.",
  client:'Brock Medland',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:5,
  testimonial: "You saved me a lot of time and effort when I required assistance with an Assignment. You're a rock star!",
  client:'Jacob Hurst',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:6,
  testimonial: "Such a thing was completely out of my realm of possibility. A fantastic team effort.",
  client:'Jake Kyte',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:7,
  testimonial: "It took several fruitless attempts before I finally found the best service for Assignment Writing.",
  client:'Sara Bruny',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:8,
  testimonial: "As a result of the excellent service I received from Assignment Writing Services, I anticipate returning to them for my upcoming academic term.",
  client:'Lucas Ruse',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:9,
  testimonial: "More than I can express. There is no other Assignment Writing Service that has made as much of an impact as you have.",
  client:'Levi Cremor',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:10,
  testimonial: "Your rapid response was highly appreciated, thank you. You've got easy access to the Best Service for completing Assignments.",
  client:'Dean Prowse',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:11,
  testimonial: "Using an writing service for the first time, I was pleased with the results. Without it, I would be lost.",
  client:'Cameron Nuttall',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:12,
  testimonial: "Helped me through a challenging period leading up to the deadline for completing my Assignment via assignment writing services",
  client:'Jake Corbould',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:13,
  testimonial: "I'm amazed by the speed with which you returned my Assignment. In terms of Assignment Assistance, your firm is the most reliable resource." , 
  client:'Maddison Vincent',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>, 
},
{
  id:14,
  testimonial: "I turned to an assignment writing service for help to submit the project on time. The experience is great",
  client:'Michael Ligar',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:5,
  testimonial: "After a series of futile tries, this is indeed a great Assignment Writing Service.",
  client:'Harrison Maclean',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:16,
  testimonial: "I'd want to express my gratitude to the Assignment Writing Team for the excellent work I've received. Your well-being and happiness are at the top of my list of wishes.",
  client:'Hayley Wormald',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:17,
  testimonial: "For me, Assignment Writing Services were the first choice for assistance with a university paper. As a result of this, my dependence on it has increased.",
  client:'Keira Edwin',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:18,
  testimonial: "My friends and I are grateful for the Assignment Service you offered us. Being able to collaborate with you is an honor.",
  client:'Charli Ambrose',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:19,
  testimonial: "Remind them of how appreciative I am of Team Project Writing Services' assistance with my academic assignment.",
  client:'Lola Edinburgh',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},
{
  id:20,
  testimonial: "My personal experience with many Assignment Writing Services tell that this is the best service in the whole industry.",
  client:'Tyler Bundy',
  date: '24 March 2022',
  star: <StarIcon style={{ color: "#F2C94C" }}/>,
},

]



const Testimonials = () => {
  const settings = {
    // dots: true,
    // infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    // autoplay:false,
    // speed: 3000,
    // autoplaySpeed: 0,
    cssEase: "linear",
    responsive: [
    
        {
          breakpoint: 380,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    }


  return (

    <div className='Testimonial-main'>

      <div className='Testimonial-header'>
        <img src={header} alt="header" className='testimonial-bg-header' /> 
          <h1 className='testimonial-header-h1'>Client Reviews</h1>
      </div>
      <div className='testimonial-container'>
         <div className="testimonials-left">
         

            <Slider className="testimonial-L" {...settings}>
              {LeftTestimonials.map((data)=>{
                return (
               <>
                <div key={data.id} className='swiper-client-msg'>
                    <img className='left' src={L} alt="R" />
                      <p className='testimonial'>{data.testimonial}</p>
                    <img src={R} className="right" alt="L" />
                    
                    <hr className='testimonial-hr'/>

                    <div className='client-data-details'>
                    {data.star}{data.star}{data.star}{data.star}{data.star}
                      <h5 className='client-name'>{data.client}</h5>
                      <p className='date'>{data.date}</p>
                    </div>
                  </div>
               </>     
                )})} 
            </Slider> 

         


                  {/* <Slider className='testimonial-L' {...settings}>
                  {LeftTestimonials.map((data,id)=>{
                    return (
                    <div key={id} className='swiper-client-msg'>
                      <img className='left' src={L} alt="R" />
                        <p>{data.testimonial}</p>
                      <img src={R} className="right" alt="L" />
                      
                      <hr className='testimonial-hr'/>
    
                      <div className='client-data-details'>
                        {data.star}
                        <h5>{data.client}</h5>
                        <p>{data.date}</p>
                      </div>
                      </div>
                     )})}             
                  </Slider> */}
                
          </div> 
              
                




          <div className="testimonials-right">
          {/*
             
             <div className="testimonial-R">
 
               {RightTestimonials.map((data,id)=>{
                 return (
 
                 <div key={id} className='swiper-client-msg'>
                   <img className='left' src={L} alt="R" />
                     <p>{data.testimonial}</p>
                   <img src={R} className="right" alt="L" />
                   
                   <hr className='testimonial-hr'/>
 
                   <div className='client-data-details'>
                     {data.star}
                     <h5>{data.client}</h5>
                     <p>{data.date}</p>
                   </div>
                   </div>
                 )})} 
             
             </div>*/}



              <Slider className='testimonial-R' {...settings}>
                  {RightTestimonials.map((data)=>{
                    return (
                   <>
                    <div key={data.id} className='swiper-client-msg'>
                      <img className='left' src={L} alt="R" />
                        <p className='testimonial'>{data.testimonial}</p>
                      <img src={R} className="right" alt="L" />
                      
                      <hr className='testimonial-hr'/>
    
                      <div className='client-data-details'>
                      {data.star}{data.star}{data.star}{data.star}{data.star}
                        <h5 className='client-name'>{data.client}</h5>
                        <p className='date'>{data.date}</p>
                      </div>
                      </div>
                   </>   
                     )})}             
                </Slider>   
           </div>
   
              </div>
    </div>
  )
}

export default Testimonials;
