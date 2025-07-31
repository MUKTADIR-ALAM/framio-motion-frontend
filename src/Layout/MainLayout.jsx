import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import { Outlet } from "react-router";
import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect } from "react";
import vdo from '../assets/videos/vdo.mp4'
import './MainLayout.css';

export default function MainLayout() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const smoothX = useSpring(mouseX, { stiffness: 600, damping: 40 });
  const smoothY = useSpring(mouseY, { stiffness: 600, damping: 40 });

  useEffect(() => {
    const move = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, [mouseX, mouseY]);

  return (
    <div className="font-roboto bg-black main">
      {/* <motion.div
        className="pointer-events-none fixed z-50 w-5 h-5 rounded-full bg-theme "
        style={{
          translateX: smoothX,
          translateY: smoothY,
          x: "-50%",
          y: "-50%",
        }}
      /> */}
      <video className="video" src={vdo} autoPlay loop muted />
      <div className="content">
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
    </div>
  );
}
