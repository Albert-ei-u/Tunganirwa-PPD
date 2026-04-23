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

export default function Home() {
  return (
    <div className="flex flex-col gap-8">
      {/* Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatsCard 
          title="Total Ads Posted" 
          value="06" 
          icon={FileText} 
          iconColor="#FF9F43" 
          bgColor="#FFF7F0" 
        />
        <StatsCard 
          title="Total Views" 
          value="24" 
          icon={Eye} 
          iconColor="#4C84FF" 
          bgColor="#EBF2FF" 
        />
        <StatsCard 
          title="Interest Received" 
          value="12" 
          icon={Heart} 
          iconColor="#FF9F43" 
          bgColor="#FFF7F0" 
        />
        <StatsCard 
          title="Interest Sent" 
          value="09" 
          icon={Send} 
          iconColor="#FF9F43" 
          bgColor="#FFF7F0" 
        />
      </div>

      {/* Toolbar */}
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <div className="flex items-center bg-white rounded-full pl-6 shadow-sm border border-gray-100 w-full sm:w-[400px]">
          <input 
            type="text" 
            placeholder="Search PPD ID" 
            className="bg-transparent border-none outline-none flex-1 py-3 text-sm" 
          />
          <div className="w-12 h-12 flex items-center justify-center">
            <Search size={18} className="text-primary" />
          </div>
        </div>
        <button className="bg-primary text-white px-8 py-3 rounded-full flex items-center gap-2 font-bold shadow-lg shadow-blue-200 hover:scale-[1.02] transition-transform">
          <Plus size={20} />
          <span>Add Property</span>
        </button>
      </div>

      {/* Table Section */}
      <PropertyTable />
    </div>
  );
}
