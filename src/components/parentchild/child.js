import { Button } from "@mui/material";
import React, { useEffect, useMemo, useRef, useState } from "react";
import HigherOrderComponent from "../HOC";
import ReduxForms from "../reduxforms";

const getCount = (data) => {
  for (let i = 0; i < 1000000; i++) {
    data += 1;
  }
  console.log("rendered");
  return data;
};

const Child = (props) => {
  const { info, handler, counter, countHandler } = props;
  const count = useMemo(() => getCount(counter), [counter]);

  const myRef = useRef();

  return (
    <div>
      <h5>show data: {info}</h5>
      <Button ref={myRef} variant="contained" onClick={() => handler("child")}>
        Child
      </Button>
      <div>{count}</div>
      <Button onClick={countHandler}>+</Button>
      <ReduxForms />
    </div>
  );
};

export default Child;
