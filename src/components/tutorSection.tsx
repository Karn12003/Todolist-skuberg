import Link from 'next/link';
import React from 'react';

export default function tutorSection() {
  const tutors = [
    { name: 'ครูเอ', subject: 'คณิตศาสตร์', location: 'กรุงเทพฯ' },
    { name: 'ครูบี', subject: 'ภาษาอังกฤษ', location: 'เชียงใหม่' },
    { name: 'ครูซี', subject: 'ฟิสิกส์', location: 'ขอนแก่น' },
    { name: 'ครูดี', subject: 'ชีววิทยา', location: 'ชลบุรี' },
    { name: 'ครูอี', subject: 'ภาษาไทย', location: 'นนทบุรี' },
    { name: 'ครูเอฟ', subject: 'คณิตศาสตร์', location: 'กรุงเทพฯ' },
  ];
  return (
    <div>
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-10 text-gray-800 text-center">
            ติวเตอร์ยอดนิยม
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
            {tutors.map((tutor, i) => (
              <Link
                key={i}
                href={{
                  pathname: '/tutor',
                  query: { name: tutor.name }, // ส่ง query name
                }}
              >
                <div className="bg-white border rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300 cursor-pointer">
                  <img
                    src="https://placehold.co/400x250"
                    alt="tutor"
                    className="w-full h-52 object-cover"
                  />
                  <div className="p-4">
                    <h3 className="text-lg font-semibold text-gray-800">
                      {tutor.name}
                    </h3>
                    <p className="text-sm text-gray-500">
                      {tutor.subject} • {tutor.location}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
