import React, { useState } from "react";
import "../WritersPageCard/WritersPageCard.css";
import "../WritersPageCard/WriterCardx";
import StarIcon from "@mui/icons-material/Star";

// import WriterCardx from "../WritersPageCard/WriterCardx";
import ReactPaginate from "react-paginate";

import "../WritersPageCard/WritersPageCard.css";
import Shieldp from "../WritersPageCard/img/photo.png";
import A from "../WritersPageCard/img/A.jpeg";
import B from "../WritersPageCard/img/B.jpeg";
import C from "../WritersPageCard/img/C.jpeg";
import D from "../WritersPageCard/img/D.jpeg";
import E from "../WritersPageCard/img/E.jpeg";
import F from "../WritersPageCard/img/F.jpeg";
import G from "../WritersPageCard/img/G.jpeg";
import H from "../WritersPageCard/img/H.jpeg";
import I from "../WritersPageCard/img/I.jpeg";
import J from "../WritersPageCard/img/J.jpeg";
import K from "../WritersPageCard/img/K.jpeg";
import L from "../WritersPageCard/img/L.jpeg";
import M from "../WritersPageCard/img/M.jpeg";
import N from "../WritersPageCard/img/N.jpeg";
import O from "../WritersPageCard/img/O.jpeg";
import P from "../WritersPageCard/img/P.jpeg";
import Q from "../WritersPageCard/img/Q.jpeg";
import R from "../WritersPageCard/img/R.jpeg";
import Verify from "../WritersPageCard/img/verifyTick.svg";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css"; // optional

const WritersPageCard = () => {
  const [users, setUsers] = useState(user.slice(0, 30));
  const [pageNumber, setPageNumber] = useState(0);

  const usersPerPage = 12;
  const pagesVisited = pageNumber * usersPerPage;

  const displayUsers = users
    .slice(pagesVisited, pagesVisited + usersPerPage)
    .map((user) => {
      return (
        <div className="col-md-4" >
          <div className="card">
            <div id="WriterCardx--img--box">
              <img src={user.image} className="WriterCardx--img" alt="..." />
            </div>
            <div className="card-body">
              <div className="WriterCardx--nameDiv">
                {/* <div className="name--center"> */}
                <h5 className="WriterCardx-title">{user.title}</h5>
                {/* </div> */}
                <Tippy
                  content={
                    <div className="tippy--tooltip">
                      <p>
                        The writer has passed an entry test and verified their
                        ID and academic credentials.
                      </p>
                    </div>
                  }
                  placement="right"
                >
                  <img className="Wverified--tick" src={Verify} />
                </Tippy>
              </div>
              <h5 className="WriterCardx-role">{user.role}</h5>
              <div className="WriterCardx-review">
                <p className="WriterCardx-review--star">
                  {user.star}
                  {user.star}
                  {user.star}
                  {user.star}
                  {user.star}
                </p>
                <br />
                <p className="WriterCardx-review-count">
                  {user.reviewCount} Reviews
                </p>
              </div>
              <div className="WriterCardx--speciality--box">
                <p className="WriterCardx--Writer--speciality1">
                  <span className="WriterCardx--speciality--bold--text">
                    {user.experience}
                  </span>
                  <br />
                  Years Experience
                </p>
                <p className="WriterCardx--Writer--speciality">
                  <span className="WriterCardx--speciality--bold--text">
                    {user.projects}
                  </span>
                  <br />
                  Projects Completed
                </p>
                <p className="WriterCardx--Writer--speciality2">
                  <span className="WriterCardx--speciality--bold--text">
                    {user.citations}
                  </span>
                  <br />
                  Total Citations
                </p>
              </div>
              <div className="button--div--writer">
                <a
                  href={"/writerprofile/" + user.link}
                  className="btn btn-primary WriterCardx--btn"
                >
                  {user.btn}
                </a>
              </div>
            </div>
          </div>
        </div>
      );
    });

  const pageCount = Math.ceil(users.length / usersPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  return (
    <>
      <div className="container-fluid bckcolor">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-8 mx-auto">
              <div className="row gy-2">
                {displayUsers}
                <ReactPaginate
                  previousLabel={
                    <i className="fa-solid fa-arrow-left arrow--hai--pagination"></i>
                  }
                  nextLabel={
                    <i className="fa-solid fa-arrow-right arrow--hai--pagination"></i>
                  }
                  pageCount={pageCount}
                  onPageChange={changePage}
                  containerClassName={"paginationBttns"}
                  previousLinkClassName={"previousBttn"}
                  nextLinkClassName={"nextBttn"}
                  disabledClassName={"paginationDisabled"}
                  activeClassName={"paginationActive"}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const user = [
  {
    id: 1,
    image: A,
    title: "Simon Andrew",
    role: "Management",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "14",
    projects: "178",
    citations: "121",
    btn: "View Profile",
    link: "a",
  },
  {
    id: 2,
    image: B,
    title: "David Langford",
    role: "Management",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "9",
    projects: "288",
    citations: "144",
    btn: "View Profile",
    link: "b",
  },
  {
    id: 3,
    image: C,
    title: "Janet Morrison",
    role: "Anthropology/Cultural Studies",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "433",
    citations: "230",
    btn: "View Profile",
    link: "c",
  },
  {
    id: 4,
    image: D,
    title: "Akihiro Tanaka",
    role: "Sociology",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "8",
    projects: "167",
    citations: "78",
    btn: "View Profile",
    link: "d",
  },
  {
    id: 5,
    image: E,
    title: "Dr Robert Sivil",
    role: "Medical Science",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "24",
    projects: "467",
    citations: "340",
    btn: "View Profile",
    link: "e",
  },
  {
    id: 6,
    image: F,
    title: "Massie Lockhart",
    role: "Legal Studies/Law",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "232",
    citations: "122",
    btn: "View Profile",
    link: "f",
  },
  {
    id: 7,
    image: G,
    title: "Matilda Lombardy",
    role: "Economics",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "13",
    projects: "453",
    citations: "102",
    btn: "View Profile",
    link: "g",
  },
  {
    id: 8,
    image: H,
    title: "Kevin Wadia",
    role: "Entrepreneurship",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "343",
    citations: "211",
    btn: "View Profile",
    link: "h",
  },
  {
    id: 9,
    image: I,
    title: "Hudson Brown",
    role: "Special Writing Services",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "8",
    projects: "232",
    citations: "0",
    btn: "View Profile",
    link: "i",
  },
  {
    id: 10,
    image: J,
    title: "Jacob Westfall",
    role: "Information Technology",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "223",
    citations: "34",
    btn: "View Profile",
    link: "j",
  },
  {
    id: 11,
    image: K,
    title: "Dr David A. Kenny",
    role: "Physics",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "11",
    projects: "443",
    citations: "234",
    btn: "View Profile",
    link: "k",
  },
  {
    id: 12,
    image: L,
    title: "Dr Frank L. Schmidt",
    role: "Chemistry",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "15",
    projects: "334",
    citations: "123",
    btn: "View Profile",
    link: "l",
  },
  {
    id: 13,
    image: M,
    title: "David J. Krantz",
    role: "Biology and Evolutionary Science",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "9",
    projects: "453",
    citations: "232",
    btn: "View Profile",
    link: "m",
  },
  {
    id: 14,
    image: N,
    title: "Jeffrey Smith",
    role: "Journalism and Mass Media",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "223",
    citations: "145",
    btn: "View Profile",
    link: "n",
  },
  {
    id: 15,
    image: O,
    title: "Gregory Camilli",
    role: "Biotechnology",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "8",
    projects: "253",
    citations: "43",
    btn: "View Profile",
    link: "o",
  },
  {
    id: 16,
    image: P,
    title: "Robert Billings",
    role: "International Relations",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "233",
    citations: "221",
    btn: "View Profile",
    link: "p",
  },
  {
    id: 17,
    image: Q,
    title: "Steve Wroten",
    role: "English Literature",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "356",
    citations: "232",
    btn: "View Profile",
    link: "q",
  },
  {
    id: 18,
    image: R,
    title: "Bruce Thompson",
    role: "Architecture and Interior Design",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "10",
    projects: "542",
    citations: "129",
    btn: "View Profile",
    link: "r",
  },
  {
    id: 19,
    image: Shieldp,
    title: "Dr Patricia Snyder",
    role: "Accounting and Finance",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "234",
    citations: "121",
    btn: "View Profile",
    link: "s",
  },
  {
    id: 20,
    image: Shieldp,
    title: "Micheal Lee",
    role: "Mechanical, Aeronautical & Manufacturing Engineering",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "443",
    citations: "231",
    btn: "View Profile",
    link: "t",
  },
  {
    id: 21,
    image: Shieldp,
    title: "Ricky Griffin",
    role: "Philosophy and Theology",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "17",
    projects: "532",
    citations: "223",
    btn: "View Profile",
    link: "u",
  },
  {
    id: 22,
    image: Shieldp,
    title: "Ian Stagg",
    role: "Earth Science and Geography",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "443",
    citations: "231",
    btn: "View Profile",
    link: "v",
  },
  {
    id: 23,
    image: Shieldp,
    title: "Rolf Bergman",
    role: "Mathematics/Probability/Statistics",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "16",
    projects: "234",
    citations: "123",
    btn: "View Profile",
    link: "w",
  },
  {
    id: 24,
    image: Shieldp,
    title: "Dr Joan Magretta",
    role: "Neurology/Clinical Medicine",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "334",
    citations: "211",
    btn: "View Profile",
    link: "x",
  },
  {
    id: 25,
    image: Shieldp,
    title: "Dr Nicholas Bloom",
    role: " Political Science/ Governance",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "345",
    citations: "125",
    btn: "View Profile",
    link: "y",
  },
  {
    id: 26,
    image: Shieldp,
    title: "Harold Koontz",
    role: "World History",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "9",
    projects: "432",
    citations: "129",
    btn: "View Profile",
    link: "z",
  },
  {
    id: 27,
    image: Shieldp,
    title: "Martin Lockett",
    role: "Agriculture and Agroforestry",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "18",
    projects: "358",
    citations: "89",
    btn: "View Profile",
    link: "abc",
  },
  {
    id: 28,
    image: Shieldp,
    title: "Charles P. Jones",
    role: "Hospitality and Tourism",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "12",
    projects: "345",
    citations: "0",
    btn: "View Profile",
    link: "def",
  },
  {
    id: 29,
    image: Shieldp,
    title: "Dr Shanaya Khan",
    role: "Nursing",
    star: <StarIcon style={{ color: "#F2C94C" }} />,
    reviewCount: "220",
    experience: "9",
    projects: "354",
    citations: "112",
    btn: "View Profile",
    link: "ghi",
  },
];

export default WritersPageCard;
