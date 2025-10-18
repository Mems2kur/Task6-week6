import React, { useState } from "react";
import { Menu, X } from "lucide-react"; // icons (install: npm install lucide-react)

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" text-white shadow-md py-5">
      <div className="container mx-auto flex justify-between items-center px-14 py-3">
        <h1 className="text-2xl font-bold tracking-wide ">Cheezy Bites Hub</h1>

        
        <ul className="hidden md:flex gap-8 text-lg">
          <li className="hover:text-yellow-200 cursor-pointer transition">Home</li>
          <li className="hover:text-yellow-200 cursor-pointer transition">Recipes</li>
          <li className="hover:text-yellow-200 cursor-pointer transition">About</li>
          <li className="hover:text-yellow-200 cursor-pointer transition">Contact</li>
        </ul>

    
        <div className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </div>
      </div>

      
      {isOpen && (
        <div className="md:hidden bg-orange-400">
          <ul className="flex flex-col items-center py-4 gap-4 text-lg">
            <li className="hover:text-yellow-200 cursor-pointer transition">Home</li>
            <li className="hover:text-yellow-200 cursor-pointer transition">Recipes</li>
            <li className="hover:text-yellow-200 cursor-pointer transition">About</li>
            <li className="hover:text-yellow-200 cursor-pointer transition">Contact</li>
          </ul>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
