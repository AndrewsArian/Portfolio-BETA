import gsap from 'gsap';
import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { Tab, TabList, Tabs } from 'react-tabs';
import Loader from '../components/Loader';
import Overlay from '../components/Overlay';
import menu from '../data/menu';
import socials from '../data/socials';
import { useLoading } from '../hooks/app';

function DefaultLayout(props) {

    const [toggleSidebar, setToggleSidebar] = useState(false);
    const [tabIndex, setTabIndex] = useState(0);
    const { isLoading, setLoading } = useLoading();
    const history = useHistory();

    // fadout
    useEffect(() => {

        if (isLoading === false) {
            const tl = gsap.timeline({
                delay: -2,
            });
            tl.to(".intro__overlay-line", {
                duration: 3.5,
                width: "25vw",
                ease: "expo.inOut",
                // delay: -0.8,
            }).to(".intro__overlay-line", {
                duration: 2,
                width: 0,
                ease: "expo.inOut",
                // delay: -0.8,
            }).to(".intro__overlay", { duration: 0, css: { display: "none" } });
        }
    }, [isLoading])

    //hadle tag and page
    const handleSetTab = (index) => {

        const href = window.location.href;

        if (href.includes("/blog") || href.includes("/posts/")) {
            history.push('/home');
        } else {

            setLoading(true);
            const timer = setTimeout(() => {
                setTabIndex(index);
            }, 1000);

            return () => clearTimeout(timer);
        }
    }


    return (
        <React.Fragment>

            {isLoading ? <Loader /> : <Overlay />}

            <Tabs selectedIndex={tabIndex} onSelect={(index) => handleSetTab(index)} as="div" className="page">

                <TabList as="header" className={`${toggleSidebar ? "header opened" : "header"}`}>
                    {/* <!-- logo --> */}
                    <div className="logo">
                        <Link to={`/`}>
                            <span>A</span>
                        </Link>
                    </div>

                    {/* <!-- menu --> */}
                    <div className="top-menu">
                        <ul>
                            {menu && menu.map((item, i) =>
                                <Tab key={i}>
                                    <a href={item.to} onClick={e => e.preventDefault()}>
                                        <span className={item.icon}></span>
                                        <span className="link">{item.title}</span>
                                    </a>
                                </Tab>
                            )}
                        </ul>
                    </div>

                    {/* <!-- Started socials --> */}
                    <div className="social">
                        {socials && socials.map(social =>
                            <a target="_blank" rel="noreferrer" href={social.url} key={social.name}>
                                <span className={social.icon}></span>
                            </a>
                        )}
                    </div>

                    {/* <!-- Mobile Menu --> */}
                    <span className="menu-btn" onClick={() => setToggleSidebar(!toggleSidebar)}>
                        <span className="m-line"></span>
                    </span>
                </TabList>
                {props.children}
            </Tabs>
        </React.Fragment>
    );
}

export default DefaultLayout;

