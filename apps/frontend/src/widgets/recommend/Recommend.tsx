'use client';

import { HomeTitle } from '@/shared/ui/HomeTitle';
import { TrackCard } from '@/features/track-card';
import { CreatorCard } from '@/features/creator-card';
import { SectionContainer } from '@/shared/ui/container/SectionContainer';
import { useEffect, useState } from 'react';

// 이미지 URL 배열
const imageUrls = [
  'https://static-cos.mureka.ai/cos-prod/files/38457997131777/20241107/f89d3d99e8da43a382dbe8d8d35a113d.jpg?x-oss-process=image/resize,h_536/format,webp',
  'https://static-cos.mureka.ai/cos-prod/files/covers/20241027/Love_Is_A_Strong_Word_replace.png?x-oss-process=image/resize,h_536/format,webp',
  'https://static-cos.mureka.ai/cos-prod/files/37036669075457/20241031/efd9b59213464fa288d5e2daaf70f16d.jpg?x-oss-process=image/resize,h_536/format,webp',
];

// 트랙 데이터 타입 정의
interface TrackData {
  id: string;
  title: string;
  description: string;
  creator: string;
  stats: {
    plays: string;
    likes: string;
    reposts: string;
  };
  thumbnail?: string; // 옵셔널로 변경
}

// 크리에이터 데이터 타입 정의
interface CreatorData {
  id: string;
  name: string;
  followers: string;
  handle: string;
  thumbnail?: string; // 옵셔널로 변경
}

// 새로운 노래 데이터 - 초기에는 썸네일 없음
const newTracksData: TrackData[] = [
  {
    id: '1',
    title: 'an empty house',
    description: 'emotional, female vocals, soulful, acoustic',
    creator: 'QuaveringSeraph2347',
    stats: { plays: '5.1K', likes: '70', reposts: '5' },
  },
  {
    id: '2',
    title: "Villains' Anthem",
    description: 'male vocals, dramatic, orchestral, epic',
    creator: 'molymoneyft1903',
    stats: { plays: '2.0K', likes: '27', reposts: '3' },
  },
  {
    id: '3',
    title: 'Mystic Wizards',
    description: 'AFRICAN RED DRAGON PRIMAL HEARTH BEATS GRAVITY',
    creator: 'Stray Cat/Game Dev · DRAGO',
    stats: { plays: '1.8K', likes: '97', reposts: '4' },
  },
  {
    id: '4',
    title: 'Let It Go M 305 V4 BST',
    description: 'Beatboxing Kevinspiration, Upbeat, Groove, Atmospheric',
    creator: 'Team Tiger · Kevinspiration',
    stats: { plays: '1.8K', likes: '80', reposts: '4' },
  },
  {
    id: '5',
    title: 'Fusion Groove Fiesta',
    description: 'uk bass, funk, punk, flamenco guitar, deep dubstep, rawstyle',
    creator: 'lauraghimpau85830',
    stats: { plays: '1.3K', likes: '16', reposts: '0' },
  },
];

// 인기 사용자 데이터 - 초기에는 썸네일 없음
const popularCreatorsData: CreatorData[] = [
  {
    id: '1',
    name: 'Brutus',
    followers: '9.3K',
    handle: '안녕하세요 Brutus 입니다',
  },
  {
    id: '2',
    name: 'Michal2409',
    followers: '3.2K',
    handle: '안녕하세요 테스트 입니다',
  },
  {
    id: '3',
    name: 'Teemuth',
    followers: '7.4K',
    handle: '자기소개 입니다',
  },
  {
    id: '4',
    name: 'Stealth Noise Spider',
    followers: '5.3K',
    handle: '음악을 좋아합니다',
  },
  {
    id: '5',
    name: 'King Banana',
    followers: '3.0K',
    handle: '락을 좋아합니다 3112983897 3112983897',
  },
];

// 최근 들은 노래 - 초기에는 썸네일 없음
const recentlyListenedTracksData = newTracksData.map((track) => ({
  ...track,
  id: `recent-${track.id}`,
}));

// 카테고리 컴포넌트
interface CategoryProps {
  title: string;
  children: React.ReactNode;
}

const Category = ({ title, children }: CategoryProps) => {
  return (
    <div className="flex-1 w-full md:min-w-[400px]">
      <HomeTitle title={title} />
      <div className="flex flex-col gap-4">{children}</div>
    </div>
  );
};

export const Recommend = () => {
  const [newTracks, setNewTracks] = useState<TrackData[]>(newTracksData);
  const [popularCreators, setPopularCreators] = useState<CreatorData[]>(popularCreatorsData);
  const [recentlyListenedTracks, setRecentlyListenedTracks] = useState<TrackData[]>(
    recentlyListenedTracksData
  );
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);

    // 랜덤 이미지 URL 가져오기 함수
    const getRandomImageUrl = () => {
      const randomIndex = Math.floor(Math.random() * imageUrls.length);
      return imageUrls[randomIndex];
    };

    // 이미지 URL 추가
    setNewTracks(
      newTracksData.map((track) => ({
        ...track,
        thumbnail: getRandomImageUrl(),
      }))
    );

    setPopularCreators(
      popularCreatorsData.map((creator) => ({
        ...creator,
        thumbnail: getRandomImageUrl(),
      }))
    );

    setRecentlyListenedTracks(
      recentlyListenedTracksData.map((track) => ({
        ...track,
        thumbnail: getRandomImageUrl(),
      }))
    );
  }, []);

  // 서버 사이드 렌더링 시 기본 이미지 사용
  const defaultImage = imageUrls[0];

  return (
    <SectionContainer>
      <div className="flex flex-wrap gap-6">
        <Category title="새로운 노래">
          {newTracks.map((track) => (
            <TrackCard
              key={track.id}
              title={track.title}
              description={track.description}
              creator={track.creator}
              stats={track.stats}
              thumbnail={isClient ? track.thumbnail || '' : defaultImage}
            />
          ))}
        </Category>

        <Category title="인기 사용자">
          {popularCreators.map((creator) => (
            <CreatorCard
              key={creator.id}
              name={creator.name}
              followers={creator.followers}
              handle={creator.handle}
              thumbnail={isClient ? creator.thumbnail || '' : defaultImage}
            />
          ))}
        </Category>

        <Category title="최근 감상곡">
          {recentlyListenedTracks.map((track) => (
            <TrackCard
              key={track.id}
              title={track.title}
              description={track.description}
              creator={track.creator}
              stats={track.stats}
              thumbnail={isClient ? track.thumbnail || '' : defaultImage}
            />
          ))}
        </Category>
      </div>
    </SectionContainer>
  );
};
