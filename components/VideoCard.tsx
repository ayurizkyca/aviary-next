// import React from "react";

// interface VideoCardProps {
//   title: string;
//   location: string;
//   youtubeId: string;
//   isLive?: boolean;
// }

// const VideoCard: React.FC<VideoCardProps> = ({
//   title,
//   location,
//   youtubeId,
//   isLive = false,
// }) => {
//   return (
//     <div className="max-w-md h-[268px] w-[395px] rounded-xl overflow-hidden shadow-md bg-white">
//       <div className="relative w-full aspect-video rounded-t-xl overflow-hidden">
//         <iframe
//           className="w-full h-full"
//           src={`https://www.youtube.com/embed/${youtubeId}?autoplay=0&rel=0`}
//           title={title}
//           allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
//           allowFullScreen
//         />
//       </div>

//       <div className="p-4">
//         <h2 className="text-lg font-semibold text-[#333333]">{location}</h2>
//         {isLive ? (
//           <p className="text-sm text-gray-500 mt-1">
//             <span className="text-red-500">●</span> Sedang Live
//           </p>
//         ) : (
//           <p className="text-sm text-gray-500 mt-1">Tidak Live</p>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoCard;


import React from "react";

export interface VideoCardProps {
  title: string;
  location: string;
  youtubeId: string;
  isLive?: boolean;
}

const VideoCard: React.FC<VideoCardProps> = ({
  title,
  location,
  youtubeId,
  isLive = false,
}) => {
  return (
    <div className="w-[395px] bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition-shadow">
      <div className="relative aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src={`https://www.youtube.com/embed/${youtubeId}?rel=0`}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        />
      </div>

      <div className="p-3">
        <h2 className="text-[18px] font-semibold text-[#333333] leading-tight">
          {location}
        </h2>
        <p className="text-sm text-gray-500 mt-1">
          <span className={`font-bold ${isLive ? "text-red-500" : "text-gray-400"}`}>
            ●
          </span>{" "}
          {isLive ? "Sedang Live" : "Tidak Live"}
        </p>
      </div>
    </div>
  );
};

export default VideoCard;

