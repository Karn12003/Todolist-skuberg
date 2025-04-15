import Navbar from '@/components/navbar';
import React from 'react';
import StepForm from './components/stepForm';
import Footer from '@/components/footer';
import CategorySideMenu from './components/categorySideMenu';
import TutorProfileSection from './components/tutorProfileSection';

export default function Page() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <StepForm />
      <div className=" md:flex  px-24 py-6">
        <CategorySideMenu />
        <TutorProfileSection />
      </div>
      <Footer />
    </div>
  );
}
