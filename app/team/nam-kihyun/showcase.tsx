"use client";

import React, { useState } from "react";
import {
  Star,
  Twitter,
  Github,
  Mail,
  Award,
  Briefcase,
  GraduationCap,
  User,
} from "lucide-react";

interface SkillLevelProps {
  level: number;
}

const introductionPoints = [
  "게임 기획자로서의 창의적인 사고를 바탕으로 문제를 해결합니다.",
  "사용자 경험을 최우선으로 고려하며, 인터랙티브한 게임을 설계합니다.",
  "팀원들과 협업하여 프로젝트 목표를 효과적으로 달성하는 것을 중요하게 생각합니다.",
];

const Showcase = () => {
  const [expandedSkill, setExpandedSkill] = useState<string | null>(null); // 클릭된 직무 역량을 저장

  const skills = [
    {
      name: "게임 기획 및 디자인",
      level: 4,
      description: "게임 메커닉스 설계, 밸런싱, 레벨 디자인 등",
    },
    {
      name: "스토리텔링 및 게임 내러티브 설계",
      level: 3.5,
      description: "캐릭터 개발, 시나리오 작성, 세계관 구축",
    },
    {
      name: "팀 협업 및 프로젝트 관리",
      level: 5,
      description: "애자일 방법론, 스크럼 마스터 경험, 이해관계자 조율",
    },
    {
      name: "사용자 경험(UX) 및 인터페이스(UI) 설계",
      level: 4.5,
      description: "와이어프레임 제작, 프로토타입 테스트, 사용성 평가",
    },
  ];

  const projects = [
    {
      title: "게임 프로젝트 A",
      role: "기획자",
      period: "2023.01 - 2023.06",
      description: "오픈월드 RPG 게임의 핵심 시스템 설계",
      tags: ["RPG", "오픈월드", "시스템 기획"],
      category: "planning",
    },
    {
      title: "게임 프로젝트 B",
      role: "게임 디자이너",
      period: "2022.06 - 2022.12",
      description: "모바일 캐주얼 게임의 레벨 디자인",
      tags: ["모바일", "캐주얼", "레벨디자인"],
      category: "design",
    },
    {
      title: "게임 프로젝트 C",
      role: "스토리 작가",
      period: "2022.01 - 2022.05",
      description: "어드벤처 게임의 시나리오 집필",
      tags: ["어드벤처", "시나리오", "스토리텔링"],
      category: "story",
    },
  ];

  const education = [
    {
      degree: "게임 기획학 석사",
      university: "서울대학교",
      year: "2021.03 - 2023.02",
    },
    {
      degree: "컴퓨터 공학 학사",
      university: "한양대학교",
      year: "2017.03 - 2021.02",
    },
  ];

  const SkillLevel: React.FC<SkillLevelProps> = ({ level }) => {
    return (
      <div className="relative group">
        <div className="flex items-center gap-1">
          {[...Array(10)].map((_, idx) => (
            <Star
              key={idx}
              size={16}
              className={`${
                idx < level * 2
                  ? "fill-[#007ACC] text-[#007ACC]"
                  : "fill-[#2D2D2D] text-[#2D2D2D]"
              } transition-colors`}
            />
          ))}
        </div>
        <div className="absolute hidden group-hover:block bg-black text-white text-sm px-2 py-1 rounded -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
          {level * 20}% 숙련도
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-[#1E1E1E] text-[#D4D4D4] p-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* 왼쪽 프로필 섹션 */}
        <div className="lg:col-span-3 space-y-6">
          <div className="bg-[#252526] rounded-lg shadow-lg p-6 border border-[#2D2D2D]">
            <div className="flex flex-col items-center">
              <div className="w-32 h-32 bg-[#2D2D2D] rounded-full mb-4 flex items-center justify-center text-4xl font-bold text-[#007ACC] hover:scale-105 transition-transform cursor-pointer">
                남GH
              </div>
              <h1 className="text-2xl font-bold text-[#007ACC]">남기현</h1>
              <p className="text-lg text-[#D4D4D4] mt-1">게임 기획자</p>
            </div>

            <div className="mt-6 flex justify-center space-x-4">
              {[
                {
                  icon: Twitter,
                  href: "https://twitter.com/namgi_hyun",
                  label: "Twitter",
                },
                {
                  icon: Github,
                  href: "https://github.com/namgi_hyun",
                  label: "Github",
                },
                {
                  icon: Mail,
                  href: "mailto:namgi_hyun@example.com",
                  label: "Email",
                },
              ].map(({ icon: Icon, href, label }) => (
                <div key={label} className="relative group">
                  <a
                    href={href}
                    className="text-[#D4D4D4] hover:text-[#007ACC] transition-colors p-2 hover:bg-[#2D2D2D] rounded-full block"
                  >
                    <Icon size={20} />
                  </a>
                  <div className="absolute hidden group-hover:block bg-black text-white text-xs px-2 py-1 rounded -top-8 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg shadow-lg p-6 border border-[#2D2D2D]">
            <div className="flex items-center gap-2 mb-4">
              <User className="text-[#007ACC]" />
              <h2 className="text-lg font-bold text-[#007ACC]">자기소개</h2>
            </div>
            <ul className="space-y-3 list-none">
              {introductionPoints.map((point, index) => (
                <li
                  key={index}
                  className="flex items-start gap-3 p-3 bg-[#1E1E1E] rounded-lg hover:bg-[#2D2D2D] transition-colors cursor-pointer"
                >
                  <span className="text-[#007ACC] text-lg">•</span>
                  <p className="text-sm leading-relaxed text-[#D4D4D4]">
                    {point}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* 오른쪽 콘텐츠 섹션 */}
        <div className="lg:col-span-9 space-y-6">
          <div className="bg-[#252526] rounded-lg shadow-lg p-6 border border-[#2D2D2D]">
            <div className="flex items-center gap-2 mb-4">
              <Award className="text-[#007ACC]" />
              <h2 className="text-xl font-bold text-[#007ACC]">직무 역량</h2>
            </div>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className="bg-[#1E1E1E] hover:bg-[#2D2D2D] p-4 rounded-lg cursor-pointer"
                  onClick={() =>
                    setExpandedSkill(
                      expandedSkill === skill.name ? null : skill.name
                    )
                  }
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                    <div className="font-semibold text-[#007ACC] md:w-1/3">
                      {skill.name}
                    </div>
                    <div className="md:w-1/3 text-[#007ACC] text-sm mt-2 md:mt-0">
                      <SkillLevel level={skill.level} />
                    </div>
                  </div>
                  {expandedSkill === skill.name && (
                    <p className="text-xs mt-2 text-[#D4D4D4] md:mt-0 md:w-1/3">
                      {skill.description}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg shadow-lg p-6 border border-[#2D2D2D]">
            <div className="flex items-center gap-2 mb-4">
              <Briefcase className="text-[#007ACC]" />
              <h2 className="text-xl font-bold text-[#007ACC]">
                프로젝트 경험
              </h2>
            </div>
            <div className="space-y-4">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-[#1E1E1E] hover:bg-[#2D2D2D] p-4 rounded-lg"
                >
                  <div className="font-semibold text-[#007ACC]">
                    {project.title}
                  </div>
                  <div className="text-xs text-[#D4D4D4]">{project.period}</div>
                  <div className="text-sm text-[#D4D4D4]">
                    {project.description}
                  </div>
                  <div className="flex gap-2 mt-2">
                    {project.tags.map((tag, index) => (
                      <span
                        key={index}
                        className="bg-[#007ACC] text-[#D4D4D4] text-xs px-2 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-[#252526] rounded-lg shadow-lg p-6 border border-[#2D2D2D]">
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="text-[#007ACC]" />
              <h2 className="text-xl font-bold text-[#007ACC]">학력</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="bg-[#1E1E1E] hover:bg-[#2D2D2D] p-4 rounded-lg"
                >
                  <div className="font-semibold text-[#007ACC]">
                    {edu.degree}
                  </div>
                  <div className="text-xs text-[#D4D4D4]">{edu.university}</div>
                  <div className="text-xs text-[#D4D4D4]">{edu.year}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Showcase;
