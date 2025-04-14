'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import Image from 'next/image';
function SwiperReviewCar() {
    return (
        <Swiper
            breakpoints={{
                0: {
                    slidesPerView: 3,
                    spaceBetween: 15,
                },
                768: {
                    slidesPerView: 4,
                    spaceBetween: 30,
                },
            }}
        >
            {Array.from({ length: 6 }).map((_, index) => (
                <>
                    <SwiperSlide key={index}>
                        <div className='w-full space-y-2'>
                            <div className='w-full aspect-video relative rounded-lg overflow-hidden'>
                                <Image src={''} alt="modelcar" fill className='bg-neutral-100 object-cover' />
                            </div>
                            <h4 className='text-[12px] md:text-xl text-white font-semibold'>Lorem ipsum dolor sit.</h4>
                        </div>
                    </SwiperSlide>
                </>
            ))}
        </Swiper>
    )
}

export default SwiperReviewCar