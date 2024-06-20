import React, { useEffect } from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import particleOption from "../data/particle-config.json";
import Particles from "react-tsparticles";
import Bg from "../images/bg.jpg";
import video_1 from "../video/intro_1.mp4";
import { useLoading } from "../hooks/app";

const Hero = ({ type = 'bgColor' }) => {
  // type { bgParticles, bgImage, bgvideo, bgColor, navbarLink }

  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if (isLoading) {
      setLoading(false);
    }
  }, [isLoading, setLoading]);

  return (
    <>
      <HomeStyled>
        {type === 'bgParticles' && (
          <Particles id="tsparticles" options={particleOption} />
        )}
        {/* Card - Started */}
        <div
          className="card-inner card-started active"
          id="home-card"
          style={{ height: "100vh" }}
        >
          {type === 'bgParticles' && (
            <div
              className="slide"
              style={{ backgroundImage: `url(${Bg})` }}
            ></div>
          )}

          {type === 'bgImage' && (
            <div
              className="slide"
              style={{ backgroundImage: `url(${Bg})` }}
            ></div>
          )}

          {type === 'bgvideo' && (
            <>
              <div id="video-bg" className="slide" >
                <div className="video_container">
                  <video className="videoTag" autoPlay loop muted>
                    <source src={video_1} type="video/mp4" />
                  </video>
                </div>
              </div>
            </>
          )}

          {type === 'bgColor' && (
            <div className="slide" style={{ backgroundImage: "#000" }}></div>
          )}

          <div className="centrize full-width">
            <div className="vertical-center">
              {/* Started titles */}
              <div className="title">
                <span>Andrews</span> Arian
              </div>
              <div
                className="subtitle"
                style={{
                  display: "flex",
                  gap: "10px",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                I am a
                <span style={{ color: "#fff" }}>
                  <Typewriter
                    words={[
                      "IT Specialist",
                      "web developer.",
                      "problem solver",
                      "freelancer.",
                    ]}
                    loop={5}
                    cursor
                    cursorStyle="_"
                    typeSpeed={70}
                    deleteSpeed={50}
                    delaySpeed={2000}
                  />
                </span>
                <span className="typed-title"></span>
              </div>
            </div>
          </div>
        </div>
      </HomeStyled>
    </>
  );
};

export default Hero;

const HomeStyled = styled.div`
  .grid_anim {
    height: 100vh;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    position: absolute;
    top: 0;
    left: 0;
    z-index: 10;

    span {
      display: block;
      height: 100%;
      width: 0;
      background: #000;
    }
  }
  .video_container {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    overflow: hidden;
  }
  .videoTag {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
  }
`;
