'use client';

import React from 'react';
import { Card } from '@/entities/card';

interface CreatorCardProps {
  name: string;
  followers: string;
  handle: string;
  thumbnail: string;
}

export const CreatorCard = ({ name, followers, handle, thumbnail }: CreatorCardProps) => {
  const handleFollow = () => {
    console.log(`Following ${name}`);
  };

  return (
    <Card className="hover:shadow-lg transition-all duration-300 hover:scale-[1.02] cursor-pointer">
      <Card.Thumbnail src={thumbnail} />
      <Card.Content>
        <div className="relative">
          <Card.Title>{name}</Card.Title>
          <Card.Followers count={followers} />
          <Card.Handle handle={handle} />
          <button
            className="cursor-pointer absolute top-4 right-0 px-3 py-1 bg-gray-800 hover:bg-gray-700 text-white rounded-full text-xs"
            onClick={handleFollow}
          >
            Follow
          </button>
        </div>
      </Card.Content>
    </Card>
  );
};
