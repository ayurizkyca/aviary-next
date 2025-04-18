import React from 'react'
import Image from 'next/image'

export interface NewsCardProps {
  title: string;
  description: string;
  imgUrl: string;
}

const NewsCard: React.FC<NewsCardProps> = ({ title, description, imgUrl }) => {
  return (
    <div className='flex gap-4 '>
      <Image
        src={imgUrl}
        alt='img'
        width={245}
        height={130}
        className='rounded object-cover' />

      <div className='w-2/3'>
        <h1 className='text-black text-[24px]'>{title}</h1>
        <p className='text-[#9F9C9C]'>{description}</p>
      </div>
    </div>
  )
}

export default NewsCard