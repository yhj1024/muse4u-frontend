'use client';

import React, { ReactNode } from 'react';
import Image from 'next/image';

// Root 컴포넌트
interface CardProps {
  children: ReactNode;
  className?: string;
  enableHover?: boolean;
}

export const Card = ({ children, className = '', enableHover = true }: CardProps) => {
  return <div className={`flex items-start gap-3 group ${className}`}>{children}</div>;
};

// 썸네일 컴포넌트
interface ThumbnailProps {
  src?: string;
  alt?: string;
  onClick?: () => void;
  overlayContent?: ReactNode;
}

const Thumbnail = ({ src, alt = 'thumbnail', onClick, overlayContent }: ThumbnailProps) => {
  return (
    <div className="w-12 h-16 bg-gray-700 rounded overflow-hidden relative flex-shrink-0 cursor-pointer">
      <Image src={src || '/images/default.jpg'} fill alt={alt} className="object-cover" />
      {onClick && (
        <div
          className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center"
          onClick={onClick}
        >
          {overlayContent || <PlayButton />}
        </div>
      )}
    </div>
  );
};

// 정보 컴포넌트
interface ContentProps {
  children: ReactNode;
}

const Content = ({ children }: ContentProps) => {
  return <div className="h-[72px] flex-1 min-w-0 flex flex-col">{children}</div>;
};

// 제목 컴포넌트
interface TitleProps {
  children: ReactNode;
}

const Title = ({ children }: TitleProps) => {
  return <h3 className="text-white font-medium truncate">{children}</h3>;
};

// 설명 컴포넌트
interface DescriptionProps {
  children: ReactNode;
}

const Description = ({ children }: DescriptionProps) => {
  return <p className="text-gray-400 text-sm truncate">{children}</p>;
};

// 통계 컴포넌트
interface StatsProps {
  plays: string;
  likes: string;
  reposts: string;
}

const Stats = ({ plays, likes, reposts }: StatsProps) => {
  return (
    <div className="flex gap-2 text-xs whitespace-nowrap text-gray-500">
      <span>▶ {plays}</span>
      <span>♥ {likes}</span>
      <span>↺ {reposts}</span>
    </div>
  );
};

// 크리에이터 정보 컴포넌트
interface CreatorProps {
  name: string;
  icon?: boolean;
}

const Creator = ({ name, icon = true }: CreatorProps) => {
  return (
    <div className="flex items-center text-sm text-gray-500">
      {icon && <span className="w-4 h-4 rounded-full bg-purple-500 flex-shrink-0 mr-1"></span>}
      <span className="truncate max-w-[120px]">{name}</span>
    </div>
  );
};

// 팔로워 정보 컴포넌트
interface FollowersProps {
  count: string;
}

const Followers = ({ count }: FollowersProps) => {
  return <p className="text-gray-400 text-sm">{count} followers</p>;
};

// 핸들 컴포넌트
interface HandleProps {
  handle: string;
}

const Handle = ({ handle }: HandleProps) => {
  return <p className="text-gray-500 text-sm truncate">{handle}</p>;
};

// 버튼 컴포넌트
interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  size?: 'small' | 'normal';
}

const Button = ({ children, onClick, className = '', size = 'normal' }: ButtonProps) => {
  const sizeClasses = {
    small: 'px-2 py-0.5 text-xs',
    normal: 'px-3 py-1 text-sm',
  };

  return (
    <button
      className={`mt-1 ${sizeClasses[size]} bg-gray-800 hover:bg-gray-700 text-white rounded-full ${className}`}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

// 재생 버튼 컴포넌트
export const PlayButton = () => {
  return (
    <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center">
      <svg
        width="12"
        height="14"
        viewBox="0 0 12 14"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="ml-1"
      >
        <path d="M0 0L12 7L0 14V0Z" fill="#000" />
      </svg>
    </div>
  );
};

// 팔로우 버튼 컴포넌트
export const FollowButton = ({ onClick }: { onClick?: () => void }) => {
  return (
    <button
      className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center text-xs font-bold"
      onClick={onClick}
    >
      +
    </button>
  );
};

// 컴파운드 패턴 적용
Card.Thumbnail = Thumbnail;
Card.Content = Content;
Card.Title = Title;
Card.Description = Description;
Card.Stats = Stats;
Card.Creator = Creator;
Card.Followers = Followers;
Card.Handle = Handle;
Card.Button = Button;
