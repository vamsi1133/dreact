import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Second from "./components/second";
import First from "./components/first";
import StateDemo from "./components/statedemo";
import ClassDemo from "./components/classDemo";
import Forms from "./components/Forms";
import Parent from "./components/parentchild/parent";

const CustomRouter = () => {
  const routes = [
    { path: "/", element: <StateDemo /> },
    { path: "/first", element: <First /> },
    { path: "/second", element: <Second /> },
    { path: "/class", element: <ClassDemo /> },
    { path: "/forms", element: <Forms /> },
    { path: "/pc", element: <Parent parentName={"Custom Router"} id={1} /> },
  ];

  return (
    <Router>
      <Routes>
        {routes.map((val) => (
          <Route path={val.path} element={val.element} />
        ))}
      </Routes>
    </Router>
  );
};

export default CustomRouter;
