import React from "react";

export default function Child(props) {
  return (
    <div>
      <h1>
        {props.voterName} {props.city}
      </h1>
    </div>
  );
}
