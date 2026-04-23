import React from 'react';
import { LucideIcon } from 'lucide-react';
import styles from './StatsCard.module.css';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const StatsCard = ({ title, value, icon: Icon, iconColor, bgColor }: StatsCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.left}>
        <span className={styles.title}>{title}</span>
        <span className={styles.value}>{value}</span>
      </div>
      <div 
        className={styles.iconWrapper} 
        style={{ backgroundColor: bgColor }}
      >
        <Icon size={24} color={iconColor} />
      </div>
    </div>
  );
};

export default StatsCard;
