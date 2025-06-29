import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center px-6 py-4 bg-gray-800 shadow-md sticky top-0 z-50">
      <h1 className="text-2xl font-bold text-teal-400">Akshat</h1>
      <ul className="flex gap-6 text-sm">
        <a href="#home" className="hover:text-teal-400">Home</a>
        <a href="#about" className="hover:text-teal-400">About</a>
        <a href="#projects" className="hover:text-teal-400">Projects</a>
        <a href="#contact" className="hover:text-teal-400">Contact</a>
      </ul>
    </nav>
  );
};

export default Navbar;

