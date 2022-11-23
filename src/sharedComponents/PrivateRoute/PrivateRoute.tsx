import React from "react";
import { Navigate } from "react-router-dom";
import { authRoute } from "src/config";

interface PrivateRouteProps {
  component: React.ComponentType;
}

const PrivateRoute: React.FC<PrivateRouteProps> = ({
  component: Component,
}) => {
  const isLoggedIn = false;

  if (!isLoggedIn) {
    return <Navigate replace to={authRoute} />;
  }
  return <React.Suspense>{Component && <Component />}</React.Suspense>;
};

export default PrivateRoute;
