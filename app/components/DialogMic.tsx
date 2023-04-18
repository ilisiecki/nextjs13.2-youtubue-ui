import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { RxCross1 } from "react-icons/rx";
import useSound from "use-sound";
import beepNotification from "../sounds/beep-notification.mp3";

type Props = {};

const DialogMic = (props: Props) => {
  const [isOpen, setIsOpen] = useState(false);

  const [play] = useSound(beepNotification, {
    volume: 0.5,
  });

  const handleClick = () => {
    play();
  };

  function closeModal() {
    setIsOpen(false);
  }

  function openModal() {
    setIsOpen(true);
  }

  return (
    <>
      <div className="ml-2 flex items-center justify-center">
        <button
          type="button"
          onClick={() => {
            openModal(), handleClick();
          }}
        >
          <div className="has-tooltip hidden screenT:flex">
            <span className="tooltip mt-16 -ml-14 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
              Search with your voice
            </span>
            <div className="rounded-full bg-zinc-800 p-2 hover:bg-zinc-700">
              <svg viewBox="0 0 24 24" width={24} className="fill-white">
                <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
              </svg>
            </div>
          </div>
          <div className="has-tooltip flex bg-zinc-800 screenT:hidden">
            <span className="tooltip mt-16 -ml-14 flex items-center justify-center rounded-md bg-zinc-500 bg-opacity-90 py-1.5 px-3 text-xs">
              Search with your voice
            </span>
            <div className="rounded-full p-2 hover:bg-zinc-700">
              <svg viewBox="0 0 24 24" width={24} className="fill-white">
                <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
              </svg>
            </div>
          </div>
        </button>
      </div>

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-30" onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black bg-opacity-30" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex items-center justify-center p-2 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="flex w-[36rem] flex-col bg-zinc-800 p-6 text-left shadow-xl transition-all">
                  <button
                    className="absolute right-0 top-0 m-2 flex items-center justify-center rounded-full p-2.5 text-white hover:bg-zinc-500"
                    onClick={closeModal}
                  >
                    <RxCross1 size="1.2em" />
                  </button>
                  <Dialog.Title className="mt-8 text-2xl text-white">
                    <p>Search with your voice</p>
                  </Dialog.Title>
                  <div className="mt-2">
                    <p className="mt-8 text-sm text-zinc-400">
                      To search by voice, go to your browser settings and allow
                      access to microphone
                    </p>
                  </div>

                  <div className="mt-36 flex w-full justify-center pb-10">
                    <button
                      type="button"
                      className="rounded-full bg-zinc-500 p-2.5"
                      onClick={handleClick}
                    >
                      <svg
                        viewBox="0 0 24 24"
                        width={42}
                        className="fill-white"
                      >
                        <path d="M12 3C10.34 3 9 4.37 9 6.07V11.93C9 13.63 10.34 15 12 15C13.66 15 15 13.63 15 11.93V6.07C15 4.37 13.66 3 12 3ZM18.5 12H17.5C17.5 15.03 15.03 17.5 12 17.5C8.97 17.5 6.5 15.03 6.5 12H5.5C5.5 15.24 7.89 17.93 11 18.41V21H13V18.41C16.11 17.93 18.5 15.24 18.5 12Z"></path>
                      </svg>
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};

export default DialogMic;
