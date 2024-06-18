import React from "react";
import { MdClose } from "react-icons/md";
import styled from "styled-components";
import works_img_4 from "../images/works/work1.jpg";

const PopupCard = (props) => {

  const {item} = props;

  if (item.category === "photo") {
    return (
      <PopupStyled>
        <img
          src={item.image_url}
          alt="portfolio item"
          style={{ height: "500px", width: "400px" }}
        />
        <button className="btn-close" onClick={() => props.setPopupValue(null) }>
          <MdClose />
        </button>
      </PopupStyled>
    );
  }
  if (item.category === "video") {
    return (
      <PopupStyled>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="video"
            style={{ height: "500px", width: "700px", border: "none" }}
            className="mfp-iframe"
            src="//player.vimeo.com/video/97102654?autoplay=1"
            frameBorder="0"
          ></iframe>
        </div>
        <button className="btn-close" onClick={() => props.setPopupValue(null)}>
          <MdClose />
        </button>
      </PopupStyled>
    );
  }

  if (item.category === "music") {
    return (
      <PopupStyled>
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            title="audio"
            style={{ height: "500px", width: "700px", border: "none" }}
            className="mfp-iframe"
            src="https://w.soundcloud.com/player/?visual=true&amp;url=http://api.soundcloud.com/tracks/221650664&amp;show_artwork=true"
            frameBorder="0"
          ></iframe>
        </div>
        <button className="btn-close" onClick={() => props.setPopupValue(null)}>
          <MdClose />
        </button>
      </PopupStyled>
    );
  }
  if (item.category === "design") {
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
              <img src={works_img_4} alt="patrick" />
            </div>
            <div className="desc">
              <div className="post-box">
                <h1>Mobile Application</h1>
                <div className="blog-detail">Design</div>
                <div className="blog-content">
                  <p>
                    So striking at of to welcomed resolved. Northward by
                    described up household therefore attention. Excellence
                    decisively nay man yet impression for contrasted remarkably.
                  </p>
                  <p>
                    Forfeited you engrossed but gay sometimes explained. Another
                    as studied it to evident. Merry sense given he be arise.
                    Conduct at an replied removal an amongst. Remaining
                    determine few her two cordially admitting old.
                  </p>
                  <blockquote>
                    Vestibulum ante ipsum primis in faucibus orci luctus et
                    ultrices posuere cubilia Curae; Pellentesque suscipit.
                  </blockquote>
                  <p>
                    Tiled say decay spoil now walls meant house. My mr interest
                    thoughts screened of outweigh removing. Evening society
                    musical besides inhabit ye my. Lose hill well up will he
                    over on. Increasing sufficient everything men him admiration
                    unpleasing sex.
                  </p>
                  <ul className="list-style">
                    <li>Greatest properly off ham exercise all.</li>
                    <li>Unsatiable invitation its possession nor off.</li>
                    <li>
                      All difficulty estimating unreserved increasing the
                      solicitude.
                    </li>
                  </ul>
                  <p>
                    Unpleasant astonished an diminution up partiality. Noisy an
                    their of meant. Death means up civil do an offer wound of.
                  </p>
                </div>
                <a href="#view" className="button">
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
