
import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="text-center py-8 border-t border-gray-800">
      <p className="text-gray-500">
        &copy; {currentYear} Hamza Kamran. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;
