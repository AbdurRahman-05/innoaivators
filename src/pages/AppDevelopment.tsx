import React from 'react';
import { Footer } from '../components/Footer';
import { SmartphoneIcon, RocketIcon, CpuIcon, SparklesIcon, LayersIcon, PaletteIcon, ShieldIcon, ZapIcon, ArrowRightIcon, CodeIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechStackCarousel } from '../components/TechStackCarousel';

export function AppDevelopment() {
  const heroMetrics = [
    { value: '4.8★', label: 'Average store rating' },
    { value: '12 weeks', label: 'MVP launch average' },
    { value: '3x', label: 'User retention uplift' },
  ];

  const capabilities = [
    {
      icon: SmartphoneIcon,
      title: 'Platform Native',
      description: 'Tailored experiences for iOS, Android, and web that honor each platform’s interaction patterns.',
      accent: 'bg-cyan-500',
    },
    {
      icon: LayersIcon,
      title: 'Modular Architecture',
      description: 'Composable design systems and scalable feature modules keep apps evolving without rewrites.',
      accent: 'bg-fuchsia-500',
    },
    {
      icon: RocketIcon,
      title: 'Velocity & Quality',
      description: 'CI/CD, feature flags, and automated QA deliver rapid releases with confidence.',
      accent: 'bg-blue-500',
    },
    {
      icon: CpuIcon,
      title: 'Performance Obsessed',
      description: 'Optimized rendering, background sync, and battery-conscious engineering keep experiences smooth.',
      accent: 'bg-violet-500',
    },
  ];

  const productJourney = [
    {
      icon: PaletteIcon,
      title: 'Insight & Vision',
      description: 'Define business goals, user personas, and success metrics through collaborative product workshops.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: SmartphoneIcon,
      title: 'Experience Design',
      description: 'Wireframes, prototypes, and usability testing align aesthetic ambition with user delight.',
      color: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
    },
    {
      icon: CodeIcon,
      title: 'Engineering Sprints',
      description: 'Iterative development with automated testing, analytics hooks, and infrastructure ready to scale.',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: RocketIcon,
      title: 'Launch & Growth',
      description: 'Store submissions, growth loops, and data-informed enhancements keep momentum strong post-launch.',
      color: 'text-violet-400',
      borderColor: 'border-violet-500/30',
    },
  ];

  const technologies = [
    'React Native', 'SwiftUI', 'Kotlin', 'Flutter', 'TypeScript', 'GraphQL',
    'Firebase', 'AWS Amplify', 'Supabase', 'App Center', 'Detox', 'Storybook',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#05050A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#2e1065_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0e7490_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-cyan-300 text-sm font-semibold tracking-wide uppercase">
              <SmartphoneIcon className="w-4 h-4" />
              <span>Mobile Product Studio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              App Experiences that <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-fuchsia-400">Captivate</span> & Convert.
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We build high-impact mobile apps that unlock growth. From native iOS/Android to cross-platform powerhouses, we engineer for speed and scale.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Start Your App
              </motion.a>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="#process"
                className="px-8 py-4 bg-white/5 border border-white/10 text-white font-bold rounded-full hover:bg-white/10 transition-all backdrop-blur-sm"
              >
                Our Process
              </motion.a>
            </div>

            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10">
              {heroMetrics.map((metric) => (
                <div key={metric.label}>
                  <div className="text-3xl font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-gray-500 uppercase tracking-wider mt-1">{metric.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-cyan-500/20">
              <img
                src="https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?q=80&w=2070&auto=format&fit=crop"
                alt="Mobile App Development"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -15, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="absolute top-10 right-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <RocketIcon className="w-5 h-5 text-green-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Launch Ready</div>
                    <div className="text-xs text-gray-400">All tests passed</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-cyan-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-fuchsia-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION (ZIG-ZAG LAYOUT) --- */}
      <section className="py-32 bg-[#080810] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-cyan-400 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Mobile Craftsmanship</h3>
            <p className="text-gray-400 text-lg">We don't just build apps; we engineer fluid, intuitive experiences that users love.</p>
          </div>

          <div className="space-y-24">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className={`flex flex-col lg:flex-row gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}
              >
                <div className="flex-1 space-y-6">
                  <div className={`w-16 h-16 rounded-2xl ${feature.accent} bg-opacity-10 flex items-center justify-center`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-3xl font-bold text-white">{feature.title}</h3>
                  <p className="text-gray-400 text-lg leading-relaxed">{feature.description}</p>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full ${feature.accent}`} />
                      <span>Optimized for engagement</span>
                    </li>
                    <li className="flex items-center gap-3 text-gray-300">
                      <div className={`w-2 h-2 rounded-full ${feature.accent}`} />
                      <span>Scalable architecture</span>
                    </li>
                  </ul>
                </div>
                <div className="flex-1 w-full">
                  <div className="relative h-80 w-full rounded-3xl overflow-hidden border border-white/10 bg-white/5">
                    <div className={`absolute inset-0 ${feature.accent} opacity-20`} />
                    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
                    {/* Abstract Visual Representation */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <feature.icon className="w-32 h-32 text-white opacity-10" />
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-32 bg-[#05050A] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-fuchsia-400 uppercase mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">From Concept to <br />App Store</h3>

              <div className="space-y-8">
                {productJourney.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl border ${step.borderColor} bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== productJourney.length - 1 && (
                        <div className="w-px h-full bg-white/10 mx-auto my-2" />
                      )}
                    </div>
                    <div className="pb-8">
                      <h4 className={`text-xl font-bold text-white mb-2 group-hover:${step.color} transition-colors`}>{step.title}</h4>
                      <p className="text-gray-400">{step.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="relative rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1586717791821-3f44a5638d0f?q=80&w=2070&auto=format&fit=crop"
                  alt="App Design Process"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-fuchsia-900/20 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <section className="py-32 bg-gradient-to-b from-[#080810] to-[#05050A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Powered by Modern Tech</h3>
            <p className="text-gray-400">Best-in-class tools for performance and scale.</p>
          </div>

          <TechStackCarousel technologies={technologies} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-cyan-900 via-blue-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Launch?</h2>
            <p className="text-xl text-cyan-200 mb-12">
              Let's turn your app idea into a reality. Schedule a consultation with our mobile experts today.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-cyan-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
            >
              Start Your Project
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
