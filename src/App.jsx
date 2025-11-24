import React from "react";
import { HashRouter as Router, Routes, Route, Link, useLocation } from "react-router-dom";

import { motion } from "framer-motion";

/* ============================================================
   PROFESSIONAL 2025 PORTFOLIO (LIGHT THEME ONLY)
   Clean • Modern • Employer Friendly • Robotics Focused
============================================================ */

/* --------------------------
   NAVIGATION HELPERS
--------------------------- */
function NavLink({ to, children }) {
  const location = useLocation();
  const active = location.pathname === to;

  return (
    <Link
      to={to}
      className={`px-3 py-2 rounded-md text-sm font-medium transition ${
        active ? "text-blue-600 font-semibold" : "text-gray-600 hover:text-blue-600"
      }`}
    >
      {children}
    </Link>
  );
}

/* --------------------------
   NAVBAR
--------------------------- */
function Navbar() {
  return (
    <header className="bg-white/90 backdrop-blur border-b border-gray-200 fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link to="/" className="text-xl font-bold text-gray-800 tracking-tight">
          Edwin George
        </Link>

        <nav className="flex gap-6">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/projects">Projects</NavLink>
          <NavLink to="/experience">Experience</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>
      </div>
    </header>
  );
}

/* --------------------------
   PAGE WRAPPER
--------------------------- */
function PageWrapper({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="pt-28 pb-16"
    >
      {children}
    </motion.div>
  );
}

/* --------------------------
   HOME PAGE
--------------------------- */
function Home() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT TEXT */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Robotics Engineer
            <br />
            <span className="text-blue-600">Autonomous Systems Specialist</span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            I design and build autonomous robots, perception systems, and real-time embedded control.
            Experienced with ROS2, AMR navigation, computer vision, and production robotics.
          </p>

          <div className="mt-8 flex gap-4">
            <a
              href="#"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition font-medium"
            >
              Download Resume
            </a>

            <Link
              to="/projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-500 transition"
            >
              View Projects
            </Link>
          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center">
          <img
            src="https://avatars.githubusercontent.com/u/118588651?v=4"
            className="w-56 h-56 rounded-full object-cover shadow-xl border"
            alt="Edwin"
          />
        </div>
      </div>
    </PageWrapper>
  );
}

/* --------------------------
   PROJECTS PAGE
--------------------------- */
const PROJECT_LIST = [
  {
    title: "6D Object Pose Estimation",
    desc: "Real-time 6D pose estimation using YOLO + depth fusion.",
    tech: ["YOLO", "Open3D", "Depth"],
  },
  {
    title: "Autonomous Mobile Robot",
    desc: "SLAM + Nav2 + MPPI planning for warehouse AMR.",
    tech: ["SLAM", "Nav2", "MPPI"],
  },
  {
    title: "ESP32 Micro-ROS Robot",
    desc: "Encoder odometry, PID motor control and TF tree broadcasting.",
    tech: ["Micro-ROS", "PID", "ESP32"],
  },
];

function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_LIST.map((p) => (
            <div key={p.title} className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition">
              <h3 className="text-xl font-semibold text-gray-800">{p.title}</h3>
              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>

              <div className="flex flex-wrap gap-2 mt-4">
                {p.tech.map((t) => (
                  <span key={t} className="px-3 py-1 text-xs bg-gray-100 border rounded-md">
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

/* --------------------------
   EXPERIENCE PAGE
--------------------------- */
const EXPERIENCE_LIST = [
  {
    company: "Alphadroid",
    role: "Robotics Engineer Intern",
    date: "Current",
    desc: "Developing production-grade AMR systems using ROS2 + vision.",
  },
  {
    company: "UST",
    role: "Academic Intern",
    date: "Jan – Apr 2024",
    desc: "Worked on autonomous navigation systems and SLAM.",
  },
  {
    company: "Asimov Robotics",
    role: "Academic Intern",
    date: "Apr – May 2023",
    desc: "Auto-docking and sensor alignment algorithms.",
  },
];

function Experience() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Experience</h2>

        <div className="space-y-6">
          {EXPERIENCE_LIST.map((e) => (
            <div
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition"
              key={e.company}
            >
              <h4 className="text-xl font-semibold text-gray-800">{e.company}</h4>
              <p className="text-sm text-gray-500">{e.date}</p>
              <p className="mt-2 font-medium text-gray-700">{e.role}</p>
              <p className="mt-1 text-gray-600 text-sm">{e.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}

/* --------------------------
   CONTACT PAGE
--------------------------- */
function Contact() {
  return (
    <PageWrapper>
      <div className="max-w-4xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Contact</h2>

        <div className="p-8 bg-white border rounded-lg shadow-sm">
          <p className="mb-6 text-gray-600">
            Interested in collaborations, full-time roles, or freelance work?  
            Send me a message.
          </p>

          <form className="space-y-4">
            <input
              className="w-full p-3 border rounded-md"
              placeholder="Your Name"
            />
            <input
              className="w-full p-3 border rounded-md"
              type="email"
              placeholder="Email"
            />
            <textarea
              className="w-full p-3 border rounded-md h-32"
              placeholder="Message"
            />
            <button
              type="submit"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition font-medium"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </PageWrapper>
  );
}

/* --------------------------
   FOOTER
--------------------------- */
function Footer() {
  return (
    <footer className="border-t bg-white mt-20 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm">
        © {new Date().getFullYear()} Edwin George — All Rights Reserved
      </div>
    </footer>
  );
}

/* --------------------------
   MAIN APP
--------------------------- */
export default function App() {
  return (
    <Router>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>

      <Footer />
    </Router>
  );
}
