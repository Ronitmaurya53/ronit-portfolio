import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FiExternalLink, FiGithub, FiFolder } from 'react-icons/fi';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      title: 'E-Commerce Platform',
      description: 'Full-stack e-commerce with payment integration, real-time inventory, and admin dashboard.',
      tech: ['React', 'Node.js', 'PostgreSQL', 'Stripe', 'Redis'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'Real-time Chat App',
      description: 'WebSocket-based messaging app with group chats, file sharing, and end-to-end encryption.',
      tech: ['Next.js', 'Socket.io', 'MongoDB', 'Redis'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: true,
    },
    {
      title: 'REST API Microservice',
      description: 'Scalable microservice architecture with API gateway, authentication, and rate limiting.',
      tech: ['Node.js', 'Express', 'Docker', 'Kubernetes'],
      category: 'backend',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Task Management Dashboard',
      description: 'Kanban-style project management tool with drag-and-drop and real-time collaboration.',
      tech: ['React', 'TypeScript', 'Tailwind', 'Firebase'],
      category: 'frontend',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'CI/CD Pipeline Tool',
      description: 'Automated deployment pipeline with GitHub integration, Docker builds, and AWS deployment.',
      tech: ['Python', 'Docker', 'AWS', 'GitHub Actions'],
      category: 'devops',
      github: '#',
      live: '#',
      featured: false,
    },
    {
      title: 'Blog CMS Platform',
      description: 'Headless CMS with markdown support, SEO optimization, and analytics dashboard.',
      tech: ['Next.js', 'GraphQL', 'PostgreSQL', 'Tailwind'],
      category: 'fullstack',
      github: '#',
      live: '#',
      featured: false,
    },
  ];

  const filters = ['all', 'fullstack', 'backend', 'frontend', 'devops'];

  const filtered = filter === 'all' ? projects : projects.filter(p => p.category === filter);

  return (
    <section id="projects" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-mono text-neonPurple text-sm mb-2">&gt;_ my_projects</h2>
          <h3 className="text-4xl font-bold">
            Featured <span className="text-neonPurple">Projects</span>
          </h3>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 rounded-lg font-mono text-sm transition-all ${
                filter === f
                  ? 'bg-neonPurple text-white'
                  : 'bg-darkCard text-gray-400 border border-gray-800 hover:border-gray-600'
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        {/* Project Grid */}
        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence>
            {filtered.map((project, i) => (
              <motion.div
                key={project.title}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                whileHover={{ y: -8 }}
                className="bg-darkCard rounded-xl border border-gray-800 p-6 flex flex-col
                           hover:border-neonPurple/50 transition-all group"
              >
                {/* Header */}
                <div className="flex justify-between items-start mb-4">
                  <FiFolder className="text-neonPurple text-2xl" />
                  <div className="flex gap-3">
                    <a href={project.github} className="text-gray-500 hover:text-white transition-colors">
                      <FiGithub size={18} />
                    </a>
                    <a href={project.live} className="text-gray-500 hover:text-neonBlue transition-colors">
                      <FiExternalLink size={18} />
                    </a>
                  </div>
                </div>

                {/* Title & Desc */}
                <h4 className="text-xl font-bold mb-2 group-hover:text-neonPurple transition-colors">
                  {project.title}
                </h4>
                <p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span key={t} className="font-mono text-xs text-neonBlue bg-neonBlue/10 px-2 py-1 rounded">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;