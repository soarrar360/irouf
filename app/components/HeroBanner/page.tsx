"use client";

import React from 'react';
import { SignUpButton } from "@clerk/nextjs";
import { GraduationCap, Globe, BookOpen, Award } from 'lucide-react';
import { useRouter } from 'next/navigation';

const Hero = () => {
    const router = useRouter();
  return (
    <div className="relative bg-navy-900 text-white overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2000" 
          alt="University Graduates" 
          className="w-full h-full object-cover object-center transition-transform duration-700 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-900/80 to-transparent"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-24 md:py-36 flex flex-col items-center text-center">
        
        {/* Badge / Small Title */}
        <div className="inline-flex items-center space-x-2 bg-yellow-600/20 border border-yellow-500/50 px-4 py-2 rounded-full mb-8 animate-fade-in">
          <Award className="w-4 h-4 text-yellow-500" />
          <span className="text-yellow-400 text-xs font-bold tracking-widest uppercase">Est. 2024 • Excellence in Education</span>
        </div>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight mb-6 leading-tight">
          Empowering Your <br />
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 to-yellow-600">
            Royal Future
          </span>
        </h1>

        <p className="max-w-2xl text-lg md:text-xl text-gray-300 mb-10 leading-relaxed">
          Join a global community of scholars at Imma Royal Open University. 
          World-class education, accessible anywhere, rooted in the excellence of Florida.
        </p>

        {/* Clerk Sign Up Button */}
        <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 mb-16">
          <SignUpButton mode="modal">
            <button className="px-8 py-4 bg-yellow-600 hover:bg-yellow-500 text-white font-bold rounded-lg shadow-xl transition duration-300 transform hover:-translate-y-1">
              GET STARTED NOW
            </button>
          </SignUpButton>
          
          <button onClick={()=>{
            router.push('../resource/programs');
        }} className="px-8 py-4 bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/30 text-white font-bold rounded-lg transition duration-300">
            VIEW PROGRAMS
          </button>
        </div>

        {/* Feature Icons */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 w-full max-w-4xl pt-12 border-t border-white/10">
          <div className="flex flex-col items-center">
            <GraduationCap className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Expert Faculty</span>
          </div>
          <div className="flex flex-col items-center">
            <Globe className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Global Access</span>
          </div>
          <div className="flex flex-col items-center">
            <BookOpen className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Open Learning</span>
          </div>
          <div className="flex flex-col items-center">
            <Award className="w-8 h-8 text-yellow-500 mb-2" />
            <span className="text-sm font-medium">Accredited Degrees</span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Hero;