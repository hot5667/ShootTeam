'use client';

import { useEffect, useRef, useState, useMemo } from "react";
import Image from 'next/image';

export default function ScrollText() {
  const [isVisible, setIsVisible] = useState(false);
  const [textLines, setTextLines] = useState<string[]>(Array(25).fill(''));
  const textRef = useRef<HTMLDivElement | null>(null);

  // Memoize codeStyleParagraphs to prevent re-creating the array on every render
  const codeStyleParagraphs = useMemo(() => [
    '#include <iostream>',
    '#include <string>',
    '#include <vector>',
    '',
    'class ShootGames {',
    'private:',
    '    std::string name = "🌱 새싹 게임즈";',
    '    std::string description = "창의적인 아이디어와 혁신적인 기술로 새로운 게임 경험을 만들어가는 개발 스튜디오";',
    '',
    'public:',
    '    void showVision() {',
    '        std::string vision = "작은 새싹이 자라나 울창한 숲이 되듯, 새싹 게임즈는";',
    '        std::string growth = "끊임없는 성장과 도전을 통해 더 나은 게임을 만들고자 합니다.";',
    '        std::string platform = "장르와 플랫폼에 구애받지 않고, 유저들에게 최고의 재미를 제공하기 위해";',
    '        std::string team = "열정적인 팀원들이 함께 연구하고 개발하고 있습니다.";',
    '    }',
    '',
    '    std::vector<std::string> getMission() {',
    '        return {',
    '            "단순한 놀이를 넘어선 특별한 경험 제공",',
    '            "유저들의 기억에 오래 남을 게임 제작",',
    '            "혁신적인 게임 생태계 구축 🚀"',
    '        };',
    '    }',
    '};'
  ], []); // Empty dependency array means it will only be created once

  useEffect(() => {
    const currentRef = textRef.current;
    if (!currentRef) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    observer.observe(currentRef);
    return () => observer.unobserve(currentRef);
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let isMounted = true;
    let currentLineIndex = 0;
    let currentCharIndex = 0;

    const typeText = async () => {
      if (!isMounted) return;

      if (currentLineIndex < codeStyleParagraphs.length) {
        const currentLine = codeStyleParagraphs[currentLineIndex];

        if (currentCharIndex <= currentLine.length) {
          setTextLines(prev => {
            const newLines = [...prev];
            newLines[currentLineIndex] = currentLine.slice(0, currentCharIndex);
            return newLines;
          });

          currentCharIndex++;
          setTimeout(typeText, Math.random() * 20 + 30);
        } else {
          currentLineIndex++;
          currentCharIndex = 0;
          setTimeout(typeText, 100);
        }
      }
    };

    typeText();
    return () => { isMounted = false; };
  }, [isVisible, codeStyleParagraphs]);

  const getLineNumber = (index: number) => {
    return (index + 1).toString().padStart(3, '0');
  };

  return (
    <div className="flex justify-center items-start w-full px-4 sm:px-8">
      <div
        ref={textRef}
        className="transition-opacity duration-1000 ease-in-out bg-transparent text-white w-full sm:w-[1000px] lg:w-[1200px] px-4"
      >
        <div className="bg-[#1e1e1e] rounded-lg shadow-xl border border-[#333] overflow-hidden w-full mx-auto">
          {/* 윈도우 타이틀 바 */}
          <div className="bg-[#2d2d2d] px-4 py-2 border-b border-[#333] flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Image
                src="https://img.icons8.com/fluent/512/visual-studio-code-2019.png"
                alt="Visual Studio Code"
                width={16}
                height={16}
                className="w-4 h-4"
              />
              <span className="text-sm text-gray-300">shoot_games.cpp - Visual Studio Code</span>
            </div>
            <div className="flex gap-2">
              <button className="text-gray-400 hover:bg-[#404040] p-1 rounded">−</button>
              <button className="text-gray-400 hover:bg-[#404040] p-1 rounded">□</button>
              <button className="text-gray-400 hover:bg-[#404040] p-1 rounded">×</button>
            </div>
          </div>

          {/* 코드 영역 */}
          <div className="p-4 sm:p-6 font-mono text-sm sm:text-xs lg:text-sm overflow-auto scrollbar-thin scrollbar-track-[#1e1e1e] scrollbar-thumb-[#424242] max-h-[80vh] whitespace-pre-wrap break-words">
            <div className="flex">
              {/* 줄 번호 */}
              <div className="text-gray-500 pr-4 select-none min-w-[3rem] text-right">
                {textLines.map((_, index) => (
                  <div key={index} className="leading-6 h-6">
                    {getLineNumber(index)}
                  </div>
                ))}
              </div>

              {/* 코드 텍스트 */}
              <div className="flex-1 border-l border-[#333] pl-4">
                {textLines.map((text, index) => (
                  <pre
                    key={index}
                    className={`leading-6 h-6 font-mono ${text.startsWith('#include') ? 'text-[#569cd6]' :
                      text.match(/^(class|private|public|void|std::)/) ? 'text-[#569cd6]' :
                        text.includes('std::string') ? 'text-[#4ec9b0]' :
                          text.includes('std::vector') ? 'text-[#4ec9b0]' :
                            text.includes('"') ? 'text-[#ce9178]' :
                              'text-[#d4d4d4]'}`}
                  >
                    {text || ' '}
                  </pre>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}