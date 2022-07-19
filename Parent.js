import React from "react";
import Child from "./Child";

export default function Parent(props) {
  return (
    <div>
      {props.customList.map((ele) => {
        return <Child key={ele.id} voterName={ele.voterName} city={ele.city} />;
      })}
      {/* <Child
        voterName={customList[0].voterName}
        city={customList[0].city}
        eligibility={customList[0].eligibility}
      />
      <Child
        voterName={customList[1].voterName}
        city={customList[1].city}
        eligibility={customList[1].eligibility}
      />
      <Child
        voterName={customList[2].voterName}
        city={customList[2].city}
        eligibility={customList[2].eligibility}
      /> */}
    </div>
  );
}
