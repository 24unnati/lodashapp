import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Convert = () => {
  const [string, setString] = useState("");
  const [buttonClicked, setButtonClicked] = useState(false);
  const [isUpperCase, setIsUpperCase] = useState(true);

  const handleStringChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(e.target.value)) {
      setString(e.target.value);
    }
  };

  const handleUppercase = () => {
    if (string !== "") {
      setIsUpperCase(true);
      setButtonClicked(true);
    }
  };

  const handleLowercase = () => {
    if (string !== "") {
      setIsUpperCase(false);
      setButtonClicked(true);
    }
  };

  const uppercaseString = _.toUpper(string);
  const lowercaseString = _.toLower(string);

  return (
    <div style={{ marginRight: "100px" }}>
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="fs-4 ms-5">
          Converting a String into upper & Lowercase
        </Form.Label>
        <div className="d-flex flex-column mt-3 ">
          <div className="my-1 ">
            <div className="d-flex flex-row">
              <span>
                <Form.Label
                  className="m-2 fs-5 ms-5 fw-light"
                  htmlFor="input-string"
                >
                  Input String :{" "}
                </Form.Label>
              </span>
              <span>
                {" "}
                <Form.Control
                  className="shadow p-3 mb-2 ms-5 bg-body rounded"
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
              className="btn btn-outline-success ms-5 btn-lg ms-3 my-3"
              onClick={handleUppercase}
            >
              Uppercase
            </Button>
            <Button
              type="submit"
              variant="light"
              className="btn btn-outline-success  btn-lg ms-3 my-3"
              onClick={handleLowercase}
            >
              Lowercase
            </Button>
          </div>
        </div>
      </Form.Group>

      {buttonClicked && (
        <div className="fs-5 ms-5 fw-bold my-4">
          {isUpperCase ? (
            <p>The string is converted to uppercase "{uppercaseString}"</p>
          ) : (
            <p>The string is converted to lowercase "{lowercaseString}"</p>
          )}
        </div>
      )}
    </div>
  );
};
export default Convert;
