'use client';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Grid } from 'swiper/modules'; // import โมดูล Grid
import 'swiper/css';
import modelcar from '@/assets/images/model-car-1.png';
import Image from 'next/image';

import 'swiper/css/grid';

function SwiperModelCar() {
  return (
    <Swiper
      modules={[Grid]} // เพิ่มโมดูล Grid ลงใน modules prop
      breakpoints={{
        0: {
          slidesPerView: 3,           // 3 คอลัมน์บน mobile
          spaceBetween: 15,           // ระยะห่างระหว่าง slides
          grid: {
            rows: 2,
            fill: 'row'                // 2 แถว
          },
        },
        768: {
          slidesPerView: 4,           // สำหรับ desktop
          spaceBetween: 45,
          grid: {
            rows: 1,                // กลับมาเป็น slider แบบปกติ
          },
        },
      }}
      className="w-full"
    >
      {Array.from({ length: 6 }).map((_, index) => (
        <SwiperSlide key={index}>
          <Image src={modelcar} alt="modelcar" width={500} height={500} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default SwiperModelCar;
