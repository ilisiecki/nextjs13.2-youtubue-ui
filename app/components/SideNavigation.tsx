"use client";

import { usePathname, useRouter } from "next/navigation";
import React, { useState } from "react";
import useMediaQuery from "../hooks/useMediaQuery";
import { HiOutlineUserCircle } from "react-icons/Hi";

interface MenuItem {
  index: number;
  pathName: string;
}

const MenuItems: Array<MenuItem> = [
  {
    index: 0,
    pathName: "/",
  },
  {
    index: 1,
    pathName: "/shorts",
  },
  {
    index: 2,
    pathName: "feed/subscriptions",
  },
  {
    index: 3,
    pathName: "feed/library",
  },
  {
    index: 4,
    pathName: "feed/history",
  },
];

const SideNavigation = () => {
  const isAboveSizeScreen = useMediaQuery("(min-width: 1312px)");
  const pathname = usePathname();
  const MenuIndex = MenuItems.find(({ pathName }) => pathName === pathname);
  const [activeButtonIndex, setActiveButtonIndex] = useState(MenuIndex?.index);
  const router = useRouter();

  const handleItemClick = (index: number) => {
    setActiveButtonIndex(index);
    router.push(MenuItems[index].pathName);
  };

  return (
    <>
      {isAboveSizeScreen ? (
        <aside className="-mt-8 h-full bg-zinc-900	">
          <div className="divide-y divide-zinc-600">
            <div className="pb-3">
              <span className="flex items-center pl-3 pr-2">
                <button
                  className={`${
                    activeButtonIndex === 0 ? "bg-zinc-700" : "bg-zinc-900"
                  } flex w-52 items-center rounded-xl py-2 pl-3 hover:bg-zinc-700`}
                  onClick={() => handleItemClick(0)}
                >
                  {activeButtonIndex === 0 ? (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M4,10V21h6V15h4v6h6V10L12,3Z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M12,4.33l7,6.12V20H15V14H9v6H5V10.45l7-6.12M12,3,4,10V21h6V15h4v6h6V10L12,3Z"></path>
                    </svg>
                  )}
                  <span className="pl-6">Home</span>
                </button>
              </span>
              <span className="flex items-center pl-3">
                <button
                  className={`${
                    activeButtonIndex === 1 ? "bg-zinc-700" : "bg-zinc-900"
                  } flex w-52 items-center rounded-xl py-2 pl-3 hover:bg-zinc-700`}
                  onClick={() => handleItemClick(1)}
                >
                  {activeButtonIndex === 1 ? (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M17.77 10.32c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zM10 14.65v-5.3L15 12l-5 2.65z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path>
                    </svg>
                  )}
                  <span className="pl-6">Shorts</span>
                </button>
              </span>
              <span className="flex items-center pl-3">
                <button
                  className={`${
                    activeButtonIndex === 2 ? "bg-zinc-700" : "bg-zinc-900"
                  } flex w-52 items-center rounded-xl py-2 pl-3 hover:bg-zinc-700`}
                  onClick={() => handleItemClick(2)}
                >
                  {activeButtonIndex === 2 ? (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M20,7H4V6h16V7z M22,9v12H2V9H22z M15,15l-5-3v6L15,15z M17,3H7v1h10V3z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path>
                    </svg>
                  )}

                  <span className="pl-6">Subscriptions</span>
                </button>
              </span>
            </div>
            <div className="pt-3 pb-3">
              <span className="flex items-center pl-3">
                <button
                  className={`${
                    activeButtonIndex === 3 ? "bg-zinc-700" : "bg-zinc-900"
                  } flex w-52 items-center rounded-xl py-2 pl-3 hover:bg-zinc-700`}
                  onClick={() => handleItemClick(3)}
                >
                  {activeButtonIndex === 3 ? (
                    <svg
                      viewBox="0 0 24 24"
                      width={24}
                      className={`${
                        activeButtonIndex === 3
                          ? "srtoke-none fill-white"
                          : "fill-none stroke-white"
                      }`}
                    >
                      <path d="M4,20h14v1H3V6h1V20z M21,3v15H6V3H21z M17,10.5L11,7v7L17,10.5z"></path>
                    </svg>
                  ) : (
                    <svg viewBox="0 0 24 24" width={24} className="fill-white">
                      <path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path>
                    </svg>
                  )}

                  <span className="pl-6">Library</span>
                </button>
              </span>
              <span className="flex items-center pl-3">
                <button
                  className={`${
                    activeButtonIndex === 4 ? "bg-zinc-700" : "bg-zinc-900"
                  } flex w-52 items-center rounded-xl py-2 pl-3 hover:bg-zinc-700`}
                  onClick={() => handleItemClick(4)}
                >
                  <svg
                    viewBox="0 0 24 24"
                    width={24}
                    className={`${
                      activeButtonIndex === 4
                        ? "fill-white stroke-white"
                        : "fill-white stroke-none"
                    }`}
                  >
                    <path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path>
                  </svg>
                  <span className="pl-6">History</span>
                </button>
              </span>
            </div>
            <div className="pt-3">
              <p className="flex w-52 items-center py-2 pl-8 text-sm">
                Sign in to like videos, comment, and subscribe.
              </p>
              <div className="pl-6 pt-1.5">
                <div className="flex h-9 w-24 cursor-pointer items-center justify-center rounded-full border-[1px] border-zinc-600 text-sm font-medium text-blue-400 hover:border-none hover:bg-blue-400 hover:bg-opacity-25">
                  <HiOutlineUserCircle
                    size={24}
                    color="#60a5fa"
                    className="mr-2"
                  />
                  Sign in
                </div>
              </div>
            </div>
          </div>
        </aside>
      ) : (
        <>
          <div className="-mt-8 border-2 border-orange-300">
            SIDE NAVIGATION SMALL
          </div>
          <div>nie ladnie tak</div>
        </>
      )}
    </>
  );
};

export default SideNavigation;
