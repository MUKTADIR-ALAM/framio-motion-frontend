import { motion } from "framer-motion";
import { Database, FileJson, Github, Layout } from "lucide-react";
import premierPro from "../assets/premierPro.png";
import afterEffect from "../assets/afterEffect.png";
import davinci from "../assets/davinci.png";
import capcut from "../assets/capcut.png";
import photoshop from "../assets/photoshop.png";
import ils from "../assets/ills.png";
import ind from "../assets/in.png";
import lite from "../assets/lite.png";
import audi from "../assets/audi.png";
import figma from "../assets/figma.png";
import final from "../assets/final.png";
import word from "../assets/word.png";

export default function SkillsSection() {
  const skills = [
    { name: "Premier Pro", icon: <img src={premierPro} alt="" /> },
    { name: "After Effect", icon: <img src={afterEffect} alt="" /> },
    { name: "Davinci", icon: <img src={davinci} alt="" /> },
    {
      name: "CapCut",
      icon: <img src={capcut} alt="" />,
    },
    {
      name: "Final Cut Pro",
      icon: <img src={final} alt="" />,
    },
    {
      name: "Photoshop",
      icon: <img src={photoshop} alt="" />,
    },
    {
      name: "Illustrator",
      icon: <img src={ils} alt="" />,
    },
    {
      name: "Adobe InDesign",
      icon: <img src={ind} alt="" />
    },
    { name: "Adobe Lightroom", icon: <img src={lite} alt="" /> },
    { name: "Adobe Audition", icon: <img src={audi} alt="" /> },
    {
      name: "Figma",
      icon: <img src={figma} alt="" />,
    },
    {
      name: "Wordpress",
      icon: <img src={word} alt="" />,
    },
  ];

  return (
    <section className="py-20 bg-zinc-950 mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12 text-white tracking-tighter">
          Skills & Technologies
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.name}
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex flex-col items-center justify-center p-6 rounded-lg bg-zinc-900 hover:bg-zinc-800 transition-colors duration-300"
            >
              <div className="relative group">
                <div className="absolute -inset-0.5 rounded-lg blur-sm opacity-30 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-tilt bg-gradient-to-r from-purple-600 to-cyan-500"></div>
                <div className="relative p-4 rounded-lg bg-zinc-900 ring-1 ring-zinc-800">
                  {skill.icon}
                </div>
              </div>
              <span className="mt-4 text-sm font-medium text-zinc-300">
                {skill.name}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
