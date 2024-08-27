
import { Inter } from "next/font/google";
import "./globals.css";
import Nav from "./main_components/Nav"
import { AppWrapper } from "../context";
import LeftSideBar from "./main_components/LeftSideBar";
import Link from "next/link";


const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Kitaphana",
  description: "Kitaplar ýygyndysy",
};

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={inter.className }>
        <AppWrapper>
          <div className='mt-2'>
            <Nav />
            <div className="pb-2 flex gap-2 p-2">
              <LeftSideBar />
              {children} 
            </div>
          </div>
        </AppWrapper>
      </body>
    </html>
  );
}
