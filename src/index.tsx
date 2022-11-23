import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app";
import PageLoader from "./sharedComponents/PageLoader";

import "./styles/main.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <React.Suspense fallback={<PageLoader />}>
      <App />
    </React.Suspense>
  </React.StrictMode>
);
