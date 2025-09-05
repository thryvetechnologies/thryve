import React from 'react';
import SocialIcon from '../atoms/SocialIcon';

const SocialMediaIcons: React.FC = () => {
  return (
    <div className="lg:flex space-x-6 hidden">
      <SocialIcon href="https://facebook.com">
      <img
        src="/icons/facebook.svg"
        alt="Facebook Icon"
      />
      </SocialIcon>
      
      <SocialIcon href="https://github.com">
      <img
        src="/icons/github.svg"
        alt="Github Icon"
      />
      </SocialIcon>
      
      <SocialIcon href="https://instagram.com">
      <img
        src="/icons/instagram.svg"
        alt="Instagram Icon"
      />
      </SocialIcon>
      
      <SocialIcon href="https://linkedin.com">
      <img
        src="/icons/linkedin.svg"
        alt="LinkedkIn Icon"
      />
      </SocialIcon>
    </div>
  );
};

export default SocialMediaIcons;