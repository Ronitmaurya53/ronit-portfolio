import React from 'react';
import { motion } from 'framer-motion';
import { VscGithubAlt } from 'react-icons/vsc';
import { FiStar, FiGitPullRequest, FiGitCommit } from 'react-icons/fi';

const GitHubStats = () => {
  const stats = [
    { icon: <FiGitCommit />, value: '1,200+', label: 'Contributions' },
    { icon: <FiStar />, value: '150+', label: 'Stars Earned' },
    { icon: <FiGitPullRequest />, value: '80+', label: 'Pull Requests' },
    { icon: <VscGithubAlt />, value: '40+', label: 'Repositories' },
  ];

  // Fake contribution graph
  const weeks = 52;
  const days = 7;
  const generateContributions = () => {
    const data = [];
    for (let w = 0; w < weeks; w++) {
      const week = [];
      for (let d = 0; d < days; d++) {
        week.push(Math.floor(Math.random() * 5)); // 0-4 intensity
      }
      data.push(week);
    }
    return data;
  };

  const contributions = generateContributions();

  const getColor = (level) => {
    const colors = ['#161b22', '#0e4429', '#006d32', '#26a641', '#39d353'];
    return colors[level];
  };

  return (
    <section id="github" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-neonPurple text-sm mb-2">&gt;_ github_stats</h2>
          <h3 className="text-4xl font-bold">
            GitHub <span className="text-neonPurple">Activity</span>
          </h3>
        </motion.div>

        {/* Stats Cards */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="bg-darkCard rounded-xl border border-gray-800 p-6 text-center"
            >
              <div className="text-neonPurple text-2xl mb-3 flex justify-center">{stat.icon}</div>
              <div className="text-2xl font-bold mb-1">{stat.value}</div>
              <div className="text-gray-500 text-sm">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Contribution Graph */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-darkCard rounded-xl border border-gray-800 p-6 overflow-x-auto"
        >
          <h4 className="font-mono text-sm text-gray-400 mb-4">Contribution Graph</h4>
          <div className="flex gap-[3px]">
            {contributions.map((week, wi) => (
              <div key={wi} className="flex flex-col gap-[3px]">
                {week.map((day, di) => (
                  <motion.div
                    key={di}
                    initial={{ scale: 0 }}
                    whileInView={{ scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: (wi * 7 + di) * 0.002 }}
                    className="w-3 h-3 rounded-sm"
                    style={{ backgroundColor: getColor(day) }}
                  />
                ))}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default GitHubStats;