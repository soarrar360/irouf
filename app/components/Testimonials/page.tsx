import React from 'react';
import { Star, Quote, Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Testimonials = () => {
  const reviews = [
    {
      name: "Dr. Sarah Jenkins",
      role: "Alumni, Class of 2024",
      text: "The flexible learning model at Imma Royal allowed me to complete my Doctorate while working full-time in Florida. Truly a royal experience.",
      stars: 5
    },
    {
      name: "James O'Connor",
      role: "MBA Candidate",
      text: "The curriculum is rigorous and globally focused. I've gained insights that immediately applied to my international business career.",
      stars: 5
    },
    {
      name: "Elena Rodriguez",
      role: "BSc Computer Science",
      text: "A world-class university experience from the comfort of my home. The faculty support is unmatched in the open university space.",
      stars: 5
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-navy-900 font-bold text-sm uppercase tracking-widest mb-3">Student Success</h2>
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900">Voices of Our Global Scholars</h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) => (
            <div key={i} className="bg-gray-50 p-8 rounded-2xl relative border border-gray-100 shadow-sm">
              <Quote className="absolute top-4 right-4 w-8 h-8 text-yellow-600/20" />
              <div className="flex mb-4 text-yellow-500">
                {[...Array(review.stars)].map((_, idx) => (
                  <Star key={idx} className="w-4 h-4 fill-current" />
                ))}
              </div>
              <p className="text-gray-600 italic mb-6">"{review.text}"</p>
              <div>
                <h4 className="font-bold text-navy-900">{review.name}</h4>
                <p className="text-xs text-yellow-600 font-semibold uppercase">{review.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;