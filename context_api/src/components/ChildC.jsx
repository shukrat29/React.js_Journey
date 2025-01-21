import React from "react";
import { data } from "../App";

const ChildC = () => {
  return (
    <>
      <data.Consumer>
        {(name) => {
          return <h1 className="text-center mt-20">My name is {name}</h1>;
        }}
      </data.Consumer>
    </>
  );
};

export default ChildC;
