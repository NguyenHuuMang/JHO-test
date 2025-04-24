import { Suspense } from "react";
import { Outlet } from "react-router-dom";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Outlet />
    </Suspense>
  );
};

export { App };
