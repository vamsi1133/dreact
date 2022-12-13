import React from "react";

const HigherOrderComponent = (CustomComponent) => {
  return (props) => (
    <div style={{ backgroundColor: "yellow" }}>
      <CustomComponent {...props} />
    </div>
  );
};

export default HigherOrderComponent;
