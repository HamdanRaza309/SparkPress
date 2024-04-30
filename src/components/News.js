import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";

export class News extends Component {
  static defaultProps = {
    numOfArticlesPerPage: 9,
    country: "in",
    category: "general",
  };

  static propTypes = {
    numOfArticlesPerPage: PropTypes.number,
    country: PropTypes.string,
    category: PropTypes.string,
  };

  constructor() {
    super();
    this.state = {
      articles: [],
      loading: false,
      page: 1,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=fcf68b97dc464134a44e26219988f53a&page=1&pageSize=${this.props.numOfArticlesPerPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
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
      let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
        }&category=${this.props.category
        }&apiKey=fcf68b97dc464134a44e26219988f53a&page=${this.state.page + 1
        }&pageSize=${this.props.numOfArticlesPerPage}`;
      this.setState({ loading: true });
      let data = await fetch(url);
      let parsedData = await data.json();
      console.log(parsedData);

      this.setState({
        page: this.state.page + 1,
        articles: parsedData.articles,
        loading: false,
      });
    }
  };

  handlePrevClick = async () => {
    console.log("prev");
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country
      }&category=${this.props.category
      }&apiKey=fcf68b97dc464134a44e26219988f53a&page=${this.state.page - 1
      }&pageSize=${this.props.numOfArticlesPerPage}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);

    this.setState({
      page: this.state.page - 1,
      articles: parsedData.articles,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h1 style={{ padding: "80px 0px 20px 0px" }}>
          SparkPress - <span style={{ color: "red" }}>Hot Topics</span>
        </h1>
        {this.state.loading && <Spinner />}
        <div className="row" style={{ paddingBottom: "60px" }}>
          {this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 40) : ""}
                  description={
                    element.description ? element.description.slice(0, 50) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between fixed-bottom">
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
