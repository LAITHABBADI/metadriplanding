import React from "react";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center py-4 px-8 bg-black text-white">
      <div className="text-xl font-bold">Metadrip</div>
      <div className="flex space-x-4">
        <a href="#docs" className="hover:text-gray-400">Docs</a>
        <a href="#github" className="hover:text-gray-400">GitHub</a>
        <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-300">
          Login
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
