import React from 'react';
import { motion } from 'framer-motion';
import {
  SiReact, SiNextdotjs, SiTailwindcss, SiTypescript, SiJavascript,
  SiNodedotjs, SiExpress, SiPython, SiDjango, SiPostgresql,
  SiMongodb, SiRedis, SiDocker, SiKubernetes, SiGit,
  SiGraphql, SiFirebase
} from 'react-icons/si';

const Skills = () => {
  const skillCategories = [
    {
      title: 'Frontend',
      skills: [
        { name: 'React', icon: <SiReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#ffffff' },
        { name: 'TypeScript', icon: <SiTypescript />, color: '#3178C6' },
        { name: 'JavaScript', icon: <SiJavascript />, color: '#F7DF1E' },
        { name: 'Tailwind', icon: <SiTailwindcss />, color: '#06B6D4' },
      ]
    },
    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <SiNodedotjs />, color: '#339933' },
        { name: 'Express', icon: <SiExpress />, color: '#ffffff' },
        { name: 'Python', icon: <SiPython />, color: '#3776AB' },
        { name: 'Django', icon: <SiDjango />, color: '#092E20' },
        { name: 'GraphQL', icon: <SiGraphql />, color: '#E10098' },
      ]
    },
    {
      title: 'Database & Cache',
      skills: [
        { name: 'PostgreSQL', icon: <SiPostgresql />, color: '#4169E1' },
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Redis', icon: <SiRedis />, color: '#DC382D' },
        { name: 'Firebase', icon: <SiFirebase />, color: '#FFCA28' },
      ]
    },
    {
      title: 'DevOps & Cloud',
      skills: [
        { name: 'Docker', icon: <SiDocker />, color: '#2496ED' },
        { name: 'Kubernetes', icon: <SiKubernetes />, color: '#326CE5' },
    //    { name: 'AWS', icon: <SiAmazon />, color: '#FF9900' },
        { name: 'Git', icon: <SiGit />, color: '#F05032' },
      ]
    },
  ];

  return (
    <section id="skills" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-neonPurple text-sm mb-2">&gt;_ tech_stack</h2>
          <h3 className="text-4xl font-bold">
            Skills & <span className="text-neonPurple">Technologies</span>
          </h3>
        </motion.div>

        <div className="space-y-12">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={catIdx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: catIdx * 0.1 }}
            >
              <h4 className="font-mono text-gray-400 text-sm mb-4">
                <span className="text-neonBlue">#</span> {category.title}
              </h4>
              <div className="flex flex-wrap gap-4">
                {category.skills.map((skill, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="flex items-center gap-3 px-5 py-3 bg-darkCard rounded-xl border border-gray-800
                               hover:border-gray-600 transition-all cursor-pointer group"
                  >
                    <span className="text-xl group-hover:scale-110 transition-transform" style={{ color: skill.color }}>
                      {skill.icon}
                    </span>
                    <span className="font-medium text-sm">{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;