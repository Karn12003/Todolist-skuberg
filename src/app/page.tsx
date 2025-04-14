import AboutSection from '@/components/aboutSection';
import CategorySection from '@/components/categorySection';
import Footer from '@/components/footer';
import HeroSection from '@/components/heroSection';
import Navbar from '@/components/navbar';
import TutorSection from '@/components/tutorSection';

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <HeroSection />
      <CategorySection />
      <TutorSection />
      <AboutSection />
      <Footer />
    </div>
  );
}
