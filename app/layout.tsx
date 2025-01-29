import "./globals.css";
import Link from "next/link";


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className = "bg-gray-100">
        <header className="bg-blue-600 text-white py-4">

        </header>
        {children}
      </body>
    </html>
  );
}
