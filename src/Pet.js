import React from "react";

const Pet = props => {
  return (
    <div>
      <h1>{props.name}</h1>
      <h1>{props.breed}</h1>
      <h1>{props.animal}</h1>
      <hr />
    </div>
  );
};

export default Pet;
