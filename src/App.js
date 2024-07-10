import React, { useEffect } from "react";
import { Route, Switch, BrowserRouter, Redirect } from "react-router-dom";
import { Toaster } from 'react-hot-toast';
import { createBrowserHistory } from "history";
import ReactGA from 'react-ga';

//pages
import HomePage from "./pages/home.js";
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
          <Route path="/" component={HomePage} exact />
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
