import React from 'react';
import TutorCard from './tutorCard';

export default function tutorProfileSection() {
  const mockTutors = [
    {
      name: 'Ajarn Pla Tippawan',
      reviews: 11,
      image: 'https://placehold.co/300x200',
      teachingTypes: ['สอนออนไลน์', 'สอนตัวต่อตัว'],
      experience:
        'รวมทั้งประสบการณ์สอน การสอบภาษาอังกฤษ ได้แก่ CU-TEP, TU-GET, SAT, GED reading-writing, GED Social, IGCSE ESL/EFL, TOEFL, IELTS',
      technique: 'สอนสนุก เข้าใจง่าย ประยุกต์ใช้ได้จริง และได้ผลไว',
      additional:
        'อาจารย์เป็นผู้เขียนงานวิจัย และมีผลงานวิจัยการสอนภาษาอังกฤษ…',
    },
    {
      name: 'Kru Joe English',
      reviews: 7,
      image: 'https://placehold.co/300x200',
      teachingTypes: ['สอนออนไลน์'],
      experience:
        'สอน IELTS TOEFL Writing มานานกว่า 10 ปี พร้อมเทคนิคและตัวอย่างจริง',
      technique:
        'โฟกัสจุดอ่อนของผู้เรียน และออกแบบเนื้อหาตามเป้าหมายของแต่ละคน',
      additional:
        'ผ่านการอบรมจาก Cambridge English และมีใบรับรองการสอนภาษาอังกฤษ',
    },
    {
      name: 'Ajarn May',
      reviews: 15,
      image: 'https://placehold.co/300x200',
      teachingTypes: ['สอนตัวต่อตัว'],
      experience:
        'มีประสบการณ์สอนระดับประถม-มัธยม พร้อมเตรียมสอบภาษาอังกฤษเข้า ม.1 และ ม.4',
      technique:
        'ใช้สื่อการสอนหลากหลาย เข้าใจง่าย และเน้นความมั่นใจในการใช้ภาษา',
      additional: 'ได้รับรางวัลครูสอนดีเด่นจากโรงเรียนในกรุงเทพ',
    },
    {
      name: 'Ajarn Pla Tippawan',
      reviews: 11,
      image: 'https://placehold.co/300x200',
      teachingTypes: ['สอนออนไลน์', 'สอนตัวต่อตัว'],
      experience:
        'รวมทั้งประสบการณ์สอน การสอบภาษาอังกฤษ ได้แก่ CU-TEP, TU-GET, SAT, GED reading-writing, GED Social, IGCSE ESL/EFL, TOEFL, IELTS',
      technique: 'สอนสนุก เข้าใจง่าย ประยุกต์ใช้ได้จริง และได้ผลไว',
      additional:
        'อาจารย์เป็นผู้เขียนงานวิจัย และมีผลงานวิจัยการสอนภาษาอังกฤษ…',
    },
  ];
  return (
    <div className="w-full md:w-3/4">
      <h2 className="text-3xl font-bold text-gray-800 mb-2">ติวเตอร์ยอดนิยม</h2>

      <p className="text-gray-700 mb-4">
        เรียนภาษาอังกฤษตัวต่อตัว
        กับครูสอนภาษาอังกฤษคุณภาพที่ได้รับความนิยมมากที่สุดในตอนนี้ ราคาเริ่มที่
        250 บาท เลือกเนื้อหา และเวลาเรียนได้ มีครูให้เลือกหลายคน เรียนตัวต่อตัว
        เรียนสดออนไลน์ มีประสิทธิภาพ เห็นผลเร็ว
      </p>

      <div className="flex flex-wrap gap-2 mb-6">
        {[
          'พูดอังกฤษเพื่อการทำงาน',
          'แกรมม่า',
          'เตรียมสอบ TOEIC',
          'ภาษาอังกฤษ ป.1-ป.6',
          'ภาษาอังกฤษ ม.ต้น',
          'ภาษาอังกฤษ ม.ปลาย',
          'สอนสนทนา',
          'เรียนตัวต่อตัว',
        ].map((tag, i) => (
          <span
            key={i}
            className="bg-indigo-100 text-indigo-700 px-3 py-1 rounded-full text-sm hover:bg-indigo-200 cursor-pointer transition"
          >
            {tag}
          </span>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {mockTutors.map((tutor, index) => (
          <TutorCard key={index} {...tutor} />
        ))}
      </div>
    </div>
  );
}
