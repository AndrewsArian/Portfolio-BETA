import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import works_img_1 from "../images/works/work1.jpg";

const PopupCard = (props) => {

  const {item} = props;

  if (item.id === 1) {
    return (
      <PopupStyled>
        <div
          id="popup-1"
          className="popup-box mfp-fade mfp-show"
          style={{
            background: "#1d1e21",
            padding: "0 20px",
            width: "635px",
            height: "100%",
          }}
        >
          <div className="content">
            <div className="image">
              <img src={works_img_1} alt="patrick" />
            </div>
            <div className="desc">
              <div className="post-box">
                <h1>FR Trainning Team</h1>
                <div className="blog-detail">Landing Page</div>
                <div className="blog-content">
                  <p>
                  Fernando Roser, an ultramarathon athlete and UNSAM graduate professional, invites you to join the FR Team.
                  With years of experience and knowledge both in practice and theory, Fernando offers personalized training programs
                  for long-distance races and varied aerobic training.
                  </p>
                  <p>
                  <strong>
                  Who is it for?
                  </strong>
                  
                  <ul className="list-style">
                    <li>Runners with little or extensive experience in trail running.</li>
                    <li>People looking to transform their lifestyle through sports.</li>
                    <li>Nature lovers who enjoy camaraderie and team effort.</li>
                  </ul>
                 
                  <strong>
                  What do we offer?
                  </strong>
                  <ul className="list-style">
                    <li>Training plans tailored to your goals and level.</li>
                    <li>Group and individual sessions.</li>
                    <li>Continuous advice and support.</li>
                    <li>A motivating and friendly environment.</li>
                  </ul>
                 

                  </p>
                  <p>
                  Join us and take your performance to the next level with a 
                  coach who understands your challenges and shares your passion. 
                  Contact Fernando today and start your transformation!
                  </p>
                </div>
                <a href="https://andrewsarian.github.io/Fr-TrainingBETA/" className="button">
                  <span className="text">View Project</span>
                  <span className="arrow"></span>
                </a>
              </div>
            </div>
          </div>
        </div>
        <button className="btn-close" onClick={() => props.setPopupValue(null)}>
          <MdClose />
        </button>
      </PopupStyled>
    );
  }
};

export default PopupCard;

const PopupStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 20px;
  padding-top: 50px;

  // ::-webkit-scrollbar {
  //   display: none;
  // }

  // .popup-box {
  //   overflow-y: scroll;
  // }

  .btn-close {
    height: 20px;
    width: 20px;
    padding: 0 10px;

    svg {
      font-size: 40px;
    }
  }
`;
