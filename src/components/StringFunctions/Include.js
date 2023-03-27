import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Include = () => {
  const [string, setString] = useState("");
  const [substring, setSubstring] = useState("");
  const [includesSubstring, setIncludesSubstring] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleStringChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(e.target.value)) {
      setString(e.target.value);
    }
  };

  const handleSubstringChange = (e) => {
    const regex = /^[a-zA-Z \s]*$/;
    if (regex.test(e.target.value)) {
      setSubstring(e.target.value);
    }
  };
  const include = _.includes(string, substring);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (string !== "") {
      setIncludesSubstring(include);
      setButtonClicked(true);
      console.log(include);
    }
  };

  return (
    <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="fs-4">Check the Substring</Form.Label>
        <div className="d-flex flex-row mt-3">
          <div className="my-1">
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

            <div className="d-flex flex-row">
              <span>
                <Form.Label
                  className=" m-2 fs-5 fw-light"
                  htmlFor="input-substring"
                >
                  Input Substring :
                </Form.Label>
              </span>
              <span>
                <Form.Control
                  className="shadow p-3 mb-2 ms-3 bg-body rounded"
                  placeholder="Enter Alphabetical value..."
                  style={{ width: "500px" }}
                  type="text"
                  id="input-substring"
                  value={substring}
                  onChange={handleSubstringChange}
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
              Check
            </Button>
          </div>
        </div>
      </Form.Group>

      {buttonClicked && (
        <div className="fs-5 fw-bold my-4">
          {includesSubstring ? (
            <>
              The string "{string}" includes the substring "{substring}".
            </>
          ) : (
            <>
              The string "{string}" does not include the substring "{substring}
              ".
            </>
          )}
        </div>
      )}
    </div>
  );
};
export default Include;
