import { HiOutlineUserCircle } from "react-icons/Hi";

export default function History() {
  return (
    <>
      <div className="mt-24 flex flex-col items-start">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" width={125} className="fill-white">
            <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
          </svg>
          <p className="mt-4 text-center text-2xl font-medium">
            Keep track of what you watch
          </p>
          <p className="mt-4 text-center">
            Watch history isn&apos;t viewable when signed out.
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
