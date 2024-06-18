import React from "react";
import { TabPanel } from "react-tabs";
import ThemePanel from "../components/ThemePanel";
import Hero from "../components/Hero";
import About from "../components/About";
import Resume from "../components/Resume";
import Blog from "../components/Blog";
import Contact from "../components/Contact";
import Work from "../components/Work";
import DefaultLayout from "../layouts/default";

const HomePage = () => {

  return (
    <DefaultLayout>
      <ThemePanel />
      <div className="container">

        <TabPanel>
          <Hero type="bgImage" />
        </TabPanel>
        <TabPanel>
          <About />
        </TabPanel>
        <TabPanel>
          <Resume />
        </TabPanel>
        <TabPanel>
          <Work />
        </TabPanel>
        <TabPanel>
          <Blog />
        </TabPanel>
        <TabPanel>
          <Contact />
        </TabPanel>
      </div>
    </DefaultLayout>
  );
};

export default HomePage;
