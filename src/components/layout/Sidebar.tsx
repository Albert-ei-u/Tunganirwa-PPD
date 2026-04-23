'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Home, 
  HelpCircle, 
  ArrowDownCircle, 
  ArrowUpCircle, 
  Eye, 
  CreditCard,
  Building2
} from 'lucide-react';
import styles from './Sidebar.module.css';

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
    <aside className={styles.sidebar}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>
          <Building2 size={24} />
        </div>
        <span className={styles.logoText}>PPD</span>
      </div>

      <nav className={styles.nav}>
        {navItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.href;

          return (
            <Link 
              key={item.name} 
              href={item.href}
              className={`${styles.navItem} ${isActive ? styles.active : ''}`}
            >
              <Icon className={styles.icon} />
              <span>{item.name}</span>
            </Link>
          );
        })}
      </nav>
    </aside>
  );
};

export default Sidebar;
