import React from "react";
import useAuth from "../hooks/useAuth";
import Loader from "../components/Loader";
import { Navigate, useLocation } from "react-router";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const location = useLocation();

  // show loader while checking auth
  if (loading) {
    return <Loader />;
  }

  // if not logged in → redirect
  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  // if logged in → show content
  return children;
};

export default PrivateRoute;
