import React from "react";
import { Link } from "react-router-dom";

const DBNavbar = () => {
  return (
    <div>
      DB Navbar
      <Link to="/dashboard">Dashboard</Link>
      <Link to="/dashboard/db-products">Products</Link>
    </div>
  );
};

export default DBNavbar;
