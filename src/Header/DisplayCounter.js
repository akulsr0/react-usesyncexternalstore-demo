import React from "react";
import { useSelector } from "react-redux";

function DisplayNumber() {
  const { counter } = useSelector((s) => s.counterReducer);
  return <h2>Counter: {counter}</h2>;
}

export default DisplayNumber;
