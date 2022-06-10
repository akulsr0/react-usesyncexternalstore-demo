import React from "react";
import { useDispatch } from "react-redux";

import { TYPES } from "./store";

function IncrementCounter() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch({ type: TYPES.INCREMENT_COUNTER });
      }}
    >
      Increment
    </button>
  );
}

export default IncrementCounter;
