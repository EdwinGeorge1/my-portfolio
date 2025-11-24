import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t bg-white mt-20 py-6">
      <div className="max-w-7xl mx-auto px-6 text-center text-gray-600 text-sm flex flex-col items-center gap-3">

        {/* SOCIAL ICONS */}
        <div className="flex gap-6 text-2xl">
          <a
            href="https://github.com/EdwinGeorge1"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-700 hover:text-black transition"
          >
            <FaGithub />
          </a>

          <a
            href="https://www.linkedin.com/in/edwingeorge--/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-700 hover:text-blue-900 transition"
          >
            <FaLinkedin />
          </a>
        </div>

        {/* COPYRIGHT */}
        <p className="text-gray-500 text-xs">
          © {new Date().getFullYear()} <span className="font-semibold">Edwin George</span> — All Rights Reserved
        </p>
      </div>
    </footer>
  );
}
