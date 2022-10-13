import React, { ReactNode } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { userState } from "../recoil";

export const RequireAuth = ({ children }: { children?: React.ReactNode }) => {
  const user = useRecoilValue(userState);
  const location = useLocation();
  return user ? (
    <>{children}</>
  ) : (
    <Navigate to="/login" state={{ from: location }} replace />
  );
};
