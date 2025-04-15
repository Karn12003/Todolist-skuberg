import React from 'react';

export default function JobFilter() {
  return (
    <div className="space-y-6">
      <div>
        <label className="block font-medium mb-1">จังหวัด</label>
        <select className="w-full border p-2 rounded">
          <option>ทั้งหมด</option>
          <option>กรุงเทพมหานคร</option>
          <option>เชียงใหม่</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">ระดับชั้น</label>
        <select className="w-full border p-2 rounded">
          <option>ทั้งหมด</option>
          <option>ประถม</option>
          <option>มัธยม</option>
        </select>
      </div>
      <div>
        <label className="block font-medium mb-1">วิชา</label>
        <select className="w-full border p-2 rounded">
          <option>ทั้งหมด</option>
          <option>คณิตศาสตร์</option>
          <option>อังกฤษ</option>
        </select>
      </div>
    </div>
  );
}
