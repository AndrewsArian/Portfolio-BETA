import React, { useState, useEffect } from "react";
import { Link, useParams, useHistory } from "react-router-dom";
import axios from 'axios';
import ThemePanel from "../components/ThemePanel";
import styled from "styled-components";
import { Helmet } from "react-helmet";
import { useLoading } from "../hooks/app";
import DefaultLayout from "../layouts/default";

const BlogPage = () => {

    const [data, setData] = useState({});
    const [pageLoading, setPageLoading] = useState(true);
    const { slug } = useParams();
    const history = useHistory();
    const { setLoading } = useLoading();

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e);
    };

    useEffect(() => {
        document.title = "Blog | Patrick - vCard / Resume / CV Template"
    }, []);


    useEffect(()=> {
        if (pageLoading === false) {

            //wait for render html template
            const timer = setTimeout(() => {
                setLoading(false);
            }, 1000);

            return () => clearTimeout(timer);
        }else{
            setLoading(true);
        }
    }, [pageLoading, setPageLoading, setLoading]);


    useEffect(() => {

        setPageLoading(true);
        axios.get(`/api/blog/${slug ? slug : 1}.json`).then(res => {
            setData(res.data);
            setPageLoading(false);
        }).catch(error => {
            history.push('/blog');
        }).finally(function () {
            // setPageLoading(false);
        });

    }, [slug, history]);

    return (
        <DefaultLayout>
            <Helmet>
                {/* Primary Meta Tags  */}
                <title>Blog - Patrick</title>
                <meta name="title" content="Blog - Patrick" />
                <meta name="description" content="" />

                {/* Open Graph / Facebook  */}
                <meta property="og:type" content="website" />
                <meta property="og:url" content={window.location.href} />
                <meta property="og:title" content="Blog - Patrick" />
                <meta property="og:description" content="" />
                <meta property="og:image" content="" />

                {/* Twitter  */}
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content={window.location.href} />
                <meta property="twitter:title" content="Blog - Patrick" />
                <meta property="twitter:description" content="" />
                <meta property="twitter:image" content="" />
            </Helmet>

            <ThemePanel />

            <AllBlogStyle>
                <div className="container">
                    {/* // <!-- Card - Blog --> */}
                    <div className="card-inner blogs active" id="blog-card">
                        <div className="row card-container" data-simplebar>
                            {/* <!-- Card Wrap --> */}
                            <div className="card-wrap blogs-content col col-m-12 col-t-12 col-d-9 col-d-lg-9">
                                {/* <!-- Inner Top --> */}
                                <div className="content inner-top">
                                    <div className="row">
                                        <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                            <div className="title-bg">My Blog</div>
                                        </div>
                                    </div>
                                </div>

                                {/* <!-- 	Blog --> */}
                                <div className="content blog">
                                    <div className="row">
                                        <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                            {/* <!-- title --> */}
                                            <div className="title">
                                                <span>My</span> Blog
                                            </div>
                                        </div>
                                    </div>

                                    {/* <!-- blog items --> */}
                                    <div className="row">
                                        {/* <!-- blog item --> */}
                                        {data.item && data.item.length && data.item.map((post, index) => {
                                            return (
                                                <div
                                                    className="col col-m-12 col-t-12 col-d-6 col-d-lg-6"
                                                    key={index}
                                                >
                                                    <div className="box-item card-box">
                                                        <div className="image">
                                                            <Link to={`/posts/${post.slug}`}>
                                                                <img src={post.image} alt="post" />
                                                                <span className="info">
                                                                    <span className="icon la la-newspaper-o"></span>
                                                                </span>
                                                                <span className="date">
                                                                    <strong>{("0" + new Date(post.date).getDay()).slice(-2)}</strong>
                                                                    {new Date(post.date).toLocaleString('default', { month: 'short' })}
                                                                </span>
                                                            </Link>
                                                        </div>
                                                        <div className="desc">
                                                            <Link to={`/posts/${post.slug}`} className="name">
                                                                {post.title.substring(0, 40)}
                                                            </Link>
                                                            <div className="category">{post.category}</div>
                                                        </div>
                                                    </div>
                                                </div>
                                            );
                                        })}
                                    </div>

                                    {data.paginate ? (
                                        <div className="pager">

                                            {data.paginate.prev ? (
                                                <Link to={`/blog/${data.paginate.current - 1}`} onClick={()=> setPageLoading(true)} className="prev page-numbers" >
                                                    Prev
                                                </Link>
                                            ) : (
                                                <Link className="next page-numbers" >
                                                    Prev
                                                </Link>
                                            )}

                                            <span
                                                aria-current="page"
                                                className="page-numbers current"
                                            >
                                                {data.paginate.current}
                                            </span>
                                            {data.paginate.next ? (
                                                <Link to={`/blog/${data.paginate.current + 1}`}  onClick={()=> setPageLoading(true)} className="next page-numbers" >
                                                    Next
                                                </Link>
                                            ) : (
                                                <Link className="next page-numbers" >
                                                    Next
                                                </Link>
                                            )}
                                        </div>
                                    ) : null}

                                </div>
                            </div>

                            <div className="card-wrap blogs-sidebar col col-m-12 col-t-12 col-d-3 col-d-lg-3">
                                <aside id="secondary" className="widget-area">
                                    <div className="widget widget_search">
                                        <form
                                            role="search"
                                            method="get"
                                            className="search-form"
                                            onSubmit={handleSubmit}
                                        >
                                            <label>
                                                <span className="screen-reader-text">
                                                    Search for:
                                                </span>
                                                <input
                                                    type="search"
                                                    className="search-field"
                                                    placeholder="Search …"
                                                />
                                            </label>
                                            <input type="submit" className="search-submit" />
                                        </form>
                                    </div>
                                    <div className="widget widget_recent_entries">
                                        <h2 className="widget-title">Recent Posts</h2>
                                        <ul>
                                            <li>
                                                <a href="#recent_post">By spite about do of do allow</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Music Player Design</a>
                                            </li>
                                            <li>
                                                <a href="#recent_post">Two Before Arrow Not Relied</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_recent_comments">
                                        <h2 className="widget-title">Recent Comments</h2>
                                        <ul id="recentcomments">
                                            <li className="recentcomments">
                                                <span className="comment-author-link">Adam Doe</span> on
                                                <a href="#comment">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JOHN Smith</span> on
                                                <a href="#comment">By spite about do of do allow</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">Adam Smith</span> on
                                                <a href="#comment">Creativity Is More Than A Song And Dance Act</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JESSE DOE</span> on
                                                <a href="#comment">Music Player Design</a>
                                            </li>
                                            <li className="recentcomments">
                                                <span className="comment-author-link">JESSE PITMAN</span> on
                                                <a href="#comment">Music Player Design</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_archive">
                                        <h2 className="widget-title">Archives</h2>
                                        <ul>
                                            <li>
                                                <a href="#archives">August 2018</a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_categories">
                                        <h2 className="widget-title">
                                            <span className="widget-title-span">Categories</span>
                                        </h2>
                                        <ul>
                                            <li className="cat-item cat-item-2"><a href="#bc">Design</a></li>
                                            <li className="cat-item cat-item-3"><a href="#bc">Music</a></li>
                                        </ul>
                                    </div>
                                    <div className="widget widget_meta">
                                        <h2 className="widget-title">Meta</h2>
                                        <ul>
                                            <li>
                                                <a href="#login">Log in</a>
                                            </li>
                                            <li>
                                                <a href="#rss">
                                                    Entries{" "}
                                                    <abbr title="Really Simple Syndication">RSS</abbr>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#rss">
                                                    Comments{" "}
                                                    <abbr title="Really Simple Syndication">RSS</abbr>
                                                </a>
                                            </li>
                                            <li>
                                                <a href="https://react.org" target="_blank" rel="noreferrer">react.org</a>
                                            </li>
                                        </ul>
                                    </div>
                                </aside>
                            </div>
                        </div>
                    </div>
                </div>
            </AllBlogStyle>
        </DefaultLayout>
    );
};

export default BlogPage;

const AllBlogStyle = styled.div`
  button {
    border: none;
    padding: 0;
    margin: 0;
  }
`;
