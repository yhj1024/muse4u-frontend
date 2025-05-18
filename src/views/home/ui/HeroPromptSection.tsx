'use client';

import React, { useEffect, useState } from 'react';
import { Chip } from '@/shared/ui/Chip';

export const HeroPromptSection = () => {
  const texts = [
    '내 목소리로 감성적인 R&B 곡을 만들어줘',
    '행복한 느낌의 팝송, 영어 가사로 부탁해',
    '기타 솔로가 멋진 록 발라드 곡 만들어줘',
    '첫 사랑을 떠올리게 하는 어쿠스틱 곡 작곡해줘',
    '90년대 감성의 힙합 노래 만들어줘',
    '우울한 기분을 달래주는 재즈 피아노 곡 만들어줘',
    '운동할 때 듣기 좋은 빠른 비트의 곡 부탁해',
  ];
  return (
    <div className="relative flex-1 bg-blue-400/40 rounded-xl px-8 py-4 max-w-[700px] min-h-[220px]">
      <div className="flex flex-wrap gap-2 mb-6">
        <Chip text="랩" />
        <Chip text="발라드" />
        <Chip text="락" />
        <Chip text="트로트" />
        <Chip text="팝" />
        <Chip text="알앤비" />
        <Chip text="메탈" />
      </div>
      <TypingText texts={texts} />
      <button className="absolute bottom-5 right-5 bg-blue-900/50 hover:bg-blue-900/70 rounded-full p-2 transition-colors">
        <MuteIcon />
      </button>
    </div>
  );
};

const TypingText = ({ texts }: { texts: string[] }) => {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [displayText, setDisplayText] = useState('');
  const [isTypingComplete, setIsTypingComplete] = useState(false);
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    // 타이핑 중
    if (!isDeleting && displayText.length < currentText.length) {
      const timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, displayText.length + 1));
      }, 100);
      return () => clearTimeout(timeout);
    } else if (!isDeleting && displayText.length === currentText.length) {
      setIsTypingComplete(true);
      const timeout = setTimeout(() => {
        setIsDeleting(true);
        setIsTypingComplete(false);
      }, 2000); // 2초 동안 완성된 상태로 유지
      return () => clearTimeout(timeout);
    } else if (isDeleting && displayText.length > 0) {
      const timeout = setTimeout(() => {
        setDisplayText(displayText.substring(0, displayText.length - 1));
      }, 35); // 삭제는 조금 더 빠르게
      return () => clearTimeout(timeout);
    }
    // 삭제 완료 후 다음 텍스트로
    else if (isDeleting && displayText.length === 0) {
      setIsDeleting(false);
      setCurrentTextIndex((prevIndex) => (prevIndex + 1) % texts.length);
    }
  }, [displayText, isDeleting, currentTextIndex, texts]);

  return (
    <div className="flex items-center text-white">
      <span className="min-h-[24px]">{displayText}</span>
      <span className={`typing-cursor ${isTypingComplete ? 'cursor-blink' : ''}`}></span>
    </div>
  );
};

// 음소거 아이콘 컴포넌트
const MuteIcon = () => {
  console.log('mute render');
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" className="text-white">
      <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73l-9-9L4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
    </svg>
  );
};
