import React from "react";
import { Navigate, useRoutes } from "react-router-dom";
import PageNotFound from "src/modules/404/page";
import AppLayout from "src/modules/app-layout";
import Home from "src/modules/home/pages/Home";
import PageLoader from "src/sharedComponents/PageLoader";
import * as PAGE_URL from "../config";
import Introduction from "../modules/Introduction";

const AppRouter = () => {
  return useRoutes([
    {
      path: "/",
      element: (
        <React.Suspense fallback={<PageLoader />}>
          <AppLayout />
        </React.Suspense>
      ),
      children: [
        {
          index: true,
          element: <Navigate replace to={PAGE_URL.homePageRoute} />,
        },
        {
          path: PAGE_URL.homePageRoute,
          element: <Home />,
        },
      ],
    },
    {
      path: PAGE_URL.introductionPageRoute,
      element: <Introduction />,
    },
    {
      path: "/*",
      element: <Navigate to={PAGE_URL.pageNotFoundRoute} replace />,
    },
    {
      path: PAGE_URL.pageNotFoundRoute,
      element: <PageNotFound />,
    },
  ]);
};

export default AppRouter;
