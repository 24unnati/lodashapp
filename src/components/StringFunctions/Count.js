import React, { useState } from "react";
import _ from "lodash";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";

const Count = () => {
  const [string, setString] = useState("");
  const [character, setCharacter] = useState("");
  const [includesCharacter, setIncludesCharacter] = useState(false);
  const [buttonClicked, setButtonClicked] = useState(false);

  const handleStringChange = (e) => {
    const regex = /^[a-zA-Z\s]*$/;
    if (regex.test(e.target.value)) {
      setString(e.target.value);
    }
  };

  const handleCharacterChange = (e) => {
    const regex = /^[a-zA-Z]*$/;
    if (regex.test(e.target.value)) {
      setCharacter(e.target.value);
    }
  };
  const count = _.countBy(string)[character] || 0;
  const handleSubmit = (e) => {
    e.preventDefault();
    if (string !== "") {
      setIncludesCharacter(count);
      setButtonClicked(true);
      console.log(count);
    }
  };

  return (
    <div>
      <Form.Group className="mb-3 mt-3">
        <Form.Label className="fs-4">
          Count the Character from the string
        </Form.Label>
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
                  htmlFor="input-character"
                >
                  Input Character :
                </Form.Label>
              </span>
              <span>
                <Form.Control
                  className="shadow p-3 mb-2 ms-3 bg-body rounded"
                  placeholder="Enter Alphabetical value..."
                  style={{ width: "500px" }}
                  type="text"
                  id="input-character"
                  value={character}
                  onChange={handleCharacterChange}
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
              Count
            </Button>
          </div>
        </div>
      </Form.Group>

      {buttonClicked && (
        <div className="fs-5 fw-bold my-4">
          {includesCharacter ? (
            <>
              The string has {count} "{character}" characters
            </>
          ) : (
            <>The string has not "{character}" characters</>
          )}
        </div>
      )}
    </div>
  );
};
export default Count;
