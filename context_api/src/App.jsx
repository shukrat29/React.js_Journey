import React, { createContext } from "react";
import ChildA from "./components/ChildA";

const data = createContext();
const App = () => {
  const name = "Shukra Tamang";

  return (
    <>
      <data.Provider value={name}>
        <ChildA />
      </data.Provider>
    </>
  );
};

export default App;
export { data };
