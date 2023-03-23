import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Concat = () => {
  const [inputConcatData, setInputConcatData] = useState({
    name1: "",
    name2: "",
  });

  const [concatnewdata, setConcatNewData] = useState([]);

  //   const handleChange = (e) => {
  //     setInputConcatData({ ...inputConcatData, [e.target.name]: e.target.value });
  //   };

  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputConcatData({
        ...inputConcatData,
        [e.target.name]: e.target.value,
      });
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    const { name1, name2 } = inputConcatData;
    if (name1.trim() !== "" && name2.trim() !== "") {
      setConcatNewData([
        ...concatnewdata,
        inputConcatData.name1,
        inputConcatData.name2,
      ]);
      //   setInputConcatData({ name: "" });
    }
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
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Concatenate two values</Form.Label>
          <Form.Control
            className="shadow p-3 mb-2 bg-body rounded"
            style={{ width: "500px" }}
            type="text"
            name="name1"
            value={inputConcatData.name1}
            onChange={handleChange}
            placeholder="Enter Numeric value..."
            aria-label="First name"
          />
          <Form.Control
            className="shadow-lg p-3 mb-2 bg-body rounded"
            style={{ width: "500px" }}
            type="text"
            name="name2"
            value={inputConcatData.name2}
            onChange={handleChange}
            placeholder="Enter Numeric value..."
            aria-label="Last name"
          />
        </Form.Group>
        <div className="d-flex  align-items-end">
          <Button
            variant="light"
            className="btn btn-outline-success mx-3 btn-lg my-4"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>
      <div>
        <div className="fs-4 fw-bold">
          {concatnewdata.length > 0 && <p>Concat value: {concat}</p>}
        </div>
      </div>
    </div>
  );
};

export default Concat;
