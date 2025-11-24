import React from "react";
import PageWrapper from "../components/PageWrapper";

const PROJECT_LIST = [
  {
    title: "6D Object Pose Estimation",
    desc: "Real-time object pose estimation using YOLO + depth fusion.",
    tech: ["YOLO", "Open3D", "Depth"],
  },
  {
    title: "Autonomous Mobile Robot",
    desc: "SLAM + Nav2 navigation + MPPI planning for warehouse AMR.",
    tech: ["SLAM", "Nav2", "MPPI"],
  },
  {
    title: "ESP32 Micro-ROS Robot",
    desc: "Encoder odometry, PID motor control, TF broadcasting.",
    tech: ["Micro-ROS", "PID", "ESP32"],
  },

  // ⭐ NEW PROJECT ADDED
  {
    title: "Arduino Bluetooth Robot Control (HC-06)",
    desc: "Built a Bluetooth-controlled robot using Arduino and the HC-06 module. Implemented wireless communication, motor control, and a mobile app interface.",
    tech: ["Arduino", "HC-06", "Bluetooth", "Motor Control", "Embedded"],
    video: "https://www.youtube.com/embed/gt3Cq_xmqzc",
  },
];

export default function Projects() {
  return (
    <PageWrapper>
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Projects</h2>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECT_LIST.map((p) => (
            <div
              key={p.title}
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition"
            >
              <h3 className="text-xl font-semibold">{p.title}</h3>

              <p className="mt-2 text-gray-600 text-sm">{p.desc}</p>

              {/* TECH TAGS */}
              <div className="flex flex-wrap gap-2 mt-4 mb-4">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="px-3 py-1 bg-gray-100 border text-xs rounded-md"
                  >
                    {t}
                  </span>
                ))}
              </div>

              {/* VIDEO EMBED (if exists) */}
              {p.video && (
                <div className="w-full aspect-video rounded-lg overflow-hidden border mt-4">
                  <iframe
                    className="w-full h-full"
                    src={p.video}
                    title={p.title}
                    frameBorder="0"
                    allowFullScreen
                  ></iframe>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
