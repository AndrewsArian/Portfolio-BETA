import React, { useEffect, useRef } from "react";
import gsap from "gsap";

import image_profile_2 from "../images/profile2.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";
import useOnScreen from "../hooks/useOnScreen";
import { useLoading } from "../hooks/app";

gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  const personalSkills = [
    {
      title: "Communication",
      width: "90%",
    },
    {
      title: "Team Work",
      width: "65%",
    },
    {
      title: "Leadership",
      width: "75%",
    },
    {
      title: "Language",
      width: "85%",
    },
  ];

  const profassionalSkills = [
    {
      title: "wordpress",
      width: "90%",
    },
    {
      title: "PHP / MYSQL",
      width: "65%",
    },
    {
      title: "htm/lcss/js",
      width: "95%",
    },
    {
      title: "photoshop",
      width: "85%",
    },
  ];

  const personalSkillsRef = useRef();
  const personalSkillOnScreen = useOnScreen(personalSkillsRef);
  const professionalSkillOnScreen = useOnScreen(personalSkillsRef);

  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [isLoading, setLoading]);

  useEffect(() => {
    setLoading(false);
  }, [personalSkillOnScreen, setLoading]);
  return (
    <>
      {/* // <!--  Card - Resume --> */}
      <div className="card-inner active" id="resume-card">
        <div className="row card-container">
          {/* <!-- Card Wrap --> */}
          <div
            className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
            data-simplebar
          >
            {/* <!-- Resume Image --> */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${image_profile_2})` }}
            ></div>

            {/* <!-- Inner Top --> */}
            <div className="content inner-top">
              <div className="row">
                <div className=" col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">Resume</div>
                </div>
              </div>
            </div>

            {/* <!-- Resume --> */}
            <div className="content resume">
              <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>My</span> Experience
                  </div>

                  {/* <!-- resume items --> */}
                  <div className="resume-items card-box">
                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Web Development</div>
                      <div className="date">
                        2013-Present <span>|</span> Facebook Inc.
                      </div>
                      <p>
                        Collaborate with creative and development teams on the
                        execution of ideas.
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Front-end Developer</div>
                      <div className="date">
                        2011-2012 <span>|</span> Google Inc.
                      </div>
                      <p>
                        Monitored technical aspects of the front-end delivery
                        for several projects.
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Senior Developer</div>
                      <div className="date">
                        2009-2010 <span>|</span> Abc Inc.
                      </div>
                      <p>
                        Optimize website performance using latest technology.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>My</span> Education
                  </div>

                  {/* <!-- resume items --> */}
                  <div className="resume-items card-box">
                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Art University</div>
                      <div className="date">
                        2006-2008 <span>|</span> New York
                      </div>
                      <p>
                        Bachelor's Degree in Computer Science ABC Technical
                        Institute, Jefferson, Missouri
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Programming Course</div>
                      <div className="date">
                        2005-2006 <span>|</span> Paris
                      </div>
                      <p>
                        Bachelor's Degree in Computer Science ABC Technical
                        Institute, Jefferson, Missouri
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Web Design Course</div>
                      <div className="date">
                        2004-2005 <span>|</span> London
                      </div>
                      <p>
                        Converted Photoshop layouts to web pages using HTML,
                        CSS, and JavaScript
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* Skills */}
            <div className="content skills">
              <div className="row">
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Personal</span> Skills
                  </div>

                  {/* <!-- skills --> */}
                  <div className="skills-list card-box" ref={personalSkillsRef}>
                    <ul>
                      {personalSkills.map(({ title, width }, index) => {
                        return (
                          <li key={index}>
                            <div className="name">{title}</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{
                                  width: personalSkillOnScreen ? width : 0,
                                }}
                              ></div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col col-m-12 col-t-6 col-d-6 col-d-lg-6">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Professional</span> Skills
                  </div>

                  {/* <!-- skills --> */}
                  <div className="skills-list card-box">
                    <ul>
                      {profassionalSkills.map(({ title, width }, index) => {
                        return (
                          <li key={index}>
                            <div className="name">{title}</div>
                            <div className="progress">
                              <div
                                className="percentage"
                                style={{
                                  width: professionalSkillOnScreen ? width : 0,
                                }}
                              ></div>
                            </div>
                          </li>
                        );
                      })}
                    </ul>
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

export default Resume;
