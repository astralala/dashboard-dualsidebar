import React from 'react';
import DashboardPage from '../pages/DashboardPage';
import AnalyticsPage from '../pages/AnalyticsPage';
import UsersPage from '../pages/UsersPage';
import ProductsPage from '../pages/ProductsPage';
import ReportsPage from '../pages/ReportsPage';
import SettingsPage from '../pages/SettingsPage';

const MainContent = ({ activeMenu, activeSubMenu }) => {
  const renderContent = () => {
    // Default to dashboard if no menu is selected
    const currentMenu = activeMenu || 'dashboard';
    
    switch (currentMenu) {
      case 'dashboard':
        return <DashboardPage activeSubMenu={activeSubMenu} />;
      case 'analytics':
        return <AnalyticsPage activeSubMenu={activeSubMenu} />;
      case 'users':
        return <UsersPage activeSubMenu={activeSubMenu} />;
      case 'products':
        return <ProductsPage activeSubMenu={activeSubMenu} />;
      case 'reports':
        return <ReportsPage activeSubMenu={activeSubMenu} />;
      case 'settings':
        return <SettingsPage activeSubMenu={activeSubMenu} />;
      default:
        return <DashboardPage activeSubMenu={activeSubMenu} />;
    }
  };

  return (
    <main className="flex-1 p-6 bg-gray-50 overflow-auto">
      {renderContent()}
    </main>
  );
};

export default MainContent;