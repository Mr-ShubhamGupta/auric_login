import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./Login";
import ForgotPassword from "./ForgotPassword";

import Home from "./Home";

const Routing = (props) => {
  return (
    <Router>
      <Routes>
        <Route exact path="/" caseSensitive={false} element={<Login />} />
        <Route exact path="/Login" caseSensitive={false} element={<Login />} />
        <Route
          exact
          path="/ForgotPassword"
          caseSensitive={false}
          element={<ForgotPassword />}
        />

        <Route exact path="/Home" caseSensitive={false} element={<Home />} />
      </Routes>
    </Router>
  );
};
export default Routing;
