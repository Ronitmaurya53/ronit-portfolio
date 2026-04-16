import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCode, FiTerminal, FiDownload } from 'react-icons/fi';
import { VscGithubAlt } from 'react-icons/vsc';

const Hero = () => {
  // Typing effect
  const titles = ['Full Stack', 'Backend', 'Frontend', 'Cloud'];
  const [titleIndex, setTitleIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const current = titles[titleIndex];
    let timeout;

    if (!isDeleting && text === current) {
      timeout = setTimeout(() => setIsDeleting(true), 2000);
    } else if (isDeleting && text === '') {
      setIsDeleting(false);
      setTitleIndex((prev) => (prev + 1) % titles.length);
    } else {
      timeout = setTimeout(() => {
        setText(current.substring(0, text.length + (isDeleting ? -1 : 1)));
      }, isDeleting ? 50 : 100);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, titleIndex]);

  // Code snippet for the right side
  const codeLines = [
    { indent: 0, content: <><span className="text-purple-400">import</span> {'{ '}<span className="text-green-400">Server</span>{' }'} <span className="text-purple-400">from</span> <span className="text-yellow-400">'@infrastructure/core'</span>;</> },
    { indent: 0, content: <><span className="text-purple-400">import</span> {'{ '}<span className="text-green-400">Database</span>{' }'} <span className="text-purple-400">from</span> <span className="text-yellow-400">'@database/postgres'</span>;</> },
    { indent: 0, content: <><span className="text-purple-400">import</span> {'{ '}<span className="text-green-400">Redis</span>{' }'} <span className="text-purple-400">from</span> <span className="text-yellow-400">'@cache/redis'</span>;</> },
    { indent: 0, content: '' },
    { indent: 0, content: <><span className="text-purple-400">const</span> <span className="text-blue-400">app</span> = <span className="text-purple-400">new</span> <span className="text-green-400">Server</span>{'({'}</> },
    { indent: 1, content: <><span className="text-red-400">port</span>: <span className="text-yellow-300">3000</span>,</> },
    { indent: 1, content: <><span className="text-red-400">database</span>: <span className="text-purple-400">new</span> <span className="text-green-400">Database</span>(),</> },
    { indent: 1, content: <><span className="text-red-400">cache</span>: <span className="text-purple-400">new</span> <span className="text-green-400">Redis</span>(),</> },
    { indent: 0, content: '});' },
    { indent: 0, content: '' },
    { indent: 0, content: <><span className="text-purple-400">await</span> app.<span className="text-blue-400">listen</span>();</> },
    { indent: 0, content: <><span className="text-gray-500">// 🚀 Server running on port 3000</span></> },
  ];

  return (
    <section className="min-h-screen flex items-center relative pt-20">
      {/* Background Grid Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `radial-gradient(circle at 1px 1px, rgba(123,47,247,0.3) 1px, transparent 0)`,
          backgroundSize: '40px 40px'
        }} />
      </div>

      {/* Gradient Orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neonPurple/10 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neonBlue/10 rounded-full blur-3xl" />

      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center relative z-10">
        {/* Left Content */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Status Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 border border-green-500/20 mb-8"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <div className="w-2 h-2 bg-green-400 rounded-full" />
            <span className="font-mono text-sm text-green-400">&gt;_ System Online</span>
          </motion.div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-4">
            <span className="text-gray-300">Hi, I'm </span>
            <span className="text-white">Ronit.</span>
          </h1>

          <h2 className="text-4xl md:text-6xl font-bold mb-2">
            <span className="text-gray-400">{text}</span>
            <span className="text-neonPurple animate-pulse">|</span>
          </h2>

          <h2 className="text-4xl md:text-6xl font-bold mb-8">
            <span className="glow-text bg-gradient-to-r from-neonPurple via-purple-400 to-neonBlue bg-clip-text text-transparent">
              Developer
            </span>
          </h2>

          {/* Description */}
          <p className="text-gray-400 text-lg leading-relaxed mb-10 max-w-xl">
            I build end-to-end web applications — from responsive frontends
            and robust APIs to scalable microservices and cloud infrastructure.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4">
            <motion.a
              href="#projects"
              className="flex items-center gap-2 px-6 py-3 bg-neonPurple rounded-lg font-medium
                         hover:bg-purple-600 transition-all shadow-lg shadow-purple-500/25"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiCode /> View Projects
            </motion.a>

            <motion.a
              href="#github"
              className="flex items-center gap-2 px-6 py-3 bg-darkCard border border-gray-700 rounded-lg
                         font-medium hover:border-neonBlue hover:text-neonBlue transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <VscGithubAlt /> GitHub Stats
            </motion.a>

            <motion.a
              href="/resume.pdf"
              download
              className="flex items-center gap-2 px-6 py-3 bg-transparent border border-gray-700 rounded-lg
                         font-medium hover:border-gray-500 transition-all"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <FiDownload /> Resume
            </motion.a>
          </div>
        </motion.div>

        {/* Right - Code Window */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="hidden md:block"
        >
          <div className="bg-[#1a1a2e] rounded-xl border border-gray-800 overflow-hidden shadow-2xl shadow-purple-500/10">
            {/* Window Header */}
            <div className="flex items-center gap-3 px-4 py-3 bg-[#12121a] border-b border-gray-800">
              <div className="flex gap-2">
                <div className="w-3 h-3 rounded-full bg-red-500" />
                <div className="w-3 h-3 rounded-full bg-yellow-500" />
                <div className="w-3 h-3 rounded-full bg-blue-500" />
              </div>
              <span className="font-mono text-sm text-gray-500 ml-2">server.ts</span>
            </div>

            {/* Code Content */}
            <div className="p-6 font-mono text-sm overflow-x-auto code-scroll">
              {codeLines.map((line, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="leading-7"
                  style={{ paddingLeft: `${line.indent * 24}px` }}
                >
                  {line.content || '\u00A0'}
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;