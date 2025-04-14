'use client';
import React, { useState } from 'react';

// Define the formData keys as a type
type FormData = {
  level: string;
  format: string;
  frequency: string;
  province: string;
  name: string;
  contactMethod: string;
  contactDetail: string;
};

export default function StepForm() {
  const [step, setStep] = useState(0);

  const [formData, setFormData] = useState<FormData>({
    level: '',
    format: '',
    frequency: '',
    province: '',
    name: '',
    contactMethod: '',
    contactDetail: '',
  });

  const [error, setError] = useState('');

  // 🔄 handle input change
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    // Ensure we're only updating the correct property of formData
    const key = steps[step].key as keyof FormData; // Use keyof FormData to ensure we're updating the right property
    setFormData({ ...formData, [key]: e.target.value });
  };

  // 👉 Next step or submit
  const handleNext = () => {
    const currentKey = steps[step].key;

    // custom validation for contact step
    if (currentKey === 'name') {
      if (
        !formData.name ||
        !formData.contactMethod ||
        !formData.contactDetail
      ) {
        setError('กรุณากรอกข้อมูลให้ครบถ้วน');
        return;
      }
    } else if (!formData[currentKey as keyof FormData]) {
      setError('กรุณากรอกข้อมูลก่อนดำเนินการต่อ');
      return;
    }

    setError('');

    if (step < steps.length - 1) {
      setStep(step + 1);
    } else {
      console.log('ส่งฟอร์ม:', formData);
      alert('ส่งคำตอบเรียบร้อยแล้ว!');
    }
  };

  // 📋 form steps config
  const steps = [
    {
      key: 'level',
      question: 'คุณต้องการเรียนระดับใด?',
      input: (
        <select
          value={formData.level}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">-- เลือกระดับการเรียน --</option>
          <option value="ประถม">ประถม</option>
          <option value="มัธยมต้น">มัธยมต้น</option>
          <option value="มัธยมปลาย">มัธยมปลาย</option>
          <option value="มหาวิทยาลัย">มหาวิทยาลัย</option>
          <option value="บุคคลทั่วไป">บุคคลทั่วไป</option>
        </select>
      ),
    },
    {
      key: 'format',
      question: 'คุณต้องการเรียนรูปแบบไหน?',
      input: (
        <div className="space-y-2">
          {['เรียนออนไลน์', 'เรียนที่บ้าน'].map((option) => (
            <label key={option} className="flex items-center space-x-2">
              <input
                type="radio"
                value={option}
                name="format"
                onChange={handleChange}
                checked={formData.format === option}
                className="accent-indigo-600"
              />
              <span>{option}</span>
            </label>
          ))}
        </div>
      ),
    },
    {
      key: 'frequency',
      question: 'ต้องการเรียนสัปดาห์ละกี่ครั้ง?',
      input: (
        <input
          type="number"
          value={formData.frequency}
          onChange={handleChange}
          placeholder="เช่น 2"
          className="block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
        />
      ),
    },
    {
      key: 'province',
      question: 'คุณอยู่จังหวัดอะไร?',
      input: (
        <select
          value={formData.province}
          onChange={handleChange}
          className="block w-full border border-gray-300 rounded-md p-3 focus:ring-indigo-500 focus:border-indigo-500"
        >
          <option value="">-- เลือกจังหวัด --</option>
          <option value="กรุงเทพมหานคร">กรุงเทพมหานคร</option>
          <option value="นนทบุรี">นนทบุรี</option>
          <option value="ชลบุรี">ชลบุรี</option>
          <option value="เชียงใหม่">เชียงใหม่</option>
          <option value="ขอนแก่น">ขอนแก่น</option>
          <option value="อื่นๆ">อื่นๆ</option>
        </select>
      ),
    },
    {
      key: 'name',
      question: 'ข้อมูลติดต่อของคุณ',
      input: (
        <div className="space-y-4">
          <input
            type="text"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="ชื่อของคุณ"
            className="block w-full border border-gray-300 rounded-md p-3"
          />

          <div>
            <p className="mb-2">เลือกช่องทางการติดต่อ:</p>
            {['Facebook', 'Line', 'เบอร์โทร'].map((method) => (
              <label key={method} className="flex items-center space-x-2 mb-1">
                <input
                  type="radio"
                  name="contactMethod"
                  value={method}
                  checked={formData.contactMethod === method}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      contactMethod: e.target.value,
                      contactDetail: '',
                    })
                  }
                  className="accent-indigo-600"
                />
                <span>{method}</span>
              </label>
            ))}
          </div>

          {formData.contactMethod && (
            <input
              type="text"
              value={formData.contactDetail}
              onChange={(e) =>
                setFormData({ ...formData, contactDetail: e.target.value })
              }
              placeholder={`กรอก${formData.contactMethod}`}
              className="block w-full border border-gray-300 rounded-md p-3"
            />
          )}
        </div>
      ),
    },
  ];

  return (
    <div className="flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-50  p-12">
      <div className="w-full max-w-xl bg-white rounded-xl shadow-md p-6 sm:p-8">
        <h2 className="text-xl font-bold text-indigo-700 mb-4">
          ให้เราช่วยคุณหาติวเตอร์ที่เหมาะกับคุณนะ
        </h2>

        <p className="text-gray-800 font-semibold mb-4">
          {steps[step].question}
        </p>

        <div className="mb-4">{steps[step].input}</div>

        {error && <div className="text-red-500 mb-4 text-sm">{error}</div>}

        <button
          onClick={handleNext}
          className="w-full bg-indigo-600 text-white px-6 py-3 rounded-md hover:bg-indigo-700 transition"
        >
          {step === steps.length - 1 ? 'ส่งคำตอบ' : 'ถัดไป'}
        </button>
      </div>
    </div>
  );
}
