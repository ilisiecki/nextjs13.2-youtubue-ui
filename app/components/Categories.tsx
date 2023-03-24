import React from "react";

const Categories = () => {
  return (
    <>
      <div className="mt-1 flex items-center justify-center gap-2">
        <div>
          <button
            title="All"
            className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
          >
            All
          </button>
        </div>
        <div>
          <button
            title="Music"
            className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
          >
            Music
          </button>
        </div>
        <button
          title="Live"
          className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
        >
          Live
        </button>
        <button
          title="Gaming"
          className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
        >
          Gaming
        </button>
        <button
          title="Chill-out music"
          className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
        >
          Chill-out music
        </button>
        <button
          title="History"
          className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
        >
          History
        </button>
        <button
          title="Driving"
          className="rounded-md bg-zinc-700 px-3 py-1 hover:bg-zinc-600 focus:bg-white focus:text-zinc-700"
        >
          Driving
        </button>
      </div>
    </>
  );
};

export default Categories;
