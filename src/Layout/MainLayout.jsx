import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";

export default function MainLayout() {
  return (
    <div className="font-roboto">
        

        <header className="">
          <Navbar />
        </header>

        <main className="min-h-screen">
          <Outlet />
        </main>

      <div className="">
        <Footer />
      </div>
    </div>
  );
}
