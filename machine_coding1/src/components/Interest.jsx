import React from "react";

const Interest = ({ data, setData }) => {
  const { interest } = data;

  const handleChangeData = (e, name) => {
    setData((prevState) => ({
      ...prevState,
      interest: e.target.checked
        ? [...prevState.interest, e.target.name]
        : prevState.interest.filter((i) => i !== e.target.name),
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="coding"
            checked={data.interest.includes("coding")}
            onChange={handleChangeData}
          />
          Coding
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="music"
            checked={data.interest.includes("music")}
            onChange={handleChangeData}
          />
          Music
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="checkbox"
            name="javascript"
            checked={data.interest.includes("javascript")}
            onChange={handleChangeData}
          />
          JavaScript
        </label>
      </div>
    </div>
  );
};

export default Interest;
