import React from "react";
import { Outlet } from "react-router";
import Header from "../components/Header";
import Footer from "../components/Footer";

const RootLayout = () => {
  return (
    <div className="scroll-smooth">
      <header>
        <Header></Header>
      </header>
      <main className="min-h-screen">
        <Outlet></Outlet>
      </main>
      <footer className="bg-base-200">
        <Footer></Footer>
      </footer>
      {/* toast container */}
    </div>
  );
};

export default RootLayout;
