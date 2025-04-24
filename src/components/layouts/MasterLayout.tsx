import { Outlet } from "react-router-dom";
import Header from "../header/Header";
import NavBar from "../navbar/Navbar";
import "./style.scss";

const MasterLayout = () => {
  return (
    <>
      <Header />
      <div className="master-layout">
        {" "}
        <NavBar />
        <main className="main">
          <Outlet />
        </main>
      </div>
    </>
  );
};

export default MasterLayout;
