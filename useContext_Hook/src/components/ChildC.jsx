import React from "react";
import { data, data1 } from "../App";
import { useContext } from "react";

const ChildC = () => {
  const name = useContext(data);
  const gender = useContext(data1);

  return (
    <div>
      <h1>
        My name is {name} and my gender is {gender}
      </h1>
    </div>
  );
};

export default ChildC;
