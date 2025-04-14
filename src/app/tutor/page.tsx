import Footer from '@/components/footer';
import Navbar from '@/components/navbar';
import ProfileTutorCard from './components/profileTutorCard';
import ReviewTutorCard from './components/reviewTutorCard';

export default function TutorDetails() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <div className="container mx-auto p-8">
        <ProfileTutorCard />
        <ReviewTutorCard />
      </div>
      <Footer />
    </div>
  );
}
