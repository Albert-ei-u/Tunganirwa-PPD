import React from 'react';
import { Image as ImageIcon, Eye, Edit2 } from 'lucide-react';

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
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 mt-6 overflow-hidden">
      <table className="w-full text-left border-collapse">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">PPD ID</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Image</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Property</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Contact</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Area</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Views</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Status</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100">Days Left</th>
            <th className="px-6 py-4 text-primary text-sm font-semibold border-b border-gray-100 text-center">Action</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-100">
          {properties.map((prop) => (
            <tr key={prop.id} className="hover:bg-gray-50 transition-colors group">
              <td className="px-6 py-4 text-sm">{prop.id}</td>
              <td className="px-6 py-4">
                <div className="w-10 h-10 bg-gray-100 rounded flex items-center justify-center text-gray-400">
                  <ImageIcon size={18} />
                </div>
              </td>
              <td className="px-6 py-4 text-sm font-medium">{prop.type}</td>
              <td className="px-6 py-4 text-sm text-muted">{prop.contact}</td>
              <td className="px-6 py-4 text-sm">{prop.area}</td>
              <td className="px-6 py-4 text-sm">{prop.views}</td>
              <td className="px-6 py-4">
                <span className={`px-3 py-1 rounded text-xs font-bold ${
                  prop.status === 'Sold' ? 'bg-green-50 text-green-600' : 'bg-blue-50 text-blue-600'
                }`}>
                  {prop.status}
                </span>
              </td>
              <td className="px-6 py-4 text-sm">{prop.daysLeft}</td>
              <td className="px-6 py-4">
                <div className="flex items-center justify-center gap-3 text-gray-300">
                  <button className="hover:text-primary transition-colors"><Eye size={18} /></button>
                  <button className="hover:text-primary transition-colors"><Edit2 size={18} /></button>
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
