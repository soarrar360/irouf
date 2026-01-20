import React from 'react';
import { Target, ShieldCheck, Zap } from 'lucide-react';

const MissionSection = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row items-center gap-12">
          
          {/* Image Side */}
          <div className="lg:w-1/2 relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-yellow-600/10 rounded-full -z-10"></div>
            <img 
              src="https://images.unsplash.com/photo-1524178232363-1fb2b075b655?auto=format&fit=crop&q=80&w=800" 
              alt="University Mission" 
              className="rounded-2xl shadow-2xl border-b-8 border-navy-900"
            />
            <div className="absolute -bottom-6 -right-6 bg-navy-900 text-white p-6 rounded-xl hidden md:block">
              <p className="text-3xl font-bold text-yellow-500">100%</p>
              <p className="text-xs uppercase tracking-widest">Online Accessibility</p>
            </div>
          </div>

          {/* Content Side */}
          <div className="lg:w-1/2">
            <h2 className="text-blue-900 font-bold text-sm uppercase tracking-[0.3em] mb-4">Our Vision & Mission</h2>
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 leading-tight">
              Cultivating Excellence through <span className="text-yellow-600">Open Education</span>
            </h3>
            <p className="text-gray-600 mb-8 text-lg">
              At Imma Royal Open University, we believe that education is a royal birthright. Our mission is to break down geographical and financial barriers, providing world-class academic resources to students across the globe.
            </p>

            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg"><Target className="text-yellow-700 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Academic Integrity</h4>
                  <p className="text-gray-500 text-sm">Maintaining the highest standards of Florida's educational excellence.</p>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <div className="bg-yellow-100 p-2 rounded-lg"><ShieldCheck className="text-yellow-700 w-6 h-6" /></div>
                <div>
                  <h4 className="font-bold text-gray-900">Global Recognition</h4>
                  <p className="text-gray-500 text-sm">Our degrees are recognized by industries worldwide, ensuring your royal future.</p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default MissionSection;