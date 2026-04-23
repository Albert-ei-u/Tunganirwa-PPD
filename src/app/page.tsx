import React from 'react';
import { 
  FileText, 
  Eye, 
  Heart, 
  Send, 
  Plus,
  Search
} from 'lucide-react';
import StatsCard from '@/components/dashboard/StatsCard';
import PropertyTable from '@/components/dashboard/PropertyTable';
import Link from 'next/link';

export default function Home() {
  return (
    <div className="flex flex-col gap-10">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <StatsCard 
          title="Total Ads Posted" 
          value="06" 
          icon={FileText} 
          iconColor="#FF9F43" 
        />
        <StatsCard 
          title="Total Views" 
          value="24" 
          icon={Eye} 
          iconColor="#FF9F43" 
        />
        <StatsCard 
          title="Interest Received" 
          value="12" 
          icon={Heart} 
          
          iconColor="#FF9F43" 
        />
        <StatsCard 
          title="Interest Sent" 
          value="09" 
          icon={Heart} 
          iconColor="#FF9F43" 
        />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4 mt-2">
        <div className="flex items-center bg-white rounded-full px-8 py-4 shadow-[0_10px_40px_rgba(0,0,0,0.04)] border border-gray-50 w-full sm:w-[450px]">
          <input 
            type="text" 
            placeholder="Search PPD ID" 
            className="bg-transparent border-none outline-none flex-1 text-base text-gray-600 placeholder:text-gray-300" 
          />
          <div className="pl-4 border-l border-gray-100 ml-4">
            <Search size={22} className="text-primary" />
          </div>
        </div>
        
        <Link href="/add-property" className="bg-primary text-white px-10 py-4 rounded-full flex items-center gap-2 font-bold shadow-[0_10px_25px_rgba(76,132,255,0.4)] hover:translate-y-[-2px] transition-all">
          <Plus size={20} />
          <span>Add Property</span>
        </Link>
      </div>

      {/* Table Section */}
      <PropertyTable />
    </div>
  );
}
