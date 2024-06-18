import React, { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {

  const [toggleSidebar, setToggleSidebar] = useState(false);

  return (
    <>
      {/* <!--
			Header
		--> */}
      <header className={`${toggleSidebar ? "header opened" : "header"}`}>
        {/* <!-- logo --> */}
        <div className="logo">
          <Link to={`/`}>
            <span>P</span>
          </Link>
        </div>

        {/* <!-- menu --> */}
        <div className="top-menu">
          <ul>

            <Tab as="li">
              <a href="#home">
                <span className="icon la la-home"></span>
                <span className="link">Home</span>
              </a>
            </Tab>

            <Tab as="li">
              <a href="#about">
                <span className="icon la la-user"></span>
                <span className="link">about</span>
              </a>
            </Tab>
            <Tab as="li">
              <a href="#resume">
                <span className="icon la la-gear"></span>
                <span className="link">resume</span>
              </a>
            </Tab>
            <Tab as="li"><a href="#work"><span className="icon la la-eye">
            </span><span className="link">portfolio</span></a>
            </Tab>
            <Tab as="li">
              <a href="#blog">
                <span className="icon la la-newspaper-o"></span>
                <span className="link">blog</span></a>
            </Tab>
            <Tab as="li">
              <a href="#contact">
                <span className="icon la la-envelope"></span>
                <span className="link">contact</span>
              </a>
            </Tab>

          </ul>
        </div>

        {/* <!-- Started socials --> */}
        <div className="social">
          <a target="_blank" href="https://dribbble.com/">
            <span className="icon la la-dribbble"></span>
          </a>
          <a target="_blank" href="https://facebook.com/">
            <span className="icon la la-facebook"></span>
          </a>
          <a target="_blank" href="https://github.com/">
            <span className="icon la la-github"></span>
          </a>
          <a target="_blank" href="https://stackoverflow.com/">
            <span className="icon la la-stack-overflow"></span>
          </a>
        </div>

        {/* <!-- Mobile Menu --> */}
        <span className="menu-btn" onClick={() => setToggleSidebar(!toggleSidebar)}>
          <span className="m-line"></span>
        </span>
      </header>
    </>
  );
};

export default Header;
