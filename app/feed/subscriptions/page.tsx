import { HiOutlineUserCircle } from "react-icons/hi";

export default function Subscriptions() {
  return (
    <>
      <div className="mt-24 flex flex-col items-start">
        <div className="flex flex-col items-center">
          <svg viewBox="0 0 24 24" width={125} className="fill-white">
            <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
          </svg>
          <p className="mt-4 text-center text-2xl font-medium">
            Don’t miss new videos
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
