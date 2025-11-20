import React, { useState } from 'react';
import { Routes, Route, Outlet } from 'react-router-dom';
import { Header } from '@/components/layout/Header';
import { Sidebar } from '@/components/layout/Sidebar';
import HomePage from '@/pages/HomePage';
import WatchPage from '@/pages/WatchPage';
import SearchPage from '@/pages/SearchPage';
import NotFound from '@/pages/NotFound'; // Assuming NotFound exists or will be created

const App: React.FC = () => {
  // You can manage sidebar open/close state here if needed for desktop
  // const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1 overflow-hidden">
        {/* Desktop Sidebar - always visible but can be collapsed visually if state is managed */}
        <div className="hidden lg:block w-64 flex-shrink-0 border-r overflow-y-auto">
          <Sidebar />
        </div>
        <main className="flex-1 overflow-y-auto bg-background">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/watch/:id" element={<WatchPage />} />
            <Route path="/search" element={<SearchPage />} />
            {/* Catch-all for undefined routes */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
};

export default App;
