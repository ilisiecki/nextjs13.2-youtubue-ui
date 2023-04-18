"use client";

import { useState, useEffect, useCallback } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import VideoSection from "./components/VideoSection";
import NextVideoSection from "./components/NextVideoSection";
import { useStore } from "./(store)/store";

export default function Home() {
  const isAboveSizeScreenXXXL = useMediaQuery("(min-width: 2304px)");
  const isAboveSizeScreenXXL = useMediaQuery("(min-width: 1966px)");
  const isAboveSizeScreenXLB = useMediaQuery("(min-width: 1798px)");
  const isAboveSizeScreenXL = useMediaQuery("(min-width: 1630px)");
  const isAboveSizeScreenXB = useMediaQuery("(min-width: 1463px)");
  const isAboveSizeScreenX = useMediaQuery("(min-width: 1312px)");
  const isAboveSizeScreenM = useMediaQuery("(min-width: 1128px)");
  const isAboveSizeScreenS = useMediaQuery("(min-width: 721px)");

  const [numberOfVideosToDisplay, setNumberOfVideosToDisplay] = useState(0);
  const [
    numberOfVideosToDisplayForNextSection,
    setNumberOfVideosToDisplayForNextSection,
  ] = useState(0);

  const [isMenuOpen] = useStore((state) => [state.isMenuOpen]);
  const [showMoreVideos, setShowMoreVideos] = useState(false);

  const numberOfVideosFromMediaQuerry = useCallback(() => {
    if (isAboveSizeScreenXXXL) {
      setNumberOfVideosToDisplay(6);
    } else if (isAboveSizeScreenXXL) {
      setNumberOfVideosToDisplay(5);
    } else if (isAboveSizeScreenXL) {
      if (isAboveSizeScreenXLB && !isMenuOpen) {
        setNumberOfVideosToDisplay(5);
      } else {
        setNumberOfVideosToDisplay(4);
      }
    } else if (isAboveSizeScreenX) {
      if (isAboveSizeScreenXB && !isMenuOpen) {
        setNumberOfVideosToDisplay(4);
      } else {
        setNumberOfVideosToDisplay(3);
      }
    } else if (isAboveSizeScreenM) {
      setNumberOfVideosToDisplay(3);
    } else if (isAboveSizeScreenS) {
      setNumberOfVideosToDisplay(2);
    } else {
      setNumberOfVideosToDisplay(1);
    }
    setNumberOfVideosToDisplayForNextSection(numberOfVideosToDisplay * 2);
  }, [
    numberOfVideosToDisplay,
    isAboveSizeScreenS,
    isAboveSizeScreenM,
    isAboveSizeScreenX,
    isAboveSizeScreenXL,
    isAboveSizeScreenXLB,
    isAboveSizeScreenXB,
    isAboveSizeScreenXXL,
    isAboveSizeScreenXXXL,
    isMenuOpen,
  ]);

  useEffect(() => {
    numberOfVideosFromMediaQuerry();
  }, [numberOfVideosFromMediaQuerry]);

  return (
    <div className="w-full">
      <VideoSection numberOfVideosToDisplay={numberOfVideosToDisplay} />
      <NextVideoSection
        numberOfVideosToDisplay={numberOfVideosToDisplay}
        numberOfVideosToDisplayForNextSection={
          numberOfVideosToDisplayForNextSection
        }
      />
    </div>
  );
}
