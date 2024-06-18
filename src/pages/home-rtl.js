import React, { useState, useEffect } from "react";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import { Link } from "react-router-dom";
import ThemePanel from "../components/ThemePanel";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
// import Portfolio from "./Portfolio";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import menu from "../data/menu";
import socials from "../data/socials";
import { Helmet } from "react-helmet";

const HomeRtlPage = () => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    useEffect(() => {
    }, []);

    return (
        <Tabs as="div" className="page">
            <Helmet>
                {/* Primary Meta Tags  */}
                <title>Patrick - vCard / Resume / CV Template</title>
                <meta name="title" content="Patrick - vCard / Resume / CV Template" />
                <meta name="description" content="" />

                {/* Open Graph / Facebook  */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content="Patrick - vCard / Resume / CV Template" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />

                {/* Twitter  */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location.href} />
                <meta property="twitter:title" content="Patrick - vCard / Resume / CV Template" />
                <meta property="twitter:description" content="" />
                <meta property="twitter:image" content="" />
            </Helmet>

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

            <ThemePanel is_rtl={true} />
            <div className="container">

                <TabPanel>
                    <Hero />
                </TabPanel>
                <TabPanel>
                    <About />
                </TabPanel>
                <TabPanel>
                    <Resume />
                </TabPanel>
                <TabPanel>
                    <About />
                    {/* <Portfolio /> */}
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

export default HomeRtlPage;
