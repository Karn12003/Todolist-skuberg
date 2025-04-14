import Link from 'next/link';
import React from 'react';

type Tutor = {
  name: string;
  reviews: number;
  image: string;
  teachingTypes: string[];
  experience: string;
  technique: string;
  additional: string;
};

export default function TutorCard({
  name,
  reviews,
  image,
  teachingTypes,
  experience,
  technique,
  additional,
}: Tutor) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <img
        src={image}
        alt={name}
        className="w-full h-40 object-cover rounded-md mb-4"
      />
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-sm text-gray-500 mb-1">{reviews} รีวิว</p>
      <p className="text-sm text-indigo-600 mb-2">
        {teachingTypes.join(' • ')}
      </p>

      <p className="text-gray-700 text-sm mb-2">{experience}</p>

      <p className="text-gray-700 text-sm mb-2">
        <strong className="font-medium">เทคนิคการสอน:</strong> {technique}
      </p>

      <p className="text-gray-700 text-sm">{additional}</p>

      <div className="mt-4">
        <Link href="/tutor">
          <button className="inline-block cursor-pointer bg-indigo-600 text-white px-4 py-2 rounded hover:bg-indigo-700 transition text-sm">
            ดูโปรไฟล์ติวเตอร์
          </button>
        </Link>
      </div>
    </div>
  );
}
