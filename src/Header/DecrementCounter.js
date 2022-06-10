import React from "react";
import { useDispatch } from "react-redux";

import { TYPES } from "./store";

function DecrementCounter() {
  const dispatch = useDispatch();
  return (
    <button
      onClick={() => {
        dispatch({ type: TYPES.DECREMENT_COUNTER });
      }}
    >
      Decrement
    </button>
  );
}

export default DecrementCounter;
