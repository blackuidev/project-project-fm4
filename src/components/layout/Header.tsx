import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, Search, Upload, Bell, User, Youtube } from 'lucide-react';
import { useState } from 'react';
import { Sidebar } from './Sidebar';

export const Header: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchTerm.trim()) {
      navigate(`/search?q=${searchTerm}`);
    }
  };

  return (
    <header className="flex items-center justify-between p-4 bg-background border-b h-16">
      <div className="flex items-center space-x-4">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="lg:hidden">
              <Menu className="h-5 w-5" />
            </Button>
          </SheetTrigger>
          <SheetContent side="left" className="w-64 p-0">
            <Sidebar />
          </SheetContent>
        </Sheet>
        <Link to="/" className="flex items-center space-x-2">
          <Youtube className="h-7 w-7 text-red-500" />
          <span className="font-bold text-xl hidden md:block">YouTube Clone</span>
        </Link>
      </div>

      <form onSubmit={handleSearch} className="flex-1 max-w-xl mx-4 hidden sm:flex">
        <Input
          type="text"
          placeholder="Search"
          className="rounded-r-none"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Button type="submit" variant="secondary" className="rounded-l-none border border-l-0">
          <Search className="h-5 w-5" />
        </Button>
      </form>

      <div className="flex items-center space-x-2">
        <Button variant="ghost" size="icon" className="sm:hidden">
          <Search className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Upload className="h-5 w-5" />
        </Button>
        <Button variant="ghost" size="icon">
          <Bell className="h-5 w-5" />
        </Button>
        <Avatar className="h-8 w-8">
          <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
          <AvatarFallback><User className="h-4 w-4" /></AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
};
