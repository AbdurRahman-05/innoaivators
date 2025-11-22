import React from 'react';
import { Footer } from '../components/Footer';
import { TrendingUpIcon, TargetIcon, MegaphoneIcon, CheckCircle, SparklesIcon, BarChart3Icon, RocketIcon, GlobeIcon, ShieldIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechStackCarousel } from '../components/TechStackCarousel';

export function DigitalMarketing() {
  const heroMetrics = [
    { value: '+210%', label: 'Avg. pipeline growth' },
    { value: '3.5x', label: 'Return on ad spend' },
    { value: '18 days', label: 'Campaign deployment' },
  ];

  const capabilities = [
    {
      icon: TargetIcon,
      title: 'Audience Intelligence',
      description: 'Behavioral segmentation, intent data, and lookalike modeling to pinpoint high-value prospects.',
      accent: 'bg-orange-500',
    },
    {
      icon: MegaphoneIcon,
      title: 'Omnichannel Campaigns',
      description: 'Integrated storytelling across paid, owned, and earned channels that feels natively on-brand.',
      accent: 'bg-red-500',
    },
    {
      icon: BarChart3Icon,
      title: 'Performance Operations',
      description: 'Daily optimization sprints, creative testing frameworks, and agile budget allocation.',
      accent: 'bg-amber-500',
    },
    {
      icon: RocketIcon,
      title: 'Growth Experiments',
      description: 'Landing page sprints, funnel experiments, and lifecycle automation tuned for lift.',
      accent: 'bg-pink-500',
    },
    {
      icon: GlobeIcon,
      title: 'Global Reach',
      description: 'Localization, cultural nuance, and region-specific channel strategies that scale internationally.',
      accent: 'bg-cyan-500',
    },
    {
      icon: ShieldIcon,
      title: 'Brand Safety',
      description: 'Governance, compliance, and measurement guardrails that keep campaigns trusted and secure.',
      accent: 'bg-indigo-500',
    },
  ];

  const marketingJourney = [
    {
      icon: TrendingUpIcon,
      title: 'Insight Sprint',
      description: 'Audit channels, competitor plays, and audience behavior to uncover growth levers and KPIs.',
      color: 'text-orange-400',
      borderColor: 'border-orange-500/30',
    },
    {
      icon: TargetIcon,
      title: 'Strategy Blueprint',
      description: 'Map personas, messaging arcs, and channel mix with clear success metrics and measurement plans.',
      color: 'text-red-400',
      borderColor: 'border-red-500/30',
    },
    {
      icon: MegaphoneIcon,
      title: 'Creative Launchpad',
      description: 'Produce agile creative suites, landing experiences, and campaign automation flows.',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
    {
      icon: BarChart3Icon,
      title: 'Optimize & Scale',
      description: 'Instrument dashboards, run experiments, and ramp budgets into the highest converting journeys.',
      color: 'text-pink-400',
      borderColor: 'border-pink-500/30',
    },
  ];

  const technologies = [
    'HubSpot', 'Marketo', 'Salesforce', 'Google Ads', 'Meta Ads', 'LinkedIn Ads',
    'Mixpanel', 'Segment', 'Braze', 'Figma', 'Webflow', 'Looker',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A0505]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#7c2d12_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#9f1239_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-300 text-sm font-semibold tracking-wide uppercase">
              <TrendingUpIcon className="w-4 h-4" />
              <span>Growth Marketing Studio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Ignite Growth with <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-400">Data-Driven</span> Creativity.
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We turn ambitious goals into measurable revenue. Through precision targeting and compelling storytelling, we build brands that dominate.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Start Campaign
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
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-orange-500/20">
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop"
                alt="Digital Marketing Analytics"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

              {/* Floating Elements */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute bottom-10 left-10 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10 shadow-xl"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-orange-500/20 flex items-center justify-center">
                    <TrendingUpIcon className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">ROI Positive</div>
                    <div className="text-xs text-gray-400">+125% this month</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-orange-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-red-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION (STAGGERED GRID) --- */}
      <section className="py-32 bg-[#0F0505] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-orange-500/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-orange-400 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Full-Funnel Mastery</h3>
            <p className="text-gray-400 text-lg">We optimize every touchpoint, from first impression to loyal advocate.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className={`group relative p-8 rounded-3xl bg-[#150A0A] border border-white/5 hover:border-white/10 transition-all overflow-hidden ${index % 2 === 0 ? 'lg:translate-y-12' : ''}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.accent} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-14 h-14 rounded-2xl ${feature.accent} bg-opacity-10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                    <feature.icon className={`w-7 h-7 text-white`} />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                  <p className="text-gray-400 leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-32 bg-[#0A0505] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-red-400 uppercase mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">From Insight to <br />Impact</h3>

              <div className="space-y-8">
                {marketingJourney.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl border ${step.borderColor} bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== marketingJourney.length - 1 && (
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
                  src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=2070&auto=format&fit=crop"
                  alt="Marketing Strategy"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-orange-900/20 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <section className="py-32 bg-gradient-to-b from-[#0F0505] to-[#0A0505]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Powered by Growth Tech</h3>
            <p className="text-gray-400">Unified customer view and automation.</p>
          </div>

          <TechStackCarousel technologies={technologies} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-900 via-red-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Grow?</h2>
            <p className="text-xl text-orange-200 mb-12">
              Stop guessing and start scaling. Let's build a marketing engine that delivers predictable revenue.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-orange-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
            >
              Start Campaign
              <ArrowRightIcon className="w-5 h-5" />
            </motion.a>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
