import React, { useState } from "react";
import _ from "lodash";

const Reverse = () => {
  const [inputReverseData, setInputReverseData] = useState({
    name: "",
  });

  const [reversenewdata, setReverseNewData] = useState([]);
  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputReverseData({
        ...inputReverseData,
        [e.target.name]: e.target.value,
      });
    }
  };
  let { name } = inputReverseData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setReverseNewData([...reversenewdata, name]);
      setInputReverseData({ name: "" });
    }

    // setInputReverseData({ name: "" });
  };

  const value = reversenewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const reverse = `${_.reverse(value)}`;
  console.log(reverse);

  return (
    <div>
      <label>
        <span style={{ fontSize: "18px", fontWeight: "600" }}>
          Add Value for reverse function :
        </span>
        <input
          name="name"
          value={inputReverseData.name}
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
        {reversenewdata.length > 0 && <p>Reverse value: {reverse}</p>}
      </div>
    </div>
  );
};

export default Reverse;
