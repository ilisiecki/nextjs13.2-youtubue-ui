import { HiOutlineUserCircle } from "react-icons/hi";

export default function Library() {
  return (
    <>
      <div className="mt-24 flex flex-col items-start">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" width={125} className="fill-white">
            <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
          </svg>
          <p className="mt-4 text-center text-2xl font-medium">
            Enjoy your favorite videos
          </p>
          <p className="mt-4 text-center">
            Sign in to access videos that you’ve liked or saved
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
