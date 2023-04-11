"use client";

import { useState, useEffect } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import VideoSection from "./components/VideoSection";
import NextVideoSection from "./components/NextVideoSection";

export default function Home() {
  const isAboveSizeScreenXXXL = useMediaQuery("(min-width: 2304px)");
  const isAboveSizeScreenXXL = useMediaQuery("(min-width: 1966px)");
  const isAboveSizeScreenXL = useMediaQuery("(min-width: 1630px)");
  const isAboveSizeScreenX = useMediaQuery("(min-width: 1312px)");
  const isAboveSizeScreenM = useMediaQuery("(min-width: 1128px)");
  const isAboveSizeScreenS = useMediaQuery("(min-width: 721px)");

  const [numberOfVideosToDisplay, setNumberOfVideosToDisplay] = useState(0);
  const [
    numberOfVideosToDisplayForNextSection,
    setNumberOfVideosToDisplayForNextSection,
  ] = useState(0);

  function numberOfVideosFromMediaQuerry() {
    if (isAboveSizeScreenXXXL) {
      setNumberOfVideosToDisplay(6);
    } else if (isAboveSizeScreenXXL) {
      setNumberOfVideosToDisplay(5);
    } else if (isAboveSizeScreenXL) {
      setNumberOfVideosToDisplay(4);
    } else if (isAboveSizeScreenX) {
      setNumberOfVideosToDisplay(3);
    } else if (isAboveSizeScreenM) {
      setNumberOfVideosToDisplay(3);
    } else if (isAboveSizeScreenS) {
      setNumberOfVideosToDisplay(2);
    } else {
      setNumberOfVideosToDisplay(1);
    }
    setNumberOfVideosToDisplayForNextSection(numberOfVideosToDisplay * 2);
  }

  useEffect(() => {
    numberOfVideosFromMediaQuerry();
  });

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
