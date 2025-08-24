import React from 'react';
import { Home, BarChart3, Users, FileText, Settings, Package } from 'lucide-react';

const Sidebar1 = ({ 
  activeMenu, 
  setActiveMenu, 
  isMobile = false, 
  isCollapsed = false 
}) => {
  const menuItems = [
    { id: 'dashboard', icon: Home, label: 'Menu Dashboard' },
    { id: 'analytics', icon: BarChart3, label: 'Analytics Sample' },
    { id: 'users', icon: Users, label: 'Users List' },
    { id: 'products', icon: Package, label: 'Products List' },
    { id: 'reports', icon: FileText, label: 'Reports Sample' },
    { id: 'settings', icon: Settings, label: 'Settings' },
  ];

  return (
    <div className={`${isMobile ? 'w-20' : 'w-20'} bg-white border-r border-gray-200 flex flex-col items-center py-4 space-y-2`}>
      {menuItems.map((item) => {
        const Icon = item.icon;
        const isActive = activeMenu === item.id;
        
        return (
          <button
            key={item.id}
            onClick={() => setActiveMenu(item.id)}
            className={`${isMobile ? 'w-14 h-14' : 'w-16 h-16'} flex flex-col items-center justify-center rounded-xl transition-all duration-200 group ${
              isActive
                ? 'bg-blue-50 text-blue-600 shadow-sm'
                : 'text-gray-500 hover:text-gray-700 hover:bg-gray-50'
            }`}
          >
            <Icon className={`${isMobile ? 'w-5 h-5' : 'w-6 h-6'} mb-1 transition-transform group-hover:scale-110 ${
              isActive ? 'text-blue-600' : ''
            }`} />
            <span className={`${isMobile ? 'text-xs' : 'text-xs'} font-medium ${
              isActive ? 'text-blue-600' : 'text-gray-600'
            }`}>
              {item.label}
            </span>
          </button>
        );
      })}
    </div>
  );
};

export default Sidebar1;