import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Home() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 items-center">
        {/* LEFT SECTION */}
        <div>
          <h1 className="text-5xl font-extrabold text-gray-900 leading-tight">
            Robotics Engineer<br />
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-xl">
            I design autonomous robots, perception systems, and real-time control.
          </p>

          <div className="mt-8 flex gap-4">

            {/* ✅ Download Resume Works on GitHub Pages */}
            <a
              href="/Edwin_George.pdf"
              download="Edwin_George_Resume.pdf"
              className="px-6 py-3 bg-blue-600 text-white rounded-md shadow hover:bg-blue-700 transition font-medium"
            >
              Download Resume
            </a>

            {/* View Projects Button */}
            <a
              href="#/projects"
              className="px-6 py-3 border border-gray-300 text-gray-700 rounded-md hover:border-blue-500 transition"
            >
              View Projects
            </a>
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
