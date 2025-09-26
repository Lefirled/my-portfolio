"use client";

import Link from "next/link"; 
import React, { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";


const HeroSection = () => {
  const fullText = "Hi! I’m Ayodhya Rifelino,";
  const [displayedText, setDisplayedText] = useState("");

  // Parallax background
  const { scrollY } = useScroll();
  const y = useTransform(scrollY, [0, 500], [0, 50]);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
    className="relative flex flex-col items-center justify-center min-h-screen text-center bg-cover bg-center"
    style={{ backgroundImage: "url('/images/coba.png')" }}
    >

  {/* Overlay gradient transparan */}
  <div className="absolute inset-0 bg-gradient-to-b from-black/0 to-white"></div>
      {/* Button About Me di kanan atas */}
      <Link
      href="/about"
      className="absolute top-6 right-6 bg-white text-blue-700 font-bold px-4 py-2 rounded-lg shadow-lg hover:bg-purple-100 transition z-20"
      >
        About Me
        </Link>


      <div className="absolute inset-100 bg-white/0"></div>

      <div className="relative z-10 flex flex-col md:flex-row items-center gap-8 container mx-auto px-6 md:px-12">
       
        <div className="w-40 h-40 md:w-100 md:h-100  overflow-hidden  shadow-lg">
          <img
            src="/images/Profile.png"
            alt="Ayodhya Rifelino"
            className="w-full h-full object-cover"
          />
        </div>
       
        {/* Text */}
        <div className="max-w-xl text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold monserat mb-4">{displayedText}</h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2, duration: 0.8 }}
            className="text-lg md:text-xl mb-6"
          >
a data enthusiast and aspiring Big Data specialist. I enjoy creating user-centered, data-driven solutions by combining skills in fullstack development, machine learning, and analytics. I believe technology should empower people and make a positive impact.          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="flex flex-wrap justify-center font-bold monserat md:justify-start gap-4"
          >
            <a
              href="#projects"
              className="bg-black text-blue-700 font-bold monserat px-6 py-3 rounded-lg shadow-lg hover:bg-blue-100 transition"
            >
              View My Projects
            </a>
            <a
              href="https://www.linkedin.com/in/ayodhya-rifelino-rifan-rangkuti-17510134a/"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-black text-black font-bold monserat px-6 py-3 rounded-lg hover:bg-black hover:text-blue-700 transition"
            >
              Connect on LinkedIn
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
