'use client';

import React from 'react';
import Image from 'next/image';

interface GenreCardProps {
  title: string;
  description: string;
  creator: {
    name: string;
    avatar?: string;
  };
  stats: {
    plays: string;
    likes: string;
    comments?: string;
  };
  thumbnail: string;
  onClick?: () => void;
}

export const GenreCard = ({ 
  title, 
  description, 
  creator, 
  stats, 
  thumbnail,
  onClick 
}: GenreCardProps) => {
  const handlePlay = () => {
    console.log(`Playing track: ${title}`);
    if (onClick) onClick();
  };

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Liked: ${title}`);
  };

  const handleComment = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log(`Comment on: ${title}`);
  };

  return (
    <div 
      className="rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-all duration-300 hover:scale-[1.02] cursor-pointer bg-gray-900"
      onClick={handlePlay}
    >
      {/* 썸네일 이미지 */}
      <div className="relative w-full aspect-square overflow-hidden">
        <Image 
          src={thumbnail} 
          alt={title}
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center">
          <div className="bg-white/90 rounded-full p-3 shadow-lg">
            <PlayIcon />
          </div>
        </div>
      </div>
      
      {/* 컨텐츠 정보 */}
      <div className="p-4">
        <h3 className="text-lg font-bold text-white truncate">{title}</h3>
        <p className="text-sm text-gray-400 truncate mb-3">{description}</p>
        
        {/* 크리에이터 정보 */}
        <div className="flex items-center gap-2 mb-3">
          {creator.avatar ? (
            <div className="w-6 h-6 rounded-full overflow-hidden">
              <Image 
                src={creator.avatar} 
                alt={creator.name}
                width={24}
                height={24}
                className="object-cover"
              />
            </div>
          ) : (
            <div className="w-6 h-6 rounded-full bg-purple-600 flex items-center justify-center text-xs text-white">
              {creator.name.charAt(0).toUpperCase()}
            </div>
          )}
          <span className="text-sm text-gray-400">{creator.name}</span>
        </div>
        
        {/* 트랙 통계 */}
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors">
            <span>▶</span>
            <span className="text-sm">{stats.plays}</span>
          </button>
          
          <button 
            className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
            onClick={handleLike}
          >
            <span>♥</span>
            <span className="text-sm">{stats.likes}</span>
          </button>
          
          {stats.comments && (
            <button 
              className="flex items-center gap-1 text-gray-400 hover:text-white transition-colors"
              onClick={handleComment}
            >
              <span>💬</span>
              <span className="text-sm">{stats.comments}</span>
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

// 재생 아이콘 컴포넌트
const PlayIcon = () => {
  return (
    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M8 5V19L19 12L8 5Z" fill="currentColor" />
    </svg>
  );
};
