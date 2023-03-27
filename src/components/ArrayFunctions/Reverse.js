import React, { useState, useEffect } from "react";
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

  useEffect(() => {
    console.log("my data", { reversenewdata });
  }, [reversenewdata]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.trim() !== "") {
      setReverseNewData([name]);
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
    <div style={{ marginLeft: "40px" }}>
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Reverse the values</Form.Label>
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
                name="name"
                value={inputReverseData.name}
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
          </div>{" "}
        </Form.Group>
      </div>

      <div className="fs-5 fw-bold">
        {reversenewdata.length > 0 && <p>Reverse value: {reverse}</p>}
      </div>
    </div>
  );
};

export default Reverse;
