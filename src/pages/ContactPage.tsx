import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { personalInfo } from '../data/profile';
import { Mail, Phone, MapPin, Linkedin, Send } from 'lucide-react';

const ContactPage: React.FC = () => {
  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Contact Me" 
        subtitle="Get in touch for collaborations, inquiries, or just to say hello."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6">Get in Touch</h3>
          
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Your Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your name"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Enter your email"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="What is this regarding?"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary-500"
                placeholder="Your message here..."
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 transition-colors flex items-center justify-center"
            >
              Send Message <Send size={16} className="ml-2" />
            </button>
          </form>
        </div>
        
        <div>
          <div className="card mb-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-6">Contact Information</h3>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Mail size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">Email</h4>
                  <a href={`mailto:${personalInfo.email}`} className="text-primary-600">
                    {personalInfo.email}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Phone size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">Phone</h4>
                  <a href={`tel:${personalInfo.phone}`} className="text-primary-600">
                    {personalInfo.phone}
                  </a>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <MapPin size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">Location</h4>
                  <p className="text-gray-600">{personalInfo.location}</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3">
                  <Linkedin size={20} className="text-primary-600" />
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">LinkedIn</h4>
                  <a href={`https://${personalInfo.linkedin}`} target="_blank" rel="noopener noreferrer" className="text-primary-600">
                    {personalInfo.linkedin}
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card bg-primary-50 border border-primary-100">
            <h3 className="text-xl font-semibold text-gray-900 mb-4">Looking for Voice-Over Work?</h3>
            <p className="text-gray-700 mb-4">
              If you're interested in hiring me for voice-over projects, please mention this in your message. I'm available for commercial narration, e-learning content, character voice acting, and more.
            </p>
            <a 
              href={personalInfo.voiceOverLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-primary-600 hover:text-primary-700 font-medium"
            >
              Listen to my voice-over samples →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;