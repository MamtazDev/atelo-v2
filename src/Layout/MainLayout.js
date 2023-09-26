import Header from "@/components/Header";
import Sidebar from "@/components/Sidebar";
import React from "react";

const MainLayout = ({ children }) => {
  return (
    <main>
      <Header />
      <section className="flex flex-col md:flex-row">
        <Sidebar />
        {children}
      </section>
    </main>
  );
};

export default MainLayout;
