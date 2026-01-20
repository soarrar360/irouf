"use client";
import React from 'react';
import { Award, Globe, BookOpen, Users, ShieldCheck, Landmark } from 'lucide-react';
import Navbar from '@/app/components/Navbar/page';

const AboutPage = () => {
  return (
    <main className="bg-white min-h-screen">
        <Navbar />
      {/* 1. Page Header (Simplified Hero) */}
      <section className="bg-slate-900 py-20 px-6 text-center border-b-4 border-yellow-600">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 tracking-tight">
            OUR <span className="text-yellow-500 underline decoration-yellow-600/30">HERITAGE</span>
          </h1>
          <p className="text-slate-400 text-lg md:text-xl leading-relaxed">
            Bridging the gap between prestigious Florida education and global accessibility. 
            Founded in 2024 to empower the leaders of tomorrow.
          </p>
        </div>
      </section>

      {/* 2. The Mission & Vision Split */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="relative">
            <img 
              src="https://images.unsplash.com/photo-1523580494863-6f3031224c94?q=80&w=1200" 
              alt="University Library" 
              className="rounded-3xl shadow-2xl grayscale-[20%] hover:grayscale-0 transition-all duration-700"
            />
            <div className="absolute -bottom-10 -right-10 bg-yellow-600 text-white p-8 rounded-2xl hidden md:block shadow-xl">
              <Landmark size={48} className="mb-2" />
              <p className="font-bold text-2xl uppercase tracking-tighter">Est. 2024</p>
            </div>
          </div>
          
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-yellow-600 pl-4">Our Mission</h2>
              <p className="text-slate-600 text-lg">
                To provide a high-quality, flexible, and affordable academic experience that prepares students 
                from all backgrounds for professional excellence in a globalized world.
              </p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-slate-900 mb-4 border-l-4 border-yellow-600 pl-4">Our Vision</h2>
              <p className="text-slate-600 text-lg">
                To be a premier global institution recognized for innovation in open learning, 
                academic integrity, and the success of our diverse student body.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="bg-slate-50 py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900">The Royal Standard</h2>
            <div className="h-1 w-20 bg-yellow-600 mx-auto mt-4"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: <Award />, title: "Excellence", desc: "We maintain the rigorous standards of Florida's top-tier education system." },
              { icon: <Globe />, title: "Inclusion", desc: "No borders, no limits. Education for anyone, anywhere in the world." },
              { icon: <ShieldCheck />, title: "Integrity", desc: "Transparent administration and honest academic evaluation." },
              { icon: <Users />, title: "Community", desc: "A robust alumni network connecting Florida, Florida, and beyond." },
              { icon: <BookOpen />, title: "Innovation", desc: "Using the latest digital tools to enhance the open university experience." },
              { icon: <Landmark />, title: "Legacy", desc: "Building a foundation of knowledge that lasts for generations." },
            ].map((value, idx) => (
              <div key={idx} className="bg-white p-10 rounded-2xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow group">
                <div className="text-yellow-600 mb-4 transform group-hover:scale-110 transition-transform">
                  {React.cloneElement(value.icon, { size: 32 })}
                </div>
                <h4 className="text-xl font-bold text-slate-900 mb-2 uppercase tracking-wide">{value.title}</h4>
                <p className="text-slate-500 text-sm leading-relaxed">{value.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Leadership Section */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 uppercase">Institutional Leadership</h2>
          <p className="text-slate-500 mt-2">Guided by world-class educators and administrators.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { name: "Prof. Arthur Royal", role: "Vice Chancellor", img: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=400" },
            { name: "Dr. Linda Sterling", role: "Dean of Admissions", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400" },
            { name: "Robert Kingsley", role: "Director of Research", img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400" },
            { name: "Sarah Valencia", role: "Registrar", img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400" },
          ].map((leader, i) => (
            <div key={i} className="text-center group">
              <div className="relative mb-6 inline-block">
                <div className="absolute inset-0 bg-yellow-600 rounded-2xl rotate-3 group-hover:rotate-6 transition-transform"></div>
                <img 
                  src={leader.img} 
                  alt={leader.name} 
                  className="relative w-48 h-56 object-cover rounded-2xl shadow-lg"
                />
              </div>
              <h4 className="text-lg font-bold text-slate-900 uppercase tracking-tight">{leader.name}</h4>
              <p className="text-yellow-600 text-sm font-semibold">{leader.role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 5. CTA Footer */}
      <section className="bg-slate-50 py-16 px-6 text-center">
        <h3 className="text-2xl font-bold text-slate-900 mb-6 uppercase">Ready to join our community?</h3>
        <a 
          href="/user/dashboard" 
          className="px-8 py-3 bg-slate-900 text-white font-bold rounded-xl hover:bg-slate-800 transition shadow-lg"
        >
          START YOUR APPLICATION
        </a>
      </section>
    </main>
  );
};

export default AboutPage;