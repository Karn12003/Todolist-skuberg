import React from 'react';

export default function categorySideMenu() {
  return (
    <div className="w-full md:w-1/4 p-4 rounded-lg mr-6">
      <h2 className="text-2xl font-bold text-indigo-700 mb-4">
        หมวดหมู่ติวเตอร์
      </h2>
      <ul className="space-y-4">
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            ภาษาอังกฤษ
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            คณิตศาสตร์
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            วิทยาศาสตร์
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            ภาษาไทย
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            ภาษาจีน
          </a>
        </li>
        <li>
          <a href="#" className="text-lg text-gray-800 hover:text-indigo-500">
            ศิลปะ
          </a>
        </li>
      </ul>
    </div>
  );
}
