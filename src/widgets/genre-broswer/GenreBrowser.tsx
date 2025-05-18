'use client';

import { HomeTitle } from '@/shared/ui/HomeTitle';
import { SectionContainer } from '@/shared/ui/container/SectionContainer';
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// 트랙 데이터 타입 정의

// 장르별 음악 데이터
const items = [
  {
    id: 1,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 2,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_2.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/153bb595ee7746cdb7d30a160f85893f.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 3,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 4,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 5,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 6,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 7,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 8,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 9,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
  {
    id: 10,
    title: '이름입니다',
    genre: '이름입니다',
    coverImage:
      'https://static-cos.mureka.ai/cos-prod/res/image/cover_1.png?x-oss-process=image/resize,h_536/format,webp',
    authorImage:
      'https://static-cos.mureka.ai/cos-prod/files/16570516504577/20250319/ad191a58e9ef4c1cb5adbdf4f98a6c28.png?x-oss-process=image/resize,h_360/format,webp',
    authorName: '작성자',
  },
];

export const GenreBrowser = () => {
  return (
    <SectionContainer>
      <HomeTitle title={'장르별'} />
      <div className="relative">
        <div
          className={'absolute right-5 top-[-60px] z-10 flex space-x-2 hidden bg-gray'}
          id={'swiper-pagination-2'}
        >
          <button className="custom-prev-btn-2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button className="custom-next-btn-2 w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
        <Swiper
          modules={[Navigation, Pagination]}
          slidesPerView={'auto'}
          allowSlideNext={true}
          navigation={{
            nextEl: '.custom-next-btn-2',
            prevEl: '.custom-prev-btn-2',
            disabledClass: 'opacity-30 cursor-not-allowed',
          }}
          onInit={(swiper) => {
            // 초기화 후 네비게이션 활성화 및 표시
            setTimeout(() => {
              const navContainer = document.querySelector('#swiper-pagination-2');
              if (navContainer) navContainer.classList.remove('hidden');
              swiper.navigation?.init();
              swiper.navigation?.update();
            }, 0);
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination-2',
          }}
          loop={false}
          className="w-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={`!w-[270px] mr-[24px]`}>
              <AlgorithmItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
};

const AlgorithmItem = ({ item }: AlgorithmItemProps) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="overflow-hidden rounded-2xl relative aspect-[3/2] w-full group">
        <Image
          className="rounded-2xl transition-transform group-hover:scale-110 duration-300 object-cover"
          src={item.coverImage}
          alt={'No Image'}
          fill
        />
        {/* 이미지 하단에 그라데이션 오버레이 추가 */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-60"></div>

        {/* 더보기 버튼 - SVG 화살표 포함 */}
        <div className="z-10 absolute bottom-3 right-3 px-3 py-1.5 rounded-lg flex items-center text-lg font-medium">
          <span>알앤비</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
