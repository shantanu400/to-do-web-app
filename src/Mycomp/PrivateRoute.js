import React from "react";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ isUserLoggedIn, children }) => {
 // console.log("hello", isUserLoggedIn);
  return isUserLoggedIn ? children : <Navigate to="/login" />;
};

export default PrivateRoute;
