import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { CpuIcon, WifiIcon, DatabaseIcon, GaugeIcon, ShieldCheckIcon, NetworkIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function IoTDevelopment() {
  const features = [
    {
      icon: CpuIcon,
      title: 'Smart Devices',
      description: 'Custom IoT devices and sensors for real-time data collection and monitoring.',
    },
    {
      icon: WifiIcon,
      title: 'Connectivity',
      description: 'Seamless integration with WiFi, Bluetooth, LoRaWAN, and cellular networks.',
    },
    {
      icon: DatabaseIcon,
      title: 'Data Analytics',
      description: 'Advanced analytics and insights from your IoT device data streams.',
    },
    {
      icon: GaugeIcon,
      title: 'Real-Time Monitoring',
      description: 'Live dashboards and alerts for instant visibility into your operations.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security First',
      description: 'End-to-end encryption and secure device authentication protocols.',
    },
    {
      icon: NetworkIcon,
      title: 'Scalable Architecture',
      description: 'Infrastructure that grows with your IoT deployment needs.',
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
              <CpuIcon className="w-10 h-10 text-primary-black" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                IoT Development
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Connected devices and smart solutions that transform physical
              environments into intelligent, data-driven ecosystems.
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
              Ready to Connect Your World?
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              Let's build intelligent IoT solutions that transform your business
              operations.
            </p>
            <a
              href="/contact"
              className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105"
            >
              Start Your IoT Journey
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}