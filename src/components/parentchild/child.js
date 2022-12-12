import { Button } from "@mui/material";
import React, { useEffect, useRef, useState } from "react";

const Child = (props) => {
  const { info, handler } = props;
  const [style, setStyle] = useState({
    background: "red",
  });
  const myRef = useRef();

  useEffect(() => {
    if (info === "parent") {
      console.log(myRef.current.querySelector(".MuiButton-root"));
      setStyle({ background: "yellow" });
    }
  }, [info]);

  console.log(props);

  return (
    <div>
      <h5 style={style}>show data: {info}</h5>
      <Button ref={myRef} variant="contained" onClick={() => handler("child")}>
        Child
      </Button>
    </div>
  );
};

export default Child;
