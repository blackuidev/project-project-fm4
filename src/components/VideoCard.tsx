import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Link } from 'react-router-dom';

interface VideoCardProps {
  id: string;
  title: string;
  thumbnail: string;
  channel: string;
  views: string;
  uploadDate: string;
  duration: string;
  channelAvatar: string;
}

const VideoCard: React.FC<VideoCardProps> = ({
  id,
  title,
  thumbnail,
  channel,
  views,
  uploadDate,
  duration,
  channelAvatar,
}) => {
  return (
    <Link to={`/watch/${id}`}>
      <Card className="w-full cursor-pointer hover:shadow-lg transition-shadow duration-200">
        <div className="relative w-full aspect-video">
          <img src={thumbnail} alt={title} className="w-full h-full object-cover rounded-t-lg" />
          <span className="absolute bottom-2 right-2 bg-black bg-opacity-75 text-white text-xs px-1.5 py-0.5 rounded">
            {duration}
          </span>
        </div>
        <CardContent className="p-3">
          <div className="flex items-start space-x-2">
            <Avatar className="h-8 w-8">
              <AvatarImage src={channelAvatar} alt={channel} />
              <AvatarFallback>{channel.charAt(0)}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <h3 className="text-sm font-semibold line-clamp-2">{title}</h3>
              <p className="text-xs text-muted-foreground mt-1">{channel}</p>
              <p className="text-xs text-muted-foreground">{views} • {uploadDate}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </Link>
  );
};

export default VideoCard;
