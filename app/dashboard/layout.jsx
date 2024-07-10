import React from "react";
import Sidebar from "../../components/Sidebar";
import "../globals.css";

const DashboardLayout = ({ children }) => {
  return (
    <section className="flex w-full h-full">
      <Sidebar />
      <main>{children}</main>
    </section>
  );
};

export default DashboardLayout;
