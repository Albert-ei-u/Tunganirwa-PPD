import React from 'react';
import { Image as ImageIcon, Eye, Edit2 } from 'lucide-react';
import styles from './PropertyTable.module.css';

const properties = [
  { id: 'PPD1125', type: 'Plot', contact: '97852 52525', area: '1200', views: '02', status: 'Sold', daysLeft: '00' },
  { id: 'PPD1202', type: 'House', contact: '97852 52525', area: '2500', views: '02', status: 'Unsold', daysLeft: '35' },
  { id: 'PPD1235', type: 'House', contact: '97852 52525', area: '1800', views: '05', status: 'Unsold', daysLeft: '12' },
  { id: 'PPD1278', type: 'House', contact: '97852 52525', area: '800', views: '03', status: 'Unsold', daysLeft: '23' },
  { id: 'PPD1311', type: 'Flat', contact: '97852 52525', area: '2000', views: '10', status: 'Sold', daysLeft: '00' },
  { id: 'PPD1323', type: 'House', contact: '97852 52525', area: '1250', views: '02', status: 'Unsold', daysLeft: '02' },
];

const PropertyTable = () => {
  return (
    <div className={styles.tableContainer}>
      <table className={styles.table}>
        <thead>
          <tr>
            <th className={styles.th}>PPD ID</th>
            <th className={styles.th}>Image</th>
            <th className={styles.th}>Property</th>
            <th className={styles.th}>Contact</th>
            <th className={styles.th}>Area</th>
            <th className={styles.th}>Views</th>
            <th className={styles.th}>Status</th>
            <th className={styles.th}>Days Left</th>
            <th className={styles.th}>Action</th>
          </tr>
        </thead>
        <tbody>
          {properties.map((prop) => (
            <tr key={prop.id} className={styles.tr}>
              <td className={styles.td}>{prop.id}</td>
              <td className={styles.td}>
                <div className={styles.propertyImage}>
                  <ImageIcon size={18} />
                </div>
              </td>
              <td className={styles.td}>{prop.type}</td>
              <td className={styles.td}>{prop.contact}</td>
              <td className={styles.td}>{prop.area}</td>
              <td className={styles.td}>{prop.views}</td>
              <td className={styles.td}>
                <span className={`${styles.badge} ${prop.status === 'Sold' ? styles.badgeSold : styles.badgeUnsold}`}>
                  {prop.status}
                </span>
              </td>
              <td className={styles.td}>{prop.daysLeft}</td>
              <td className={styles.td}>
                <div className={styles.actions}>
                  <button className={styles.actionButton}><Eye size={18} /></button>
                  <button className={styles.actionButton}><Edit2 size={18} /></button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PropertyTable;
