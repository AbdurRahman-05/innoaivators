import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { BrainCircuitIcon, BotIcon, WorkflowIcon, ClockIcon, BarChart3Icon, ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIAutomations() {
  const features = [
    {
      icon: BotIcon,
      title: 'Intelligent Bots',
      description: 'AI-powered chatbots and virtual assistants for customer service automation.',
    },
    {
      icon: WorkflowIcon,
      title: 'Process Automation',
      description: 'Streamline repetitive tasks and workflows with intelligent automation.',
    },
    {
      icon: ClockIcon,
      title: 'Time Savings',
      description: 'Reduce manual work by up to 80% with smart automation solutions.',
    },
    {
      icon: BarChart3Icon,
      title: 'Predictive Analytics',
      description: 'AI-driven insights and forecasting for better decision making.',
    },
    {
      icon: ZapIcon,
      title: 'Real-Time Processing',
      description: 'Instant data processing and automated responses for maximum efficiency.',
    },
    {
      icon: BrainCircuitIcon,
      title: 'Machine Learning',
      description: 'Self-improving systems that get smarter with every interaction.',
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
              <BrainCircuitIcon className="w-10 h-10 text-primary-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                AI Automations
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Intelligent automation solutions that streamline operations, boost
              productivity, and free your team to focus on what matters most.
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
              Ready to Automate with AI?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's transform your operations with intelligent automation that
              delivers real ROI.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Automate Your Business
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}