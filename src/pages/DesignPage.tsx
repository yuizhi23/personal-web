import React from 'react';
import SectionTitle from '../components/shared/SectionTitle';
import { ExternalLink, Palette, Monitor, Presentation, Camera, Layout, Zap } from 'lucide-react';

const DesignPage: React.FC = () => {
  const portfolioLink = 'https://drive.google.com/drive/folders/1Mk89arAe7MmyYA-98l2rIn6pbHxVMpsL';
  
  const tools = [
    { name: 'Canva', description: 'Clean, fast, versatile designs', icon: <Palette size={20} /> },
    { name: 'CapCut & Filmora', description: 'Visual flow for video content', icon: <Camera size={20} /> },
    { name: 'PowerPoint / Google Slides', description: 'Storytelling presentations', icon: <Presentation size={20} /> },
    { name: 'Figma & Illustrator', description: 'Learning for sharper UI/branding work', icon: <Monitor size={20} /> }
  ];

  const designTypes = [
    'Digital Posters & Visual Campaigns',
    'Infographics',
    'Social Media Layouts',
    'Presentation Slides',
    'Event Branding & Visual Identity',
    'Educational / Edutainment Visuals'
  ];

  return (
    <div className="animate-fade-in">
      <SectionTitle 
        title="Design Portfolio" 
        subtitle="Visuals speak louder than words—this is how I tell stories through design."
      />
      
      <div className="card mb-8 bg-gradient-to-r from-primary-700 to-primary-500 text-white p-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-semibold mb-2">My Design Philosophy</h3>
            <p className="text-primary-50 mb-4">
              Design, to me, is a form of storytelling. It's how I translate ideas into visuals that speak, connect, and leave impact. From vibrant posters to minimal slides, I focus on clarity, aesthetics, and intention in every piece I make.
            </p>
            <a 
              href={portfolioLink} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
            >
              View Full Portfolio <ExternalLink size={16} className="ml-2" />
            </a>
          </div>
          
          <div className="w-40 h-40 bg-white rounded-lg flex items-center justify-center p-2">
            <img 
              src="/image.png" 
              alt="QR Code to Design Portfolio" 
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Zap size={24} className="text-primary-600 mr-2" />
            Tools I Use
          </h3>
          
          <div className="space-y-4">
            {tools.map((tool, index) => (
              <div key={index} className="flex items-start p-3 border border-gray-100 rounded-md hover:border-primary-200 hover:bg-primary-50 transition-colors">
                <div className="w-10 h-10 rounded-full bg-primary-100 flex items-center justify-center mr-3 flex-shrink-0">
                  {tool.icon}
                </div>
                <div>
                  <h4 className="text-md font-medium text-gray-900">{tool.name}</h4>
                  <p className="text-sm text-gray-600">{tool.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="card">
          <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center">
            <Layout size={24} className="text-primary-600 mr-2" />
            What I Design
          </h3>
          
          <div className="space-y-3">
            {designTypes.map((type, index) => (
              <div key={index} className="flex items-center p-3 border-l-4 border-primary-200 bg-primary-50">
                <div className="w-2 h-2 rounded-full bg-primary-600 mr-3 flex-shrink-0"></div>
                <span className="text-gray-800 font-medium">{type}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="card bg-primary-50 border border-primary-100">
        <h3 className="text-xl font-semibold text-gray-900 mb-4">About My Design Style</h3>
        <p className="text-gray-700 mb-6">
          My design approach combines modern aesthetics with clear communication. I believe that great design should not only look beautiful but also serve its purpose effectively. Whether it's creating engaging social media content, professional presentations, or event branding, I focus on creating visuals that resonate with the target audience and deliver the intended message.
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-900">Clarity</h4>
            <p className="text-sm text-gray-600">Clear, purposeful design</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <circle cx="12" cy="12" r="3"></circle>
                <path d="M12 1v6m0 6v6"></path>
                <path d="m21 12-6 0m-6 0-6 0"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-900">Aesthetics</h4>
            <p className="text-sm text-gray-600">Beautiful, modern visuals</p>
          </div>
          
          <div className="text-center p-4 bg-white rounded-lg">
            <div className="w-12 h-12 rounded-full bg-primary-100 flex items-center justify-center mx-auto mb-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary-600">
                <path d="M9 12l2 2 4-4"></path>
                <path d="M21 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                <path d="M3 12c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                <path d="M12 21c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
                <path d="M12 3c.552 0 1-.448 1-1s-.448-1-1-1-1 .448-1 1 .448 1 1 1z"></path>
              </svg>
            </div>
            <h4 className="font-medium text-gray-900">Intention</h4>
            <p className="text-sm text-gray-600">Strategic, purposeful design</p>
          </div>
        </div>
      </div>

      <div className="mt-8 card bg-gradient-to-br from-primary-600 to-primary-700 text-white p-8">
        <h3 className="text-xl font-semibold mb-4">Explore My Work</h3>
        <p className="mb-4">
          Want to explore more of my work in one go? Browse through curated projects including client work, event visuals, and personal explorations.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a 
            href={portfolioLink} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center bg-white text-primary-700 px-4 py-2 rounded-md font-medium hover:bg-primary-50 transition-colors"
          >
            Open Portfolio Folder <ExternalLink size={16} className="ml-2" />
          </a>
          <span className="text-primary-100">
            Or scan the QR code above to view on-the-go
          </span>
        </div>
      </div>
    </div>
  );
};

export default DesignPage;