import React from 'react';
import { OrganizationItem } from '../../types';
import { CalendarDays, MapPin } from 'lucide-react';

interface OrganizationCardProps {
  organization: OrganizationItem;
}

const OrganizationCard: React.FC<OrganizationCardProps> = ({ organization }) => {
  return (
    <div className="card mb-6 hover:border-l-4 hover:border-l-primary-600 transition-all">
      <div className="flex flex-col md:flex-row md:items-start gap-4">
        <div className="md:w-2/3">
          <h3 className="text-xl font-semibold text-gray-900">{organization.role}</h3>
          <h4 className="text-lg text-primary-600">{organization.organization}</h4>
          
          <div className="flex flex-wrap gap-2 mt-2 text-sm text-gray-600">
            <div className="flex items-center">
              <CalendarDays size={14} className="mr-1" />
              <span>{organization.period}</span>
            </div>
            <div className="flex items-center">
              <MapPin size={14} className="mr-1" />
              <span>{organization.location}</span>
            </div>
          </div>
          
          <p className="mt-3 text-gray-700">{organization.description}</p>
        </div>
        
        <div className="md:w-1/3">
          <h5 className="text-sm font-medium text-gray-700 mb-2">Skills</h5>
          <div className="flex flex-wrap gap-2">
            {organization.skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrganizationCard;