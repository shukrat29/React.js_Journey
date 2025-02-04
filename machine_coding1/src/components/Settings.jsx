import React from "react";

const Settings = ({ data, setData }) => {
  const { theme } = data;

  const handleChangeData = (e) => {
    setData((prevState) => ({
      ...prevState,
      theme: e.target.name,
    }));
  };

  return (
    <div>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="dark"
            checked={theme === "dark"}
            onChange={handleChangeData}
          />
          Dark
        </label>
      </div>
      <div>
        <label htmlFor="">
          <input
            type="radio"
            name="light"
            checked={theme === "light"}
            onChange={handleChangeData}
          />
          Light
        </label>
      </div>
    </div>
  );
};

export default Settings;
