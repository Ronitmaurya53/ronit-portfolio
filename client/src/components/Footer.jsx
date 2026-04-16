import React from 'react';

const Footer = () => {
  return (
    <footer className="py-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-6 text-center">
        <p className="font-mono text-sm text-gray-500">
          <span className="text-neonPurple">&gt;_</span> Designed & Built by{' '}
          <span className="text-white">Ronit Maurya</span> | © {new Date().getFullYear()}
        </p>
        <p className="font-mono text-xs text-gray-600 mt-2">
          Built with React, Tailwind CSS & Framer Motion
        </p>
      </div>
    </footer>
  );
};

export default Footer;