import React, { useState } from "react";
import _ from "lodash";

const Concat = () => {
  const [inputConcatData, setInputConcatData] = useState({
    name1: "",
    name2: "",
  });

  const [concatnewdata, setConcatNewData] = useState([]);

  const handleChange = (e) => {
    setInputConcatData({ ...inputConcatData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setConcatNewData([
      ...concatnewdata,
      inputConcatData.name1,
      inputConcatData.name2,
    ]);
    // setInputConcatData({ name1: "", name2: "" });
  };

  const value = concatnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const concat = `${_.concat(_.uniq(value))}`;
  console.log(concat);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>
          <span style={{ fontSize: "18px", fontWeight: "600" }}>
            Add Value for concat function :
          </span>
          <input
            name="name1"
            value={inputConcatData.name1}
            onChange={handleChange}
            type="text"
            placeholder="Enter value like 1,2,... "
            style={{
              height: "30px",
              width: "300px",
              fontSize: "20px",
              margin: "20px",
            }}
          />
          <input
            name="name2"
            value={inputConcatData.name2}
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
            type="submit"
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
      </form>
      <div style={{ fontSize: "18px", fontWeight: "500" }}>
        {concatnewdata.length > 0 && <p>concat value: {concat}</p>}
      </div>
    </div>
  );
};

export default Concat;
