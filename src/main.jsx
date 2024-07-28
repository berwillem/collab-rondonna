import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/Home/Home";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Subscription from "./pages/Subscription/Subscription";
import SubscriptionDetail from "./pages/SubscriptionDetail/SubscriptionDetail";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/subscription",
    element: <Subscription />,
  },
  {
    path: "/subscription/:detail",
    element: <SubscriptionDetail />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
