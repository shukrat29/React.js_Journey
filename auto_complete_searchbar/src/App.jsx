import React, { useEffect, useState } from "react";

const App = () => {
  const [results, setResults] = useState([]);
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [cache, setChace] = useState({});

  const fetchData = async () => {
    if (cache[input]) {
      console.log("Cach Returned", input);
      setResults(cache[input]);
      return;
    }

    const res = await fetch("https://dummyjson.com/recipes/search?q=" + input);
    const data = await res.json();
    setResults(data.recipes);
    setChace((prev) => ({ ...prev, [input]: json?.recipes }));
  };
  console.log(results);
  useEffect(() => {
    const timer = setTimeout(fetchData, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [input]);

  return (
    <div className="container p-5 ">
      <h1 className="text-2xl text-center">Auto Complete Search Bar</h1>
      <div>
        <input
          type="text"
          value={input}
          placeholder="Search"
          className="p-2 border text-xl border-black rounded-md"
          onChange={(e) => setInput(e.target.value)}
          onFocus={() => setShowResult(true)}
          onBlur={() => setShowResult(false)}
        />
      </div>
      {showResult && (
        <div>
          {results.map((result) => (
            <div key={result.id} className="hover:bg-gray-300">
              {result.name}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default App;
