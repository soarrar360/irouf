"use client";
import Image from 'next/image';
import React, { useState } from 'react';
import Logo from "@/app/irouflogo.png"
import Link from 'next/link';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-lg border-b-4 border-yellow-600">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          
          {/* Logo & Branding */}
           <Link href={"/"}>
          <div className="flex items-center space-x-3">
           
            <div className="w-12 h-12 bg-navy-900 rounded-full flex items-center justify-center">
              {/* Replace with your actual logo image */}
              {/* <span className="text-yellow-500 font-bold text-xl">IR</span> */}
              <img src={Logo.src} alt='irouf' width={50} height={50} />

            </div>
            <div>
              <span className="block font-bold text-navy-900 text-lg leading-none">IMMA ROYAL</span>
              <span className="text-xs text-gray-600 uppercase tracking-widest">Open University of Florida</span>
            </div>
           
          </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center space-x-8 text-sm font-semibold text-gray-700">
            <a href="/" className="hover:text-yellow-600 transition duration-300">HOME</a>
            <a href="../resource/about" className="hover:text-yellow-600 transition duration-300">ABOUT US</a>
            <a href="../resource/programs" className="hover:text-yellow-600 transition duration-300">PROGRAMS</a>
            <a href="../resource/admission" className="hover:text-yellow-600 transition duration-300">ADMISSIONS</a>
            <a href="/user/dashboard" className="bg-blue-900 text-white px-5 py-2 rounded hover:bg-blue-800 transition duration-300">STUDENT PORTAL</a>
          </div>

          {/* Mobile Button */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="outline-none">
              <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
              </svg>
            </button>
            
          </div>
        </div>
        
      </div>

      {/* Mobile Menu */}
      <div className={`${isOpen ? 'block' : 'hidden'} md:hidden bg-gray-50 border-t`}>
        <a href="/" className="block py-3 px-4 text-sm hover:bg-yellow-50">HOME</a>
        <a href="../resource/about" className="block py-3 px-4 text-sm hover:bg-yellow-50">ABOUT US</a>
        <a href="../resource/programs" className="block py-3 px-4 text-sm hover:bg-yellow-50">PROGRAMS</a>
        <a href="../resource/admission" className="block py-3 px-4 text-sm hover:bg-yellow-50">ADMISSIONS</a>
        <a href="/user/dashboard" className="block py-3 px-4 text-sm bg-blue-900 text-white">STUDENT PORTAL</a>
      </div>
      
    </nav>
  );
};

export default Navbar;