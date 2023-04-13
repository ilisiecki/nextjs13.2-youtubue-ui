import dynamic from "next/dynamic";
import TopNavigation from "./components/TopNavigation";
import "./globals.css";

export const metadata = {
  title: "YouTube",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const SideNavigation = dynamic(() => import("./components/SideNavigation"), {
    ssr: false,
  });

  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex h-screen w-screen flex-col">
          <div className="fixed z-20 flex h-28 w-screen flex-col bg-zinc-900 text-zinc-200">
            <TopNavigation />
          </div>
          <div className="flex flex-1">
            <div className="fixed top-24 z-30 h-full">
              <SideNavigation />
            </div>
            <div className="z-0 mt-[7rem] flex w-full justify-center">
              {children}
            </div>
          </div>
        </div>
      </body>
    </html>
  );
}
