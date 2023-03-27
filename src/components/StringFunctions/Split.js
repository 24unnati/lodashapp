import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Trim = () => {
  const [string, setString] = useState("");
  const [splitdata, setSplitdata] = useState(false);
  const handleStringChange = (e) => {
    const regex = /^[a-zA-Z,\s]*$/;
    if (regex.test(e.target.value)) {
      setString(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (string !== "") {
      setSplitdata(true);
    }
  };
  // const newstring = "apple,banana,cherry";
  const delimiter = ",";
  const result = _.split(string, delimiter);
  console.log(string);
  console.log("******", result);

  return (
    <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="fs-4">Split a string </Form.Label>
        <div className="d-flex flex-row mt-3">
          <div className="my-1 ">
            <div className="d-flex flex-row">
              <span>
                <Form.Label
                  className="m-2 fs-5 fw-light"
                  htmlFor="input-string"
                >
                  Input String :{" "}
                </Form.Label>
              </span>
              <span>
                {" "}
                <Form.Control
                  className="shadow p-3 mb-2  bg-body rounded"
                  placeholder="Enter Alphabetical value..."
                  style={{ width: "500px" }}
                  type="text"
                  id="input-string"
                  value={string}
                  onChange={handleStringChange}
                />{" "}
              </span>
            </div>
          </div>
          <div className="d-flex  align-items-end">
            <Button
              type="submit"
              variant="light"
              className="btn btn-outline-success  btn-lg ms-3 my-3"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </div>
        </div>
      </Form.Group>

      {splitdata && (
        <div className="fs-5 fw-bold my-4">
          <p>Split a string into an array {JSON.stringify(result)}</p>
        </div>
      )}
    </div>
  );
};
export default Trim;
