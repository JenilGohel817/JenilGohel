import React from "react";
import { Navigate } from "react-router-dom";

const useCheck = () => {
  const result = localStorage.getItem("JG");
  return result;
};

const PrivateRoute = ({ children }) => {
  const isAuthenticated = useCheck();

  return isAuthenticated ? children : <Navigate to="/" />;
};

export default PrivateRoute;
