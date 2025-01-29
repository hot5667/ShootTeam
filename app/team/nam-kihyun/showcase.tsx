// showcase.tsx

import React from "react";

const Showcase = () => {
  const skills = [
    { name: "게임 기획 및 디자인", level: 4 },
    { name: "스토리텔링 및 게임 내러티브 설계", level: 3.5 },
    { name: "팀 협업 및 프로젝트 관리", level: 5 },
    { name: "사용자 경험(UX) 및 인터페이스(UI) 설계", level: 4.5 },
  ];

  const introduction = `저는 게임 기획 및 디자인을 전문으로 하는 게임 기획자입니다.
    게임의 전반적인 흐름과 플레이어의 경험을 중심으로 게임의 이야기를 설계하며, 
    다양한 장르에서 협업을 통해 창의적이고 혁신적인 프로젝트를 완수해왔습니다.
    사용자 경험을 최우선으로 고려한 게임 디자인에 주력하고 있으며, 
    항상 더 나은 게임을 만들기 위해 끊임없이 학습하고 성장하고 있습니다.`;

  const circleSize = (level: number) => {
    return 60 + level * 10;
  };

  return (
    <div className="min-h-screen flex flex-col lg:flex-row items-start justify-start  py-10 px-4">
      {/* 왼쪽 20% 영역 - 사진 및 자기소개 */}
      <div
        className="flex flex-col items-center mb-8 lg:mb-0 bg-white p-6 rounded-3xl shadow-xl w-full lg:w-1/5"
      >
        <img
          src="/images/nam-gi-hyun.jpg" // 이미지 경로를 실제 경로로 변경해야 합니다.
          alt="남기현 게임 기획자"
          className="w-40 h-40 rounded-full border-4 border-blue-500 mb-4 shadow-md"
        />
        <h1 className="text-3xl font-semibold text-blue-700">남기현</h1>
        <p className="mt-2 text-lg text-gray-600">게임 기획자</p>

        {/* 자기소개 */}
        <section className="mt-8 text-left">
          <h1 className="text-lg font-semibold text-blue-600">자기소개</h1>
          <p className="text-xs text-gray-700">{introduction}</p>
        </section>

        {/* SNS 및 이메일 */}
        <section className="flex justify-center space-x-8 mt-8">
          <a
            href="https://twitter.com/namgi_hyun" // 실제 SNS 링크로 변경해야 합니다.
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            트위터
          </a>
          <a
            href="https://github.com/namgi_hyun" // 실제 SNS 링크로 변경해야 합니다.
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            깃허브
          </a>
          <a
            href="mailto:namgi_hyun@example.com" // 실제 이메일 주소로 변경해야 합니다.
            className="text-blue-600 hover:text-blue-800 transition-colors"
          >
            이메일
          </a>
        </section>
      </div>

      {/* 수직선 (PC 환경에서만 표시) */}
      <div
        className="hidden lg:block text-gray-500 mx-8 text-4xl font-bold"
        style={{ height: "100vh", borderLeft: "2px solid #4B6F93" }}
      >
      </div>

      {/* 오른쪽 - 직무 역량, 프로젝트, 교육 및 학력 */}
      <div className="flex flex-col lg:w-4/5 text-center lg:text-left space-y-12 bg-white p-6 rounded-3xl shadow-xl w-full lg:w-4/5">
        {/* 직무 역량 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">직무 역량</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <ul className="text-lg text-gray-700 space-y-2">
              {skills.map((skill, index) => (
                <li key={index} className="flex items-center justify-between">
                  <span>{skill.name}</span>
                  <div className="flex items-center space-x-2">
                    {[...Array(5)].map((_, idx) => (
                      <div
                        key={idx}
                        className={`w-${circleSize(skill.level)} h-${circleSize(skill.level)} rounded-full border-2 ${
                          idx < skill.level
                            ? "bg-blue-500 border-blue-700"
                            : "bg-gray-200 border-gray-400"
                        }`}
                      ></div>
                    ))}
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 프로젝트 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">프로젝트</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <ul className="text-lg text-gray-700 space-y-2">
              <li>- <strong>게임 프로젝트 A</strong>: 역할 - 기획자</li>
              <li>- <strong>게임 프로젝트 B</strong>: 역할 - 게임 디자이너</li>
              <li>- <strong>게임 프로젝트 C</strong>: 역할 - 스토리 작가</li>
            </ul>
          </div>
        </section>

        {/* 교육 및 학력 */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold text-blue-600">교육 및 학력</h2>
          <div className="bg-white shadow-lg p-6 rounded-lg">
            <ul className="text-lg text-gray-700 space-y-2">
              <li>- <strong>게임 디자인 학위</strong>: 서울대학교 게임학과, 2020 졸업</li>
              <li>- <strong>UX/UI 디자인 과정</strong>: XYZ 아카데미, 2021 완료</li>
            </ul>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Showcase;
