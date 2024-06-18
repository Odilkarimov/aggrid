// src/components/router/index.jsx
import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import ChartExample from "../agCharts";
import GridExample from "../agGrid";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/chart", element: <ChartExample /> },
      { path: "/aggrid", element: <GridExample /> },
    ],
  },
]);

export default router;
