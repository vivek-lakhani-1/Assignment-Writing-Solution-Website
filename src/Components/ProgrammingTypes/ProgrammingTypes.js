import React from "react";

import "../ProgrammingTypes/ProgrammingTypes.css";
import CaseCard1 from "./ProgTypeCard";

const ProgrammingTypes = () => {
  return (
    <>
      
        <div className="container-fluid  backScolorp">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="col-10 mx-auto">
                <h3 className="text-center provide-head21 ">
                  Need some assistance in composing your programming assignment?
                </h3>
              </div>

              <div className="container-fluid  ">
                <div className="row">
                  <div className="col-12 mx-auto">
                    <p className="serPara71">
                      A computer program is a collection of instructions that
                      are run on a computer to accomplish a certain goal. It was
                      written by a team of programmers. It is the act of giving
                      machines a set of instructions that specify how to carry
                      out a program.
                      <br />
                      <br />
                      There are a lot of different programming languages and
                      tools that programmers will need to learn over their
                      careers to write efficient computer applications.
                      Programming is an exercise or practice that enhances our
                      ability to think logically and solve problems. Using a
                      computer program or software, it teaches us how to execute
                      a task. As a result, to put it simply, programming is the
                      process of using computer language to construct a solution
                      to a problem.
                      <br />
                      <br />
                      Writing and running a computer program to solve a problem
                      is a requirement for programming assignments. Some
                      programming assignments contribute toward your final
                      grade, while others are simply for your personal growth
                      and development. Programming assignments are designed to
                      help students learn how to write programs that include
                      principles learned in class. As a result, unless otherwise
                      specified, programming assignments must be completed
                      individually (e.g., a team project).
                    </p>
                  </div>
                </div>
              </div>

              <div className="head29 ">
                <h4 className="h4hai">Types of Programming</h4>
              </div>
            </div>
          </div>

          <div className="container-fluid ">
            <div className="row">
              <div className="col-10 mx-auto">
                <div className="row gy-4">
                  <CaseCard1
                    num="1"
                    title="Low-Level Programming"
                    para="Low-level programming language comprised solely of binary digits (0s and Is) (binary) Compiled machine code is created from high-level languages for running the code on a computer. Compilation of an assembly language is done by an assembler. An assembler reads human code and converts it into machine language"
                  />
                  <CaseCard1
                    num="2"
                    title="Procedural Language programming"
                    para="Programming languages that use procedural languages go through several steps before they may be run on a computer Go and Julia are examples of procedural languages."
                  />
                  <CaseCard1
                    num="3"
                    title="Scripting Language Programming"
                    para="In many cases, scripting languages do not need to be compiled at all. Instead, these languages are simply translated. This signifies that the code will be read and executed by an interpreter rather than being compiled into machine code. When it comes to scripting programming languages-JavaScript and PHP are few examples"
                  />
                  <CaseCard1
                    num="4"
                    title="Functional Language Programming"
                    para="The notion behind functional languages is that large programmes can be composed of many smaller functions Examples include Scala and Haskell."
                  />
                  <CaseCard1
                    num="5"
                    title="Object-Oriented Programming"
                    para='It is possible to construct programmes around collections of objects using so-called "object-oriented languages. Examples include Java and Python".'
                  />
                  <CaseCard1
                    num="6"
                    title="Declarative Laanguage Programming"
                    para="Deciorative languages don't include instructions on how to carry out a task instead they inform a computer of what must be done it is possible to cy this language as either a practical programming language or a semantic programming language. Lisp ML and Haskell ore examples of Prolog"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      
    </>
  );
};

export default ProgrammingTypes;
