import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CodeIcon, LayoutIcon, ZapIcon, ShieldIcon, SearchIcon, SmartphoneIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function WebDevelopment() {
  const features = [
    {
      icon: LayoutIcon,
      title: 'Responsive Design',
      description: 'Beautiful, mobile-first designs that work flawlessly across all devices and screen sizes.',
    },
    {
      icon: ZapIcon,
      title: 'Lightning Fast',
      description: 'Optimized performance with fast load times and smooth user experiences.',
    },
    {
      icon: ShieldIcon,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security and robust architecture for peace of mind.',
    },
    {
      icon: SearchIcon,
      title: 'SEO Optimized',
      description: 'Built with SEO best practices to help your website rank higher in search results.',
    },
    {
      icon: SmartphoneIcon,
      title: 'Progressive Web Apps',
      description: 'Modern PWAs that deliver app-like experiences directly in the browser.',
    },
    {
      icon: CodeIcon,
      title: 'Clean Code',
      description: 'Maintainable, scalable code following industry best practices and standards.',
    },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB', 'PostgreSQL', 'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'Kubernetes',
  ];

  return (
    <div className="w-full min-h-screen bg-primary-black text-white">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <div className="w-20 h-20 rounded-2xl bg-secondary-silver flex items-center justify-center mx-auto mb-6">
              <CodeIcon className="w-10 h-10 text-primary-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                Web Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Custom web applications and websites built with modern
              technologies to deliver exceptional user experiences and drive
              business growth.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-primary-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-secondary-silver"
              >
                <div className="w-12 h-12 rounded-lg bg-secondary-silver flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-primary-black" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-gray-300">{feature.description}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">
              Technologies We Use
            </h2>
            <div className="flex flex-wrap justify-center gap-4">
              {technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-6 py-3 bg-gray-800 text-white rounded-full font-semibold border border-secondary-silver hover:shadow-md transition-shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="bg-secondary-silver rounded-3xl p-12 text-center text-primary-black"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Build Your Web Presence?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create a stunning website that engages your audience and
              drives results.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Your Project
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}