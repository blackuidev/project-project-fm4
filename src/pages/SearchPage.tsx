import React from 'react';
import { useSearchParams } from 'react-router-dom';
import VideoCard from '@/components/VideoCard';
import { mockVideos } from '@/data/mockVideos';
import { ScrollArea } from '@/components/ui/scroll-area';

const SearchPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const query = searchParams.get('q') || '';

  const filteredVideos = mockVideos.filter(video =>
    video.title.toLowerCase().includes(query.toLowerCase()) ||
    video.channel.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="container mx-auto p-4">
        <h1 className="text-2xl font-bold mb-6">Search Results for "{query}"</h1>
        {filteredVideos.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredVideos.map((video) => (
              <VideoCard key={video.id} {...video} />
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">No videos found matching your search.</p>
        )}
      </div>
    </ScrollArea>
  );
};

export default SearchPage;
