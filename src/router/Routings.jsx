import React, { Suspense } from "react";
import { Routes, Route } from "react-router-dom";

import { routes } from "./routes";

const Routings = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path} />
        ))}
      </Routes>
    </Suspense>
  );
};

export default Routings;
