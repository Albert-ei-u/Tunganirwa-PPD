'use client';

import React from 'react';
import { Search, User, ChevronDown } from 'lucide-react';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      <div className={styles.searchContainer}>
        <Search size={18} color="#8A99AF" />
        <input 
          type="text" 
          placeholder="Search PPD ID" 
          className={styles.searchInput}
        />
      </div>

      <div className={styles.right}>
        <span className={styles.userId}>USER ID : 06PPD125</span>
        <a href="#" className={styles.visitLink}>Visit Website</a>
        
        <div className={styles.userProfile}>
          <User size={20} />
          <span className={styles.userName}>Joe Melton</span>
          <ChevronDown size={16} />
        </div>
      </div>
    </header>
  );
};

export default Header;
