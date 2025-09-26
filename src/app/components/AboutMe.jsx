"use client";

import { motion } from "framer-motion";
import { FaWhatsapp, FaEnvelope, FaLinkedin, FaInstagram } from "react-icons/fa";

const timeline = [
  {
    title: "Universitas Multimedia Nusantara (UMN)",
    subtitle: "Bachelor of Information Systems, Big Data Specialization",
    year: "2022 – Present",
  },
  {
    title: "SMA Negeri 23 Kab.Tangerang",
    subtitle: "Science Major",
    year: "2019 – 2022",
  },
];

export default function AboutMe() {
  return (
    <section className="min-h-screen bg-white text-gray-900 py-20 px-6 md:px-24">
      <div className="max-w-4xl mx-auto">
        {/* Judul */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold mb-8"
        >
          About Me
        </motion.h1>

        {/* Narasi */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="text-lg leading-relaxed mb-10"
        >
          I’m deeply passionate about data, web development, and AI-driven solutions. 
          From my early curiosities in understanding how data shapes decisions, 
          I’ve grown into a tech practitioner focused on building tools that empower users.
          <br /><br />
          During my journey as a student of Information Systems with a specialization 
          in Big Data, I’ve worked on impactful projects like{" "}
          <b>TanyaVara (AI Chatbot UMN)</b>, <b>Ecotech</b>, and <b>Travel Hood</b>. 
          In these roles, I combined frontend development, system integration, 
          and machine learning to bridge abstract ideas into real, usable solutions.
          <br /><br />
          Today, I focus on helping organizations and individuals harness technology — 
          making complex systems understandable, intuitive, and effective.
        </motion.p>

        {/* Timeline Pendidikan */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="mt-12"
        >
          <h2 className="text-2xl font-semibold mb-6">Education</h2>
          <div className="relative border-l-2 border-gray-300 pl-6">
            {timeline.map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.3 }}
                viewport={{ once: true }}
                className="mb-10"
              >
                <div className="absolute -left-3 w-6 h-6 bg-blue-600 rounded-full border-2 border-white shadow"></div>
                <h3 className="font-bold text-lg">{item.title}</h3>
                <p className="text-gray-600">{item.subtitle}</p>
                <span className="text-sm text-gray-500">{item.year}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.8 }}
          className="mt-16 text-center"
        >
          <h2 className="text-2xl font-semibold mb-6">Contact</h2>
          <p className="text-lg text-gray-700 mb-6">
            Feel free to reach out through any of the platforms below:
          </p>
          <div className="flex justify-center space-x-6 text-3xl text-gray-700">
            <a href="https://wa.me/6285770801948" target="_blank" rel="noopener noreferrer">
              <FaWhatsapp className="hover:text-green-600 transition" />
            </a>
            <a href="mailto:rifelrivan@gmail.com">
              <FaEnvelope className="hover:text-red-500 transition" />
            </a>
            <a href="https://www.linkedin.com/in/ayodhya-rifelino-rifan-rangkuti-17510134a/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="hover:text-blue-700 transition" />
            </a>
            <a href="https://instagram.com/rifelino.rifan" target="_blank" rel="noopener noreferrer">
              <FaInstagram className="hover:text-pink-500 transition" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
