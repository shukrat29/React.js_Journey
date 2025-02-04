import Profile from "./Profile";
import Interest from "./Interest";
import Settings from "./Settings";
import { useState } from "react";

export const TabForm = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [data, setData] = useState({
    name: "Shukra",
    age: "20",
    email: "shukratamang.npl@gmail.com",
    interest: ["music", "coding"],
    theme: ["dark", "light"],
  });
  const tabs = [
    {
      name: "Profile",
      component: Profile,
    },
    {
      name: "Interest",
      component: Interest,
    },
    {
      name: "Settings",
      component: Settings,
    },
  ];

  const ActiveTabComponent = tabs[activeTab].component;

  const handlePreviousClick = () => {
    setActiveTab(activeTab - 1);
  };

  const handleNextClick = () => {
    setActiveTab(activeTab + 1);
  };

  const handleSubmitClick = () => {
    window.alert("Form Submitted successfully");
  };

  return (
    <div>
      <h1>Tab Form</h1>
      <div className="heading-container">
        {tabs.map((tab, index) => (
          <div
            className="heading"
            key={index}
            onClick={() => setActiveTab(index)}
          >
            {tab.name}
          </div>
        ))}
      </div>
      <div className="form-container">
        <ActiveTabComponent data={data} setData={setData} />
      </div>
      <div className="footer-btn">
        <div>
          {activeTab > 0 && (
            <button onClick={handlePreviousClick}>Previous</button>
          )}
        </div>
        <div>
          {activeTab < tabs.length - 1 && (
            <button onClick={handleNextClick}>Next</button>
          )}
        </div>
        <div>
          {activeTab === tabs.length - 1 && (
            <button onClick={handleSubmitClick}>Submit</button>
          )}
        </div>
      </div>
    </div>
  );
};
