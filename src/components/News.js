import React, { useState, useEffect } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";


const News = (props) => {
  const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  const [articles, setArticles] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const [totalResults, setTotalResults] = useState(0)


  const updateNews = async () => {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=${props.numOfArticlesPerPage}`;
    setLoading(true)
    let data = await fetch(url);
    props.setProgress(40);
    let parsedData = await data.json();
    console.log(parsedData);
    props.setProgress(65);

    setArticles(parsedData.articles)
    setTotalResults(parsedData.totalResults)
    setLoading(false)
    props.setProgress(100);
  }

  useEffect(() => {
    document.title = `${capitalizeFirstLetter(props.category)} - SparkPress - Stay informed`
    updateNews();
    // eslint-disable-next-line
  }, [])

  const fetchMoreData = async () => {
    const nextPage = page + 1
    setPage(nextPage)
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${props.apiKey}&page=${nextPage}&pageSize=${props.numOfArticlesPerPage}`;
    setLoading(true)
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    setArticles(articles.concat(parsedData.articles))
    setTotalResults(parsedData.totalResults)
    setLoading(false)
  };

  return (
    <div className="container">
      <h1 style={{ padding: "80px 0px 20px 0px" }}>
        SparkPress - <span style={{ color: "red" }}>Hot Topics for {capitalizeFirstLetter(props.category)}</span>
      </h1>
      <InfiniteScroll
        style={{ overflow: "hidden" }}
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={loading && <Spinner />}
      >
        <div className="row" style={{ paddingBottom: "60px" }}>
          {articles.map((element, index) => {
            return (
              <div className="col-md-4 my-3" key={index}>
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
      </InfiniteScroll>
    </div >
  );
}


// News.defaultProps = {
//   numOfArticlesPerPage: 9,
//   country: "in",
//   category: "general",
// };

News.propTypes = {
  numOfArticlesPerPage: PropTypes.number,
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
