import React, { useState } from "react";
import _ from "lodash";

const Uniq = () => {
  const [inputSortData, setInputSortData] = useState({
    name: "",
  });

  const [sortnewdata, setSortNewData] = useState([]);
  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputSortData({ ...inputSortData, [e.target.name]: e.target.value });
    }
  };

  let { name } = inputSortData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setSortNewData([...sortnewdata, name]);
      setInputSortData({ name: "" });
    }
    // setInputSortData({ name: "" });
  };

  const value = sortnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const sortBy = `${_.sortBy(value)}`;
  const sortByAce = `${_.sortBy(value, (Number) => +Number)}`;
  const sortByDec = `${_.sortBy(value, (Number) => -Number)}`;

  console.log(sortBy);

  return (
    <div>
      <label>
        <span style={{ fontSize: "18px", fontWeight: "600" }}>
          Add Value for sortBy function :
        </span>
        <input
          name="name"
          value={inputSortData.name}
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
        {sortnewdata.length > 0 && <p>Sort value: {sortBy}</p>}
        {sortnewdata.length > 0 && <p>Decending value: {sortByDec}</p>}
        {sortnewdata.length > 0 && <p>Acending value: {sortByAce}</p>}
      </div>
    </div>
  );
};

export default Uniq;
