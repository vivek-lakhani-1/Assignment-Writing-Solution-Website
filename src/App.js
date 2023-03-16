import "./App.css";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Home from "../src/Pages/Home/Home.js";
import AboutUs from "./Pages/AboutUs/AboutUs";
import Coding from "./Pages/Coding/Coding";
import Homework from "./Pages/HomeworkPage/Homework";
import Faq from "./Pages/Faq/Faq";
import DissertationPage from "./Pages/DissertationPage/DissertationPage";
import CaseService from "./Pages/CaseStudy/CaseService";
import ResearchPaper from "./Pages/ResearchPaper/ResearchPaper";
import Landing from "./Pages/Landing Page/Landing";
import Page404 from "./Pages/Page404/Page404";
import AssignmentWritingPage from "./Pages/AssignmentWritingPage/AssignmentWritingPage";
import ToolPage from "./Pages/ToolPage/ToolPage";
import WriterPage from "./Pages/WriterPage/WriterPage";
import WriterProfileMainPage from "./Pages/WriterProfileMainPage/WriterProfileMainPage";
import EssayWriteService from "./Pages/Essay Writing/EssayWrite";
import ContactUs from "./Pages/ContactUs/ContactUs";
import Terms from "./Pages/Terms/Terms";
import Policy from "./Pages/Policy/Policy";


console.log = () => {};
console.error = () => {};
console.debug = () => {};

const App = () => {
  
   
  return (
    <>
      <div className="d-flex justify-content-center pt-3 pb-0">
        <p>
          Our website is currently under maintenance, but we are still open for
          orders. Please <a style={{color: "#1A8ED0",textDecoration:"none"}} href="https://wa.me/+61272020993">WhatsApp</a> us to
          place an order. Apologies for the inconvenience caused.
        </p>
      </div>
      <Router>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/assignment-writing-service" element={<AssignmentWritingPage />} />
          <Route path="/essay-writing-service" element={<EssayWriteService/>} />
          <Route path="/dissertation-writing-service" element={<DissertationPage />} />
          <Route path="/case-study-writing" element={<CaseService />} />
          <Route path="/coursework-help-online" element={<Homework />} />
          <Route path="/programming-assignment-help" element={<Coding />} />
          <Route path="/research-paper-writing-service" element={<ResearchPaper />} />
          
          <Route path="/landing" element={<Landing />} />
          <Route path="/quote-form" element={<Landing />} />
          <Route path="/writing-tools" element={<ToolPage/>} />
          <Route path="/writers" element={<WriterPage/>} />
          <Route path="/writerprofile" element={<WriterProfileMainPage/>} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/faq" element={<Faq />} />
          <Route exact path="/terms" element={<Terms />} />
          <Route exact path="/policy" element={<Policy />} />
          <Route exact path="/contact-us" element={<ContactUs />} />

          {/* For SEO Links Redirects */}
          <Route path="/assignmentwritingpage" element={<Navigate to="/assignment-writing-service"/> } />
          <Route path="/essay" element={<Navigate to="/essay-writing-service"/> } />
          <Route path="/dissertation" element={<Navigate to="/dissertation-writing-service"/> } />
          <Route path="/casestudy" element={<Navigate to="/case-study-writing"/> } />
          <Route path="/homework" element={<Navigate to="/coursework-help-online"/> } />
          <Route path="/code" element={<Navigate to="/programming-assignment-help"/> } />
          <Route path="/research" element={<Navigate to="/research-paper-writing-service"/> } />
          <Route path="/tools" element={<Navigate to="/writing-tools"/> } />
          <Route path="/about" element={<Navigate to="/about-us"/> } />
          <Route path="/quote" element={<Navigate to="/quote-form"/> } />
          
          {/* This page is not in use because we have a custom navigator  */}
          <Route path="/404" element = {<Page404/>} />
          {/* For Page does Not exist navigate back to homepage */}
          <Route path="*" element={<Navigate to="/"/> } />
        </Routes>
        <Footer />
      </Router>
    </>
  );
} ;


export default App;
