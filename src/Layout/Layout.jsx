import React from "react";
import { Outlet } from "react-router";
import Navbar from "../Components/Navbar/Navbar";

const Layout = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Outlet></Outlet>

      {/* Footer is comming soon */}
    </div>
  );
};

export default Layout;
