import React from "react";
import DBNavbar from "./DBNavbar";
import DBSidebar from "./DBSidebar";
import { Outlet } from "react-router-dom";

const DBLayout = () => {
  return (
    <div>
      <DBNavbar />
      <DBSidebar />
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default DBLayout;
