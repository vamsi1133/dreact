import { Avatar } from "@mui/material";
import React, { useState, useEffect, useRef } from "react";
import "./stateDemo.css";
import Classes from "./stateDemo1.module.css";

const StateDemo = (props) => {
  const [counter, setCounter] = useState({ value: 0 });
  const [data, setData] = useState([]);
  const myRef = useRef();
  const myRefCounter = useRef(0);

  const increment = () => {
    setCounter((prev) => {
      return { value: prev.value + 1 };
    });
  };

  useEffect(() => {
    fetch(`https://6386f493e399d2e473f07b68.mockapi.io/api/user`)
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    if (counter.value > 0) {
      fetch(
        `https://6386f493e399d2e473f07b68.mockapi.io/api/user?id=${counter.value}`
      )
        .then((res) => res.json())
        .then((data) => setData(data))
        .catch((err) => console.log(err));

      const element = myRef.current;
      if (element.querySelector("#a1")) {
        element.querySelector("#a1").style.color = "red";
      }
    }
    console.log(counter, myRefCounter.current);
    myRefCounter.current = counter;
  }, [counter, myRefCounter]);

  const decrement = () => {
    setCounter((prev) => ({
      value: prev.value - 1,
    }));
  };

  const eventHandler = (e, msg) => {
    console.log(e.target.id, msg);
  };

  const ShowData = () => {
    if (counter.value >= 0) {
      return (
        <ul ref={myRef}>
          {data.map((val) => {
            return (
              <>
                <li>
                  <b>{val.id} </b>
                  <span>{val.name}</span>
                  <Avatar alt="Remy Sharp" src={val.avatar} />
                </li>
              </>
            );
          })}
        </ul>
      );
    } else {
      return <span> Data is not available for negative values</span>;
    }
  };
  return (
    <>
      <div className={Classes.profile1}>{counter.value}</div>
      <button onClick={increment}>increment</button>
      <button onClick={decrement}>decrement</button>
      <div id="p" onClick={(e) => eventHandler(e, "my message")}>
        <div id="c1" style={{ backgroundColor: "red", color: "yellow" }}>
          click me 1
        </div>
        <div id="c2" style={{ backgroundColor: "blue", color: "yellow" }}>
          click me 2
        </div>
      </div>
      <div>
        {/* <ShowData /> */}
        {counter.value >= 0 ? (
          <ul className="profile" id="ref" ref={myRef}>
            {data.map((val) => (
              <li id={`a${val.id}`} key={val.id}>
                <Avatar alt={val.name} src={val.avatar} />
                <b>{val.id} </b>
                <span>{val.name}</span>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
      </div>
    </>
  );
};

export default StateDemo;
