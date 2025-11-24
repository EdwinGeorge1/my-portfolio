import React from "react";
import PageWrapper from "../components/PageWrapper";

export default function Education() {
  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-12">
          Education
        </h2>

        <div className="space-y-10">

          {/* M.Tech Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl p-6 flex items-start gap-6">
            
            {/* Left glowing line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl shadow"></div>

            {/* Logo */}
            <img
              src="/my-portfolio/CET.png"
              className="w-20 h-20 object-contain rounded-lg border shadow"
              alt="CET Logo"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                M.Tech in Robotics & Automation Engineering
              </h3>
              <p className="text-gray-700 mt-1">
                College of Engineering Trivandrum
              </p>
              <p className="text-sm text-gray-500 mt-1">
                APJ Abdul Kalam Technological University
              </p>
            </div>
          </div>

          {/* B.Tech Card */}
          <div className="relative bg-white/70 backdrop-blur-xl border border-blue-200 shadow-lg rounded-2xl p-6 flex items-start gap-6">
            
            {/* Left glowing line */}
            <div className="absolute left-0 top-0 h-full w-1 bg-blue-500 rounded-l-2xl shadow"></div>

            {/* Logo */}
            <img
              src="/my-portfolio/sahrdaya.png"
              className="w-20 h-20 object-contain rounded-lg border shadow"
              alt="Sahrdaya Logo"
            />

            {/* Text */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900">
                B.Tech in Electrical & Electronics Engineering
              </h3>
              <p className="text-gray-700 mt-1">
                Sahrdaya College of Engineering and Technology
              </p>
              <p className="text-sm text-gray-500 mt-1">
                APJ Abdul Kalam Technological University
              </p>
            </div>
          </div>

        </div>

      </div>
    </PageWrapper>
  );
}
