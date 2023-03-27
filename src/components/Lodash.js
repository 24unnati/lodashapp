import React from "react";
import Max from "./ArrayFunctions/Max";
import Uniq from "./ArrayFunctions/Uniq";
import Sort from "./ArrayFunctions/Sort";
import Reverse from "./ArrayFunctions/Reverse";
import Concat from "./ArrayFunctions/Concat";
import Include from "./StringFunctions/Include";
import Count from "./StringFunctions/Count";
import Convert from "./StringFunctions/Convert";
import Trim from "./StringFunctions/Trim";
import Split from "./StringFunctions/Split";

export const Lodash = () => {
  return (
    <div style={{ padding: "2rem" }}>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          <h2 className="my-5">Lodash Array function</h2>
          <Max />{" "}
        </span>
        <span>
          <h2 className="my-5">Lodash String function</h2>
          <Split />
        </span>
      </div>
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          {" "}
          <Uniq />
        </span>
        <span>
          <Trim />
        </span>
      </div>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          {" "}
          <Reverse />
        </span>
        <span>
          <Convert />
        </span>
      </div>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          {" "}
          <Sort />
        </span>
        <span>
          <Count />
        </span>
      </div>

      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "space-evenly",
        }}
      >
        <span>
          <Concat />
        </span>
        <span>
          <Include />
        </span>
      </div>
    </div>
  );
};

// const chunk = `${JSON.stringify(_.chunk(value, 2))}`;
// console.log(chunk);

// const groupBy = `${JSON.stringify(_.groupBy(value))}`;
// console.log(groupBy);

// <div>{newdata.length > 0 && <p>Chunk value : {chunk}</p>}</div>
// <div>
//   {newdata.length > 0 && <p>Group value: {Object.values(groupBy)}</p>}
// </div>
