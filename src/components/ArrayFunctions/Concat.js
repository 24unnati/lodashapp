import React, { useState, useEffect } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Concat = () => {
  const [inputConcatData, setInputConcatData] = useState({
    name1: "",
    name2: "",
  });

  const [concatnewdata, setConcatNewData] = useState([]);

  const value = concatnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  const concat = `${_.concat(_.uniq(value))}`;
  console.log(concat);

  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputConcatData({
        ...inputConcatData,
        [e.target.name]: e.target.value,
      });
    }
  };
  useEffect(() => {
    console.log("my data", { concatnewdata });
  }, [concatnewdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name1, name2 } = inputConcatData;
    if (name1.trim() !== "" && name2.trim() !== "") {
      setConcatNewData([inputConcatData.name1, inputConcatData.name2]);
      //   setInputConcatData({ name: "" });
    }
  };

  return (
    <div>
      <div className="d-flex flex-row mt-3">
        <Form.Group className="mb-3">
          <Form.Label className="fs-4">Concatenate two values</Form.Label>
          <div className="d-flex flex-row mt-3">
            <span>
              <Form.Label className="m-2 fs-5 fw-light" htmlFor="input-string">
                Input Array :{" "}
              </Form.Label>
            </span>
            <span>
              <Form.Control
                className="shadow p-3 mb-2 bg-body rounded"
                style={{ width: "500px" }}
                type="text"
                name="name1"
                value={inputConcatData.name1}
                onChange={handleChange}
                placeholder="Enter Numeric value..."
              />
            </span>
          </div>
          <div className="d-flex flex-row">
            <span>
              <Form.Label className="m-2 fs-5 fw-light" htmlFor="input-string">
                Input Array :{" "}
              </Form.Label>
            </span>
            <span>
              <Form.Control
                className="shadow-lg p-3 mb-2 bg-body rounded"
                style={{ width: "500px" }}
                type="text"
                name="name2"
                value={inputConcatData.name2}
                onChange={handleChange}
                placeholder="Enter Numeric value..."
              />
            </span>
            <div className="d-flex  align-items-end">
              <Button
                variant="light"
                className="btn btn-outline-success mx-3 btn-lg my-2 "
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form.Group>
      </div>
      <div>
        <div className="fs-5 fw-bold">
          {concatnewdata.length > 0 && <p>Concat value: {concat}</p>}
        </div>
      </div>
    </div>
  );
};

export default Concat;
