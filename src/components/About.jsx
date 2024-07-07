import React, { useEffect } from "react";
import ProfileImg from "../images/profile.jpg";
import cert_img_1 from "../images/certifications/ccnaitn.png";
import cert_img_2 from "../images/certifications/DEVASC.png";
import cert_img_3 from "../images/certifications/mongo.png";
import cert_img_4 from "../images/certifications/react.png";
import cert_img_5 from "../images/certifications/node.png";
import cert_img_6 from "../images/certifications/c.png";
import cert_img_7 from "../images/certifications/python.png";
import cert_img_8 from "../images/certifications/sw.png";
import { useLoading } from "../hooks/app";

const About = () => {
  const serviceItemData = [
    {
      icon_url: "la la-html5",
      title: "Web Development",
      text: "My experience in website & webapp creation will help you reach a new level of efficiency. ",
    },
    {
      icon_url: "la la-area-chart",
      title: "AndrewBoost Automation",
      text: "I offer innovative technological solutions to automate and promote small businesses in your community.",
    },
    {
      icon_url: "la la-bullhorn",
      title: "Advertising",
      text: "Advertising services include Instagram, Whatsapp Business, mail and the web.",
    },
    {
      icon_url: "la la-server",
      title: "Network Management",
      text: "Basic, advanced and custom implementations on LAN and WAN.",
    },
    
  ];

  

  const clientData = [
    {
      image_url: cert_img_1,
      link: "https://www.credly.com/badges/86ab3b4f-9a96-49c0-b9a7-ac70a993fdc9",
      text: "CCNA",
    },
    {
      image_url: cert_img_2,
      link: "https://www.credly.com/badges/f8bb768f-fb67-4dec-a7eb-484e8ab6bed1",
      text: "DEVNET",
    },
    {
      image_url: cert_img_3,
      link: "https://www.mongodb.com/docs/atlas/getting-started/",
      text: "Mongo",
    },
    {
      image_url: cert_img_4,
      link: "https://react.dev/learn",
      text: "React",
    },
    {
      image_url: cert_img_5,
      link: "https://nodejs.org/en/learn/getting-started/introduction-to-nodejs",
      text: "Node",
    },
    {
      image_url: cert_img_6,
      link: "https://devdocs.io/c/",
      text: "C",
    },
    {
      image_url: cert_img_7,
      link: "https://docs.python.org/3/",
      text: "Python",
    },
    {
      image_url: cert_img_8,
      link: "https://all3dp.com/2/what-is-solidworks-simply-explained/",
      text: "Solidworks",
    },
  ];

  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if(isLoading){
      setLoading(false);
    }
  }, [isLoading, setLoading]);

  return (
    <>
      {/* Card - About */}
      <div
        className="card-inner active"
        id="about-card"
      >
        <div className="row card-container">
          {/* Card Wrap */}
          <div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6">
            {/* About Image  */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${ProfileImg})` }}
            ></div>
            {/* Inner Top */}
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">About Me</div>
                  <div className="text">
                    <p>
                      <strong>Hello, I’m Andrews Arian</strong>, <br />Full stack developer with a solid background in electronics 
                      and experience in cybersecurity, robotics, and artificial intelligence
                      based in Buenos Aires. <br />Some of my skills are:{" "}
                      <strong>
                      JavaScript, React, Node.js, C, and Python <br />
                        MongoDB, Next.js, AWS, SQL, and Stripe.
                      </strong>
                    </p>
                  </div>
                  <div className="circle-bts">
                    <a href="/CV.pdf" download>
                      <span>
                        <i className="icon la la-download"></i>Download CV
                      </span>
                    </a>
                    <a href="https://github.com/AndrewsArian" target="_blank" rel="noreferrer">
                      <i className="icon la la-github"></i>
                    </a>
                    <a href="https://www.linkedin.com/in/arian-daniel-benjamin-goicochea-864584249" target="_blank" rel="noreferrer">
                      <i className="icon la la-linkedin"></i>
                    </a>
                    
                  </div>
                </div>
              </div>
            </div>
            {/* Services */}
            <div className="content services">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>My</span> Services
                  </div>
                </div>
              </div>

              {/* <!-- service items --> */}
              <div className="row service-items">
                {/* <!-- service item --> */}
                {serviceItemData.map(({ icon_url, title, text }, index) => {
                  return (
                    <div
                      className="col col-m-12 col-t-6 col-d-6 col-d-lg-6"
                      key={index}
                    >
                      <div className="service-item card-box">
                        <div className="icon">
                          <i className={icon_url}></i>
                        </div>
                        <div className="name">{title}</div>
                        <p>{text}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>


            
            
            {/* <!--Clients --> */}
            <div className="content clients">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Certifications & Technologies</span>
                  </div>
                </div>
              </div>

              {/* <!-- client items --> */}
              <div className="row client-items">
                {/* <!-- client item --> */}
                {clientData.map(({ image_url, link, text }, index) => {
                  return (
                    <div
                      className="col col-m-6 col-t-6 col-d-3 col-d-lg-3"
                      key={index}
                    >
                      <div className="client-item card-box">
                        <div className="image">
                          <a target="_blank" rel="noreferrer"  href={link}>
                            <img src={image_url} alt={text} />
                          </a>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
