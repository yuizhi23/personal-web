import React from 'react';
import { ArrowRight, Mail, MapPin, Linkedin, Phone } from 'lucide-react';
import { personalInfo } from '../../data/profile';
import { Link } from 'react-router-dom';

const HeroSection: React.FC = () => {
  return (
    <div className="bg-white rounded-2xl shadow-md overflow-hidden animate-fade-in">
      <div className="relative h-72 bg-gradient-to-r from-primary-700 to-primary-500">
        <div className="absolute inset-0 opacity-20">
          <div className="h-full w-full bg-[url('/images/header-pattern.png')] bg-repeat"></div>
        </div>
        <div className="absolute -bottom-20 left-8 flex items-end">
          <div className="w-40 h-40 rounded-full border-4 border-white overflow-hidden shadow-lg">
            <img 
              src="/Foto_103012300093_Yukie Ramadhani Kiyoshi.jpg"
              alt="Yukie Ramadhani Kiyoshi"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-6 mb-12 text-white">
          </div>
        </div>
      </div>
      
      <div className="pt-24 px-8 pb-8">
        <div className="flex flex-col md:flex-row md:justify-between md:items-end gap-6">
          <div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-1">{personalInfo.name}</h1>
            <h2 className="text-xl text-primary-600 mb-3">{personalInfo.title}</h2>
            
            <div className="flex flex-wrap gap-3 text-sm text-gray-600">
              <div className="flex items-center">
                <Mail size={16} className="mr-1 text-primary-600" />
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              <div className="flex items-center">
                <Phone size={16} className="mr-1 text-primary-600" />
                <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
              </div>
              <div className="flex items-center">
                <MapPin size={16} className="mr-1 text-primary-600" />
                <span>{personalInfo.location}</span>
              </div>
              <div className="flex items-center">
                <Linkedin size={16} className="mr-1 text-primary-600" />
                <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer">
                  {personalInfo.linkedin}
                </a>
              </div>
            </div>
          </div>
          
          <div className="flex gap-3">
            <Link to="/contact" className="btn-primary">
              Contact Me <ArrowRight size={18} className="ml-1" />
            </Link>
            <Link to="/voice-over" className="btn-outline">
              Voice Over
            </Link>
          </div>
        </div>
        
        <div className="mt-8 bg-gray-50 p-6 rounded-lg">
          <h3 className="text-lg font-medium text-gray-900 mb-2">About Me</h3>
          <p className="text-gray-700">{personalInfo.summary}</p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;