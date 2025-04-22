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

      <div>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/EF6fqnnl3Uk?si=yug8674YXDiDzG7e" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
      </div>

      <div>
        <Footer />
      </div>
    </div>
  );
}
