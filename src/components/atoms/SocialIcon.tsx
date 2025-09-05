import React from 'react';
export interface SocialIconProps {
    href: string;
    children: React.ReactNode;
}

const SocialIcon: React.FC<SocialIconProps> = ({ href, children }) => {
  return (
    <a 
      href={href}
      className="w-12 h-12 bg-black bg-opacity-20 rounded-full flex items-center justify-center hover:bg-opacity-30 transition-all duration-300 hover:scale-110"
      target="_blank"
      rel="noopener noreferrer"
    >
      {children}
    </a>
  );
};

export default SocialIcon;