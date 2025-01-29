import { Suspense } from "react";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "남기현 | 게임 기획자 소개",
  description: "남기현은 창의적이고 혁신적인 게임 기획자로, 다양한 게임 프로젝트에서 중요한 역할을 해왔습니다. 그의 경력과 비전을 확인하세요.",
  keywords: "남기현, 게임 기획자, 게임 개발, 게임 기획, 게임 산업",
  openGraph: {
    title: "남기현 | 게임 기획자 소개",
    description: "남기현은 창의적이고 혁신적인 게임 기획자로, 다양한 게임 프로젝트에서 중요한 역할을 해왔습니다. 그의 경력과 비전을 확인하세요.",
  },
};

export default function Page() {
  return (
    <div>
      <main>
        <Suspense fallback={<p>로딩 중...</p>}>
        </Suspense>
      </main>
    </div>
  );
}
