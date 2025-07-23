import React, { useState, useEffect } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';

const PageLayout: React.FC = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 1024);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
    };

    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar isMobile={isMobile} />
      
      <main className={`flex-1 transition-all duration-300 ${isMobile ? 'ml-0' : 'ml-64'}`}>
        <div className="container-custom py-6 md:py-10">
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default PageLayout;