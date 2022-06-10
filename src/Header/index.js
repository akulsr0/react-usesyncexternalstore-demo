import React from "react";
import DisplayCounter from "./DisplayCounter";
import IncrementCounter from "./IncrementCounter";
import DecrementCounter from "./DecrementCounter";

function Header() {
  return (
    <header>
      <h1>Header</h1>
      <br />
      <div className="display-counter-wrapper">
        <DisplayCounter />
      </div>
      <div class="increment">
        <IncrementCounter />
      </div>
      <div class="decrement">
        <DecrementCounter />
      </div>
    </header>
  );
}

export default Header;
