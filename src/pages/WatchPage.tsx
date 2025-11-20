import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { mockVideos } from '@/data/mockVideos';
import VideoCard from '@/components/VideoCard';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ThumbsUp, ThumbsDown, Share2, Download, MoreHorizontal, Bell, User } from 'lucide-react';
import { Separator } from '@/components/ui/separator';
import { ScrollArea } from '@/components/ui/scroll-area';

const WatchPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const video = mockVideos.find((v) => v.id === id);

  if (!video) {
    return <div className="p-4 text-center">Video not found.</div>;
  }

  const relatedVideos = mockVideos.filter((v) => v.id !== id).slice(0, 8);

  return (
    <ScrollArea className="h-[calc(100vh-64px)]">
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          <div className="aspect-video bg-black rounded-lg overflow-hidden mb-4">
            <iframe
              className="w-full h-full"
              src={video.videoUrl}
              title={video.title}
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
          <h1 className="text-xl md:text-2xl font-bold mb-2">{video.title}</h1>
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10">
                <AvatarImage src={video.channelAvatar} alt={video.channel} />
                <AvatarFallback><User /></AvatarFallback>
              </Avatar>
              <div>
                <p className="font-semibold">{video.channel}</p>
                <p className="text-sm text-muted-foreground">1.5M subscribers</p> {/* Mock subscriber count */}
              </div>
              <Button className="ml-4 bg-red-500 hover:bg-red-600 text-white">
                <Bell className="mr-2 h-4 w-4" /> Subscribe
              </Button>
            </div>
            <div className="flex items-center space-x-4 text-sm text-muted-foreground">
              <Button variant="ghost" className="flex items-center space-x-1">
                <ThumbsUp className="h-4 w-4" /> <span>{video.views}</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-1">
                <ThumbsDown className="h-4 w-4" />
              </Button>
              <Button variant="ghost" className="flex items-center space-x-1">
                <Share2 className="h-4 w-4" /> <span>Share</span>
              </Button>
              <Button variant="ghost" className="flex items-center space-x-1">
                <Download className="h-4 w-4" /> <span>Download</span>
              </Button>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </div>
          </div>
          <Separator className="my-4" />
          <div className="bg-muted p-3 rounded-lg text-sm">
            <p className="font-semibold mb-1">{video.views} views • {video.uploadDate}</p>
            <p>{video.description}</p>
          </div>
        </div>

        <div className="lg:col-span-1">
          <h2 className="text-xl font-bold mb-4">Up Next</h2>
          <div className="space-y-4">
            {relatedVideos.map((relatedVideo) => (
              <Link to={`/watch/${relatedVideo.id}`} key={relatedVideo.id}>
                <div className="flex items-start space-x-3 cursor-pointer hover:bg-muted p-2 rounded-lg transition-colors duration-150">
                  <img src={relatedVideo.thumbnail} alt={relatedVideo.title} className="w-32 h-18 object-cover rounded-md flex-shrink-0" />
                  <div>
                    <h3 className="text-sm font-semibold line-clamp-2">{relatedVideo.title}</h3>
                    <p className="text-xs text-muted-foreground">{relatedVideo.channel}</p>
                    <p className="text-xs text-muted-foreground">{relatedVideo.views}</p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </ScrollArea>
  );
};

export default WatchPage;
