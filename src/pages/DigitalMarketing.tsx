import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TrendingUpIcon, TargetIcon, BarChart3Icon, MegaphoneIcon, UsersIcon, SearchIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function DigitalMarketing() {
  const features = [
    {
      icon: SearchIcon,
      title: 'SEO Optimization',
      description: 'Improve your search rankings and drive organic traffic to your website.',
    },
    {
      icon: MegaphoneIcon,
      title: 'Social Media Marketing',
      description: 'Build brand awareness and engage your audience across social platforms.',
    },
    {
      icon: TargetIcon,
      title: 'Targeted Advertising',
      description: 'Reach the right audience with data-driven paid advertising campaigns.',
    },
    {
      icon: BarChart3Icon,
      title: 'Analytics & Insights',
      description: 'Track performance and optimize campaigns with detailed analytics.',
    },
    {
      icon: UsersIcon,
      title: 'Content Marketing',
      description: 'Create compelling content that attracts and converts your target audience.',
    },
    {
      icon: TrendingUpIcon,
      title: 'Growth Strategy',
      description: 'Develop comprehensive strategies for sustainable business growth.',
    },
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
              <TrendingUpIcon className="w-10 h-10 text-primary-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                Digital Marketing
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Data-driven marketing strategies that amplify your brand, engage
              your audience, and drive measurable results.
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
            className="bg-secondary-silver rounded-3xl p-12 text-center text-primary-black"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Grow Your Brand?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's create a marketing strategy that drives real results for
              your business.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Marketing
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}