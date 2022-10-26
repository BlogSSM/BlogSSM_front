import React from "react";
import { Navigate, useLocation } from "react-router-dom";

export const RequireAuth = ({ children }: { children?: React.ReactNode }) => {
  const user = localStorage.getItem("token");
  const location = useLocation();
  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
