import { createBrowserRouter, RouterProvider } from "react-router";

import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import Home from "./Sections/Home/Home.jsx";
import ProjectDetails from "./Sections/ProjectDetail/ProjectDetails.jsx";
import Layout from "./Layout/Layout.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout></Layout>,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/projects/:id",
        Component: ProjectDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />,
  </StrictMode>
);
