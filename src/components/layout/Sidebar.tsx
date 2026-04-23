'use client';

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from 'next/navigation'
import {
  Home,
  HelpCircle,
  ArrowDownCircle,
  Eye,
  CreditCard,
  ArrowUpCircle
} from 'lucide-react'

const navItems = [
  { name: 'PPD Property', icon: Home, href: '/' },
  { name: 'PPD Assistance', icon: HelpCircle, href: '/assistance' },
  { name: 'Received Interest', icon: ArrowDownCircle, href: '/received' },
  { name: 'Sent Interest', icon: ArrowUpCircle, href: '/sent' },
  { name: 'Property Views', icon: Eye, href: '/views' },
  { name: 'Tariff Plan', icon: CreditCard, href: '/tariff' },
];

const Sidebar = () => {
  const pathname = usePathname();

  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-gray-200 fixed left-0 top-0 flex flex-col py-6 z-50">
      {/* {Logo section} */}
      <div className="px-6 mb-12 flex items-center gap-4">
        <Image
          src="/PPD_logo.svg"
          alt="PPD Logo"
          width={48}
          height={48}
          className="rounded-lg shadow-sm"
        />
        <span className="text-3xl font-extrabold text-[#1A202C] tracking-tight">PPD</span>
      </div>
      {/* Navigation Links */}
      <nav className="flex-1 flex flex-col gap-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive  = pathname === item.href;
          
          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`flex items-center gap-4 px-6 py-3 font-medium transition-all border-l-4 ${
                isActive 
                  ? 'text-primary bg-blue-50 border-primary' 
                  : 'text-muted border-transparent hover:text-primary hover:bg-gray-50'
              }`}
            >
              <Icon size={20} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>

  )
}

export default Sidebar;