import { Suspense } from "react";
import ScrollText from "./ScrollText";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "새싹 게임즈 | 메인 페이지",
  description: "새싹 게임즈의 공식 홈페이지입니다. 다양한 게임과 최신 정보를 확인하세요.",
  keywords: "새싹 게임즈, 게임, 게임 개발, 인디 게임",
  openGraph: {
    title: "새싹 게임즈 | 메인 페이지",
    description: "새싹 게임즈의 공식 홈페이지입니다. 다양한 게임과 최신 정보를 확인하세요.",
  },
};

export default function Page() {
  return (
    <div>
      <main>
        <Suspense fallback={<p>로딩 중...</p>}>
          <ScrollText />
        </Suspense>
      </main>
    </div>
  );
}
