import React from "react";

const Profile = ({ data, setData }) => {
  const { name, email, age } = data;

  const handleChangeData = (e, item) => {
    setData((prevState) => ({
      ...prevState,
      [item]: e.target.value,
    }));
  };

  return (
    <div className="profile">
      <div>
        <label htmlFor="">Name</label>
        <input
          type="text"
          value={name}
          onChange={(e) => handleChangeData(e, "name")}
        />
      </div>
      <div>
        <label htmlFor="">Email</label>
        <input
          type="text"
          value={email}
          onChange={(e) => handleChangeData(e, "email")}
        />
      </div>
      <div>
        <label htmlFor="">Age</label>
        <input
          type="number"
          value={age}
          onChange={(e) => handleChangeData(e, "age")}
        />
      </div>
    </div>
  );
};

export default Profile;
