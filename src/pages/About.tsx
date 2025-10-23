import React from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { TargetIcon, UsersIcon, TrophyIcon, RocketIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import abdur from '../team/abdur.jpg';
import afsal from '../team/afsal.jpg';
import mafaz from '../team/mafaz.jpg';
import safiq from '../team/safiq.jpg';
import balaji from '../team/balaji.jpg';
import allen from '../team/allen.jpg';
import aboutVideo from '../backgroundeffects/3129977-uhd_3840_2160_30fps.mp4';

export function About() {
  const values = [
    {
      icon: TargetIcon,
      title: 'Mission-Driven',
      description: "We're committed to delivering innovative solutions that drive real business impact.",
    },
    {
      icon: UsersIcon,
      title: 'Client-Focused',
      description: 'Your success is our success. We partner closely with you every step of the way.',
    },
    {
      icon: TrophyIcon,
      title: 'Excellence',
      description: 'We maintain the highest standards in everything we do, from code to customer service.',
    },
    {
      icon: RocketIcon,
      title: 'Innovation',
      description: 'We stay ahead of the curve, constantly exploring new technologies and methodologies.',
    },
  ];

  const teamMembers = [
    {
      name: 'Abdur',
      role: 'Founder, Gen AI Specialist, IoT Developer',
      image: abdur,
    },
    {
      name: 'Afsal',
      role: 'Co-founder, CEO',
      image: afsal,
    },
    {
      name: 'Allen',
      role: 'Co-founder, MD',
      image: allen,
    },
    {
      name: 'Balaji',
      role: 'Co-founder, Developer Lead & HR',
      image: balaji,
    },
    {
      name: 'Mafaz',
      role: 'Co-founder, AI Specialist & Prompt Engineer',
      image: mafaz,
    },
    {
      name: 'Safiq',
      role: 'Co-founder, Creative Designer & Developer',
      image: safiq,
    },
  ];

  return (
    <div className="w-full min-h-screen bg-primary-black text-white about-container">
      <video
        className="about-video"
        src={aboutVideo}
        autoPlay
        loop
        muted
      ></video>
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 about-content">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                About Innoaivators
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We&apos;re a team of passionate innovators dedicated to transforming
              businesses through cutting-edge technology and creative solutions.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <img
                src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&h=600&fit=crop"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl w-full h-96 object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-3xl font-bold text-white mb-4">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Founded in 2020, Innoaivators emerged from a simple vision: to
                bridge the gap between cutting-edge technology and real-world
                business needs. What started as a small team of developers has
                grown into a full-service digital innovation agency.
              </p>
              <p className="text-gray-300 mb-4 leading-relaxed">
                Today, we serve clients across industries, from startups to
                enterprises, helping them leverage the power of web development,
                mobile apps, IoT, AI, and digital marketing to achieve their
                goals.
              </p>
              <p className="text-gray-300 leading-relaxed">
                Our diverse team brings together expertise in software
                engineering, design, data science, and business strategy to
                deliver holistic solutions that drive measurable results.
              </p>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="bg-primary-black rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow border border-secondary-silver">
                  <div className="w-12 h-12 rounded-lg bg-secondary-silver flex items-center justify-center mb-4">
                    <value.icon className="w-6 h-6 text-primary-black" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-300">{value.description}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-20"
          >
            <h2 className="text-4xl font-bold text-center text-white mb-12">
              Our Team
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member, index) => (
                <div key={index} className="text-center">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-40 h-40 rounded-full mx-auto mb-4 object-cover"
                  />
                  <h3 className="text-xl font-bold text-white">{member.name}</h3>
                  <p className="text-gray-400">{member.role}</p>
                </div>
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
              Join Our Journey
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              We&apos;re always looking for talented individuals who share our
              passion for innovation and excellence.
            </p>
            <a href="/contact" className="inline-block bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-xl transition-all transform hover:scale-105">
              Get in Touch
            </a>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
