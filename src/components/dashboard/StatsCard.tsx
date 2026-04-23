import React from 'react';
import { LucideIcon } from 'lucide-react';

interface StatsCardProps {
  title: string;
  value: string | number;
  icon: LucideIcon;
  iconColor: string;
}

const StatsCard = ({ title, value, icon: Icon, iconColor }: StatsCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-50 flex flex-col flex-1 min-w-[240px] overflow-hidden">
      <div className="p-8 flex items-center justify-between">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-medium text-gray-400">{title}</span>
          <span className="text-5xl font-bold text-[#2C3E50]">{value}</span>
        </div>
        <div className="flex items-center justify-center">
          <Icon size={46} color={iconColor} strokeWidth={1.8} />
        </div>
      </div>
      {/* Thick solid blue bar at the bottom */}
      <div className="h-[6px] w-full bg-primary shadow-[0_-2px_10px_rgba(76,132,255,0.3)]"></div>
    </div>
  );
};

export default StatsCard;
