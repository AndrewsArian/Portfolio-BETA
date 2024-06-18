import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Work from "../components/Work";
import menu from "../data/menu";
import socials from "../data/socials";

const HomeParticleRtlPage = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false);
  useEffect(() => {
  }, []);

  return (
    <Tabs as="div" className="page">

      <TabList as="header" className={`${toggleSidebar ? "header opened" : "header"}`}>
        {/* <!-- logo --> */}
        <div className="logo">
          <Link to={`/`}>
            <span>P</span>
          </Link>
        </div>

        {/* <!-- menu --> */}
        <div className="top-menu">

          <ul>
            {menu && menu.map((item, i) => (
              <Tab as="li" key={i}>
                <a href={item.to}>
                  <span className={item.icon}></span>
                  <span className="link">{item.title}</span>
                </a>
              </Tab>
            ))}
          </ul>
        </div>

        {/* <!-- Started socials --> */}
        <div className="social">
          {socials && socials.map(social =>
            <a target="_blank" rel="noreferrer" href={social.url} key={social.name}>
              <span className={social.icon}></span>
            </a>
          )}
        </div>

        {/* <!-- Mobile Menu --> */}
        <span className="menu-btn" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <span className="m-line"></span>
        </span>
      </TabList>

      <ThemePanel />
      <div className="container">

        <TabPanel>
          <Hero type="bgParticles" />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
        <TabPanel>
          <Work />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </div>
    </Tabs>
  );
};

export default HomeParticleRtlPage;
