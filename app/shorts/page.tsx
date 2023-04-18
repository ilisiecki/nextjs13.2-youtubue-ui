"use client";

import { HiOutlineUserCircle } from "react-icons/Hi";

export default function Shorts() {
  return (
    <>
      <div className="mt-24 flex flex-col items-start">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" width={125} className="fill-white">
            <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
          </svg>
          <p className="mt-4 text-center text-2xl font-medium">
            Don’t miss new shorts videos
          </p>
          <p className="mt-4 text-center">
            Sign in to see updates from your favorite YouTube channels
          </p>
          <div className="mt-4">
            <div className="flex h-9 w-24 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-600 text-sm font-medium text-blue-400 hover:border-none hover:bg-blue-400 hover:bg-opacity-25">
              <HiOutlineUserCircle size={24} color="#60a5fa" className="mr-2" />
              Sign in
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
