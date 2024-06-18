import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';

//pages
import HomePage from "./pages/home.js";
import HomeRtlPage from "./pages/home-rtl.js";
import HomeVideoPage from "./pages/home-video";
import HomeParticlePage from "./pages/home-particles-rtl";
import HomeColorPage from "./pages/home-bgcolor-rtl";
import HomeVideoRtlPage from "./pages/home-video-rtl";
import HomeParticleRtlPage from "./pages/home-particles-rtl";
import HomeColorRtlPage from "./pages/home-bgcolor";
import BlogPage from "./pages/blog";
import BlogRtlPage from "./pages/blog-rtl";
import BlogPost from "./pages/blog-post";
import BlogRtlPost from "./pages/blog-post-rtl";
import { AppProvider } from "./hooks/app";

let history = createBrowserHistory();

function App() {

  const location = window.location;
  ReactGA.initialize("UA-205414774-6");

  useEffect(() => {

    ReactGA.pageview(location.href);

  }, [location]);

  return (
    <AppProvider>
      <BrowserRouter history={history}>
        <Switch>
          {/* <ThemePanel /> */}
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
          <Route exact path="/posts">
            <Redirect to="/blog" />
          </Route>
          <Route exact path="/posts-rtl">
            <Redirect to="/blog-rtl" />
          </Route>

          <Route path="/home" component={HomePage} exact />
          <Route path="/home-video" component={HomeVideoPage} />
          <Route path="/home-particles" component={HomeParticlePage} />
          <Route path="/home-bgcolor" component={HomeColorPage} />
          <Route path="/blog" component={BlogPage} exact />
          <Route path="/blog/:slug" component={BlogPage} />
          <Route path="/posts/:slug" component={BlogPost} />

          <Route path="/home-rtl" component={HomeRtlPage} />
          <Route path="/home-video-rtl" component={HomeVideoRtlPage} />
          <Route path="/home-particles-rtl" component={HomeParticleRtlPage} />
          <Route path="/home-bgcolor-rtl" component={HomeColorRtlPage} />
          <Route path="/blog-rtl" component={BlogRtlPage} exact />
          <Route path="/blog-rtl/:slug" component={BlogRtlPage} />
          <Route path="/posts-rtl/:slug" component={BlogRtlPost} />

          <Route path="*">
            <Redirect to="/" />
          </Route>
        </Switch>
      </BrowserRouter>
      <Toaster />
    </AppProvider>
  );
};

export default App;
