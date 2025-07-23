import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { achievements, certifications } from '../data/profile';
import { Award, CheckCircle } from 'lucide-react';

const AchievementsPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Achievements & Recognition" 
        subtitle="Highlights of my professional accomplishments and academic recognition."
      />
      
      <div className="card mb-8">
        <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
          <Award size={24} className="text-primary-600 mr-2" />
          Key Achievements
        </h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {achievements.map((achievement, index) => (
            <div 
              key={index} 
              className="p-4 border border-gray-100 rounded-md flex items-start hover:border-primary-200 hover:bg-primary-50 transition-colors"
            >
              <CheckCircle size={20} className="text-primary-600 mr-3 mt-0.5 flex-shrink-0" />
              <div>
                <h4 className="text-md font-medium text-gray-900">{achievement.title}</h4>
                <p className="text-sm text-gray-500">{achievement.date}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Highlighted Recognition</h3>
          
          <div className="p-4 mb-4 border-l-4 border-primary-600 bg-primary-50">
            <h4 className="text-lg font-medium text-gray-900">Mahasiswa '23 Of The Year</h4>
            <p className="text-sm text-gray-600 mb-2">December 2024</p>
            <p className="text-gray-700">
              Recognized for outstanding contributions to the Informatics community and organization. This prestigious award acknowledges leadership, academic excellence, and positive impact on campus life.
            </p>
          </div>
          
          <div className="p-4 border-l-4 border-primary-400 bg-primary-50">
            <h4 className="text-lg font-medium text-gray-900">Lead Informatics 2024 Awarding</h4>
            <p className="text-sm text-gray-600 mb-2">December 2024</p>
            <p className="text-gray-700">
              Awarded for demonstrating exceptional leadership qualities and initiative within the Informatics department, contributing to a positive and collaborative learning environment.
            </p>
          </div>
        </div>
        
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Notable Certifications</h3>
          
          <div className="space-y-4">
            {certifications.slice(0, 4).map((cert, index) => (
              <div key={index} className="flex items-start p-3 border-b border-gray-100">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                  </svg>
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">{cert.title}</h4>
                  {cert.issuer && <p className="text-xs text-gray-600">{cert.issuer}</p>}
                  <p className="text-xs text-gray-500">{cert.date}</p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="mt-4 text-center">
            <a href="/education" className="text-primary-600 hover:text-primary-700 text-sm font-medium">
              View all certifications →
            </a>
          </div>
        </div>
      </div>
      
      {/* Mahasiswa of the Year Photo Documentation */}
      <div className="mt-8 card">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Mahasiswa '23 Of The Year Documentation</h3>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <img 
              src="/1735044675185 copy.jpeg" 
              alt="Mahasiswa '23 Of The Year Award Ceremony"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="text-center">
              <h4 className="text-md font-medium text-gray-900">Award Ceremony</h4>
              <p className="text-sm text-gray-600">Receiving the Mahasiswa '23 Of The Year award at Telkom University</p>
            </div>
          </div>
          
          <div className="space-y-4">
            <img 
              src="/1735044676234 copy.jpeg" 
              alt="Mahasiswa '23 Of The Year Award Plaque"
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
            <div className="text-center">
              <h4 className="text-md font-medium text-gray-900">Award Plaque</h4>
              <p className="text-sm text-gray-600">Official recognition plaque for Mahasiswa '23 Of The Year</p>
            </div>
          </div>
        </div>
        
        <div className="mt-6 p-4 bg-primary-50 rounded-lg">
          <p className="text-gray-700 text-center">
            This recognition represents not just personal achievement, but a commitment to excellence in academics, leadership, and community contribution within the Informatics program at Telkom University.
          </p>
        </div>
      </div>
      
      <div className="mt-8 card bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8">
        <h3 className="text-xl font-semibold mb-4">Recognition Philosophy</h3>
        <p>
          While I'm honored by the recognition I've received, I view achievements not as endpoints but as milestones in a continuous journey of growth and contribution. Each award and acknowledgment represents an opportunity to set higher standards and make greater impact in the future.
        </p>
      </div>
    </div>
  );
};

export default AchievementsPage;