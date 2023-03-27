import React, { useEffect, useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Max = () => {
  const [inputMaxData, setInputMaxData] = useState({
    name: "",
  });

  const [maxnewdata, setMaxNewData] = useState([]);

  const value = maxnewdata
    .join(",")
    .split(",")
    .map(function (item) {
      return parseInt(item);
    });

  let max = `${_.max(value)}`;

  console.log({ max });
  console.log({ value });

  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputMaxData({ ...inputMaxData, [e.target.name]: e.target.value });
    }
  };
  let { name } = inputMaxData;

  useEffect(() => {
    console.log("my data", { maxnewdata });
  }, [maxnewdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setMaxNewData([name]);
      //   setInputMaxData({ name: "" });
    }
  };

  console.log({ maxnewdata });
  return (
    <div>
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Find the maximum value</Form.Label>
          <div className="d-flex flex-row mt-3">
            <span>
              {" "}
              <Form.Label className="m-2 fs-5 fw-light" htmlFor="input-string">
                Input Array :{" "}
              </Form.Label>
            </span>
            <span>
              {" "}
              <Form.Control
                className="shadow p-3 mb-2 bg-body rounded"
                style={{ width: "500px" }}
                type="text"
                name="name"
                value={inputMaxData.name}
                onChange={handleChange}
                placeholder="Enter Numeric value..."
              />
            </span>
            <div className="d-flex  align-items-center">
              <Button
                variant="light"
                className="btn btn-outline-success mx-3 btn-lg "
                onClick={handleSubmit}
              >
                Submit
              </Button>
            </div>
          </div>
        </Form.Group>
      </div>

      <div className="fs-5 fw-bold">
        {maxnewdata.length > 0 && <p>Max value: {max}</p>}
      </div>
    </div>
  );
};

export default Max;
