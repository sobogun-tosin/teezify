import React from "react";
import { BrowserRouter } from "react-router-dom";
import PageLoader from "src/sharedComponents/PageLoader";

function App() {
  const AppRouter = React.lazy(
    () => import(/* webpackChunkName: "AppRouter" */ "./AppRouter")
  );

  return (
    <BrowserRouter>
      <React.Suspense fallback={<PageLoader />}>
        <AppRouter />
      </React.Suspense>
    </BrowserRouter>
  );
}

export default App;
