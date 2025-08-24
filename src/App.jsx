import React, { useState } from 'react';
import Header from './components/Header';
import Sidebar1 from './components/Sidebar1';
import Sidebar2 from './components/Sidebar2';
import MainContent from './components/MainContent';
import Footer from './components/Footer';

function App() {
  const [activeMenu, setActiveMenu] = useState('dashboard');
  const [activeSubMenu, setActiveSubMenu] = useState('');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  // Reset sub-menu when main menu changes
  const handleMenuChange = (menu) => {
    setActiveMenu(menu);
    setActiveSubMenu(''); // Reset sub-menu when main menu changes
    // Close mobile menu when menu is selected
    setIsMobileMenuOpen(false);
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <Header 
        onToggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        onToggleSidebar={toggleSidebar}
        isSidebarCollapsed={isSidebarCollapsed}
      />
      
      <div className="flex flex-1">
        {/* Desktop Sidebars */}
        <div className={`hidden lg:flex transition-all duration-300 ${isSidebarCollapsed ? 'w-0 overflow-hidden' : ''}`}>
          <Sidebar1 
            activeMenu={activeMenu} 
            setActiveMenu={handleMenuChange}
            isCollapsed={isSidebarCollapsed}
          />
          {activeMenu && activeMenu !== '' && !isSidebarCollapsed && (
            <Sidebar2 
              activeMenu={activeMenu}
              activeSubMenu={activeSubMenu}
              setActiveSubMenu={setActiveSubMenu}
            />
          )}
        </div>

        {/* Mobile Menu Overlay */}
        {isMobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-50 flex">
            <div 
              className="fixed inset-0 bg-black bg-opacity-50" 
              onClick={toggleMobileMenu}
            ></div>
            <div className="relative flex bg-white shadow-xl">
              <Sidebar1 
                activeMenu={activeMenu} 
                setActiveMenu={handleMenuChange}
                isMobile={true}
              />
              {activeMenu && activeMenu !== '' && (
                <Sidebar2 
                  activeMenu={activeMenu}
                  activeSubMenu={activeSubMenu}
                  setActiveSubMenu={setActiveSubMenu}
                />
              )}
            </div>
          </div>
        )}

        <MainContent 
          activeMenu={activeMenu}
          activeSubMenu={activeSubMenu}
        />
      </div>
      
      <Footer />
    </div>
  );
}

export default App;