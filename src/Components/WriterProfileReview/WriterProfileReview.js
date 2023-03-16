import React, { useState } from "react";
import "../WriterProfileReview/WriterProfileReview.css";
import "../WriterProfileReview/RateBar.css";
import Progress from "./RateBar";
import StarIcon from '@mui/icons-material/Star';

const WriterProfileReview = () => {
  const [NoOfReview, setNoOfReview] = useState(10);

  const showMore = () => {
    setNoOfReview((NoOfReview) => (NoOfReview += 3));
    if (NoOfReview > review.length) {
      setNoOfReview(review.length);
    }
  };

  return (
    <>
      <div className="bigbox">
        <div className="smallbox">
          <div className="row">
            <div className="col-12 mx-auto">
              <div className="mt-5 container WriterProfileReview--header_container ">
                <h3 className="text WriterProfileReview--heading">
                  Ratings and Reviews
                </h3>
              </div>
            </div>

            <div className="container-fluid  ">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="row gy-4">
                    <div className="WriterProfileReview--rating">
                      <div className="WriterProfileReview--rating--left">
                        <h1>5.0</h1>
                        <p><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /><StarIcon style={{ color: "#F2C94C" }} /></p>
                        <p>220 Reviews</p>
                      </div>
                      <div className="WriterProfileReview--rating--right">
                        <div className="div--div--div">
                          <span className="rate--bar--span">
                            <p className="rate--bar--number">5</p>
                            <StarIcon className="rate--bar--star--icon" style={{ color: "#F2C94C" }} />
                            <Progress className="rate--bar--progress-line" done="100" />
                          </span>

                          <span className="rate--bar--span">
                            <p className="rate--bar--number">4</p>
                            <StarIcon className="rate--bar--star--icon" style={{ color: "#F2C94C" }} />
                            <Progress className="rate--bar--progress-line" done="0" />
                          </span>
                          <span className="rate--bar--span">
                            <p className="rate--bar--number">3</p>
                            <StarIcon className="rate--bar--star--icon" style={{ color: "#F2C94C" }} />
                            <Progress className="rate--bar--progress-line" done="0" />
                          </span>
                          <span className="rate--bar--span">
                            <p className="rate--bar--number">2</p>
                            <StarIcon className="rate--bar--star--icon" style={{ color: "#F2C94C" }} />
                            <Progress className="rate--bar--progress-line" done="0" />
                          </span>
                          <span className="rate--bar--span">
                            <p className="rate--bar--number">1</p>
                            <StarIcon className="rate--bar--star--icon" style={{ color: "#F2C94C" }} />
                            <Progress className="rate--bar--progress-line" done="0" />
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="container-fluid ">
              <div className="row">
                <div className="col-12 mx-auto">
                  <div className="row gy-4">
                    {review.slice(0, NoOfReview).map((data, i) => (
                      <div className="col-sm-10 col-md-10 col-lg-10 col-10 mx-auto borderreview ">
                        <div id="review-card">
                          <div className="reviewtop">
                            <h1 className="best">{data.title}</h1>
                            <p className="bestrate">{data.rating}{data.rating}{data.rating}{data.rating}{data.rating}</p>
                          </div>
                          <div className="card-body secdiv">
                            <p>{data.para}</p>
                            <p className="customerid">
                              {data.cid} <span className="customer-orders">{data.orders}</span>
                              <br />
                              {data.date}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="reviewbtn">
                    <button className="btn morereview" onClick={showMore}>
                      Show more reviews
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const review = [
  {
    id: 1,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating:<StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 2,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 3,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating:<StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 4,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 5,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 6,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 7,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 8,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 9,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
  {
    id: 10,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",    
    date: "July 16,2022",
  },
  {
    id: 11,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }}/>,
    cid: "customer-5190024",
    orders: "(3 orders)",
    date: "July 16,2022",
  },
];
export default WriterProfileReview;
