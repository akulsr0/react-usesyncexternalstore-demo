import React, { useSyncExternalStore } from "react";

import store from "./Header/store";

function Footer() {
  // Not Updating
  // const counter = store.getState().counterReducer.counter;

  // Updating
  const {
    counterReducer: { counter }
  } = useSyncExternalStore(store.subscribe, store.getState);

  return (
    <footer>
      <h1>Footer</h1>
      <div className="display-counter-wrapper">
        <h2>Counter: {counter}</h2>
      </div>
    </footer>
  );
}

export default Footer;
