import React from 'react'
import Image from 'next/image'

export interface CommunityCardProps {
  user: string;
  activity: string;
  imgUrl: string;
}

const CommunityCard: React.FC<CommunityCardProps> = ({ user, activity, imgUrl }) => {
  return (
    <div className='flex gap-4 '>
      <Image
        src={imgUrl}
        alt='img'
        width={80}
        height={80}
        className='rounded-full object-cover' />

      <div className='w-2/3'>
        <h1 className='text-black text-[24px]'>{user}</h1>
        <p className='text-[#9F9C9C]'>Aktivitas terbaru: {activity}</p>
      </div>
    </div>
  )
}

export default CommunityCard