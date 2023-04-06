"use client";

import React, { useState } from "react";

const Categories = () => {
  const [activeButtonIndex, setActiveButtonIndex] = useState(0);
  return (
    <>
      <div className="mt-4 flex items-center justify-center gap-2">
        <div>
          <button
            title="All"
            className={`${
              activeButtonIndex === 0
                ? "bg-white text-zinc-700"
                : "bg-zinc-700 text-white hover:bg-zinc-600"
            } rounded-md px-3 py-1`}
            onClick={() => setActiveButtonIndex(0)}
          >
            All
          </button>
        </div>
        <div>
          <button
            title="Music"
            className={`${
              activeButtonIndex === 1
                ? "bg-white text-zinc-700"
                : "bg-zinc-700 text-white transition duration-300 hover:bg-zinc-600"
            } rounded-md px-3 py-1`}
            onClick={() => setActiveButtonIndex(1)}
          >
            Music
          </button>
        </div>
        <button
          title="Live"
          className={`${
            activeButtonIndex === 2
              ? "bg-white text-zinc-700"
              : "bg-zinc-700 text-white"
          } rounded-md px-3 py-1`}
          onClick={() => setActiveButtonIndex(2)}
        >
          Live
        </button>
        <button
          title="Gaming"
          className={`${
            activeButtonIndex === 3
              ? "bg-white text-zinc-700"
              : "bg-zinc-700 text-white"
          } rounded-md px-3 py-1`}
          onClick={() => setActiveButtonIndex(3)}
        >
          Gaming
        </button>
        <button
          title="Chill-out music"
          className={`${
            activeButtonIndex === 4
              ? "bg-white text-zinc-700"
              : "bg-zinc-700 text-white"
          } rounded-md px-3 py-1`}
          onClick={() => setActiveButtonIndex(4)}
        >
          Chill-out music
        </button>
        <button
          title="History"
          className={`${
            activeButtonIndex === 5
              ? "bg-white text-zinc-700"
              : "bg-zinc-700 text-white"
          } rounded-md px-3 py-1`}
          onClick={() => setActiveButtonIndex(5)}
        >
          History
        </button>
        <button
          title="Driving"
          className={`${
            activeButtonIndex === 6
              ? "bg-white text-zinc-700"
              : "bg-zinc-700 text-white"
          } rounded-md px-3 py-1`}
          onClick={() => setActiveButtonIndex(6)}
        >
          Driving
        </button>
      </div>
    </>
  );
};

export default Categories;
