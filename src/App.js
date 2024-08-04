import React, { useState } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

const App = () => {
  const numOfArticlesPerPage = 12;
  const apiKey = process.env.REACT_APP_NEWS_APIKEY;
  // eslint-disable-next-line
  const [progress, setProgress] = useState(0);


  return (
    <div>
      <Router>
        <LoadingBar
          color='#f11946'
          setProgress={setProgress}
        />
        <Navbar />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="general"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="business"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="entertainment"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="health"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="health"
              />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="science"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="sports"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="sports"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News setProgress={setProgress} apiKey={apiKey}
                key="technology"
                numOfArticlesPerPage={numOfArticlesPerPage}
                country="in"
                category="technology"
              />
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;