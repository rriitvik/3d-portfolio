import React, { useState } from 'react';
import { BallCanvas } from './canvas';
import { SectionWrapper } from '../hoc';
import { technologies } from '../constants';

const Tech = () => {
  const [hoveredTech, setHoveredTech] = useState(null);

  const handleClick = (technology) => {
    window.open(technology.link);
  };

  const handleMouseOver = (technology) => {
    setHoveredTech(technology.name);
  };

  const handleMouseOut = () => {
    setHoveredTech(null);
  };

  return (
    <div className="flex flex-row flex-wrap justify-center gap-10 hover:cursor-pointer">
      {technologies.map((technology) => (
        <div
          className="w-28 h-28 relative"
          key={technology.name}
          onDoubleClick={() => handleClick(technology)}
          onMouseOver={() => handleMouseOver(technology)}
          onMouseOut={handleMouseOut}
        >
          <BallCanvas icon={technology.icon} />
          {hoveredTech === technology.name && (
            <div className="absolute flex bottom-0 left-0 bg-white p-2 shadow text-black-200 text-[10px] items-center justify-center">
              {technology.name}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, '');
