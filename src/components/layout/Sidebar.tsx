import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Home, Compass, Library, History, Clapperboard, Clock, ThumbsUp, Youtube, Settings, Flag, HelpCircle, MessageSquare } from 'lucide-react';

export const Sidebar: React.FC = () => {
  const mainLinks = [
    { icon: Home, label: 'Home', href: '/' },
    { icon: Compass, label: 'Explore', href: '/explore' },
    { icon: Youtube, label: 'Subscriptions', href: '/subscriptions' },
  ];

  const libraryLinks = [
    { icon: Library, label: 'Library', href: '/library' },
    { icon: History, label: 'History', href: '/history' },
    { icon: Clapperboard, label: 'Your videos', href: '/your-videos' },
    { icon: Clock, label: 'Watch later', href: '/watch-later' },
    { icon: ThumbsUp, label: 'Liked videos', href: '/liked-videos' },
  ];

  const moreFromYoutubeLinks = [
    { icon: Youtube, label: 'YouTube Premium', href: '/premium' },
    { icon: Clapperboard, label: 'Movies & Shows', href: '/movies' },
    { icon: Clapperboard, label: 'Gaming', href: '/gaming' },
    { icon: Clapperboard, label: 'Live', href: '/live' },
    { icon: Clapperboard, label: 'Fashion & Beauty', href: '/fashion' },
    { icon: Clapperboard, label: 'Learning', href: '/learning' },
    { icon: Clapperboard, label: 'Sports', href: '/sports' },
  ];

  const settingsLinks = [
    { icon: Settings, label: 'Settings', href: '/settings' },
    { icon: Flag, label: 'Report history', href: '/report-history' },
    { icon: HelpCircle, label: 'Help', href: '/help' },
    { icon: MessageSquare, label: 'Send feedback', href: '/feedback' },
  ];

  const renderLinks = (links: { icon: React.ElementType; label: string; href: string }[]) => (
    <div className="space-y-1">
      {links.map((link) => (
        <Button key={link.label} variant="ghost" className="w-full justify-start text-sm" asChild>
          <Link to={link.href}>
            <link.icon className="mr-4 h-5 w-5" />
            <span>{link.label}</span>
          </Link>
        </Button>
      ))}
    </div>
  );

  return (
    <div className="h-full flex flex-col border-r bg-background">
      <div className="p-4 flex items-center space-x-2 border-b lg:hidden">
        <Youtube className="h-7 w-7 text-red-500" />
        <span className="font-bold text-xl">YouTube Clone</span>
      </div>
      <ScrollArea className="flex-1 p-4">
        {renderLinks(mainLinks)}
        <div className="my-4 border-b" />
        {renderLinks(libraryLinks)}
        <div className="my-4 border-b" />
        <h3 className="text-sm font-semibold mb-2 px-3">MORE FROM YOUTUBE</h3>
        {renderLinks(moreFromYoutubeLinks)}
        <div className="my-4 border-b" />
        {renderLinks(settingsLinks)}
        <div className="my-4 border-b" />
        <div className="px-3 text-xs text-muted-foreground space-y-1">
          <p>About Press Copyright Contact us Creators Advertise Developers</p>
          <p>Terms Privacy Policy & Safety How YouTube works Test new features</p>
          <p className="mt-2">© 2024 YouTube Clone</p>
        </div>
      </ScrollArea>
    </div>
  );
};
