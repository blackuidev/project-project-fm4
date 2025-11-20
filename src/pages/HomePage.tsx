import React from 'react';
import VideoCard from '@/components/VideoCard';
import { mockVideos } from '@/data/mockVideos';

const HomePage: React.FC = () => {
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-6">Recommended Videos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-6">
        {mockVideos.map((video) => (
          <VideoCard key={video.id} {...video} />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
