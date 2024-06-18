import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import PopupCard from "./PopupCard";
import { useLoading } from "../hooks/app";
import profile_img_3 from "../images/profile3.jpg";
import works_img_1 from "../images/works/work1.jpg";
import works_img_2 from "../images/works/work2.jpg";
import works_img_3 from "../images/works/work3.jpg";
import works_img_4 from "../images/works/work4.jpg";
import works_img_5 from "../images/works/work5.jpg";
import works_img_6 from "../images/works/work6.jpg";
import works_img_7 from "../images/works/work7.jpg";
import works_img_8 from "../images/works/work8.jpg";
import Overlay from "./Overlay";

const Work = () => {
  const ref = useRef();
  // const { openPopup, popup, popupValue, navbarLink } = useMainContext();
  const [popupValue, setPopupValue] = useState(null);
  const [btnValue, setbtnValue] = useState(0);
  const worksData = [
    {
      id: 1,
      image_url: works_img_1,
      desc: "Motorcycle Helmet",
      category: "photo",
      icon: "la la-camera-retro",
    },
    {
      id: 2,
      image_url: works_img_2,
      desc: "Minimalism Shapes",
      category: "video",
      icon: "la la-video-camera",
    },
    {
      id: 3,
      image_url: works_img_3,
      desc: "Staircase",
      category: "music",
      icon: "la la-music",
    },
    {
      id: 4,
      image_url: works_img_4,
      desc: "Gereal Travels",
      category: "design",
      icon: "la la-image",
    },
    {
      id: 5,
      image_url: works_img_5,
      desc: "Daylight Entrance",
      category: "music",
      icon: "la la-music",
    },
    {
      id: 6,
      image_url: works_img_6,
      desc: "Architecture",
      category: "video",
      icon: "la la-video-camera",
    },
    {
      id: 7,
      image_url: works_img_7,
      desc: "Social Website",
      category: "video",
      icon: "la la-video-camera",
    },
    {
      id: 8,
      image_url: works_img_8,
      desc: "Social Website",
      category: "design",
      icon: "la la-image",
    },
  ];
  const [workItem, setworkItem] = useState(worksData);
  const handleFilter = (category) => {
    // console.log(category);
    const filteredItem = worksData.filter((item) => item.category === category);
    console.log(filteredItem);
    // setworkItem(filteredItem);
    if (category === "all") {
      setworkItem(worksData);
    } else {
      setworkItem(filteredItem);
    }
  };

  const { isLoading , setLoading } = useLoading();

  useEffect(() => {
    if(isLoading){
      setLoading(false);
    }
    
  }, [isLoading, setLoading]);

  return (
    <>
      <Overlay />
      <WorksStyled>
        {/* // <!-- 	Card - Works --> */}
        <div className="card-inner active" id="works-card">
          <div className="row card-container">
            {/* <!-- 	Card Wrap	--> */}
            <div
              className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
              data-simplebar
            >
              {/* <!-- Work Image --> */}
              <div
                className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
                style={{ backgroundImage: `url(${profile_img_3})` }}
              ></div>

              {/* <!--	Inner Top	--> */}
              <div className="content inner-top">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="title-bg">Portfolio</div>
                  </div>
                </div>
              </div>
              {/* works */}
              <div className="content works">
                <div className="row">
                  <div className="col col-m-12 col-t-5 col-d-5 col-d-lg-5">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>My</span> Portfolio
                    </div>
                  </div>
                  <div className="col col-m-12 col-t-7 col-d-7 col-d-lg-7">
                    {/* <!-- filters --> */}
                    <div className="filter-menu filter-button-group">
                      {/* f_btn */}
                      {["all", "photo", "video", "music", "design"].map((item, index) => {
                        return (
                          <div className={`f_btn ${btnValue === index && "active"}`}
                            key={index}
                            onClick={() => {
                              setbtnValue(index);
                              handleFilter(item);
                            }}
                          >
                            <label>{item}</label>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* <!-- work items --> */}
                <div className="row grid-items" ref={ref}>
                  {/* <!-- work item photo --> */}
                  {workItem.map((item) => {
                    const { image_url, desc, category, icon, id } = item;
                    return (
                      <React.Fragment key={id}>
                        <div
                          className="col col-m-12 col-t-6 col-d-6 col-d-lg-6 grid-item photo"
                          onClick={() => setPopupValue(item)}
                        >
                          <div
                            className="box-item card-box"
                            style={{ cursor: "pointer" }}
                          >
                            <div className="image">
                              <div className="has-popup-image">
                                <img
                                  src={image_url}
                                  alt=" work"
                                  style={{ transition: "all .3s" }}
                                />
                                <span className="info">
                                  <span className={`icon ${icon}`}></span>
                                </span>
                              </div>
                            </div>
                            <div className="desc">
                              <div className="name has-popup-image">
                                {desc}
                              </div>
                              <div className="category">{category}</div>
                            </div>
                          </div>
                        </div>
                      </React.Fragment>
                    );
                  })}
                </div>

              </div>
            </div>
          </div>
        </div>
        {popupValue && (
          <>
            <div className="popup_overlay"></div>
            <div className="popup popup_active">
              <PopupCard item={popupValue} setPopupValue={() => setPopupValue(null)} />
            </div>
          </>
        )}
      </WorksStyled>
    </>
  );
};

export default Work;

const WorksStyled = styled.div`
  .card-box {
    img {
      height: 100%;
      width: 100%;
    }
  }

  .popup_overlay {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100%;
    background: rgba(0, 0, 0, 0.2);
    z-index: 10;
  }
`;

