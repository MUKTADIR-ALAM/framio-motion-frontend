import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";

export default function MainLayout() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 200, damping: 20 });
  const smoothY = useSpring(mouseY, { stiffness: 200, damping: 20 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="font-roboto bg-black">
      <motion.div
        className="pointer-events-none fixed z-50 w-4 h-4 rounded-full bg-white mix-blend-difference"
        style={{
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      />
      <header>
        <Navbar />
      </header>

      <main className="min-h-screen">
        <Outlet />
      </main>

      <div>
        <Footer />
      </div>
    </div>
  );
}
