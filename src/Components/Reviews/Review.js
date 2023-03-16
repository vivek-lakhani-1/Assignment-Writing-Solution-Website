import React, { useState } from "react";
import "../Reviews/Review.css";
import StarIcon from "@mui/icons-material/Star";

const Review = () => {
  const [NoOfReview, setNoOfReview] = useState(3);

  const showMore = () => {
    setNoOfReview((NoOfReview) => (NoOfReview += 3));
    if (NoOfReview > review.length) {
      setNoOfReview(review.length);
    }
  };

  return (
    <div
      className="container-fluid col-10 px-5 rounded-4 d-flex flex-column justify-content-between align-items-center"
      style={{ backgroundColor: "#fff" }}
    >
      <div className="my-5 container header_containerabout">
        <h3 className="text-center headService--review">Reviews</h3>
      </div>
      <div className="row gy-4">
        {review.slice(0, NoOfReview).map((data, i) => (
          <div id="review-card" >
            <div className="reviewtop">
              <h1 className="best">{data.title}</h1>
              <p className="bestrate">
                {data.rating}
                {data.rating}
                {data.rating}
                {data.rating}
                {data.rating}
              </p>
            </div>
            <div className="card-body secdiv">
              <p className="review---para">{data.para}</p>
              <p className="customerid">
                {data.cid}
                <br />
                {data.date}
              </p>
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
  );
};

const review = [
  {
    id: 1,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 2,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 3,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 4,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 5,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 6,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 7,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 8,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 9,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 10,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
  {
    id: 11,
    title: "Best Services!",
    para: "Got my 5 page essay done in 7 hours, followed oll of my papers promps, MLA format, citations and everything. Will definitely use again. Worth the price. Even updated me along the way",
    rating: <StarIcon style={{ color: "#F2C94C" }} />,
    cid: "customer-5190024 (3 orders)",
    date: "July 16,2022",
  },
];
export default Review;
