import React, { useState, useEffect } from "react";
import { useParams, Redirect } from "react-router-dom";
import ReactMarkdown from 'react-markdown'
import { DiscussionEmbed } from 'disqus-react';
import axios from "axios";
import { Helmet } from "react-helmet";
import ThemePanel from "../components/ThemePanel";
import { useLoading } from "../hooks/app";
import DefaultLayout from "../layouts/default";

const BlogPost = () => {

    const [goHome, setGoHome] = useState(false);
    const [data, setData] = useState({});
    const { slug } = useParams();
    const { setLoading } = useLoading();

    // default
    const disqus_shortname = "patrick-react"

    useEffect(() => {

        if (data.title) {

            document.title = data.title
        }

    }, [data]);


    useEffect(() => {

        axios.get(`/api/posts/${slug}.json`).then(res => {

            setData(res.data);

        }).catch(error => {
            setGoHome(true);
        }).finally(function () {
            //wait for render html template
            const timer = setTimeout(() => {
                setLoading(false);
            }, 2000);

            return () => clearTimeout(timer);
        });
    }, [slug, setLoading])

    function post_date(str) {

        const date = new Date(str);

        const day = ("0" + date.getDay()).slice(-2);
        const month = date.toLocaleString('default', { month: 'short' });
        const year = date.getFullYear();

        return `${day} ${month} ${year}`
    }

    return (
        <DefaultLayout>
            {goHome ? (<Redirect to="/blog" />) : null}

            {/* page seo  */}
            {data.title ? (
                <Helmet>
                    {/* Primary Meta Tags  */}
                    <title>{data.title}</title>
                    <meta name="title" content={data.title} />
                    <meta name="description" content={data.description} />

                    {/* Open Graph / Facebook  */}
                    <meta property="og:type" content="website" />
                    <meta property="og:url" content={window.location.href} />
                    <meta property="og:title" content={data.title} />
                    <meta property="og:description" content={data.description} />
                    <meta property="og:image" content={data.image} />

                    {/* Twitter  */}
                    <meta property="twitter:card" content="summary_large_image" />
                    <meta property="twitter:url" content={window.location.href} />
                    <meta property="twitter:title" content={data.title} />
                    <meta property="twitter:description" content={data.description} />
                    <meta property="twitter:image" content={data.image} />
                </Helmet>
            ) : null}
            <ThemePanel />
            <div className="container">
                <div className="card-inner active" id="blog-card">
                    <div className="row card-container">
                        {/*
						Card Wrap
					*/}
                        <div className="card-wrap col col-m-12 col-t-12 col-d-8 col-d-lg-6" data-simplebar="init">
                            <div className="simplebar-track vertical" style={{ visibility: 'visible' }}>
                                <div className="simplebar-scrollbar visible" style={{ visibility: 'visible', top: 0, height: 55 }} /></div>
                            <div className="simplebar-track horizontal" style={{ visibility: 'hidden' }}><div className="simplebar-scrollbar" /></div>
                            <div className="simplebar-scroll-content" style={{ paddingRight: 12, marginBottom: '-24px' }}>
                                <div className="simplebar-content" style={{ paddingBottom: 12, marginRight: '-12px' }}>
                                    {/* Blog Image */}
                                    <div className="card-image col col-m-12 col-t-12 col-d-4 col-d-lg-6" style={{ backgroundImage: `url('${data.image}')` }} />
                                    {/* Inner Top */}
                                    <div className="content inner-top">
                                        <div className="row">
                                            <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                <div className="title-bg">Blog Post</div>
                                            </div>
                                        </div>
                                    </div>
                                    {/* Blog Single */}
                                    <div className="content blog-single">
                                        {/* content */}
                                        <div className="row">
                                            <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                <div className="post-box card-box">
                                                    {/* blog detail */}
                                                    <h1>{data.title}</h1>
                                                    <div className="blog-detail">
                                                        <strong>Posted: </strong> {post_date(data.date)} {' | '}
                                                        <strong>Category:</strong> {data.category}
                                                    </div>
                                                    {/* blog content */}
                                                    <div className="blog-content">
                                                        <ReactMarkdown>{data.content}</ReactMarkdown>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                {/* title */}
                                                <div className="title"><span>Post</span> Comments</div>
                                            </div>
                                        </div>
                                        {/* comments */}
                                        {disqus_shortname ? (
                                            <div className="row">
                                                <div className="col col-m-12 col-t-12 col-d-12 col-d-lg-12">
                                                    <div className="post-box card-box">
                                                        {/* comments items */}
                                                        <DiscussionEmbed
                                                            showMedia={true}
                                                            showParentComment={true}
                                                            shortname={disqus_shortname}
                                                            config={
                                                                {
                                                                    url: window.location.href,
                                                                    identifier: data.slug,
                                                                    title: data.title,
                                                                }
                                                            }
                                                        />
                                                    </div>
                                                </div>
                                            </div>
                                        ) : null}

                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </DefaultLayout>
    );
};

export default BlogPost;
