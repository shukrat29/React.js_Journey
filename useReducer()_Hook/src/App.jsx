import { useReducer } from "react";

const App = () => {
  const reducer = (state, action) => {
    if (action.type === "Increment") {
      return state + 1;
    }
    if (action.type === "Decrement") {
      return state - 1;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);
  return (
    <div className="flex flex-col items-center">
      <h1 className="mt-5 mb-5 font-bold">Counter App</h1>
      <div className="border p-10 bg-gray-100">
        <button
          className="p-2 border text-xl mr-4 font-bold"
          onClick={() =>
            dispatch({
              type: "Increment",
            })
          }
        >
          Increment
        </button>
        {count}
        <button
          className="p-2 border ml-4 text-xl font-bold"
          onClick={() =>
            dispatch({
              type: "Decrement",
            })
          }
        >
          Decrement
        </button>
      </div>
    </div>
  );
};

export default App;
