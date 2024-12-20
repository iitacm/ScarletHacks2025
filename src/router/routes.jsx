import React from "react";
import { MainPage } from "../pages/main";
import { RegisterPage } from "../pages/register";

export const routes = [
  {
    path: "/",
    element: <MainPage />,
  },
  {
    path: "/register",
    element: <RegisterPage />,
  },
];
