import "./globals.css";
import Link from "next/link";
import Image from "next/image";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className="bg-[#1e1e1e] text-white font-mono">
        <header className="bg-[#2d2d2d] text-white py-4 shadow-md border-b border-[#333]">
          <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-8">
            <div className="flex items-center space-x-4">
              <Image
                src="/logo.png"
                alt="새싹 게임즈 로고"
                width={40}
                height={40}
              />
              <h1 className="text-2xl sm:text-3xl font-bold">
                <Link href="/">새싹 게임즈</Link>
              </h1>
            </div>

            <nav>
              <ul className="flex justify-center items-center space-x-4 text-sm sm:text-lg">
                <li className="flex items-center space-x-2">
                  <Link
                    href="/"
                    className="text-lg relative group"
                  >
                    홈
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                  <span className="text-lg text-[#fff] hidden sm:block">|</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    href="/about"
                    className="text-lg relative group"
                  >
                    팀 소개
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                  <span className="text-lg text-[#fff] hidden sm:block">|</span>
                </li>
                <li className="flex items-center space-x-2">
                  <Link
                    href="/game"
                    className="text-lg relative group"
                  >
                    게임
                    <span className="absolute bottom-[-4px] left-0 w-full h-[2px] bg-[#fff] scale-x-0 group-hover:scale-x-100 transition-all duration-300"></span>
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </header>

        <main>
          <div className="px-4 sm:px-8 py-10 rounded-lg mx-auto border-[#333]">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}