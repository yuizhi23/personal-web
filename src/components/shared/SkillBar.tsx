import React, { useEffect, useState } from 'react';
import { Skill } from '../../types';

interface SkillBarProps {
  skill: Skill;
  delay?: number;
}

const SkillBar: React.FC<SkillBarProps> = ({ skill, delay = 0 }) => {
  const [width, setWidth] = useState(0);
  
  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(skill.level);
    }, delay);
    
    return () => clearTimeout(timer);
  }, [skill.level, delay]);
  
  return (
    <div className="mb-4">
      <div className="flex justify-between mb-1">
        <span className="text-sm font-medium text-gray-700">{skill.name}</span>
        <span className="text-sm text-gray-500">{skill.level}%</span>
      </div>
      <div className="skill-bar">
        <div 
          className="skill-progress" 
          style={{ width: `${width}%` }}
        ></div>
      </div>
    </div>
  );
};

export default SkillBar;