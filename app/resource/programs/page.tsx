"use client";
import React, { useState } from 'react';
import { 
  Search, 
  Code, 
  Briefcase, 
  Scale, 
  Stethoscope, 
  Clock, 
  ChevronRight, 
  Layers 
} from 'lucide-react';
import Navbar from '@/app/components/Navbar/page';

const programs = [
  {
    id: 1,
    title: "B.Sc. Computer Science",
    faculty: "Technology",
    duration: "4 Years",
    level: "Undergraduate",
    icon: <Code className="w-6 h-6" />,
    description: "Master software engineering, AI, and cybersecurity in a global digital economy."
  },
  {
    id: 2,
    title: "MBA International Business",
    faculty: "Business",
    duration: "2 Years",
    level: "Post-Graduate",
    icon: <Briefcase className="w-6 h-6" />,
    description: "Advanced leadership strategies for the modern corporate landscape."
  },
  {
    id: 3,
    title: "LL.B. Common Law",
    faculty: "Law",
    duration: "4 Years",
    level: "Undergraduate",
    icon: <Scale className="w-6 h-6" />,
    description: "A comprehensive foundation in legal theory and international jurisprudence."
  },
  {
    id: 4,
    title: "M.Sc. Public Health",
    faculty: "Health",
    duration: "2 Years",
    level: "Post-Graduate",
    icon: <Stethoscope className="w-6 h-6" />,
    description: "Specialized training in global health policy and epidemic management."
  },
  {
    id: 5,
    title: "B.Sc. Digital Marketing",
    faculty: "Business",
    duration: "3 Years",
    level: "Undergraduate",
    icon: <Layers className="w-6 h-6" />,
    description: "Explore the intersection of consumer psychology and digital strategy."
  },
  {
    id: 6,
    title: "Executive Data Science",
    faculty: "Technology",
    duration: "1 Year",
    level: "Professional",
    icon: <Code className="w-6 h-6" />,
    description: "Fast-track your career with high-level data analysis and visualization."
  }
];

const ProgramsPage = () => {
  const [filter, setFilter] = useState("All");

  const filteredPrograms = filter === "All" 
    ? programs 
    : programs.filter(p => p.faculty === filter);

  return (
    <main className="min-h-screen bg-slate-50 pb-20">
        <Navbar />
      {/* Header Section */}
      <section className="bg-slate-900 pt-20 pb-32 px-6 text-center border-b-4 border-yellow-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 uppercase tracking-tighter">
            Academic <span className="text-yellow-500">Faculties</span>
          </h1>
          <p className="text-slate-400 text-lg">
            Explore our diverse range of accredited online programs designed to meet the demands of the 21st-century workforce.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <section className="max-w-7xl mx-auto px-6 -mt-12">
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 flex flex-col md:flex-row gap-4 items-center justify-between border border-slate-100">
          <div className="flex flex-wrap justify-center gap-2">
            {["All", "Technology", "Business", "Law", "Health"].map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? "bg-yellow-600 text-white shadow-lg" 
                  : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 w-4 h-4" />
            <input 
              type="text" 
              placeholder="Search programs..." 
              className="w-full pl-10 pr-4 py-2 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20"
            />
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="max-w-7xl mx-auto px-6 mt-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPrograms.map((p) => (
            <div key={p.id} className="group bg-white rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-300 overflow-hidden flex flex-col">
              <div className="p-8 flex-grow">
                <div className="w-12 h-12 bg-slate-900 text-yellow-500 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-yellow-600 group-hover:text-white transition-colors duration-300">
                  {p.icon}
                </div>
                <div className="flex items-center gap-2 mb-2">
                  <span className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 bg-yellow-100 text-yellow-700 rounded-md">
                    {p.level}
                  </span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3 leading-tight">{p.title}</h3>
                <p className="text-slate-500 text-sm mb-6 line-clamp-2">
                  {p.description}
                </p>
                <div className="flex items-center gap-4 text-xs font-semibold text-slate-400">
                  <div className="flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {p.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Layers className="w-3 h-3" /> {p.faculty}
                  </div>
                </div>
              </div>
              <div className="px-8 pb-8">
                <a 
                  href="/user/dashboard" 
                  className="w-full py-3 bg-slate-50 text-slate-900 font-bold rounded-xl flex items-center justify-center gap-2 group-hover:bg-slate-900 group-hover:text-white transition-all duration-300"
                >
                  Apply Now <ChevronRight className="w-4 h-4" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Empty State */}
      {filteredPrograms.length === 0 && (
        <div className="text-center py-20">
          <p className="text-slate-400 italic">No programs found in this category.</p>
        </div>
      )}
    </main>
  );
};

export default ProgramsPage;