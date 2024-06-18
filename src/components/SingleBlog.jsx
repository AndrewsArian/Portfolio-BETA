import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Blog_img_1_inner from "../images/blog/blog1-inner.jpg";
import blog_img_man1 from "../images/man1.jpg";
import blog_img_man2 from "../images/man1.jpg";

const SingleBlog = () => {
  const singleBlogComments = [
    {
      image_url: blog_img_man1,
      user_name: "john doe",
      Time: "1 hour ago",
      reply_button: "reply",
      desc: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay.",
    },
    {
      image_url: blog_img_man1,
      user_name: "john doe",
      Time: "3 hour ago",
      reply_button: "reply",
      desc: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay.",
    },
    {
      image_url: blog_img_man1,
      user_name: "john doe",
      Time: "6 hour ago",
      reply_button: "reply",
      desc: "Kept in sent gave feel will oh it we. Has pleasure procured men laughing shutters nay.",
    },
  ];
  const [comment, setcomment] = useState(false);
  const handleSubmit = () => {
    setcomment(true);
  };
  useEffect(() => {
    setTimeout(() => {
      setcomment(false);
    }, 10000);
  }, []);

  return (
    <SingleBlogStyled>
      <div className="container">
        {/* // <!--  	Card - Blog --> */}
        <div className="card-inner active" id="blog-card">
          <div className="row card-container">
            {/* <!-- 	Card Wrap --> */}
            <div
              className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
              data-simplebar
            >
              {/* <!-- Blog Image --> */}
              <div
                className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
                style={{ backgroundImage: `url(${Blog_img_1_inner})` }}
              ></div>

              {/* <!-- Inner Top --> */}
              <div className="content inner-top">
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="title-bg">Blog Post</div>
                  </div>
                </div>
              </div>

              {/* <!-- 	Blog Single --> */}
              <div className="content blog-single">
                {/* <!-- content --> */}
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="post-box card-box">
                      {/* <!-- blog detail --> */}
                      <h1>Procuring Education on Consulted Assurance in Do</h1>
                      <div className="blog-detail">Posted 12 June 2016</div>

                      {/* <!-- blog content --> */}
                      <div className="blog-content">
                        <p>
                          So striking at of to welcomed resolved. Northward by
                          described up household therefore attention. Excellence
                          decisively nay man yet impression for contrasted
                          remarkably.
                        </p>
                        <p>
                          Forfeited you engrossed but gay sometimes explained.
                          Another as studied it to evident. Merry sense given he
                          be arise. Conduct at an replied removal an amongst.
                          Remaining determine few her two cordially admitting
                          old.
                        </p>
                        <blockquote>
                          Vestibulum ante ipsum primis in faucibus orci luctus
                          et ultrices posuere cubilia Curae; Pellentesque
                          suscipit.
                        </blockquote>
                        <p>
                          Tiled say decay spoil now walls meant house. My mr
                          interest thoughts screened of outweigh removing.
                          Evening society musical besides inhabit ye my. Lose
                          hill well up will he over on. Increasing sufficient
                          everything men him admiration unpleasing sex.
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
                          Unpleasant astonished an diminution up partiality.
                          Noisy an their of meant. Death means up civil do an
                          offer wound of.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Post</span> Comments
                    </div>
                  </div>
                </div>
                {/* <!-- comments --> */}
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div className="post-box card-box comments">
                      {/* <!-- comments items --> */}
                      <ul className="post-comments">
                        {/* <!-- comment item --> */}
                        {singleBlogComments.map(
                          (
                            { image_url, user_name, time, reply_button, desc },
                            index
                          ) => {
                            return (
                              <li key={index}>
                                <img src={image_url} alt={user_name} />
                                <div className="comment-info">
                                  <div className="name">
                                    <h6>
                                      {user_name} <span>{time}</span>
                                    </h6>
                                    <a href="#">{reply_button}</a>
                                  </div>
                                  <p>{desc}</p>
                                </div>
                              </li>
                            );
                          }
                        )}
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    {/* <!-- title --> */}
                    <div className="title">
                      <span>Leave</span> a Comment
                    </div>
                  </div>
                </div>
                {/* <!-- comments --> */}
                <div className="row">
                  <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                    <div
                      className={`${
                        comment
                          ? "active-alert post-box card-box comments-form"
                          : "post-box card-box comments-form"
                      }`}
                    >
                      {/* <!-- comment form --> */}
                      <form onSubmit={handleSubmit}>
                        <div className="row">
                          <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                            <div className="group-val">
                              <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                              />
                            </div>
                          </div>
                          <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                            <div className="group-val">
                              <textarea
                                name="message"
                                placeholder="Your Message"
                              ></textarea>
                            </div>
                          </div>
                        </div>
                        <button type="submit" className="align-left">
                          <span className="text">Add Comment</span>
                          <span className="arrow"></span>
                        </button>
                      </form>
                      <div className="alert-success">
                        <p>Thanks, your message is sent successfully.</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SingleBlogStyled>
  );
};

export default SingleBlog;

const SingleBlogStyled = styled.div`
  form {
    display: block;
  }
  .alert-success {
    display: none;
  }
  .active-alert {
    form {
      display: none;
    }
    .alert-success {
      display: block;
    }
  }

  button {
    border: none;
    height: 100%;
    padding: 10px 16px;
  }
`;
