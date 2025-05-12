'use client';

import React from 'react';
import { Card } from '@/entities/card';

interface TrackStats {
  plays: string;
  likes: string;
  reposts: string;
}

interface TrackCardProps {
  title: string;
  description: string;
  creator: string;
  stats: TrackStats;
  thumbnail: string;
  backgroundColor?: string;
}

export const TrackCard = ({ title, description, creator, stats, thumbnail }: TrackCardProps) => {
  const handlePlay = () => {
    console.log(`Playing track: ${title}`);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <Card.Thumbnail src={thumbnail} onClick={handlePlay} />
      <Card.Content>
        <div>
          <Card.Title>{title}</Card.Title>
          <Card.Description>{description}</Card.Description>
        </div>
        <div className="flex text-sm items-center justify-between text-sm">
          <Card.Creator name={creator} icon={true} />
          <Card.Stats plays={stats.plays} likes={stats.likes} reposts={stats.reposts} />
        </div>
      </Card.Content>
    </Card>
  );
};
