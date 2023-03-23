import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

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
      //   setInputSortData({ name: "" });
    }
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
      <div className="d-flex flex-row">
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label className="fs-4">Sort the values </Form.Label>
          <Form.Control
            className="shadow p-3 mb-2 bg-body rounded"
            style={{ width: "500px" }}
            type="text"
            name="name"
            value={inputSortData.name}
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
        {sortnewdata.length > 0 && <p>Sort value: {sortBy}</p>}
        {sortnewdata.length > 0 && <p>Decending value: {sortByDec}</p>}
        {sortnewdata.length > 0 && <p>Acending value: {sortByAce}</p>}
      </div>
    </div>
  );
};

export default Uniq;
