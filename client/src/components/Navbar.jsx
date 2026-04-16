import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'about', href: '#about' },
    { name: 'skills', href: '#skills' },
    { name: 'projects', href: '#projects' },
    { name: 'github', href: '#github' },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled ? 'bg-dark/80 backdrop-blur-lg shadow-lg shadow-purple-500/5' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <motion.a
          href="#"
          className="flex items-center gap-2 text-xl font-mono font-bold"
          whileHover={{ scale: 1.05 }}
        >
          <span className="text-neonPurple">&gt;_</span>
          <span className="text-white">Ronit_Maurya</span>
          <span className="cursor-blink text-neonPurple"></span>
        </motion.a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.name}
              href={link.href}
              className="font-mono text-sm text-gray-400 hover:text-neonBlue transition-colors"
              whileHover={{ y: -2 }}
            >
              <span className="text-neonPurple">~/</span> {link.name}
            </motion.a>
          ))}
          <motion.a
            href="#contact"
            className="px-5 py-2 rounded-lg border border-neonPurple text-neonPurple font-mono text-sm
                       hover:bg-neonPurple hover:text-white transition-all duration-300"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            init_contact()
          </motion.a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-white"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <HiX /> : <HiMenuAlt3 />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-darkCard/95 backdrop-blur-lg border-t border-gray-800"
        >
          <div className="px-6 py-4 flex flex-col gap-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="font-mono text-gray-400 hover:text-neonBlue py-2"
                onClick={() => setIsOpen(false)}
              >
                <span className="text-neonPurple">~/</span> {link.name}
              </a>
            ))}
            <a
              href="#contact"
              className="px-5 py-2 rounded-lg border border-neonPurple text-neonPurple font-mono text-center"
              onClick={() => setIsOpen(false)}
            >
              init_contact()
            </a>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;