import React, { useEffect } from "react";
import ProfileImg from "../images/profile.jpg";
import client_img_1 from "../images/clients/client_1.png";
import client_img_2 from "../images/clients/client_2.png";
import client_img_3 from "../images/clients/client_3.png";
import client_img_4 from "../images/clients/client_4.png";
import { useLoading } from "../hooks/app";

const About = () => {
  const serviceItemData = [
    {
      icon_url: "la la-html5",
      title: "Web Development",
      text: "Modern and mobile-ready website that will help of your marketing.",
    },
    {
      icon_url: "la la-area-chart",
      title: "AndrewBoost Automation",
      text: "I offer innovative technological solutions to automate and promote small businesses in your community.",
    },
    {
      icon_url: "la la-bullhorn",
      title: "Advetising",
      text: "Advertising services include Instagram, Whatsapp Business, mail and web.",
    },
    {
      icon_url: "la la-server",
      title: "Network Management",
      text: "Basic, advanced, custom implementations on LAN and WAN.",
    },
    
  ];

  const FactsData = [
    {
      icon_url: "la la-headphones",
      title: "47 Albumes Listened",
    },
    {
      icon_url: "la la-trophy",
      title: "15 Awards Won",
    },
    {
      icon_url: "la la-lightbulb-o",
      title: "54 Projects Completed",
    },
    {
      icon_url: "la la-flag-o",
      title: "10 Countries Visited",
    },
    {
      icon_url: "la la-book",
      title: "50+ Books Readed",
    },
    {
      icon_url: "la la-code",
      title: "100 000 Lines of Code",
    },
    {
      icon_url: "la la-smile-o",
      title: "49 Satisfied Customers",
    },
    {
      icon_url: "la la-bicycle",
      title: "1250 km Cycled",
    },
  ];

  const clientData = [
    {
      image_url: client_img_1,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_2,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_3,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_4,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_1,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_2,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_3,
      link: "https://www.google.com",
      text: "client",
    },
    {
      image_url: client_img_4,
      link: "https://www.google.com",
      text: "client",
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
                      <strong>Hello, I’m a Andrews Arian</strong>, <br />Full stack developer with a solid background in electronics 
                      and experience in cybersecurity, robotics, and artificial intelligence
                      based in Buenos Aires. <br />Some of my skills are:{" "}
                      <strong>
                      JavaScript, React, Node.js, C, and Python <br />
                        MongoDB, Next.js, AWS, SQL, and Stripe.
                      </strong>
                    </p>
                  </div>
                  <div className="circle-bts">
                    <a href="#download">
                      <span>
                        <i className="icon la la-download"></i>Download CV
                      </span>
                    </a>
                    <a href="https://github.com/" target="_blank" rel="noreferrer">
                      <i className="icon la la-github"></i>
                    </a>
                    <a href="https://stack-overflow.com/" target="_blank" rel="noreferrer">
                      <i className="icon la la-stack-overflow"></i>
                    </a>
                    <a href="https://skype.com/" target="_blank" rel="noreferrer">
                      <i className="icon la la-skype"></i>
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


            
            {/* // <!--	Fun Fact --> */}
            <div className="content fuct">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>Fun</span> Facts
                  </div>
                </div>
              </div>

              {/* <!-- fuct items --> */}
              <div className="row fuct-items">
                {/* <!-- fuct item --> */}
                {FactsData.map(({ icon_url, title }, index) => {
                  return (
                    <div
                      className="col col-m-6 col-t-6 col-d-3 col-d-lg-3"
                      key={index}
                    >
                      <div className="fuct-item card-box">
                        <div className="icon">
                          <i className={icon_url}></i>
                        </div>
                        <div className="name">{title}</div>
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
                    <span>Our</span> Clients
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
