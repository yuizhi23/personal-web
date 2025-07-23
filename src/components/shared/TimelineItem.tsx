import React from 'react';

interface TimelineItemProps {
  title: string;
  subtitle: string;
  period: string;
  isLast?: boolean;
}

const TimelineItem: React.FC<TimelineItemProps> = ({ title, subtitle, period, isLast = false }) => {
  return (
    <div className={`timeline-item ${isLast ? 'last' : ''}`}>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <h4 className="text-md text-primary-600">{subtitle}</h4>
      <p className="text-sm text-gray-600 mt-1">{period}</p>
    </div>
  );
};

export default TimelineItem;