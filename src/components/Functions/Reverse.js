import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
    //   setInputReverseData({ name: "" });
    }

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
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Reverse the values</Form.Label>
          <Form.Control
            className="shadow p-3 mb-2 bg-body rounded"
            style={{ width: "500px" }}
            type="text"
            name="name"
            value={inputReverseData.name}
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
        {reversenewdata.length > 0 && <p>Reverse value: {reverse}</p>}
      </div>
    </div>
  );
};

export default Reverse;
