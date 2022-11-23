import React from "react";
import { Outlet } from "react-router-dom";
import Home from "../home/pages/Home";
import AppWrapper from "./components/AppWrapper";

const AppLayout: React.FC = () => {
  return (
    <AppWrapper>
      <Outlet />
    </AppWrapper>
  );
};

export default AppLayout;
