import React from 'react';

export default function heroSection() {
  return (
    <div>
      <section className="bg-gradient-to-br from-indigo-100 to-purple-50 py-20">
        <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
          {/* Text Content */}
          <div className="md:w-1/2 text-center md:text-left mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-extrabold text-gray-800 leading-tight mb-6">
              ค้นหาครูสอนพิเศษใกล้บ้านคุณ
            </h1>
            <div className="flex justify-center md:justify-start">
              <input
                type="text"
                placeholder="ค้นหาวิชา / สถานที่"
                className="w-full max-w-md px-4 py-3 rounded-l-md border border-gray-300 focus:outline-none"
              />
              <button className="px-6 py-3 bg-indigo-600 text-white rounded-r-md hover:bg-indigo-700 transition">
                ค้นหา
              </button>
            </div>
          </div>

          {/* Illustration */}
          <div className="md:w-1/2 flex justify-center">
            <img
              src="https://images.squarespace-cdn.com/content/v1/57c0d8d1e58c622e8b6d5328/c74646d9-694c-4af5-8993-c6963a302288/UPchieve+online+tutoring+homepage.png"
              alt="tutor illustration"
              className="w-80 md:w-[400px]"
            />
          </div>
        </div>
      </section>
    </div>
  );
}
