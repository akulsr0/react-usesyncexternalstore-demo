import React from "react";
import { Provider } from "react-redux";
import "./styles.css";

import Header from "./Header";
import Footer from "./Footer";

import store from "./Header/store";

export default function App() {
  return (
    <div className="container">
      <Provider store={store}>
        <Header />
      </Provider>
      <Footer />
    </div>
  );
}
