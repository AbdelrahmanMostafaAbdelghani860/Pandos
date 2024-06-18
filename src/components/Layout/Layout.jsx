import React from "react";
import Mainheader from "./header/Mainheader";
import { Outlet } from "react-router-dom";
import Footer from "./footer/Footer";

function Layout() {
  return (
    <>
      <Mainheader />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
}

export default Layout;
