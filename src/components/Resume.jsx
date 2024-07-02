import gsap from "gsap";
import image_profile_2 from "../images/profile2.jpg";
import ScrollTrigger from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const Resume = () => {
  
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
                      <div className="name">Help desk</div>
                      <div className="date">
                        2018-2023 <span>|</span> Quality Software
                      </div>
                      <p>
                      Monitored technical aspects of  networking and VoIP, Call Center support, packet analysis, 
                      automation with Python, system administration, and IT security.
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Electronic Technician</div>
                      <div className="date">
                        2016-Present <span>|</span> Dantech Services.
                      </div>
                      <p>
                      As an independent electronics specialist, I focus on repairing and maintaining a wide range of electronic devices,
                      including smartphones, computers, consoles, and other gadgets.
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name">Field Translator</div>
                      <div className="date">
                        2017-2018 <span>|</span> Windstream.
                      </div>
                      <p>
                      Assembly, installation and repair of solar and wind energy generators, technical translation and equipment coordination.
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
                      <div className="name">Bachelor's Degree in Electronic Engineering</div>
                      <div className="date">
                        2018-2020 (Incomplete) <span>|</span> Haedo, Buenos Aires
                      </div>
                      <p>
                        UTN FRH
                      </p>
                    </div>

                    {/* <!-- resume item --> */}
                    <div className="resume-item">
                      <div className="name"> Bachelor's Degree in Artificial Intelligence and Robotics</div>
                      <div className="date">
                        2024 <span>|</span> Buenos Aires (Hibrid)
                      </div>
                      <p>
                      Universidad Siglo 21 
                      </p>
                    </div>

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
