"use client";
import React, { useState, useEffect } from "react";
import Sidebar from "../../components/Sidebar";
import Header from "../../components/Header";
import "../globals.css";

const DashboardLayout = ({ children }) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className={`w-full h-full ${isMobile ? "" : "flex"} `}>
      {isMobile ? <Header /> : <Sidebar />}
      <main className="w-full overflow-y-auto">{children}</main>
    </section>
  );
};

export default DashboardLayout;
