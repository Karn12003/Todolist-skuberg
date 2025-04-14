'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-4">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          Tutor
        </Link>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6 text-gray-700">
          <Link href="/search" className="hover:text-blue-500">
            ค้นหาครู
          </Link>
          <Link href="/apply" className="hover:text-blue-500">
            สมัครเป็นครู
          </Link>
          <Link href="/articles" className="hover:text-blue-500">
            บทความ
          </Link>
        </nav>

        {/* Right Buttons */}
        <div className="hidden md:flex space-x-2">
          <Link href="/login">
            <button className="px-4 py-2 border rounded text-sm">
              เข้าสู่ระบบ
            </button>
          </Link>
          <Link href="/register">
            <button className="px-4 py-2 bg-blue-600 text-white rounded-full text-sm">
              ลงทะเบียน
            </button>
          </Link>
        </div>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden px-4 pb-4 space-y-2 text-gray-700">
          <Link href="/search" className="block hover:text-blue-500">
            ค้นหาครู
          </Link>
          <Link href="/apply" className="block hover:text-blue-500">
            สมัครเป็นครู
          </Link>
          <Link href="/articles" className="block hover:text-blue-500">
            บทความ
          </Link>
          <div className="pt-2 border-t">
            <Link href="/login">
              <button className="w-full text-left px-4 py-2 border rounded text-sm mt-2">
                เข้าสู่ระบบ
              </button>
            </Link>
            <Link href="/register">
              <button className="w-full text-left px-4 py-2 bg-blue-600 text-white rounded-full text-sm mt-2">
                ลงทะเบียน
              </button>
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
