import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { api } from "../../utils/api";

export default function PrivateRoute() {
  const { user } = useSelector((state) => state.user);

  return user != null ? <Outlet /> : <Navigate to="/signin" />;
}
