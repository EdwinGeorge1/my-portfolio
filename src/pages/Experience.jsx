import React from "react";
import PageWrapper from "../components/PageWrapper";

const EXPERIENCE_LIST = [
  {
    company: "Alphadroid",
    role: "Robotics Engineer Intern",
    date: "Jan – Apr 2025",
    details: [
      "Developed and trained deep learning models for pose estimation, object detection, classification, and segmentation for advanced robotic perception.",
      "Optimized computer vision pipelines for real-time inference and integrated them with robotic control systems.",
      "Designed and implemented a high-performance backend system for Doosan robotic arm control using SDKs and APIs.",
      "Built backend services enabling seamless communication between the UI and the Doosan robot controller.",
      "Developed optimized RESTful API endpoints for real-time command execution and status feedback.",
      "Created a scalable and modular backend architecture for future robot system integrations."
    ],
  },

  {
    company: "UST",
    role: "Robotics Engineer Intern",
    date: "Jan – Apr 2024",
    details: [
      "Contributed to the development of a mecanum-wheel autonomous mobile robot using ROS2.",
      "Performed hardware testing and system validation to ensure reliable performance.",
      "Assembled and integrated hardware components with the ROS2 software stack.",
      "Implemented sensor fusion for localization and obstacle avoidance using LiDAR and IMU.",
      "Optimized ROS2 Navigation Stack parameters for smooth and reliable path planning.",
      "Collaborated with a cross-functional team to debug, validate, and document system performance."
    ],
  },

  {
    company: "Asimov Robotics",
    role: "Robotics Engineer Intern",
    date: "May – Jun 2023",
    details: [
      "Developed an auto-docking system for mobile robots using ROS1.",
      "Designed an IR-based docking mechanism for precise alignment and efficient charging.",
      "Conducted performance testing under varied conditions to ensure docking reliability.",
      "Integrated safety protocols to prevent misalignment and hardware damage.",
      "Optimized docking algorithms to improve alignment speed and efficiency.",
      "Documented design, architecture, and testing for future ROS2 migration."
    ],
  },
];

export default function Experience() {
  return (
    <PageWrapper>
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-gray-900 mb-10">Experience</h2>

        <div className="space-y-6">
          {EXPERIENCE_LIST.map((e) => (
            <div
              key={e.company}
              className="p-6 bg-white border rounded-lg shadow-sm hover:shadow transition"
            >
              <h4 className="text-xl font-semibold text-gray-800">{e.company}</h4>
              <p className="text-sm text-gray-500">{e.date}</p>
              <p className="mt-2 font-medium text-gray-700">{e.role}</p>

              <ul className="mt-3 list-disc pl-6 text-gray-600 text-sm space-y-1">
                {e.details.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </PageWrapper>
  );
}
