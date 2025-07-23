import React from 'react';
import HeroSection from '../components/home/HeroSection';
import StatsSection from '../components/home/StatsSection';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const HomePage: React.FC = () => {
  return (
    <div>
      <HeroSection />
      <StatsSection />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <Link to="/experience" className="group">
          <div className="card h-full hover:bg-primary-50 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">Professional Experience</h3>
            <p className="text-gray-600 mb-4">Explore my professional journey as a voice-over artist and content creator.</p>
            <div className="flex items-center text-primary-600 font-medium">
              View Experience <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
        
        <Link to="/skills" className="group">
          <div className="card h-full hover:bg-primary-50 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">Skills & Expertise</h3>
            <p className="text-gray-600 mb-4">Discover my technical and soft skills that drive successful outcomes.</p>
            <div className="flex items-center text-primary-600 font-medium">
              View Skills <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
        
        <Link to="/voice-over" className="group">
          <div className="card h-full hover:bg-primary-50 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">Voice Over Portfolio</h3>
            <p className="text-gray-600 mb-4">Listen to my voice-over work across various projects and genres.</p>
            <div className="flex items-center text-primary-600 font-medium">
              Explore Portfolio <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
        
        <Link to="/design" className="group">
          <div className="card h-full hover:bg-primary-50 transition-colors">
            <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary-700 transition-colors">Design Portfolio</h3>
            <p className="text-gray-600 mb-4">Explore my visual design work including posters, branding, and digital campaigns.</p>
            <div className="flex items-center text-primary-600 font-medium">
              View Designs <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default HomePage;