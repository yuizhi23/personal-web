import React from 'react';
import { Mic, Award, BookOpen, Users } from 'lucide-react';
import { professionalExperience, certifications, organizationalExperience } from '../../data/profile';

const StatsSection: React.FC = () => {
  const voiceOverProjects = professionalExperience.filter(
    exp => exp.skills.some(skill => skill.includes('Voice'))
  ).length;
  
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
      <div className="card p-6 flex items-center animate-slide-up" style={{ animationDelay: '0.1s' }}>
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <Mic size={24} className="text-primary-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Voice Over Projects</p>
          <h3 className="text-2xl font-semibold text-gray-900">{voiceOverProjects}+</h3>
        </div>
      </div>
      
      <div className="card p-6 flex items-center animate-slide-up" style={{ animationDelay: '0.2s' }}>
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <Award size={24} className="text-primary-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Certifications</p>
          <h3 className="text-2xl font-semibold text-gray-900">{certifications.length}</h3>
        </div>
      </div>
      
      <div className="card p-6 flex items-center animate-slide-up" style={{ animationDelay: '0.3s' }}>
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <BookOpen size={24} className="text-primary-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Years of Study</p>
          <h3 className="text-2xl font-semibold text-gray-900">2+</h3>
        </div>
      </div>
      
      <div className="card p-6 flex items-center animate-slide-up" style={{ animationDelay: '0.4s' }}>
        <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mr-4">
          <Users size={24} className="text-primary-600" />
        </div>
        <div>
          <p className="text-sm text-gray-500">Organizations</p>
          <h3 className="text-2xl font-semibold text-gray-900">{organizationalExperience.length}</h3>
        </div>
      </div>
    </div>
  );
};

export default StatsSection;