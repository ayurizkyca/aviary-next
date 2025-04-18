import { NewsCardProps } from "../../components/NewsCard";
import { VideoCardProps } from "../../components/VideoCard";

export const videos: VideoCardProps[] = [
  {
    title: "Live Cenderawasih Papua",
    location: "Papua - Cenderawasih",
    youtubeId: "YQCo9rWFgAY",
    isLive: true,
  },
  {
    title: "Live Jalak Bali",
    location: "Bali - Jalak Bali",
    youtubeId: "uJSM5wu-NFc",
    isLive: false,
  },
  {
    title: "Live Elang Jawa",
    location: "Jawa - Elang Jawa",
    youtubeId: "WEcAdKe4i0w",
    isLive: true,
  },
  {
    title: "Live Harimau Sumatra",
    location: "Sumatra - Harimau Sumatra",
    youtubeId: "pfsFde-ktXY",
    isLive: true,
  },
];

export const news: NewsCardProps[] = [
  {
    title: "Patroli Hutan Terbaru",
    description: "Tim kami baru saja menyelesaikan patroli hutan terakhir di Papua.",
    imgUrl: "/img/Property 1=1.png"
  },
  {
    title: "PWorkshop Komunitas",
    description: "Kami akan mengadakan workshop konservasi burung untuk masyarakat lokal.",
    imgUrl: "/img/Property 1=2.png"
  },
  {
    title: "Komunitas Burung Se-Kabupaten",
    description: "Komunitas baru saja terbentuk di kabupaten kami!",
    imgUrl: "/img/Property 1=3.png"
  },
  {
    title: "Pembagian Bibit Tanaman",
    description: "Komunitas akan membagikan bibit tanaman untuk mendukung habitat burung.",
    imgUrl: "/img/Property 1=4.png"
  },
];
