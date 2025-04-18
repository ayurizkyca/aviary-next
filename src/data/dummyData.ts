export interface VideoData {
    id: string;
    title: string;
    location: string;
    youtubeId: string;
    isLive: boolean;
  }
  
  export const videos: VideoData[] = [
    {
      id: "1",
      title: "Live Cenderawasih Papua",
      location: "Papua - Cenderawasih",
      youtubeId: "YQCo9rWFgAY",
      isLive: true,
    },
    {
      id: "2",
      title: "Live Jalak Bali",
      location: "Bali - Jalak Bali",
      youtubeId: "YQCo9rWFgAY",
      isLive: false,
    },
    {
      id: "3",
      title: "Live Elang Jawa",
      location: "Jawa - Elang Jawa",
      youtubeId: "YQCo9rWFgAY",
      isLive: true,
    },
    {
        id: "4",
        title: "Live Elang Jawa",
        location: "Jawa - Elang Jawa",
        youtubeId: "YQCo9rWFgAY",
        isLive: true,
      },
  ];
  