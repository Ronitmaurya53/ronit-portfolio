import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMail, FiSend, FiMapPin, FiLinkedin, FiGithub, FiTwitter } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., EmailJS, API call)
    setSent(true);
    setTimeout(() => setSent(false), 3000);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    { icon: <FiGithub size={20} />, href: 'https://github.com/Ronitmaurya53', label: 'GitHub' },
    { icon: <FiLinkedin size={20} />, href: 'https://www.linkedin.com/in/ronit-maurya-12b75727b', label: 'LinkedIn' },
    { icon: <FiTwitter size={20} />, href: 'https://twitter.com/ronitmaurya', label: 'Twitter' },
    { icon: <FiMail size={20} />, href: 'mailto:ronitmaurya993020@gmail.com', label: 'Email' },
  ];

  return (
    <section id="contact" className="py-24 relative">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-mono text-neonPurple text-sm mb-2">&gt;_ init_contact()</h2>
          <h3 className="text-4xl font-bold">
            Get In <span className="text-neonPurple">Touch</span>
          </h3>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side - Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            {/* Terminal Message */}
            <div className="bg-darkCard rounded-xl border border-gray-800 p-6 mb-8">
              <div className="font-mono text-sm space-y-2">
                <p><span className="text-green-400">Ronit@dev</span>:<span className="text-neonBlue">~</span>$ echo "Let's build something amazing!"</p>
                <p className="text-gray-400">
                  I'm always open to new opportunities, collaborations, and
                  interesting projects. Whether you have a question or just
                  want to say hi, feel free to reach out!
                </p>
              </div>
            </div>

            {/* Contact Info */}
            <div className="space-y-4 mb-8">
              <div className="flex items-center gap-3 text-gray-400">
                <FiMail className="text-neonPurple" />
                <span>ronitmaurya993020@gmail.com</span>
              </div>
              <div className="flex items-center gap-3 text-gray-400">
                <FiMapPin className="text-neonPurple" />
                <span>India</span>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex gap-4">
              {socials.map((social, i) => (
                <motion.a
                  key={i}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -3, scale: 1.1 }}
                  className="w-12 h-12 flex items-center justify-center rounded-xl bg-darkCard border border-gray-800
                             text-gray-400 hover:text-neonPurple hover:border-neonPurple transition-all"
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="space-y-6"
          >
            <div>
              <label className="font-mono text-sm text-gray-400 mb-2 block">
                <span className="text-neonPurple">const</span> name =
              </label>
              <input
                type="text"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                placeholder="'Your Name'"
                required
                className="w-full px-4 py-3 bg-darkCard border border-gray-800 rounded-lg font-mono text-sm
                           focus:outline-none focus:border-neonPurple transition-colors text-white"
              />
            </div>

            <div>
              <label className="font-mono text-sm text-gray-400 mb-2 block">
                <span className="text-neonPurple">const</span> email =
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
                placeholder="'your@email.com'"
                required
                className="w-full px-4 py-3 bg-darkCard border border-gray-800 rounded-lg font-mono text-sm
                           focus:outline-none focus:border-neonPurple transition-colors text-white"
              />
            </div>

            <div>
              <label className="font-mono text-sm text-gray-400 mb-2 block">
                <span className="text-neonPurple">const</span> message =
              </label>
              <textarea
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
                placeholder="'Your message here...'"
                rows={5}
                required
                className="w-full px-4 py-3 bg-darkCard border border-gray-800 rounded-lg font-mono text-sm
                           focus:outline-none focus:border-neonPurple transition-colors text-white resize-none"
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`w-full py-3 rounded-lg font-mono font-medium flex items-center justify-center gap-2
                         transition-all ${
                           sent
                             ? 'bg-green-500 text-white'
                             : 'bg-neonPurple text-white hover:bg-purple-600'
                         }`}
            >
              {sent ? (
                <>✓ Message Sent!</>
              ) : (
                <><FiSend /> send_message()</> 
              )}
            </motion.button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default Contact;