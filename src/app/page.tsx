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
import styles from './page.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      {/* Stats Grid */}
      <div className={styles.statsGrid}>
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
          iconColor="#FF9F43" 
          bgColor="#FFF7F0" 
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
      <div className={styles.toolbar}>
        <div className={styles.searchBox}>
          <input type="text" placeholder="Search PPD ID" className={styles.searchField} />
          <div className={styles.searchIcon}>
            <Search size={18} color="#4C84FF" />
          </div>
        </div>
        <button className={styles.addButton}>
          <Plus size={18} />
          <span>Add Property</span>
        </button>
      </div>

      {/* Table */}
      <PropertyTable />
    </div>
  );
}
