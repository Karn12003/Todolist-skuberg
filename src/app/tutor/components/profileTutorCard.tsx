import React from 'react';
import { FaStar } from 'react-icons/fa';

export default function profileTutorCard() {
  const tutor = {
    name: 'Ajarn Pla Tippawan',
    rating: 4.8,
    reviews: 25,
    subject: 'ภาษาอังกฤษ',
    description:
      'อาจารย์พลเป็นผู้เชี่ยวชาญในวิชาภาษาอังกฤษ มีประสบการณ์ในการสอนทั้งในและต่างประเทศ พร้อมเทคนิคการสอนที่เข้าใจง่ายและสามารถประยุกต์ใช้ได้จริงในชีวิตประจำวัน',
    experience: [
      'CU-TEP, TU-GET, SAT, TOEFL, IELTS',
      'สอนภาษาอังกฤษสำหรับทุกระดับ',
    ],
    image: '/path/to/tutor-image.jpg',
    price: '400 บาท/ชั่วโมง',
    contact: '080-123-4567',
    location: 'กรุงเทพมหานคร',
    availableTimes: [
      'จันทร์ - ศุกร์: 10:00 - 18:00',
      'เสาร์ - อาทิตย์: 09:00 - 12:00',
    ],
  };
  return (
    <div className="bg-white rounded-lg shadow-lg p-8">
      <div className="flex flex-col lg:flex-row items-center mb-6">
        <img
          src={tutor.image}
          alt="Tutor"
          className="w-24 h-24 rounded-full object-cover mb-4 lg:mb-0 lg:mr-6"
        />
        <div className="text-center lg:text-left">
          <h1 className="text-3xl font-semibold text-gray-800">{tutor.name}</h1>
          <div className="flex items-center justify-center lg:justify-start mt-2">
            <span className="text-yellow-500">
              <FaStar />
            </span>
            <span className="ml-2 text-gray-600">
              {tutor.rating} ({tutor.reviews} รีวิว)
            </span>
          </div>
          <p className="mt-2 text-gray-700">{tutor.subject}</p>
        </div>
      </div>

      {/* Tutor Description */}
      <p className="text-gray-800 mb-4">{tutor.description}</p>

      {/* Tutor Experience */}
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        ประสบการณ์การสอน:
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        {tutor.experience.map((exp, index) => (
          <li key={index} className="mb-2">
            {exp}
          </li>
        ))}
      </ul>

      {/* Price and Contact Information */}
      <div className="flex justify-between items-center mt-8">
        <div>
          <h2 className="text-lg font-semibold text-gray-800">ราคาติว:</h2>
          <p className="text-gray-700">{tutor.price}</p>
        </div>
        <div>
          <h2 className="text-lg font-semibold text-gray-800">ติดต่อ:</h2>
          <p className="text-gray-700">{tutor.contact}</p>
        </div>
      </div>

      <h2 className="text-lg font-semibold text-gray-800 mt-8">
        เวลาที่ติวได้:
      </h2>
      <ul className="list-disc pl-6 text-gray-700">
        {tutor.availableTimes.map((time, index) => (
          <li key={index} className="mb-2">
            {time}
          </li>
        ))}
      </ul>

      <div className="mt-8 flex justify-center">
        <button className="bg-indigo-600 cursor-pointer text-white py-3 px-8 rounded-md hover:bg-indigo-700 transition">
          จองการติว
        </button>
      </div>
    </div>
  );
}
