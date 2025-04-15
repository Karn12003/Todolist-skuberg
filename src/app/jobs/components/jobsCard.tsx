import Link from 'next/link';
import React from 'react';

export default function JobCard() {
  return (
    <div className="p-4 border rounded-xl shadow-sm hover:shadow-md transition">
      <h2 className="text-lg font-medium text-blue-600">ครูสอนคณิต ป.6</h2>
      <p className="text-gray-600 mt-1">สอนที่บ้านแถวลาดพร้าว 71</p>
      <div className="flex flex-wrap text-sm gap-3 mt-3 text-gray-500">
        <span>💰 300 บาท/ชม.</span>
        <span>📍 ลาดพร้าว, กทม</span>
        <span>🎓 ป.6</span>
      </div>
      <Link href="/jobs-detail">
        <button className="mt-4 px-4 py-1 cursor-pointer bg-blue-600 text-white rounded hover:bg-blue-700">
          ดูรายละเอียด
        </button>
      </Link>
    </div>
  );
}
