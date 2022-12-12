import React from "react";
import { Link } from "react-router-dom";

const First = (props) => {
  const cars = ["Ford", "BMW", "Audi"];

  const hovered = (e, val) => {
    console.log(e.target, val);
  };
  const clickHandler = (e) => {
    console.log(e);
  };

  const fe = <h1>FE</h1>;
  const se = <h1>SE</h1>;

  const De = ({ valid }) => {
    if (valid) {
      return fe;
    } else {
      return se;
    }
  };

  return (
    <div>
      <div
        onClick={clickHandler}
        onMouseEnter={(e) => {
          hovered(e, 135);
        }}
      >
        click me
      </div>
      <Link to="/second">second page</Link>
      <div className="profile">
        <h1>First component {props.xyz} </h1>
        <p>
          {props.content} {props.children}
        </p>
      </div>
      <De valid={false} />
      {false ? <h1>TFE</h1> : <h1>TSE</h1>}
      {false && <h1>AFE</h1>}
      {cars.map((val) => {
        return (
          <div>
            <b>{val}</b>
          </div>
        );
      })}
    </div>
  );
};
export default First;
