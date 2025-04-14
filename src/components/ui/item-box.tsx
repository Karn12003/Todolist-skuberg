import React from 'react'
import Image from 'next/image'
import bg from '@/assets/images/example.png'

function ItemBox() {
  return (
    <div className='flex flex-row md:flex-col gap-2'>
      <div className='min-w-[114px] md:w-full  aspect-video rounded-lg relative overflow-hidden'>
        <div className='px-1 py-1 absolute top-2 left-2 bg-[#8F2F34] rounded-sm text-sm z-10 text-white hidden md:block'>Lorem.</div>
        <Image src={bg} alt={""} fill className='object-cover' />
      </div>
      <div className='flex flex-col gap-2'>
        <p className='text-[#333333] font-semibold text-sm md:text-base line-clamp-2 md:line-clamp-none'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis eligendi tenetur sint, illo odio repudiandae!</p>
        <div className='px-1 py-1 w-max bg-[#8F2F34] rounded-sm text-sm z-10 md:hidden block'>Lorem.</div>
      </div>
    </div>
  )
}

export default ItemBox