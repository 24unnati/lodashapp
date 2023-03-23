import React, { useState } from "react";
import _ from "lodash";

const Uniq = () => {
  const [inputUniqData, setInputUniqData] = useState({
    name: "",
  });

  const [uniqnewdata, setUniqNewData] = useState([]);
  const handleChange = (e) => {
    setInputUniqData({ ...inputUniqData, [e.target.name]: e.target.value });
  };
  let { name } = inputUniqData;
  const handleSubmit = (e) => {
    e.preventDefault();
    setUniqNewData([...uniqnewdata, name]);
    // setInputUniqData({ name: "" });
  };

  const value = uniqnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const uniq = `${_.uniq(value)}`;
  console.log(uniq);

  return (
    <div>
      <label>
        <span style={{ fontSize: "18px", fontWeight: "600" }}>
          Add Value for uniq function :
        </span>
        <input
          name="name"
          value={inputUniqData.name}
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
        {uniqnewdata.length > 0 && <p>Uniq value: {uniq}</p>}
      </div>
    </div>
  );
};

export default Uniq;
