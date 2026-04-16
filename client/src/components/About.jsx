import React from 'react';
import { motion } from 'framer-motion';
import { FiServer, FiDatabase, FiCloud, FiCode } from 'react-icons/fi';

const About = () => {
  const highlights = [
    { icon: <FiCode size={24} />, title: 'Frontend', desc: 'React, Next.js, Tailwind CSS' },
    { icon: <FiServer size={24} />, title: 'Backend', desc: 'Node.js, Express, Django' },
    { icon: <FiDatabase size={24} />, title: 'Database', desc: 'PostgreSQL, MongoDB, Redis' },
    { icon: <FiCloud size={24} />, title: 'Cloud', desc: 'AWS, Docker, Kubernetes' },
  ];

  return (
    <section id="about" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-neonPurple text-sm mb-2">&gt;_ about_me</h2>
          <h3 className="text-4xl font-bold">
            Know <span className="text-neonPurple">Who I Am</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Terminal Style About */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-darkCard rounded-xl border border-gray-800 p-6"
          >
            <div className="font-mono text-sm space-y-3">
              <p><span className="text-green-400">Ronit@dev</span>:<span className="text-neonBlue">~</span>$ cat about.txt</p>
              <p className="text-gray-400 leading-relaxed">
                I'm a passionate Full Stack Developer with 3+ years of experience
                building modern web applications. I love turning complex problems
                into simple, beautiful, and intuitive solutions.
              </p>
              <p className="text-gray-400 leading-relaxed">
                Currently focused on building scalable backend systems and
                cloud-native applications. Always learning, always shipping. 🚀
              </p>
              <p><span className="text-green-400">Ronit@dev</span>:<span className="text-neonBlue">~</span>$ <span className="cursor-blink"></span></p>
            </div>
          </motion.div>

          {/* Highlight Cards */}
          <div className="grid grid-cols-2 gap-4">
            {highlights.map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, borderColor: 'rgb(123, 47, 247)' }}
                className="bg-darkCard rounded-xl border border-gray-800 p-5 cursor-pointer transition-all"
              >
                <div className="text-neonPurple mb-3">{item.icon}</div>
                <h4 className="font-bold mb-1">{item.title}</h4>
                <p className="text-gray-500 text-sm">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;