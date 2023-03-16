import React from "react";
import "../Blog/Blog.css";

import analyticsImg from "../../assets/Blog/essays.svg";
import researchImg from "../../assets/Blog/research.svg";
import tipsImg from "../../assets/Blog/tips.svg";
import programmingImg from "../../assets/Blog/programming.svg";

import BlogsBackground from "../../assets/Blog/Blogs.svg";
import dateImg from "../../assets/Blog/date.svg";
import BlogCard from "./BlogCard";

const Blog = () => {
  return (
    <>
      <div className="container-fluid bckcolor">
        <div className="blogs-main-heading-container">
          <img src={BlogsBackground} alt="" className="blogs-background" />
          <h1 className="blogs-main-heading">Blogs</h1>
        </div>

        <div className="container-fluid  ">
          <div className="row">
            <div className="mx-auto">
              <p className="serPara">
                We not only help you write outstanding essays and assignments,
                but we also help you get all
                the resources you may need to enhance your writing skills.
                <br />
                Get your hands on the best tips and tricks from our writing
                experts through our various blogs
                and enter the new era of Online Assignment Help. Read on
                and know more!
              </p>
            </div>
          </div>
        </div>

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <BlogCard
                  image={analyticsImg}
                  title="7 Simple Steps To Write An Analytical Essay"
                  date="16 Jun 2022"
                  para="It is a piece of writing that provides you a thorough examination of a subject. A wide range of topics might be covered in an analysis paper..."
                />
                <BlogCard
                  image={researchImg}
                  title="How To Write A Good Research Paper? What Are Great Topics For A Research Paper?"
                  date="16 Jun 2022"
                  para="At the very least, you will have to produce a University-level research paper before you can graduate from University..."
                />
                <BlogCard
                  image={tipsImg}
                  title="Here Are Some Helpful Tips For Writing a Short Essay"
                  date="16 Jun 2022"
                  para="A short essay is a common assignment given to students in their classes, and it is essential that they understand how to write one..."
                />
                <BlogCard
                  image={programmingImg}
                  title="How To Write A Perfect Programming Assignment?"
                  date="16 Jun 2022"
                  para="Programming is a vast field, and students in the field of computer science need to write many programming assignments for..."
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
