"use client";

import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobileAccordionOpen, setIsMobileAccordionOpen] = useState(false);
  const [isAccordionOpen, setIsAccordionOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // 스크롤 이벤트 처리
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  const toggleMobileAccordion = () => {
    setIsMobileAccordionOpen(!isMobileAccordionOpen);
  };

  // 아코디언 애니메이션 variants
  const accordionVariants = {
    hidden: { 
      opacity: 0,
      y: -10,
      transition: { duration: 0.2 }
    },
    visible: { 
      opacity: 1,
      y: 0,
      transition: { 
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  return (
    <html lang="ko" className="h-full">
      <body className="bg-[#1E1E1E] text-[#D4D4D4] font-mono flex flex-col min-h-full">
        <header 
          className={`fixed w-full z-50 transition-all duration-300 ${
            isScrolled 
              ? "bg-[#1E1E1E] shadow-lg" 
              : "bg-[#1E1E1E]"
          }`}
        >
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8 h-16">
            <div className="flex items-center space-x-2">
              <Link href="/" className="flex items-center space-x-2 hover:opacity-80 transition-opacity">
                <Image 
                  src="/logo.png" 
                  alt="새싹 게임즈 로고" 
                  width={32} 
                  height={32} 
                  className="rounded-md"
                />
                <span className="text-[#007ACC] font-semibold text-lg hidden sm:block">
                  Shoot Games
                </span>
              </Link>
            </div>

            <button 
              onClick={toggleSidebar} 
              className="sm:hidden text-[#D4D4D4] hover:text-[#007ACC] transition-colors"
            >
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                className="h-6 w-6" 
                fill="none" 
                viewBox="0 0 24 24" 
                stroke="currentColor"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M4 6h16M4 12h16m-16 6h16" 
                />
              </svg>
            </button>

            <nav className="hidden sm:flex">
              <ul className="flex items-center space-x-6">
                <li>
                  <Link 
                    href="/" 
                    className="text-[#D4D4D4] hover:text-[#007ACC] transition-colors px-3 py-2 rounded-md hover:bg-[#2D2D2D]"
                  >
                    홈
                  </Link>
                </li>

                <li
                  className="relative"
                  onMouseEnter={() => setIsAccordionOpen(true)}
                  onMouseLeave={() => setIsAccordionOpen(false)}
                >
                  <button 
                    className="text-[#D4D4D4] hover:text-[#007ACC] transition-colors px-3 py-2 rounded-md hover:bg-[#2D2D2D] flex items-center"
                  >
                    팀원 소개
                    <svg 
                      className={`ml-1 h-4 w-4 transition-transform ${isAccordionOpen ? 'rotate-180' : ''}`} 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </button>

                  <AnimatePresence>
                    {isAccordionOpen && (
                      <motion.div
                        variants={accordionVariants}
                        initial="hidden"
                        animate="visible"
                        exit="hidden"
                        className="absolute left-0 top-full mt-1 w-48 bg-[#252526] rounded-md shadow-lg border border-[#2D2D2D] overflow-hidden"
                      >
                        <ul className="py-1">
                          {[
                            { name: "김도현", path: "/team/kim-dohyun" },
                            { name: "김현영", path: "/team/kim-hyunyoung" },
                            { name: "남기현", path: "/team/nam-kihyun" }
                          ].map((member) => (
                            <li key={member.path}>
                              <Link 
                                href={member.path}
                                className="block px-4 py-2 text-sm text-[#D4D4D4] hover:bg-[#2D2D2D] hover:text-[#007ACC] transition-colors"
                              >
                                {member.name}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </li>

                <li>
                  <Link 
                    href="/game" 
                    className="text-[#D4D4D4] hover:text-[#007ACC] transition-colors px-3 py-2 rounded-md hover:bg-[#2D2D2D]"
                  >
                    게임
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <AnimatePresence>
          {isSidebarOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="sm:hidden fixed inset-0 bg-black bg-opacity-50 z-40"
              onClick={toggleSidebar}
            >
              <motion.div
                initial={{ x: "100%" }}
                animate={{ x: 0 }}
                exit={{ x: "100%" }}
                transition={{ type: "tween", duration: 0.3 }}
                className="fixed right-0 top-0 w-[280px] h-full bg-[#252526] shadow-xl"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="p-4 flex flex-col h-full">
                  <div className="flex items-center justify-between mb-6">
                    <Image src="/logo.png" alt="새싹 게임즈 로고" width={32} height={32} className="rounded-md" />
                    <button 
                      onClick={toggleSidebar}
                      className="text-[#D4D4D4] hover:text-[#007ACC] transition-colors"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                      </svg>
                    </button>
                  </div>

                  <nav className="flex-1">
                    <ul className="space-y-2">
                      <li>
                        <Link
                          href="/"
                          className="block px-4 py-2 text-[#D4D4D4] hover:bg-[#2D2D2D] hover:text-[#007ACC] rounded-md transition-colors"
                          onClick={toggleSidebar}
                        >
                          홈
                        </Link>
                      </li>

                      <li>
                        <button
                          onClick={toggleMobileAccordion}
                          className="w-full px-4 py-2 text-left text-[#D4D4D4] hover:bg-[#2D2D2D] hover:text-[#007ACC] rounded-md transition-colors flex justify-between items-center"
                        >
                          팀원 소개
                          <svg
                            className={`h-4 w-4 transition-transform ${isMobileAccordionOpen ? 'rotate-180' : ''}`}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                        </button>

                        <AnimatePresence>
                          {isMobileAccordionOpen && (
                            <motion.ul
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden pl-4"
                            >
                              {[
                                { name: "김도현", path: "/team/kim-dohyun" },
                                { name: "김현영", path: "/team/kim-hyunyoung" },
                                { name: "남기현", path: "/team/nam-kihyun" }
                              ].map((member) => (
                                <li key={member.path}>
                                  <Link
                                    href={member.path}
                                    className="block px-4 py-2 text-sm text-[#D4D4D4] hover:bg-[#2D2D2D] hover:text-[#007ACC] rounded-md transition-colors"
                                    onClick={toggleSidebar}
                                  >
                                    {member.name}
                                  </Link>
                                </li>
                              ))}
                            </motion.ul>
                          )}
                        </AnimatePresence>
                      </li>

                      <li>
                        <Link
                          href="/game"
                          className="block px-4 py-2 text-[#D4D4D4] hover:bg-[#2D2D2D] hover:text-[#007ACC] rounded-md transition-colors"
                          onClick={toggleSidebar}
                        >
                          게임
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

        <main className="flex-1 pt-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-8 py-6">
            {children}
          </div>
        </main>

        <footer className="bg-[#252526] text-[#D4D4D4] py-4 border-t border-[#2D2D2D] mt-auto">
          <div className="max-w-7xl mx-auto text-center text-sm">
            <p>&copy; {new Date().getFullYear()} Shoot Games. All rights reserved.</p>
          </div>
        </footer>
      </body>
    </html>
  );
}