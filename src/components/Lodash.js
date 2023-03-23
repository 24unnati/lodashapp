import React from "react";
import Max from "./Functions/Max";
import Uniq from "./Functions/Uniq";
import Sort from "./Functions/Sort";
import Reverse from "./Functions/Reverse";
import Concat from "./Functions/Concat";

export const Lodash = () => {
  return (
    <div style={{ padding: "3rem" }}>
      <h1 className="my-5">Lodash function</h1>
      <Max />
      <hr />
      <Uniq />
      <hr />
      <Reverse />
      <hr />
      <Sort />
      <hr />
      <Concat />
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
