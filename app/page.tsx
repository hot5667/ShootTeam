import { Suspense } from "react";
import ScrollText from "./ScrollText"; // 클라이언트 컴포넌트 (아래에서 분리)

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
