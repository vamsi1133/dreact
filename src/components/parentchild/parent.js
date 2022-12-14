import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { checkValidChilds } from "../../constants/routes";
const Child = React.lazy(() => import("./child"));

const Parent = (props) => {
  const [info, setInfo] = useState("hello");
  const [counter, setCounter] = useState(1);
  const router = useNavigate();

  useEffect(() => {
    if (checkValidChilds.includes(info)) {
      router("/");
    }
  }, [info]);

  const parentHandler = (data) => {
    setInfo(data);
  };

  const counterHandler = () => {
    setCounter((prev) => prev + 1);
  };

  return (
    <div>
      <Child
        {...props}
        counter={counter}
        countHandler={counterHandler}
        info={info}
        handler={parentHandler}
      />
      <Button variant="outlined" onClick={() => parentHandler("parent")}>
        Parent
      </Button>
    </div>
  );
};

export default Parent;
