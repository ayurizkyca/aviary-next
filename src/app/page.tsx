import Image from 'next/image';
import Navbar from '../../components/Navbar';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="relative">
        <Image
          src="/img/img-desktop.png"
          alt="img-banner"
          width={1920}
          height={1080}
          className="object-cover"
        />
        <div className="absolute bottom-0 left-0 p-8 text-[#333333]">
          <h1 className="text-[64px] font-bold mb-4">Selamat Datang di Konservasi Burung</h1>
          <p className="text-[24px]">
            Kami berkomitmen untuk melindungi burung yang terancam punah dan habitatnya. Bergabunglah dengan kami dalam upaya pelestarian ini.
          </p>
        </div>
      </div>
    </div>
  );
}
