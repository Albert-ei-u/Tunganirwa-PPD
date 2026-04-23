'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import { Home, Eye } from 'lucide-react'

const navItems = [
  { name: 'PPD Property', icon: Home, href: '/', type: 'lucide' },
  { name: 'PPD Assistance', icon: '/notifications_black_24dp.png', href: '/assistance', type: 'image' },
  { name: 'Received Interest', icon: '/play_for_work_black_24dp.png', href: '/received', type: 'image' },
  { name: 'Sent Interest', icon: '/play_for_work_black_24dp.png', href: '/sent', type: 'image', rotate: 180 },
  { name: 'Property Views', icon: Eye, href: '/views', type: 'lucide' },
  { name: 'Tariff Plan', icon: '/sell_black_24dp.png', href: '/tariff', type: 'image' },
  
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-gray-200 fixed left-0 top-0 flex flex-col py-6 z-50">
      <div className="px-6 mb-12 flex items-center gap-4">
        <Image src="/PPD_logo.svg" alt="PPD Logo" width={48} height={48} className="rounded-lg shadow-sm" />
        <span className="text-3xl font-extrabold text-[#1A202C] tracking-tight">PPD</span>
      </div>

      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const isActive = pathname === item.href;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-4 px-6 py-3 font-medium transition-all border-l-4 ${
                isActive 
                  ? 'text-primary bg-blue-50 border-primary font-semibold' 
                  : 'text-muted border-transparent hover:text-primary hover:bg-gray-50'
              }`}
            >
              <div className="flex items-center justify-center w-5 h-5">
                {item.type === 'image' ? (
                  <Image 
                    src={item.icon as string} 
                    alt={item.name} 
                    width={20} 
                    height={20} 
                    className="transition-all"
                    style={{ 
                      transform: item.rotate ? `rotate(${item.rotate}deg)` : 'none',
                      filter: isActive 
                        ? 'invert(46%) sepia(94%) saturate(3048%) hue-rotate(210deg) brightness(101%) contrast(101%)' 
                        : 'invert(65%) brightness(100%) contrast(100%) opacity(0.6)'
                    }}
                  />
                ) : (
                  <item.icon size={20} className={isActive ? 'text-primary' : 'text-muted'} />
                )}
              </div>
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
}

export default Sidebar;