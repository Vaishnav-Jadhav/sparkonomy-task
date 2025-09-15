import { FaArrowLeft } from "react-icons/fa";
import logo from "/profile.jpg";

export function Header() {
  return (
    <header className="w-full shadow-sm">
      <div className="flex justify-between items-center px-4 sm:px-6 py-3 border-b border-pink-300 bg-gradient-to-r from-pink-200 to-pink-100">
        <div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition">
          <FaArrowLeft className="text-black text-lg" />
          <h1 className="font-semibold text-base sm:text-lg">Dashboard</h1>
        </div>
        <img
          src={logo}
          alt="profilePic"
          className="w-10 h-10 sm:w-11 sm:h-11 rounded-full border-2 border-pink-400 cursor-pointer hover:scale-105 transition"
        />
      </div>
    </header>
  );
}
