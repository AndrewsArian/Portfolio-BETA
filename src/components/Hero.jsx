import React, { useEffect } from "react";
import styled from "styled-components";
import { Typewriter } from "react-simple-typewriter";
import Bg from "../images/bg.jpg";
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
        
        {/* Card - Started */}
        <div
          className="card-inner card-started active"
          id="home-card"
          style={{ height: "100vh" }}
        >
          
          {type === 'bgImage' && (
            <div
              className="slide"
              style={{ backgroundImage: `url(${Bg})` }}
            ></div>
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
                      "freelancer.",
                      "Specialist in IT",
                      "web developer.",
                      "problem solver",
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
