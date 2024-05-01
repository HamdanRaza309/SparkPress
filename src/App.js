import React, { Component } from "react";
import Navbar from "./components/Navbar";
import News from "./components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
export default class App extends Component {
  numOfArticlesPerPage = 12;

  state = {
    progress: 0
  }

  setProgress = (progress) => {
    this.setState({ progress: progress })
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color='#f11946'
            progress={this.state.progress}
          />
          <Navbar />
          <Routes>
            <Route
              exact
              path="/"
              element={
                <News setProgress={this.setProgress}
                  key="general"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="general"
                />
              }
            />
            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress}
                  key="business"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="business"
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress}
                  key="entertainment"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="entertainment"
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}
                  key="health"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="health"
                />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress}
                  key="science"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="science"
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}
                  key="sports"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
                  country="in"
                  category="sports"
                />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress}
                  key="technology"
                  numOfArticlesPerPage={this.numOfArticlesPerPage}
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
}
