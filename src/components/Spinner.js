import React, { Component } from "react";
// import loading from "../loading.gif";

export class Spinner extends Component {
  render() {
    return (
      <>
        <div className="text-center my-4">
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        </div>
      </>
    );
  }
}

export default Spinner;
