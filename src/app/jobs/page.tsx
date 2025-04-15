import Navbar from '@/components/navbar';
import JobCard from './components/jobsCard';
import JobFilter from './components/jobsFilter';

export default function JobListPage() {
  return (
    <div>
      <Navbar />
      <div className="flex min-h-screen">
        {/* Sidebar Filter */}
        <aside className="w-1/4 p-4 border-r bg-gray-50">
          <JobFilter />
        </aside>

        {/* Job Listings */}
        <main className="w-3/4 p-6">
          <h1 className="text-2xl font-semibold mb-4">งานสอนพิเศษ</h1>
          <div className="space-y-4">
            {[...Array(5)].map((_, i) => (
              <JobCard key={i} />
            ))}
          </div>
        </main>
      </div>
    </div>
  );
}
