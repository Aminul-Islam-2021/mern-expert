import React from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <main className="pt-20 h-full px-18">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
