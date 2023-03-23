import React, { useState } from "react";
import _ from "lodash";

const Max = () => {
  const [inputMaxData, setInputMaxData] = useState({
    name: "",
  });

  const [maxnewdata, setMaxNewData] = useState([]);

  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputMaxData({ ...inputMaxData, [e.target.name]: e.target.value });
    }
  };
  let { name } = inputMaxData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setMaxNewData([...maxnewdata, name]);
      setInputMaxData({ name: "" });
    }
    // setInputMaxData({ name: "" });
  };

  const value = maxnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const max = `${_.max(value)}`;
  console.log(max);

  return (
    <div>
      <label>
        <span style={{ fontSize: "18px", fontWeight: "600" }}>
          Add Value for max function :
        </span>
        <input
          name="name"
          value={inputMaxData.name}
          onChange={handleChange}
          type="text"
          placeholder="Enter value like 1,2,... "
          style={{
            height: "30px",
            width: "300px",
            fontSize: "20px",
            margin: "30px",
          }}
        />
        <button
          onClick={handleSubmit}
          style={{
            height: "30px",
            width: "100px",
            fontSize: "20px",
            backgroundColor: "blue",
            color: "white",
          }}
        >
          Submit
        </button>
      </label>
      <div style={{ fontSize: "18px", fontWeight: "500" }}>
        {maxnewdata.length > 0 && <p>Max value: {max}</p>}
      </div>
    </div>
  );
};

export default Max;
