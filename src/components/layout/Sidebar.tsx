import React, { useState } from 'react';
import { Menu, X, Home, User, Briefcase, GraduationCap, Award, Mic, BarChart3, Phone, ChevronRight, Palette } from 'lucide-react';
import { NavLink } from 'react-router-dom';

interface SidebarProps {
  isMobile: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ isMobile }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    if (isMobile) {
      setIsOpen(false);
    }
  };

  const menuItems = [
    { name: 'Home', path: '/', icon: <Home size={20} /> },
    { name: 'About', path: '/about', icon: <User size={20} /> },
    { name: 'Experience', path: '/experience', icon: <Briefcase size={20} /> },
    { name: 'Education', path: '/education', icon: <GraduationCap size={20} /> },
    { name: 'Skills', path: '/skills', icon: <BarChart3 size={20} /> },
    { name: 'Voice Over', path: '/voice-over', icon: <Mic size={20} /> },
    { name: 'Design', path: '/design', icon: <Palette size={20} /> },
    { name: 'Achievements', path: '/achievements', icon: <Award size={20} /> },
    { name: 'Contact', path: '/contact', icon: <Phone size={20} /> },
  ];

  return (
    <>
      {/* Mobile menu button */}
      {isMobile && (
        <button
          className="fixed top-4 left-4 z-50 p-2 rounded-md bg-white shadow-md text-primary-600"
          onClick={toggleSidebar}
          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-full bg-white shadow-lg z-40 transition-all duration-300 ease-in-out ${
          isMobile ? (isOpen ? 'w-64 translate-x-0' : 'w-64 -translate-x-full') : 'w-64'
        }`}
      >
        <div className="flex flex-col h-full">
          {/* Logo Section */}
          <div className="p-6 border-b border-gray-200">
            <div className="flex justify-center">
              <img 
                src="/ChatGPT Image 1 Jun 2025, 00.11.43 (1).png"
                alt="YK Logo"
                className="w-32 h-auto"
              />
            </div>
          </div>

          {/* Navigation */}
          <nav className="flex-1 py-4 px-3 overflow-y-auto">
            <ul className="space-y-1">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `dashboard-link ${isActive ? 'active' : ''}`
                    }
                    onClick={closeSidebar}
                  >
                    <span className="mr-3 text-gray-500">{item.icon}</span>
                    <span>{item.name}</span>
                    <ChevronRight size={16} className="ml-auto text-gray-400" />
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Footer */}
          <div className="p-4 border-t border-gray-200 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Yukie Kiyoshi
          </div>
        </div>
      </aside>
    </>
  );
};

export default Sidebar;