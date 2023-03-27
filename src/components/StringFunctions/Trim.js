import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Trim = () => {
  const [string, setString] = useState("");
  const [trimdata, setTrimdata] = useState(false);
  const handleStringChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(e.target.value)) {
      setString(e.target.value);
    }
  };

  const handleSubmit = () => {
    if (string !== "") {
      setTrimdata(true);
    }
  };

  const trim = _.trim(string).replace(/\s+/g, "");
  console.log(trim);

  return (
    <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="fs-4">
          Remove the whitespace from the string
        </Form.Label>
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

      {trimdata && (
        <div className="fs-5 fw-bold my-4">
          <p>Remove the whitespace from the string "{trim}"</p>
        </div>
      )}
    </div>
  );
};
export default Trim;
