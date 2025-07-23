import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { personalInfo, professionalExperience } from '../data/profile';
import { ExternalLink, Volume2 } from 'lucide-react';

const VoiceOverPage: React.FC = () => {
  // Filter only voice over related experiences
  const voiceOverExperiences = professionalExperience.filter(
    exp => exp.skills.some(skill => skill.includes('Voice'))
  );
  
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Voice Over Portfolio" 
        subtitle="Listen to my voice-over work across various projects and genres."
      />
      
      <div className="card mb-8 bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">{personalInfo.voiceOverTagline}</h3>
            <p className="text-primary-50 mb-4">
              {personalInfo.voiceOverDescription}
            </p>
            <a 
              href={personalInfo.voiceOverLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
            >
              Listen to My Work <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-2">
            <img 
              src="/PORTOFOLIO VOICE OVER.png" 
              alt="QR Code to Voice Over Portfolio" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">Voice Over Experience</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {voiceOverExperiences.map((exp, index) => (
            <div key={index} className="card hover:border-l-4 hover:border-l-primary-600 transition-all">
              <h4 className="text-lg font-medium text-gray-900">{exp.organization}</h4>
              <p className="text-sm text-gray-500 mb-3">{exp.period} • {exp.location}</p>
              <p className="text-gray-700 mb-3">{exp.description}</p>
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, skillIndex) => (
                  <span 
                    key={skillIndex} 
                    className="px-2 py-1 bg-primary-50 text-primary-700 text-xs rounded-md"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <Volume2 size={24} className="text-primary-600" />
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Commercial Voice-Over</h3>
          <p className="text-gray-600">
            Clear, professional narration for brand messaging, product launches, and promotional content.
          </p>
        </div>
        
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M9.3 6.2a4.55 4.55 0 0 0 5.4 0"></path>
              <path d="M7.9 10.7c.9.8 2.4 1.3 4.1 1.3s3.2-.5 4.1-1.3"></path>
              <path d="M13.9 15.8a1.94 1.94 0 0 0-3.8 0"></path>
              <circle cx="12" cy="12" r="10"></circle>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Character Voice Acting</h3>
          <p className="text-gray-600">
            Versatile character voices for animations, games, and creative storytelling projects.
          </p>
        </div>
        
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M12 8a3 3 0 0 0-3 3v5a3 3 0 0 0 6 0v-5a3 3 0 0 0-3-3Z"></path>
              <path d="M19 11a7 7 0 0 0-14 0"></path>
              <path d="M12 19v2"></path>
              <path d="M8 23h8"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">E-Learning Narration</h3>
          <p className="text-gray-600">
            Clear, engaging voice-over for educational content, tutorials, and training modules.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VoiceOverPage;