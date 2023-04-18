import React, { useState } from "react";
import DialogMic from "./DialogMic";

type Props = {
  openModal: boolean;
  closeModal: () => void;
};

const SearchBarMobileModal = (props: Props) => {
  const [isActive, setIsActive] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const [isBlur, setIsBlur] = useState(false);

  if (!props.openModal) return null;

  const focusHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(true);
    setIsActive(true);
    setIsBlur(false);
  };

  const blurHandler = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsFocus(false);
    setIsActive(false);
    setIsBlur(true);
  };

  const handleClose = (event: any) => {
    if (event.target.id === "close") props.closeModal();
  };

  return (
    <>
      <div className="fixed inset-0 z-40 flex h-14 w-full items-center bg-zinc-900 screenT:hidden">
        <button
          id="close"
          className="ml-2 flex cursor-pointer items-center justify-center rounded-full p-2 hover:bg-zinc-700"
          onClick={handleClose}
        >
          <svg
            id="close"
            viewBox="0 0 24 24"
            width={24}
            className="fill-white"
            onClick={handleClose}
          >
            <path
              id="close"
              d="M21,11v1H5.64l6.72,6.72l-0.71,0.71L3.72,11.5l7.92-7.92l0.71,0.71L5.64,11H21z"
              onClick={handleClose}
            ></path>
          </svg>
        </button>
        <div className="flex h-10 w-[41rem]">
          <div className="flex w-full">
            {isActive === true ? (
              <>
                <input
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                  placeholder="Search"
                  className="z-20 ml-3 h-full w-full rounded-tl-full rounded-bl-full border-[1px] border-zinc-700 bg-transparent pl-12 pr-1 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none"
                />
                <svg
                  viewBox="0 0 24 24"
                  width={20}
                  className="absolute z-10 mt-2.5 ml-7 fill-white"
                >
                  <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
                </svg>
              </>
            ) : (
              <>
                <input
                  onFocus={focusHandler}
                  onBlur={blurHandler}
                  placeholder="Search"
                  className="ml-12 h-full w-full rounded-tl-full rounded-bl-full border-[1px] border-zinc-700 bg-zinc-900 pr-1 pl-4 placeholder:text-zinc-400 focus:border-blue-500 focus:outline-none"
                />
              </>
            )}
            <button className="has-tooltip flex cursor-pointer items-center justify-center rounded-tr-full rounded-br-full bg-zinc-700 py-2.5 pl-5 pr-4">
              <span className="tooltip mt-32 -ml-6 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
                Search
              </span>
              <svg viewBox="0 0 24 24" width={24} className="fill-white">
                <path d="M20.87,20.17l-5.59-5.59C16.35,13.35,17,11.75,17,10c0-3.87-3.13-7-7-7s-7,3.13-7,7s3.13,7,7,7c1.75,0,3.35-0.65,4.58-1.71 l5.59,5.59L20.87,20.17z M10,16c-3.31,0-6-2.69-6-6s2.69-6,6-6s6,2.69,6,6S13.31,16,10,16z"></path>
              </svg>
            </button>
          </div>
        </div>
        <div className="mr-5">
          <DialogMic />
        </div>
      </div>
    </>
  );
};

export default SearchBarMobileModal;
