"use client";

import { useStore } from "../(store)/store";

export default function Shorts() {
  const [isMenuOpen, setMenuOpen, setMenuClose] = useStore((state) => [
    state.isMenuOpen,
    state.setMenuOpen,
    state.setMenuClose,
  ]);

  return (
    <div className="mt-12">
      Current State of Menu: {isMenuOpen.toString()}
      <div>
        <button onClick={setMenuOpen}>Change State of menu</button>
      </div>
    </div>
  );
}
