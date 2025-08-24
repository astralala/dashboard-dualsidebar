import React, { useState } from 'react';
import { ChevronDown, ChevronRight, Folder, File, Database, Code, Globe, Shield } from 'lucide-react';

const Sidebar2 = ({ activeMenu, activeSubMenu, setActiveSubMenu }) => {
  const [expandedMenus, setExpandedMenus] = useState(['overview']);

  const toggleMenu = (menuId) => {
    setExpandedMenus(prev => 
      prev.includes(menuId) 
        ? prev.filter(id => id !== menuId)
        : [...prev, menuId]
    );
  };

  const getSubMenuItems = (mainMenu) => {
    const subMenuMap = {
      dashboard: [
        { 
          id: 'overview', 
          icon: Folder, 
          label: 'Overview',
          children: [
            { id: 'metrics', icon: File, label: 'Key Metrics' },
            { id: 'charts', icon: File, label: 'Charts & Graphs' },
            { id: 'recent', icon: File, label: 'Recent Activity' }
          ]
        },
        { id: 'widgets', icon: Code, label: 'Widgets' },
      ],
      analytics: [
        { 
          id: 'reports', 
          icon: Folder, 
          label: 'Reports',
          children: [
            { id: 'sales-report', icon: File, label: 'Sales Report' },
            { id: 'user-report', icon: File, label: 'User Analytics' },
            { id: 'traffic-report', icon: File, label: 'Traffic Analysis' }
          ]
        },
        { id: 'realtime', icon: Globe, label: 'Real-time Data' },
      ],
      users: [
        { 
          id: 'management', 
          icon: Folder, 
          label: 'User Management',
          children: [
            { id: 'all-users', icon: File, label: 'Table All Users' },
            { id: 'roles', icon: File, label: 'Roles & Permissions' },
            { id: 'groups', icon: File, label: 'User Groups' }
          ]
        },
        { id: 'authentication', icon: Shield, label: 'Authentication' },
      ],
      products: [
        { 
          id: 'inventory', 
          icon: Folder, 
          label: 'Inventory',
          children: [
            { id: 'all-products', icon: File, label: 'All Products' },
            { id: 'categories', icon: File, label: 'Categories' },
            { id: 'stock', icon: File, label: 'Stock Management' }
          ]
        },
        { id: 'orders', icon: Database, label: 'Orders' },
      ],
      reports: [
        { id: 'financial', icon: Folder, label: 'Sample Reports' },
        { id: 'operational', icon: Folder, label: 'Sample Operational Reports' },
      ],
      settings: [
        { id: 'general', icon: File, label: 'General Settings' },
        { id: 'security', icon: Shield, label: 'Security' },
        { id: 'integrations', icon: Globe, label: 'Integrations' },
      ],
    };
    
    return subMenuMap[mainMenu] || [];
  };

  const subMenuItems = getSubMenuItems(activeMenu);

  if (subMenuItems.length === 0) {
    return (
      <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
        <div className="text-center text-gray-500 mt-8">
          <p className="text-sm">No sub-menu available</p>
        </div>
      </div>
    );
  }

  return (
    <div className="w-64 bg-gray-50 border-r border-gray-200 p-4">
      <div className="mb-4">
        <h3 className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
          {activeMenu.charAt(0).toUpperCase() + activeMenu.slice(1)} Menu
        </h3>
      </div>
      
      <nav className="space-y-1">
        {subMenuItems.map((item) => {
          const Icon = item.icon;
          const isExpanded = expandedMenus.includes(item.id);
          const hasChildren = item.children && item.children.length > 0;
          
          return (
            <div key={item.id}>
              <button
                onClick={() => {
                  if (hasChildren) {
                    toggleMenu(item.id);
                  } else {
                    setActiveSubMenu(item.id);
                  }
                }}
                className={`w-full flex items-start px-3 py-2 text-sm font-medium rounded-lg transition-colors ${
                  activeSubMenu === item.id
                    ? 'bg-blue-100 text-blue-700'
                    : 'text-gray-700 hover:bg-white hover:text-gray-900'
                }`}
              >
                <Icon className="w-4 h-4 mr-3" />
                <span className="flex-1 text-left">{item.label}</span>
                {hasChildren && (
                  isExpanded ? 
                    <ChevronDown className="w-4 h-4" /> : 
                    <ChevronRight className="w-4 h-4" />
                )}
              </button>
              
              {hasChildren && isExpanded && (
                <div className="ml-6 mt-1 space-y-1">
                  {item.children.map((child) => {
                    const ChildIcon = child.icon;
                    return (
                      <button
                        key={child.id}
                        onClick={() => setActiveSubMenu(child.id)}
                        className={`w-full flex items-center px-3 py-2 text-sm rounded-lg transition-colors ${
                          activeSubMenu === child.id
                            ? 'bg-blue-100 text-blue-700'
                            : 'text-gray-600 hover:bg-white hover:text-gray-800'
                        }`}
                      >
                        <ChildIcon className="w-3 h-3 mr-3" />
                        {child.label}
                      </button>
                    );
                  })}
                </div>
              )}
            </div>
          );
        })}
      </nav>
    </div>
  );
};

export default Sidebar2;