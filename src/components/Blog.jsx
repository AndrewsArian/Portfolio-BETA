import React, { useEffect, useState } from "react";
import profile_img_4 from "../images/profile4.jpg";
import { Link } from "react-router-dom";
import axios from "axios";
import { useLoading } from "../hooks/app";

const Blog = () => {

  const [data, setData] = useState([]);

  const { isLoading, setLoading } = useLoading();

  useEffect(() => {
    if (isLoading === false) {
      setLoading(false);
    }
  }, [isLoading, setLoading])


  useEffect(() => {

    axios.get("/api/blog/1.json").then(res => {
      if (res.data.item.length) {
        setData(res.data.item);
      }
    }).catch(error => {
    }).finally(function () {
      if (isLoading) {
        setLoading(false);
      }
    });

  }, [isLoading, setLoading]);

  return (
    <React.Fragment>
      {/* <!-- 	Card - Blog --> */}
      <div className="card-inner active" id="blog-card">
        <div className="row card-container">
          {/* <!-- Card Wrap --> */}
          <div
            className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6"
            data-simplebar
          >
            {/* <!-- Blog Image --> */}
            <div
              className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6"
              style={{ backgroundImage: `url(${profile_img_4})` }}
            ></div>

            {/* <!-- Inner Top --> */}
            <div className="content inner-top">
              <div className="row">
                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                  <div className="title-bg">My Blog</div>
                </div>
              </div>
            </div>

            {/* <!-- Blog --> */}
            <div className="content blog">
              <div className="row">
                <div className="col col-m-12 col-t-5 col-d-5 col-d-lg-5">
                  {/* <!-- title --> */}
                  <div className="title">
                    <span>My</span> Blog
                  </div>
                </div>
                <div className="col col-m-12 col-t-7 col-d-7 col-d-lg-7">
                  {/* <!-- filters --> */}
                  <div className="all-blog">
                    <Link as="button" className="btn" to={`/blog${window.location.pathname.includes('rtl') ? '-rtl' : ""}`}>
                      <span>all blog</span>
                    </Link>

                  </div>
                </div>
              </div>

              {/* <!-- blog items --> */}
              <div className="row">
                {/* <!-- blog item --> */}
                {data.length && data.slice(0, 3).map((post, index) =>
                  <div
                    className="col col-m-12 col-t-12 col-d-12 col-d-lg-12"
                    key={index}
                  >
                    <div
                      className="box-item card-box"
                      style={{ cursor: "pointer" }}
                    >
                      <div className="image">
                        <div>
                          <img
                            src={post.image}
                            alt={post.title}
                            style={{ transition: "all .4s" }}
                          />
                          <span className="info">
                            <span className="icon la la-newspaper-o"></span>
                          </span>
                          <span className="date">
                            <strong>{("0" + new Date(post.date).getDay()).slice(-2)}</strong>
                            {new Date(post.date).toLocaleString('default', { month: 'short' })}
                          </span>
                        </div>
                      </div>
                      <div className="desc">
                        <Link to={`/posts/${post.slug}`} className="name">{post.title}</Link>
                        <div className="category">{post.category}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Blog;
