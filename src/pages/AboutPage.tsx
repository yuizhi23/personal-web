import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { personalInfo } from '../data/profile';

const AboutPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="About Me" 
        subtitle="Learn more about who I am and what drives me."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="card mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Professional Summary</h3>
            <p className="text-gray-700 mb-4">{personalInfo.summary}</p>
            
            <h4 className="text-lg font-medium text-gray-900 mt-6 mb-2">Why Choose Me?</h4>
            <p className="text-gray-700">{personalInfo.whyChooseMe}</p>
          </div>
          
          <div className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">My Approach</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-medium text-primary-600 mb-2">Versatility</h4>
                <p className="text-gray-700">
                  My diverse skill set allows me to adapt to various roles and challenges. From technical programming tasks to creative content production, I bring a multifaceted approach to every project.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-primary-600 mb-2">Creativity</h4>
                <p className="text-gray-700">
                  I approach problems with innovative thinking, whether it's developing unique voice characterizations or crafting engaging content strategies that resonate with audiences.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-primary-600 mb-2">Leadership</h4>
                <p className="text-gray-700">
                  My experience in organizational roles has honed my ability to lead teams, coordinate efforts, and deliver results even under pressure and tight deadlines.
                </p>
              </div>
              
              <div>
                <h4 className="text-lg font-medium text-primary-600 mb-2">Continuous Learning</h4>
                <p className="text-gray-700">
                  I'm committed to ongoing growth, constantly expanding my skills through certifications, academic studies, and practical experience in diverse projects.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        <div>
          <div className="card mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Personal Information</h3>
            <ul className="space-y-3">
              <li className="flex flex-col">
                <span className="text-sm text-gray-500">Name</span>
                <span className="text-gray-800">{personalInfo.name}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm text-gray-500">Location</span>
                <span className="text-gray-800">{personalInfo.location}</span>
              </li>
              <li className="flex flex-col">
                <span className="text-sm text-gray-500">Email</span>
                <a href={`mailto:${personalInfo.email}`} className="text-primary-600">
                  {personalInfo.email}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-sm text-gray-500">Phone</span>
                <a href={`tel:${personalInfo.phone}`} className="text-primary-600">
                  {personalInfo.phone}
                </a>
              </li>
              <li className="flex flex-col">
                <span className="text-sm text-gray-500">LinkedIn</span>
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary-600">
                  {personalInfo.linkedin}
                </a>
              </li>
            </ul>
          </div>
          
          <div className="card bg-gradient-to-br from-primary-600 to-primary-700 text-white">
            <h3 className="text-xl font-semibold mb-4">My Mission</h3>
            <p className="mb-4">
              To create meaningful impact through the power of voice, technology, and leadership, helping brands and individuals communicate with clarity and purpose.
            </p>
            <p className="text-primary-100 italic">
              "{personalInfo.tagline}"
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;