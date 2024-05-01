import React, { Component } from "react";

export class NewsItem extends Component {
  getFirstName = (author) => {
    // Split the input string by commas
    const names = author.split(',');

    // Trim whitespace from each name
    const trimmedNames = names.map(name => name.trim());

    // Return the first name
    return trimmedNames[0];
  }
  render() {
    let { title, description, imageUrl, newsUrl, author, date, source } = this.props;
    return (
      <div>
        <div className="card" style={{
          border: "1px solid #c3c3c3",
          background: "#f9f9f9"
        }}>
          <div
            style={{
              width: "100%",
              height: "180px",
            }}
          >
            <img
              style={{
                width: "100%",
                height: "100%",
                objectFit: "contain",
              }}
              src={
                !imageUrl
                  ? "data:image/png;base64,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"
                  :
                  imageUrl
              }
              className="card-img-top"
              alt="..."
            />
          </div>
          <div className="card-body">
            <h5 className="card-title">
              {title}...
            </h5>
            <h4>
              <span className="badge badge-success">{source}</span>
            </h4>
            <p className="card-text">
              {description
                ? description
                : "Unfortunately, Description is unavailable. Click on read more."}
              ...
            </p>
            <p className="card-text">
              <small className="text-muted">
                By {author ? this.getFirstName(author) : "Unknown"} on{" "}
                {new Date(date).toISOString().split("T")[0]}
              </small>
            </p>

            {/* <p className="card-text">
              <small className="text-muted">
                By {author ? author : "Unknown"} on{" "}
                {new Date(date)
                  .toISOString()
                  .replace(/T/, " ")
                  .replace(/\..+/, "")}
              </small>
            </p> */}

            <a href={newsUrl} target="blank" className="btn btn-sm btn-dark">
              Read More
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
