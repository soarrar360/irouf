import Image from "next/image";
import Navbar from "./components/Navbar/page";
import Hero from "./components/HeroBanner/page";
import MissionSection from "./components/MissionSection/page";
import FeaturedCourses from "./components/FeaturedCourses/page";
import Testimonials from "./components/Testimonials/page";
import Footer from "./components/Footer/page";

export default function Home() {
  return (
   <>
   <main className="min-h-screen">
   <Navbar />
   <Hero />
   <MissionSection />
   <FeaturedCourses />
   <Testimonials />
   <Footer />
</main>
   </>
  );
}
