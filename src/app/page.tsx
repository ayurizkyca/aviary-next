import Image from 'next/image';
import Navbar from '../../components/Navbar';
import { news, userActivities, videos } from '@/data/dummyData';
import VideoCard from '../../components/VideoCard';
import Link from 'next/link';
import NewsCard from '../../components/NewsCard';
import CommunityCard from '../../components/CommunityCard';

export default function Home() {
  return (
    <div className='bg-white'>
      <Navbar />
      {/* hero section */}
      <div className="relative">
        <Image
          src="/img/img-desktop.png"
          alt="img-banner"
          width={1920}
          height={1080}
          className="hidden md:block object-cover"
        />

        <Image
          src="/img/img-mobile.png"
          alt="img-banner"
          width={1920}
          height={1080}
          className="md:hidden object-cover"
        />

        <div className="absolute bottom-0 left-0 p-8 text-[#333333]">
          <h1 className="text-[32px] md:text-[64px] font-bold mb-4">Selamat Datang di Konservasi Burung</h1>
          <p className=" text-[16px] md:text-[24px]">
            Kami berkomitmen untuk melindungi burung yang terancam punah dan habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.
          </p>
        </div>
      </div>
      {/* section videos */}
      <section className="px-6 md:px-12 py-10">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-semibold text-[#1a1a1a]">Pemantauan Populer</h2>
          <Link href="/videos" className="text-sm text-gray-500 hover:underline">
            See All
          </Link>
        </div>

        <div className="flex gap-6">
          {videos.map((video) => (
            <VideoCard key={video.youtubeId} {...video} />
          ))}
        </div>
      </section>
      <div className='md:flex px-6 md:px-12 py-10 gap-16'>
        {/* News Section */}
        <section className='md:w-1/2'>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">Berita Terbaru</h2>
            <Link href="/videos" className="text-sm text-gray-500 hover:underline">
              See All
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            {news.map((news) => (
              <NewsCard key={news.imgUrl} {...news} />
            ))}
          </div>
        </section>

        {/* Community Section */}
        <section className='md:w-1/2'>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-semibold text-[#1a1a1a]">Komunitas</h2>
            <Link href="/videos" className="text-sm text-gray-500 hover:underline">
              See All
            </Link>
          </div>
          <div className='flex flex-col gap-2'>
            {userActivities.map((userActivity) => (
              <CommunityCard key={`${userActivity.user}${userActivity.imgUrl}`} {...userActivity} />
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}
