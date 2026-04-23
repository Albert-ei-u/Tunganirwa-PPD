import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
  bgColor: string;
}

const StatsCard = ({ title, value, icon: Icon, iconColor, bgColor }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-xl p-6 flex items-center justify-between shadow-sm border border-gray-100 flex-1 min-w-[240px]">
      <div className="flex flex-col gap-2">
        <span className="text-sm font-medium text-muted">{title}</span>
        <span className="text-3xl font-bold text-[#1A202C]">{value}</span>
      </div>
      <div 
        className="w-12 h-12 rounded-lg flex items-center justify-center" 
        style={{ backgroundColor: bgColor }}
      >
        <Icon size={24} color={iconColor} />
      </div>
    </div>
  );
};

export default StatsCard;
