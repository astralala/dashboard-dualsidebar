import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-red-500 border-t border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between text-sm text-white">
        <div className="flex items-center space-x-4">
          <span>© 2025 Dashboard Dual Sidebar.</span>
          <div className="flex items-center space-x-4">
            <a href="#" className="hover:text-red-200 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-red-200 transition-colors">TOS</a>
            <a href="#" className="hover:text-red-200 transition-colors">Support & Help</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;