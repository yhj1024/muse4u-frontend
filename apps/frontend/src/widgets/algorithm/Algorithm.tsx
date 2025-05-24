'use client';

import React from 'react';

import Image from 'next/image';
import { HomeTitle } from '@/shared/ui/HomeTitle';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper/modules';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { SectionContainer } from '@/shared/ui/container/SectionContainer';

export const Algorithm = () => {
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

  return (
    <SectionContainer paddingType={'leftOnly'}>
      <HomeTitle title={'추천곡'} />
      <div className="relative">
        <div
          className={'absolute right-5 top-[-60px] z-10 flex space-x-2 hidden bg-gray'}
          id={'swiper-pagination'}
        >
          <button className="custom-prev-btn w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all">
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
          <button className="custom-next-btn w-8 h-8 flex items-center justify-center bg-black/30 hover:bg-black/50 rounded-full transition-all">
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
            nextEl: '.custom-next-btn',
            prevEl: '.custom-prev-btn',
            disabledClass: 'opacity-30 cursor-not-allowed',
          }}
          onInit={(swiper) => {
            // 초기화 후 네비게이션 활성화 및 표시
            setTimeout(() => {
              const navContainer = document.querySelector('#swiper-pagination');
              if (navContainer) navContainer.classList.remove('hidden');
              swiper.navigation?.init();
              swiper.navigation?.update();
            }, 0);
          }}
          pagination={{
            clickable: true,
            el: '.swiper-pagination',
          }}
          loop={false}
          className="w-full"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className={`!w-[180px] mr-[24px]`}>
              <AlgorithmItem item={item} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </SectionContainer>
  );
};

interface AlgorithmItemProps {
  item: {
    title: string;
    genre: string;
    coverImage: string;
    authorImage: string;
    authorName: string;
  };
}

const AlgorithmItem = ({ item }: AlgorithmItemProps) => {
  return (
    <div className="flex flex-col cursor-pointer">
      <div className="overflow-hidden rounded-2xl relative aspect-[2/3]">
        <Image
          className="rounded-2xl transition-transform hover:scale-110 duration-300 object-cover"
          src={item.coverImage}
          alt={'No Image'}
          fill
        />
      </div>
      <span className={'mt-2 font-medium'}>{item.title}</span>
      <span className={'mb-2 text-sm text-gray-400'}>{item.genre}</span>
      <div className="flex items-center">
        <Image
          className="rounded-full mr-2"
          src={item.authorImage}
          alt={'No Image'}
          width={25}
          height={25}
        />
        <span className={'text-[#726E6C] text-sm text-gray-400'}>{item.authorName}</span>
      </div>
    </div>
  );
};
