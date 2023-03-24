import React from "react";
import { RxHamburgerMenu, RxDotsVertical } from "react-icons/rx";
import { TfiSearch } from "react-icons/tfi";
import { IoMdMic } from "react-icons/Io";
import { HiOutlineUserCircle } from "react-icons/Hi";
import Categories from "./Categories";

const TopNavigation = () => {
  return (
    <>
      <div className="flex items-center justify-between p-4">
        <div className="mr-24 flex items-center gap-4">
          <div className="flex h-10 w-10 items-center justify-center rounded-full hover:bg-zinc-600">
            <RxHamburgerMenu size={21} />
          </div>
          <div className="items-centerg flex cursor-pointer gap-1">
            <div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                data-name="Layer 2"
                height={20}
                width={90}
                className="flex items-center justify-center"
              >
                <g data-name="Layer 1">
                  <path
                    d="M27.97 3.12c-.33-1.23-1.3-2.2-2.53-2.53C23.22 0 14.28 0 14.28 0S5.35 0 3.12.6A3.565 3.565 0 0 0 .6 3.12C0 5.35 0 10 0 10s0 4.65.6 6.88c.33 1.23 1.3 2.2 2.53 2.53 2.23.6 11.16.6 11.16.6s8.93 0 11.16-.6c1.23-.33 2.2-1.3 2.53-2.53.6-2.23.6-6.88.6-6.88s0-4.65-.6-6.88Z"
                    className="fill-red-600"
                  />
                  <path
                    d="M11.43 14.29 18.85 10l-7.42-4.29v8.58Z"
                    className="fill-white"
                  />
                  <path
                    d="M34.6 13 31.39 1.42h2.8l1.12 5.25c.29 1.29.5 2.4.63 3.31h.08c.09-.65.31-1.75.63-3.29l1.16-5.27h2.8l-3.25 11.59v5.56h-2.78v-5.56ZM41.47 18.19c-.56-.38-.97-.97-1.21-1.78-.24-.8-.36-1.87-.36-3.21v-1.82c0-1.35.14-2.43.41-3.25.27-.82.7-1.41 1.28-1.79.58-.37 1.34-.56 2.28-.56s1.67.19 2.23.57c.56.38.97.98 1.23 1.79s.39 1.89.39 3.24v1.82c0 1.34-.13 2.41-.38 3.22s-.66 1.4-1.23 1.78c-.56.37-1.33.56-2.3.56-1 0-1.78-.19-2.34-.57Zm3.17-1.96c.16-.41.24-1.07.24-2v-3.9c0-.9-.08-1.56-.24-1.97-.16-.42-.43-.62-.83-.62s-.65.21-.81.62c-.16.42-.24 1.07-.24 1.97v3.9c0 .93.08 1.59.23 2 .15.41.42.61.82.61s.67-.2.83-.61ZM56.82 18.56h-2.21l-.24-1.53h-.06c-.6 1.16-1.5 1.74-2.7 1.74-.83 0-1.44-.27-1.84-.82-.4-.55-.59-1.4-.59-2.55V6.04H52v9.19c0 .56.06.96.18 1.19.12.24.33.36.61.36.24 0 .48-.08.71-.23.23-.15.39-.34.5-.57V6.04h2.82v12.53Z"
                    className="fill-white"
                  />
                  <path
                    d="M64.48 3.69h-2.8v14.88h-2.76V3.69h-2.8V1.42h8.36v2.27Z"
                    className="fill-white"
                  />
                  <path
                    d="M71.28 18.56h-2.21l-.24-1.53h-.06c-.6 1.16-1.5 1.74-2.7 1.74-.83 0-1.44-.27-1.84-.82-.4-.55-.59-1.4-.59-2.55V6.04h2.82v9.19c0 .56.06.96.18 1.19.12.24.33.36.61.36.24 0 .48-.08.71-.23.23-.15.39-.34.5-.57V6.04h2.82v12.53ZM80.61 8.04c-.17-.79-.45-1.36-.83-1.72-.38-.36-.91-.53-1.57-.53-.52 0-1 .15-1.45.44-.45.29-.8.68-1.04 1.15h-.02V.79h-2.72v17.77h2.33l.29-1.19h.06c.22.42.55.75.98 1 .44.24.92.37 1.45.37.95 0 1.66-.44 2.1-1.32.45-.88.67-2.25.67-4.12v-1.98c0-1.4-.09-2.5-.26-3.29Zm-2.58 5.11c0 .91-.04 1.63-.11 2.14-.08.52-.2.89-.38 1.1-.18.22-.42.33-.71.33-.23 0-.45-.05-.64-.16-.2-.11-.36-.27-.48-.49V8.96c.09-.34.26-.62.49-.84.23-.22.48-.33.75-.33.29 0 .51.11.66.34.16.23.27.6.33 1.13.06.53.09 1.29.09 2.27v1.62ZM84.87 13.87c0 .8.02 1.41.07 1.81.05.4.15.69.3.88.15.18.38.28.69.28.42 0 .71-.16.87-.49.16-.33.24-.87.26-1.63l2.43.14c.01.11.02.26.02.45 0 1.16-.32 2.02-.95 2.59-.63.57-1.53.86-2.69.86-1.39 0-2.36-.44-2.92-1.31-.56-.87-.84-2.22-.84-4.05v-2.19c0-1.88.29-3.25.87-4.12.58-.87 1.57-1.3 2.97-1.3.97 0 1.71.18 2.23.53.52.36.88.91 1.09 1.66.21.75.32 1.79.32 3.11v2.14h-4.72v.63Zm.36-5.9c-.14.18-.24.47-.29.87-.05.4-.07 1.01-.07 1.83v.9h2.06v-.9c0-.8-.03-1.41-.08-1.83-.05-.42-.15-.71-.3-.88-.14-.17-.36-.26-.66-.26-.3 0-.52.09-.66.27Z"
                    className="fill-white"
                  />
                </g>
              </svg>
            </div>
          </div>
        </div>
        <div className="hidden h-10 w-[35rem] sm:flex">
          <div className="flex w-full">
            <input
              placeholder="Search"
              className="h-full w-full rounded-tl-full rounded-bl-full border-[1px] border-zinc-700 bg-zinc-900 px-4 py-2 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none"
            />
            <div className="has-tooltip cursor-pointer rounded-tr-full rounded-br-full bg-zinc-700 py-2.5 pl-5 pr-6">
              <span className="tooltip mt-12 -ml-6 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
                Search
              </span>
              <TfiSearch size={21} />
            </div>
          </div>
          <div className="has-tooltip">
            <span className="tooltip mt-12 -ml-6 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
              Search with your voice
            </span>
            <div className="ml-2 flex h-10 w-10 cursor-pointer items-center justify-center rounded-full bg-zinc-800 hover:bg-zinc-600">
              <IoMdMic size={21} />
            </div>
          </div>
        </div>
        <div className="flex shrink-0 items-center justify-center pr-2">
          <div className="has-tooltip mr-4 ml-24 cursor-pointer">
            <span className="tooltip mt-12 -ml-6 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
              Settings
            </span>
            <div>
              <RxDotsVertical size={20} />
            </div>
          </div>
          <div className="flex h-9 w-24 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-600 text-sm font-medium text-blue-400 hover:border-none hover:bg-blue-400 hover:bg-opacity-25">
            <HiOutlineUserCircle size={24} color="#60a5fa" className="mr-2" />
            Sign in
          </div>
        </div>
      </div>
      <Categories />
    </>
  );
};

export default TopNavigation;
