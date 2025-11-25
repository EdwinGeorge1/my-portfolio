import React from "react";
import PageWrapper from "../components/PageWrapper";

const PROJECT_LIST = [
  

  // ⭐ Autonomous Mobile Robot
  {
    title: "Autonomous Mobile Robot",
    desc: "SLAM + Nav2 navigation with MPPI planner for warehouse-ready AMR.",
    tech: ["SLAM", "Nav2", "MPPI"],
    gif: "video.gif", 
  },

  // ⭐ ESP32 Micro-ROS Robot
  {
    title: "ESP32 Micro-ROS Robot",
    desc: "Differential drive robot with encoders, PID motor control, odometry, and TF broadcasting.",
    tech: ["Micro-ROS", "PID", "ESP32"],
  },

  // ⭐ Arduino Bluetooth Robot
  {
    title: "Arduino Bluetooth Robot Control (HC-06)",
    desc: "Bluetooth-controlled robot using Arduino, HC-06, and a custom motor control interface.",
    tech: ["Arduino", "HC-06", "Bluetooth"],
    video: "https://www.youtube.com/embed/gt3Cq_xmqzc",
  },

  // ⭐ Mobile Robot Control UI
  {
    title: "Mobile Robot Control System",
    desc: "Full-stack robot teleoperation UI using React + FastAPI with real-time ROS2 telemetry via WebSockets.",
    tech: ["React", "FastAPI", "ROS2", "WebSocket"],
    gif: "ui.gif", // public/ui.gif
  },

  // ⭐ Pick-and-Place Using ArUco (xArm Lite6)
  {
    title: "Pick-and-Place Using ArUco (xArm Lite6)",
    desc: "Gazebo + MoveIt2 simulation of xArm Lite6 with RealSense-based ArUco detection and automated attach/detach pick-and-place.",
    tech: ["ROS2", "MoveIt2", "Gazebo", "ArUco", "xArm"],
    gif: "ihub.gif", // public/ihub.gif
  },

  // ⭐ NEW: Blender Synthetic 3D Data Generator
  {
    title: "Synthetic 3D Data Generation (Blender + Gazebo)",
    desc: "Automated pipeline to wrap 2D images onto 3D models in Blender and auto-generate Gazebo SDF models for simulation datasets.",
    tech: ["Blender", "Python", "Gazebo", "SDF", "3D Modelling"],
    gif: "data3d.gif", // public/data3d.gif
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

              {/* VIDEO */}
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

              {/* GIF */}
              {p.gif && (
                <div className="w-full rounded-lg overflow-hidden border mt-4">
                  <img
                    src={import.meta.env.BASE_URL + p.gif}
                    alt={p.title}
                    className="w-full h-auto object-cover"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
