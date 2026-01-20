const courses = [
  { title: "International Business", level: "Bachelor's", duration: "4 Years", icon: "💼" },
  { title: "Computer Science", level: "Bachelor's/Master's", duration: "3-4 Years", icon: "💻" },
  { title: "Public Health Admin", level: "Post-Graduate", duration: "2 Years", icon: "🏥" },
  { title: "Law & Jurisprudence", level: "Professional", duration: "3 Years", icon: "⚖️" },
];

const FeaturedCourses = () => {
  return (
    <section className="py-20 bg-blue-100">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-12">Explore Our <span className="text-yellow-600 underline decoration-2 underline-offset-8">Royal Faculties</span></h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">{course.icon}</div>
              <h4 className="text-xl font-bold text-blue-900 mb-2">{course.title}</h4>
              <p className="text-yellow-600 font-semibold text-sm mb-4">{course.level}</p>
              <div className="pt-4 border-t border-gray-100 flex justify-between items-center text-gray-600 text-xs">
                <span>Flexible Schedule</span>
                <span>{course.duration}</span>
              </div>
            </div>
          ))}
        </div>

        <button className="mt-16 px-10 py-4 border-2 border-navy-900 text-blue-900 font-bold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300">
          BROWSE ALL COURSES
        </button>
      </div>
    </section>
  );
};


export default FeaturedCourses;