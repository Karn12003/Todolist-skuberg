import Navbar from '@/components/navbar';
import JobsDetailCard from './components/jobsDetailCard';

export default function JobDetailPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      <JobsDetailCard />
    </div>
  );
}
