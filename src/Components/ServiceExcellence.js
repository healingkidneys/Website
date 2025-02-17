import React from 'react';

const ServiceExcellenceLogo = () => {
  return (
    <div className="w-20 h-20 p-1 relative sm:w-24 sm:h-24 md:w-28 md:h-28 lg:w-32 lg:h-32"> {/* Responsive size */}
      <svg 
        viewBox="0 0 200 200" 
        className="w-full h-full drop-shadow-xl"
      >
        {/* Outer glow circle */}
        <circle
          cx="100"
          cy="100"
          r="65" 
          fill="none"
          stroke="#c64f22" 
          strokeWidth="2"
        />

        {/* Background circle for text */}
        <circle
          cx="100"
          cy="100"
          r="45" 
          fill="#0f3f8a" 
          className="drop-shadow-lg"
        />

        {/* Year number */}
        <text
          x="100"
          y="120" /* Slightly adjusted for better centering */
          textAnchor="middle"
          className="font-bold text-6xl fill-white" /* Increased font size */
          style={{ fontFamily: 'Arial Black, sans-serif' }}
        >
          10
        </text>

        {/* Service Excellence Banner */}
        <g transform="translate(100, 145)">
          <path
            d="M-75,-12 
               Q-75,0 -65,0 
               L65,0 
               Q75,0 75,-12
               L75,12
               Q75,24 65,24
               L-65,24
               Q-75,24 -75,12 Z"
            fill="url(#bannerGradient)"
            className="drop-shadow-lg"
          />
          <text
            x="0"
            y="15"
            textAnchor="middle"
            className="text-sm font-bold"
            fill="#fff" 
          >
            YEARS OF SERVICE
          </text>
        </g>

        {/* Gradient Definitions */}
        <defs>
          <linearGradient id="bannerGradient" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#c64f22" /> {/* Your orange color */}
            <stop offset="100%" stopColor="#c64f22" />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default ServiceExcellenceLogo;
