import SideNavigation from "./components/SideNavigation";
import TopNavigation from "./components/TopNavigation";
import "./globals.css";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="bg-zinc-900 text-zinc-200">
        <div className="flex h-screen w-screen flex-col border-2 border-green-500">
          <TopNavigation />
          <div className="flex flex-1 border-2 border-blue-500">
            <SideNavigation />
            {children}
          </div>
        </div>
      </body>
    </html>
  );
}
