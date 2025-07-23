import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import SkillBar from '../components/shared/SkillBar';
import { skillCategories } from '../data/profile';

const SkillsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Skills & Expertise" 
        subtitle="My technical and soft skills that drive successful outcomes."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {skillCategories.map((category, categoryIndex) => (
          <div key={categoryIndex} className="card">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">{category.name}</h3>
            <div>
              {category.skills.map((skill, skillIndex) => (
                <SkillBar 
                  key={skillIndex} 
                  skill={skill} 
                  delay={100 * skillIndex}
                />
              ))}
            </div>
          </div>
        ))}
        
        <div className="md:col-span-2 card bg-primary-50 border border-primary-100">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Skill Development Approach</h3>
          <p className="text-gray-700 mb-4">
            I approach skill development with a strategic mindset, focusing on both breadth and depth. My technical skills in programming, content creation, and voice-over work are complemented by strong soft skills in leadership, communication, and problem-solving.
          </p>
          <p className="text-gray-700">
            This balanced approach allows me to not only execute tasks efficiently but also to lead teams, communicate effectively with stakeholders, and adapt to changing requirements with ease.
          </p>
        </div>
      </div>
      
      <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M12 16v4"></path>
              <path d="M8 12H4"></path>
              <path d="m16 12-4 4-4-4"></path>
              <path d="M4 4h16v8H4z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Technical Proficiency</h3>
          <p className="text-gray-600">
            Strong foundation in programming, design tools, and content creation software, enabling me to bring technical solutions to life.
          </p>
        </div>
        
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M14 9a2 2 0 0 1-2 2H6l-4 4V4c0-1.1.9-2 2-2h8a2 2 0 0 1 2 2v5Z"></path>
              <path d="M18 9h2a2 2 0 0 1 2 2v11l-4-4h-6a2 2 0 0 1-2-2v-1"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Communication Excellence</h3>
          <p className="text-gray-600">
            Exceptional verbal and written communication skills, refined through voice-over work, content creation, and leadership roles.
          </p>
        </div>
        
        <div className="card bg-white p-6">
          <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mb-4">
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
              <path d="M2 5C2 4.4 2.4 4 3 4H8.8C9.4 4 10 4.5 10 5.1V15H3C2.4 15 2 14.6 2 14V5Z"></path>
              <path d="M15 4H21C21.6 4 22 4.4 22 5V14C22 14.6 21.6 15 21 15H15V4Z"></path>
              <path d="M14 15H10V20L14 15Z"></path>
            </svg>
          </div>
          <h3 className="text-lg font-medium text-gray-900 mb-2">Creative Problem Solving</h3>
          <p className="text-gray-600">
            Ability to approach challenges from multiple angles, finding innovative solutions that balance technical constraints with creative vision.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SkillsPage;