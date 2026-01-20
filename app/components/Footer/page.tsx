import { Facebook, Instagram, Linkedin, MailCheckIcon, MapPin, PhoneCallIcon, Twitter } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-gray-300 pt-16 pb-8 border-t-4 border-yellow-600">
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
        
        {/* Brand Column */}
        <div className="col-span-1 md:col-span-1">
          <h2 className="text-white font-bold text-xl mb-6">IMMA ROYAL <br/><span className="text-yellow-500 text-sm">OPEN UNIVERSITY</span></h2>
          <p className="text-sm leading-relaxed mb-6">
            Providing prestigious, accessible education to the global community. Accredited standards with a Florida foundation.
          </p>
          <div className="flex space-x-4">
            <Facebook className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
            <Twitter className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
            <Linkedin className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
            <Instagram className="w-5 h-5 hover:text-yellow-500 cursor-pointer transition" />
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Quick Links</h3>
          <ul className="space-y-4 text-sm">
            <li><a href="#" className="hover:text-yellow-500 transition">Academic Calendar</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Online Library</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Scholarship Program</a></li>
            <li><a href="#" className="hover:text-yellow-500 transition">Student Portal</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Contact Us</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-center gap-3"><MapPin className="w-4 h-4 text-yellow-500" /> Florida, USA</li>
            <li className="flex items-center gap-3"><PhoneCallIcon className="w-4 h-4 text-yellow-500" /> +1 (800) ROYAL-ED</li>
            <li className="flex items-center gap-3"><MailCheckIcon className="w-4 h-4 text-yellow-500" /> admissions@immaroyal.edu</li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6 uppercase text-sm tracking-wider">Newsletter</h3>
          <p className="text-xs mb-4">Stay updated with our latest programs and events.</p>
          <form className="flex">
            <input 
              type="email" 
              placeholder="Your email" 
              className="bg-slate-900 border border-slate-700 px-4 py-2 rounded-l-md w-full focus:outline-none focus:border-yellow-500 text-sm"
            />
            <button className="bg-yellow-600 text-white px-4 py-2 rounded-r-md hover:bg-yellow-500 transition text-sm font-bold">
              JOIN
            </button>
          </form>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 pt-8 border-t border-slate-800 text-center text-xs tracking-widest text-gray-500">
        <p>&copy; 2026 IMMA ROYAL OPEN UNIVERSITY OF FLORIDA USA. ALL RIGHTS RESERVED.</p>
      </div>
    </footer>
  );
};

export default Footer;