import React from "react";
import Image from "next/image";
import { feedVideos } from "../util/data";

type Props = { numberOfVideosToDisplay: number };

const VideoSection = (props: Props) => {
  return (
    <div className="flex flex-row justify-center gap-4 border-2 border-cyan-400 px-10 pt-6">
      {feedVideos
        .filter((video) => video.id < props.numberOfVideosToDisplay)
        .map((filteredVideo) => (
          <>
            <div key={filteredVideo.id} className="">
              <div className="group relative cursor-pointer">
                <Image
                  src={filteredVideo.thumbnailUrl}
                  width={360}
                  height={203}
                  alt="thumbnail"
                  className="rounded-xl transition-all duration-300 hover:rounded-none"
                />
                <div className="absolute bottom-0 right-0 mr-1 mb-1 items-center justify-center rounded-md bg-zinc-900/90 px-1 pb-0.5 text-xs font-bold text-white transition-all duration-300 group-hover:opacity-0">
                  {filteredVideo.time}
                </div>
              </div>
              <div className="relative border-2 border-yellow-500">
                <div className="flex flex-row">
                  <div className="mt-2 h-[36px] w-[36px] shrink-0 border-2 border-orange-500">
                    <Image
                      src={filteredVideo.channelImageUrl}
                      height={36}
                      width={36}
                      alt="profile picture"
                      className="rounded-full"
                    />
                  </div>
                  <div className="ml-2 mt-2 flex w-64 flex-col border-2 border-green-500">
                    <div className="group flex cursor-pointer items-start justify-between">
                      <span className="pb-0.5 font-semibold leading-normal text-white line-clamp-2">
                        {filteredVideo.title}
                      </span>
                      <button className="absolute top-0 right-0 mt-3">
                        <svg
                          viewBox="0 0 24 24"
                          width={24}
                          height={24}
                          className="fill-transparent group-hover:fill-white"
                        >
                          <path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path>
                        </svg>
                      </button>
                    </div>
                    <div className="text-[15px] leading-snug text-zinc-400">
                      <span>{filteredVideo.channelName}</span>
                      <div className="flex items-center">
                        <span>{filteredVideo.viewCount}</span>
                        <span className="px-1">views</span>
                        <span className="pr-1">•</span>
                        <span>{filteredVideo.createdAt}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        ))}
    </div>
  );
};

export default VideoSection;
