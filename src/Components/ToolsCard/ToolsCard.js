import React from "react";
import "../ToolsCard/ToolsCard.css";
import "../ToolsCard/SingleToolCard";
import Web from "../ProvideCard/proImg/shield.svg"
import A from "../ToolsCard/toolImg/Search.svg"
import B from "../ToolsCard/toolImg/Layer 2.svg"
import C from "../ToolsCard/toolImg/Paragraph.svg"
import D from "../ToolsCard/toolImg/Quote.svg"
import E from "../ToolsCard/toolImg/Paragraph2.svg"
import F from "../ToolsCard/toolImg/cactus.svg"
import G from "../ToolsCard/toolImg/Checklist.svg"
import H from "../ToolsCard/toolImg/60 minutes.svg"
import I from "../ToolsCard/toolImg/List.svg"
import J from "../ToolsCard/toolImg/List Numbers.svg"
import K from "../ToolsCard/toolImg/LINE EXPAND.svg"
import L from "../ToolsCard/toolImg/Edit.svg"
import M from "../ToolsCard/toolImg/Alphabet B.svg"
import N from "../ToolsCard/toolImg/A Plus Result.svg"
import O from "../ToolsCard/toolImg/List1.svg"
import P from "../ToolsCard/toolImg/page2.svg"
import SingleToolCard from "./SingleToolCard";

const ToolsCard= () => {
  return (
    <>
      <div className="container-fluid bckcolor">
        

        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row gy-4">
                <SingleToolCard
                  image={A}
                  title="Plagarism Checker"
                  para="Use our Plagiarism checkers to ensure that students' work is original. You can also use these techniques to ensure that their work is unique before it is made available to the general audience."
                  btn="Check for Plagarism"
                />
                <SingleToolCard
                  image={B}
                  title="Grammar Checker"
                  para="Using this tool will help you focus on the most important points and improve your spelling skills. Your marks will go up if you use our analyzer to rectify any errors in your grammar."
                  btn="Check Grammar"
                />
                 <SingleToolCard
                  image={C}
                  title="Conclusion Generator"
                  para="A Conclusion generator is an internet application that can help you write your paper's conclusion. It provides a ready-to-use piece of content that can be incorporated into your content."
                  btn="Generate Conclusion"
                />
                 <SingleToolCard
                  image={D}
                  title="Citation Generator"
                  para="Students may now create citations in a fraction of the time using our Citation Generator. You may also create create bibliographies on the fly, which can be imported into your work. "
                  btn="Generate Citation"
                />
                 <SingleToolCard
                  image={E}
                  title="Paraphrasing Tool"
                  para="This tool rewrites changes lines and words. The original text is input and a plagiarism-free copy is an output in seconds. The  Paraphrase Tool rewrites articles and essays.  "
                  btn="Paraphrase"
                />
                 <SingleToolCard
                  image={F}
                  title="Thesis Generator"
                  para="You can use our Thesis Generator for your research paper to generate a thesis statement on your own, we can offer some writing assistance and suggestions to make the process easier for you. "
                  btn="Generate Thesis"
                />
                 <SingleToolCard
                  image={G}
                  title="Essay Topic Generator"
                  para="Our essay topic generator is a good alternative for students who are unable to come up with a topic for their essay. Because of our tool's creative results, there is a wide range of topic ideas. "
                  btn="Generate Topic"
                />
                 <SingleToolCard
                  image={H}
                  title="Words To Minutes"
                  para="Using our Words To Minutes Tool, you can convert the number of words in a document into the approximate amount of time it takes to deliver it as a speech, based on the length. "
                  btn="Convert"
                />
                 <SingleToolCard
                  image={I}
                  title="Words To Page Converter"
                  para="Using the tool, you may view how many pages are in the document. It's simple to use and free. Our page count estimator's objective is to provide an estimate of a text's page count. "
                  btn="Convert"
                />
                 <SingleToolCard
                  image={J}
                  title="Word Counter Tool"
                  para="You can use our free word count calculator to ensure that your essay does not exceed a professor's character and word count limit and that you do not use repetitive text and vocabulary. "
                  btn="Count words"
                />
                 <SingleToolCard
                  image={K}
                  title="Alphabetizer"
                  para="On Assignment Writing Services, you may now use the best alphabetizer tool available at any moment. Using the Alphabetize list tool, you may alphabetize a list and arrange it in alphabetical order.  "
                  btn="Alphabetize"
                />
                 <SingleToolCard
                  image={L}
                  title="Essay Rewriter Tool"
                  para="If you're a student or new writer in need of a simple Essay Rewriting tool, this is your best bet. Using artificial intelligence (AI), this sentence rewriter creates high-quality writing whenever you need it. "
                  btn="Rewrite Essay"
                />
                 <SingleToolCard
                  image={M}
                  title="Case Converter Tool"
                  para="Convert text blocks to any case with this user-friendly Case Conversion Tool. You can export the results to a text file or copy and paste them back into your document. "
                  btn="Convert Case"
                />
                 <SingleToolCard
                  image={N}
                  title="GPA Calculator"
                  para="A student's academic performance is measured by their grade point average. Our GPA Calculator tool accounts for all variations and provides the users with an effectively calculated score.  "
                  btn="Calculate GPA"
                />
                 <SingleToolCard
                  image={O}
                  title="Writing Prompt Generator"
                  para="This tool’s goal is to help students rediscover their creative mojo. With a Writing Prompt Generator, you may select the genre of your work and get an array of possible prompts for your writing. "
                  btn="Generate Prompt"
                />
                 <SingleToolCard
                  image={P}
                  title="Title Page Generator"
                  para="Our Title Page Generator allows the creation of a title page to be done with only a few clicks. Itwill saves significant amount of time and delivers an instant output of good quality. "
                  btn="Generate Title Page"
                />
               
                
                
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ToolsCard;
