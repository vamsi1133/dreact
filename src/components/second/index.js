import React from "react";
import { Link } from "react-router-dom";

export default class Second extends React.Component {
  render() {
    return (
      <div>
        <Link to="/">First page</Link>
        <h1>Second Component</h1>
      </div>
    );
  }
}
