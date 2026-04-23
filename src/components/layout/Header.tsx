'use client';

import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';

const Header = () => {
  return (
    <header className="h-[70px] bg-white border-b border-gray-200 flex items-center justify-between px-10 fixed top-0 left-0 right-0 pl-64 z-40">
      {/* Search Bar */}
      <div className="flex items-center bg-gray-50 border border-gray-200 rounded-full px-4 py-2 w-[350px]">
        <Search size={18} className="text-muted" />
        <input 
          type="text" 
          placeholder="Search PPD ID" 
          className="bg-transparent border-none outline-none ml-2 flex-1 text-sm text-[#2C3E50] placeholder:text-muted"
        />
      </div>

      {/* User Info */}
      <div className="flex items-center gap-6">
        <span className="text-muted text-sm font-medium">USER ID : 06PPD125</span>
        <a href="#" className="text-muted text-sm font-medium pr-6 border-r border-gray-200">Visit Website</a>
        
        <div className="flex items-center gap-3 cursor-pointer group">
          <div className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center text-primary">
            <User size={20} />
          </div>
          <span className="text-sm font-semibold text-[#2C3E50]">Joe Melton</span>
          <ChevronDown size={16} className="text-muted group-hover:text-primary transition-colors" />
        </div>
      </div>
    </header>
  );
};

export default Header;
