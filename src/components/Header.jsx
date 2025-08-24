import React, { useState, useRef, useEffect } from 'react';
import { Bell, Search, User, Settings, Menu, X, PanelLeftClose, PanelLeft } from 'lucide-react';

const Header = ({ 
  onToggleMobileMenu, 
  isMobileMenuOpen, 
  onToggleSidebar, 
  isSidebarCollapsed 
}) => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown jika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <header className="bg-sky-700 shadow-sm border-b border-gray-200 h-16 flex items-center justify-between px-6 sticky top-0 z-50">
      <div className="flex items-center text-center">
        {/* Mobile Menu Button */}
        <button
          onClick={onToggleMobileMenu}
          className="lg:hidden text-white hover:text-gray-700 hover:bg-gray-100 rounded-lg border-sky-600 border-2 border-solid p-2 transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-5 h-5" />
          ) : (
            <Menu className="w-5 h-5" />
          )}
        </button>
        
        {/* Desktop Sidebar Toggle */}
        <button
          onClick={onToggleSidebar}
          className="hidden lg:block p-2 text-white hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
          title={isSidebarCollapsed ? 'Show Sidebar' : 'Hide Sidebar'}
        >
          {isSidebarCollapsed ? (
            <PanelLeft className="w-5 h-5" />
          ) : (
            <PanelLeftClose className="w-5 h-5" />
          )}
        </button>
        
        <div className="hidden sm:flex items-center space-x-4 ml-8">
          <div className="w-8 h-8 bg-sky-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-sm">A</span>
          </div>
          <h1 className="text-xl font-semibold text-white">Dashboard Dual Sidebar</h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent w-32 sm:w-48 md:w-64"
          />
        </div>
        <button className="hidden sm:block p-2 text-white hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors relative">
          <Bell className="w-5 h-5" />
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs font-bold px-1.5 py-0.5 rounded-full">
            5
          </span>
        </button>
        <button className="hidden sm:block p-2 text-white hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
          <Settings className="w-5 h-5" />
        </button>
        
        <div className="flex items-center space-x-2 relative" ref={dropdownRef}>
          <button
            className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center"
            onClick={() => setDropdownOpen(!dropdownOpen)}
          >
            <User className="w-4 h-4 text-gray-600" />
          </button>
          <span className="hidden sm:flex text-sm font-medium text-gray-50">Dessy</span>
          {dropdownOpen && (
            <div className="absolute right-0 top-12 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-lg z-50">
              <ul className="py-2">
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black">Profile</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black">Settings</button>
                </li>
                <li>
                  <button className="w-full text-left px-4 py-2 hover:bg-gray-100 text-black">Logout</button>
                </li>
              </ul>
            </div>
          )}
        </div>
        
      </div>
    </header>
  );
};

export default Header;