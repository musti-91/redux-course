import React, { Component } from "react";

const LodaerHOC = WrappedComponent => {
  return class LodaerHOC extends Component {
    render() {
      return this.props.length === 0 ? (
        <div className="loading" />
      ) : (
        <WrappedComponent {...this.props} />
      );
    }
  };
};
export default LodaerHOC;
