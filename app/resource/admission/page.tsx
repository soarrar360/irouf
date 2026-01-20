"use client";
import React, { useState } from 'react';
import { User, Mail, BookOpen, GraduationCap, MapPin, Send, CheckCircle } from 'lucide-react';
import Navbar from '@/app/components/Navbar/page';
import { useRouter } from 'next/navigation';

const AdmissionPage = () => {
  const [submitted, setSubmitted] = useState(false);
    const router = useRouter();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // Logic to send data to your backend or Formspree/Resend
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-slate-50 flex items-center justify-center p-6">
        <div className="max-w-md w-full bg-white p-10 rounded-3xl shadow-xl text-center border-t-8 border-green-500">
          <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle size={40} />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 mb-2">Application Received!</h2>
          <p className="text-slate-600 mb-8">
            Thank you for choosing Imma Royal. Our admissions team will review your credentials and contact you via email within 3-5 business days.
          </p>
          <button 
            onClick={() => {
                
                router.push('/user/dashboard');
                //setSubmitted(false);
                
            }}
            className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition"
          >
            Continue to Dashboard
          </button>
        </div>
      </div>
    );
  }

  return (
    <> <Navbar />
    <div className="min-h-screen bg-slate-50 py-12 px-6">
       
      <div className="max-w-4xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-12">
          <div className="inline-block p-3 bg-yellow-600/10 rounded-2xl mb-4">
            <GraduationCap className="text-yellow-600 w-10 h-10" />
          </div>
          <h1 className="text-3xl md:text-5xl font-extrabold text-slate-900 mb-4 uppercase tracking-tight">
            Apply for Admission
          </h1>
          <p className="text-slate-500 max-w-xl mx-auto">
            Take the first step toward your royal future. Complete the form below to begin your academic journey with Imma Royal Open University.
          </p>
        </div>

        {/* Application Form */}
        <form onSubmit={handleSubmit} className="bg-white rounded-3xl shadow-2xl overflow-hidden border border-slate-100">
          
          {/* Section 1: Personal Information */}
          <div className="p-8 md:p-12 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">1</div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Personal Details</h3>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Full Name</label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input required type="text" placeholder="John Doe" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Email Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input required type="email" placeholder="john@example.com" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Current Location</label>
                <div className="relative">
                  <MapPin className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <input required type="text" placeholder="City, Country" className="w-full pl-12 pr-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition" />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Phone Number</label>
                <input required type="tel" placeholder="+1 (000) 000-0000" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition" />
              </div>
            </div>
          </div>

          {/* Section 2: Academic Goals */}
          <div className="p-8 md:p-12 bg-slate-50/50 border-b border-slate-100">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-10 h-10 bg-slate-900 text-white rounded-full flex items-center justify-center font-bold">2</div>
              <h3 className="text-xl font-bold text-slate-900 uppercase tracking-wide">Academic Choice</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Intended Faculty</label>
                <div className="relative">
                  <BookOpen className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 w-5 h-5" />
                  <select required className="w-full pl-12 pr-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition appearance-none">
                    <option value="">Select a Faculty</option>
                    <option value="cs">Computer Science & IT</option>
                    <option value="biz">Business Administration</option>
                    <option value="law">Law & Jurisprudence</option>
                    <option value="health">Public Health</option>
                  </select>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-bold text-slate-700 ml-1">Degree Level</label>
                <select required className="w-full px-4 py-3 bg-white border border-slate-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-yellow-600/20 focus:border-yellow-600 transition appearance-none">
                  <option value="">Select Level</option>
                  <option value="ug">Undergraduate (Bachelors)</option>
                  <option value="pg">Post-Graduate (Masters)</option>
                  <option value="phd">Doctorate (PhD)</option>
                  <option value="cert">Professional Certificate</option>
                </select>
              </div>
            </div>
          </div>

          {/* Form Footer */}
          <div className="p-8 md:p-12 text-center bg-white">
            <p className="text-xs text-slate-400 mb-6 uppercase tracking-[0.2em]">
              By submitting, you agree to the Imma Royal University Privacy Policy.
            </p>
            <button 
              type="submit"
              className="group relative inline-flex items-center justify-center px-10 py-4 bg-yellow-600 text-white font-bold rounded-2xl shadow-xl hover:bg-yellow-500 hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              <span className="relative z-10 flex items-center gap-2">
                SUBMIT APPLICATION <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              </span>
            </button>
          </div>

        </form>

        <p className="mt-8 text-center text-slate-400 text-sm">
          Need help with your application? Contact <span className="text-slate-600 font-bold underline">admissions@immaroyal.edu</span>
        </p>
      </div>
    </div>
    </>
  );
};

export default AdmissionPage;