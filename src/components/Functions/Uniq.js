import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Uniq = () => {
  const [inputUniqData, setInputUniqData] = useState({
    name: "",
  });

  const [uniqnewdata, setUniqNewData] = useState([]);
  const handleChange = (e) => {
    const regex = /^[0-9,\s]*$/; // regex to allow only numbers, commas and spaces
    if (regex.test(e.target.value)) {
      setInputUniqData({ ...inputUniqData, [e.target.name]: e.target.value });
    }
  };
  let { name } = inputUniqData;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setUniqNewData([...uniqnewdata, name]);
      //   setInputUniqData({ name: "" });
    }
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
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Remove the duplicate values</Form.Label>
          <Form.Control
            className="shadow p-3 mb-2 bg-body rounded"
            style={{ width: "500px" }}
            type="text"
            name="name"
            value={inputUniqData.name}
            onChange={handleChange}
            placeholder="Enter Numeric value..."
          />
          {/* <Form.Text className="text-muted">Type numeric value only</Form.Text> */}
        </Form.Group>
        <div className="d-flex  align-items-center">
          <Button
            variant="light"
            className="btn btn-outline-success mx-3 btn-lg my-5"
            onClick={handleSubmit}
          >
            Submit
          </Button>
        </div>
      </div>

      <div className="fs-4 fw-bold">
        {uniqnewdata.length > 0 && <p>Uniq value: {uniq}</p>}
      </div>
    </div>
  );
};

export default Uniq;
