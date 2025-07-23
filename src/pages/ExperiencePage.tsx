import React, { useState } from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import ExperienceCard from '../components/shared/ExperienceCard';
import OrganizationCard from '../components/shared/OrganizationCard';
import { professionalExperience, organizationalExperience, leadershipExperience } from '../data/profile';

const ExperiencePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'professional' | 'organizational' | 'leadership'>('professional');
  
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Experience" 
        subtitle="My professional journey, organizational roles, and leadership positions."
      />
      
      <div className="mb-8">
        <div className="flex flex-wrap border-b border-gray-200">
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'professional' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('professional')}
          >
            Professional
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'organizational' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('organizational')}
          >
            Organizational
          </button>
          <button
            className={`py-2 px-4 text-sm font-medium border-b-2 ${
              activeTab === 'leadership' 
                ? 'border-primary-600 text-primary-600' 
                : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
            }`}
            onClick={() => setActiveTab('leadership')}
          >
            Leadership
          </button>
        </div>
      </div>
      
      {activeTab === 'professional' && (
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Experience</h3>
          {professionalExperience.map((exp, index) => (
            <ExperienceCard key={index} experience={exp} />
          ))}
        </div>
      )}
      
      {activeTab === 'organizational' && (
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Organizational Roles</h3>
          {organizationalExperience.map((org, index) => (
            <OrganizationCard key={index} organization={org} />
          ))}
        </div>
      )}
      
      {activeTab === 'leadership' && (
        <div className="space-y-6 animate-fade-in">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Leadership Positions</h3>
          {leadershipExperience.map((lead, index) => (
            <OrganizationCard key={index} organization={lead} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ExperiencePage;