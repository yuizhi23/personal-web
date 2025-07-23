import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import TimelineItem from '../components/shared/TimelineItem';
import { education, certifications } from '../data/profile';

const EducationPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Education & Certifications" 
        subtitle="My academic background and professional development."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Education</h3>
          <div className="pl-4">
            {education.map((edu, index) => (
              <TimelineItem 
                key={index}
                title={edu.institution}
                subtitle={edu.degree}
                period={edu.period}
                isLast={index === education.length - 1}
              />
            ))}
          </div>
        </div>
        
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Certifications & Training</h3>
          <div className="space-y-4">
            {certifications.map((cert, index) => (
              <div 
                key={index} 
                className="card hover:border-primary-200 hover:bg-primary-50 transition-all"
              >
                <h4 className="text-lg font-medium text-gray-900">{cert.title}</h4>
                {cert.issuer && <p className="text-sm text-gray-600 mt-1">{cert.issuer}</p>}
                <p className="text-sm text-gray-500 mt-1">{cert.date}</p>
                <div className="mt-4">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-primary-100 text-primary-700">
                    Verified
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      
      <div className="mt-12 card bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8">
        <h3 className="text-xl font-semibold mb-4">Continuous Learning Philosophy</h3>
        <p className="mb-4">
          I believe in the power of lifelong learning and continuous skill development. My educational journey combines formal academic study with targeted professional certifications to stay at the cutting edge of my fields of interest.
        </p>
        <p>
          Whether it's technical skills like programming or soft skills like communication and leadership, I'm committed to growing my capabilities and applying them to create meaningful impact.
        </p>
      </div>
    </div>
  );
};

export default EducationPage;