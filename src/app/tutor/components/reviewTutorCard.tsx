import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function reviewTutorCard() {
  const reviews = [
    {
      name: 'นานา',
      rating: 5,
      review:
        'ติวเตอร์พลใจดีมากๆ ค่ะ สอนเข้าใจง่าย ติวออนไลน์ก็สะดวกและได้ผลดีมากเลยค่ะ',
    },
    {
      name: 'ทอมมี่',
      rating: 4,
      review:
        'ติวกับอาจารย์พลช่วยได้เยอะมาก โดยเฉพาะเรื่องการฟังและพูดภาษาอังกฤษ',
    },
    {
      name: 'สมชาย',
      rating: 4.5,
      review:
        'สอนดีมากครับ อยากได้คอร์สเรียนยาวๆ เลยครับ ราคาเหมาะสมกับคุณภาพการสอน',
    },
  ];
  return (
    <section className="mt-12">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        รีวิวจากผู้เรียน
      </h2>
      <div className="space-y-6">
        {reviews.map((review, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-md flex flex-col sm:flex-row items-center"
          >
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gray-300 rounded-full flex items-center justify-center text-xl text-white">
                {review.name[0]}
              </div>
            </div>
            <div className="ml-4 flex-1">
              <div className="flex items-center">
                <span className="text-yellow-500">
                  <FaStar />
                </span>
                <span className="ml-2 text-gray-600">{review.rating}</span>
              </div>
              <p className="text-gray-700 mt-2">{review.review}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
