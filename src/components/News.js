import React, { Component } from "react";
import NewsItem from "./NewsItem";

export class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf68b97dc464134a44e26219988f53a&page=1&pageSize=${this.props.numOfArticlesPerPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  handleNextClick = async () => {
    console.log("next");

    // here 12 are the number of articles per page
    if (
      Math.ceil(this.state.totalResults / this.props.numOfArticlesPerPage) <
      this.state.page + 1
    ) {
    } else {
      let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf68b97dc464134a44e26219988f53a&page=${
        this.state.page + 1
      }&pageSize=${this.props.numOfArticlesPerPage}`;
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=in&apiKey=fcf68b97dc464134a44e26219988f53a&page=${
      this.state.page - 1
    }&pageSize=${this.props.numOfArticlesPerPage}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ paddingTop: "80px" }}>
          SparkPress - <span style={{ color: "red" }}>Hot Topics</span>
        </h1>
        <div className="row">
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 80) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page <= 1}
            type="button"
            className="btn btn-dark my-2"
            onClick={this.handlePrevClick}
          >
            &laquo; Previous
          </button>

          {/* here 12 are the number of articles per page */}
          <button
            disabled={
              Math.ceil(
                this.state.totalResults / this.props.numOfArticlesPerPage
              ) <
              this.state.page + 1
            }
            type="button"
            className="btn btn-dark my-2"
            onClick={this.handleNextClick}
          >
            Next &raquo;
          </button>
        </div>
      </div>
    );
  }
}

export default News;
