import React, { Component } from "react";
import loading from "../loading.gif";

export class Spinner extends Component {
  render() {
    return (
      // <div className="d-flex justify-content-center my-5">
      //   <img src={loading} alt="Loading News" />
      // </div>
      <>
        <div className="text-center">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default Spinner;
