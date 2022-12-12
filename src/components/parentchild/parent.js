import React, { useEffect, useState } from "react";
import Child from "./child";
import { useNavigate } from "react-router-dom";
import { Button } from "@mui/material";
import { checkValidChilds } from "../../constants/routes";

const Parent = (props) => {
  const [info, setInfo] = useState("hello");
  const router = useNavigate();

  useEffect(() => {
    if (checkValidChilds.includes(info)) {
      router("/");
    }
  }, [info]);

  const parentHandler = (data) => {
    setInfo(data);
  };

  return (
    <div>
      <Child {...props} info={info} handler={parentHandler} />
      <Button variant="outlined" onClick={() => parentHandler("parent")}>
        Parent
      </Button>
    </div>
  );
};

export default Parent;
