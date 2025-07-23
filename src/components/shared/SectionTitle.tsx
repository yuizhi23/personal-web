import React from 'react';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
  centered?: boolean;
}

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle, centered = false }) => {
  return (
    <div className={`mb-8 ${centered ? 'text-center' : ''}`}>
      <h2 className="text-2xl md:text-3xl font-semibold text-primary-700 mb-2">
        {title}
      </h2>
      {subtitle && (
        <p className="text-gray-600 max-w-2xl">
          {subtitle}
        </p>
      )}
      <div className="h-1 w-20 bg-primary-600 mt-4 mb-2 rounded-full"></div>
    </div>
  );
};

export default SectionTitle;