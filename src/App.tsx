import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Header from "./components/header/Header";

const App = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Header />
      <Outlet />
    </Suspense>
  );
};

export { App };
