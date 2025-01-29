"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileAccordion = () => {
    setIsMobileAccordionOpen(!isMobileAccordionOpen);
  };

  return (
    <html lang="ko">
      <body className="bg-[#1e1e1e] text-white font-mono">
        <header className="bg-[#2d2d2d] text-white py-4 shadow-md border-b border-[#333]">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
            <div className="flex flex-col items-center sm:items-start">
              <Link href="/" passHref>
                <Image
                  src="/logo.png"
                  alt="새싹 게임즈 로고"
                  width={40}
                  height={40}
                />
              </Link>
            </div>

            <button
              onClick={toggleSidebar}
              className="sm:hidden text-white text-2xl"
            >
              &#9776;
            </button>

            <nav className="hidden sm:flex">
              <ul className="flex justify-center items-center space-x-4 text-sm sm:text-lg">
                <li>
                  <Link href="/" className="text-lg relative group">
                    홈
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
                <span className="text-lg text-[#fff] hidden sm:block">|</span>

                {/* 팀원 소개 - PC 아코디언 */}
                <li className="relative group">
                  <button className="text-lg relative group text-[#fff] hover:text-[#fff]">
                    팀원 소개
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </button>

                  {/* 화려한 아코디언 애니메이션 */}
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="absolute left-0 top-full mt-2 w-44 bg-gradient-to-r from-[#444] to-[#222] rounded-lg shadow-lg overflow-hidden border border-[#666]"
                  >
                    <ul className="py-2 text-center">
                      <li className="p-3 text-sm hover:bg-[#555] transition-colors border-b border-[#666]">
                        <Link href="/team/kim-dohyun">김도현</Link>
                      </li>
                      <li className="p-3 text-sm hover:bg-[#555] transition-colors border-b border-[#666]">
                        <Link href="/team/kim-hyunyoung">김현영</Link>
                      </li>
                      <li className="p-3 text-sm hover:bg-[#555] transition-colors">
                        <Link href="/team/nam-kihyun">남기현</Link>
                      </li>
                    </ul>
                  </motion.div>
                </li>
                <span className="text-lg text-[#fff] hidden sm:block">|</span>

                <li>
                  <Link href="/game" className="text-lg relative group">
                    게임
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        {/* 모바일 사이드바 */}
        {isSidebarOpen && (
          <div className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-10">
            <div className="fixed right-0 top-0 w-[300px] h-full bg-gradient-to-r from-[#333] to-[#1e1e1e] text-white py-8 flex flex-col items-center space-y-6 transform transition-transform duration-300 ease-in-out">
              <Image
                src="/logo.png"
                alt="새싹 게임즈 로고"
                width={40}
                height={40}
                className="mb-8"
              />

              <Link
                href="/"
                className="text-lg w-full text-center py-2 hover:bg-[#444] transition-colors duration-200 rounded-md"
                onClick={toggleSidebar}
              >
                홈
              </Link>

              <div className="w-full text-center">
                <button
                  onClick={toggleMobileAccordion}
                  className="text-lg w-full py-2 hover:bg-[#444] transition-colors duration-200 rounded-md"
                >
                  팀원 소개
                </button>
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{
                    height: isMobileAccordionOpen ? "auto" : 0,
                    opacity: isMobileAccordionOpen ? 1 : 0,
                  }}
                  className="overflow-hidden bg-[#444] rounded-md shadow-md mt-2"
                >
                  <ul className="py-2">
                    <li className="p-3 text-sm hover:bg-[#555] transition-colors">
                      <Link href="/team/kim-dohyun">김도현</Link>
                    </li>
                    <li className="p-3 text-sm hover:bg-[#555] transition-colors">
                      <Link href="/team/kim-hyunyoung">김현영</Link>
                    </li>
                    <li className="p-3 text-sm hover:bg-[#555] transition-colors">
                      <Link href="/team/nam-kihyun">남기현</Link>
                    </li>
                  </ul>
                </motion.div>
              </div>

              <Link
                href="/game"
                className="text-lg w-full text-center py-2 hover:bg-[#444] transition-colors duration-200 rounded-md"
                onClick={toggleSidebar}
              >
                게임
              </Link>

              <button
                onClick={toggleSidebar}
                className="absolute top-6 left-6 text-3xl text-white"
              >
                &times;
              </button>
            </div>
          </div>
        )}

        <main>
          <div className="px-4 sm:px-8 py-10 rounded-lg mx-auto border-[#333]">
            {children}
          </div>
        </main>

        <footer className="bg-[#2d2d2d] text-white py-4 border-t border-[#333]">
          <div className="max-w-7xl mx-auto text-center text-sm sm:text-base">
          <p>&copy; {new Date().getFullYear()} Shoot Games. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}
