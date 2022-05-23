import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeGuest from "./components/HomeGuest";
import About from "./components/About";
import Terms from "./components/Terms";

function Component() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<HomeGuest />} />
        <Route exact path="/about-us" element={<About />} />
        <Route exact path="/terms" element={<Terms />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

ReactDOM.render(<Component />, document.querySelector("#app"));

// loads the new javascript on the fly asynchronously
if (module.hot) {
  module.hot.accept();
}
