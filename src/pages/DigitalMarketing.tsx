import React from 'react';
import { Footer } from '../components/Footer';
import { TrendingUpIcon, TargetIcon, MegaphoneIcon, CheckCircle, SparklesIcon, BarChart3Icon, RocketIcon, GlobeIcon, ShieldIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import DigitalMarketingImage from '../services/digital marketting.jpg';

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
      accent: 'from-orange-500/60 via-amber-500/50 to-pink-500/40',
    },
    {
      icon: MegaphoneIcon,
      title: 'Omnichannel Campaigns',
      description: 'Integrated storytelling across paid, owned, and earned channels that feels natively on-brand.',
      accent: 'from-pink-500/60 via-rose-500/50 to-red-500/40',
    },
    {
      icon: BarChart3Icon,
      title: 'Performance Operations',
      description: 'Daily optimization sprints, creative testing frameworks, and agile budget allocation.',
      accent: 'from-amber-400/60 via-orange-500/50 to-red-500/40',
    },
    {
      icon: RocketIcon,
      title: 'Growth Experiments',
      description: 'Landing page sprints, funnel experiments, and lifecycle automation tuned for lift.',
      accent: 'from-purple-500/60 via-pink-500/50 to-orange-500/40',
    },
    {
      icon: GlobeIcon,
      title: 'Global Reach',
      description: 'Localization, cultural nuance, and region-specific channel strategies that scale internationally.',
      accent: 'from-teal-400/60 via-cyan-500/50 to-blue-500/40',
    },
    {
      icon: ShieldIcon,
      title: 'Brand Safety',
      description: 'Governance, compliance, and measurement guardrails that keep campaigns trusted and secure.',
      accent: 'from-slate-500/60 via-indigo-500/50 to-purple-500/40',
    },
  ];

  const marketingJourney = [
    {
      icon: TrendingUpIcon,
      title: 'Insight Sprint',
      description: 'Audit channels, competitor plays, and audience behavior to uncover growth levers and KPIs.',
    },
    {
      icon: TargetIcon,
      title: 'Strategy Blueprint',
      description: 'Map personas, messaging arcs, and channel mix with clear success metrics and measurement plans.',
    },
    {
      icon: MegaphoneIcon,
      title: 'Creative Launchpad',
      description: 'Produce agile creative suites, landing experiences, and campaign automation flows.',
    },
    {
      icon: BarChart3Icon,
      title: 'Optimize & Scale',
      description: 'Instrument dashboards, run experiments, and ramp budgets into the highest converting journeys.',
    },
  ];

  const campaignHighlights = [
    {
      icon: MegaphoneIcon,
      title: 'Omni-channel Storytelling',
      description: 'Cohesive narratives across social, search, and email that build memorable brands.',
    },
    {
      icon: TargetIcon,
      title: 'Precision Targeting',
      description: 'Audience clusters powered by live analytics delivering higher conversion lift.',
    },
    {
      icon: SparklesIcon,
      title: 'Creative Experimentation',
      description: 'Rapid A/B motion graphics and interactive assets that keep campaigns fresh.',
    },
    {
      icon: ShieldIcon,
      title: 'Compliance-Ready',
      description: 'Consent management, privacy-first tracking, and brand safety woven into every activation.',
    },
  ];

  const services = [
    'SEO & Content Engines',
    'Paid Media & Demand Gen',
    'Marketing Automation',
    'Analytics & Attribution',
    'Community & Social',
    'RevOps Alignment',
  ];

  const technologies = [
    'HubSpot',
    'Marketo',
    'Salesforce Marketing Cloud',
    'Google Marketing Platform',
    'Meta Ads',
    'LinkedIn Ads',
    'Mixpanel',
    'Segment',
    'Braze',
    'Figma',
    'Webflow',
    'Looker',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white">
      <motion.div
        className="absolute -top-48 left-[-18rem] h-[30rem] w-[30rem] rounded-full bg-orange-500/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 right-[-14rem] h-[34rem] w-[34rem] rounded-full bg-pink-500/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 35, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-amber-400/10 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut' }}
      />

      <div className="relative z-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col gap-24 px-6 py-24 lg:px-12">
          <motion.section
            initial={{ opacity: 0, y: 26 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="grid items-center gap-16 lg:grid-cols-[1.1fr,0.9fr]"
          >
            <div className="space-y-10">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-orange-200">
                <span className="h-2 w-2 rounded-full bg-orange-400" />
                Growth Marketing Studio
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Build campaigns powered by insight, creativity, and relentless optimization
              </h1>
              <p className="max-w-xl text-lg text-gray-200">
                We partner with marketing and revenue teams to turn ambitious goals into measurable growth, weaving brand storytelling with performance rigor.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-orange-200">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-orange-100"
                >
                  Plan your campaign
                </a>
                <a
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white"
                >
                  Explore our process
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/30 via-pink-500/20 to-black/40 p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <TrendingUpIcon className="h-8 w-8 text-orange-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Command center dashboards</h2>
                <p className="text-sm leading-relaxed text-gray-200">
                  Live dashboards connect spend, creative, and pipeline revenue so your team can pivot in minutes, not weeks.
                </p>
                <div className="relative overflow-hidden rounded-2xl">
                  <img src={DigitalMarketingImage} alt="Digital marketing" className="h-40 w-full object-cover" />
                </div>
              </div>
            </motion.div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Modern marketing that balances brand and performance</h2>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {capabilities.map((capability, index) => (
                <motion.div
                  key={capability.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${capability.accent}`} />
                  <div className="relative z-10 space-y-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/40">
                      <capability.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{capability.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-200">{capability.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Journey</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">From insight to sustainable growth loops</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {marketingJourney.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  className="group rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex items-center gap-4">
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-200 transition group-hover:bg-orange-500/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Phase 0{index + 1}</p>
                        <h3 className="mt-2 text-xl font-semibold text-white">{step.title}</h3>
                      </div>
                    </div>
                    <span className="text-4xl font-semibold text-white/50">0{index + 1}</span>
                  </div>
                  <p className="mt-6 text-sm leading-relaxed text-gray-200">{step.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Campaign Accelerators</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Where creative magic meets measurable impact</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {campaignHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 text-orange-200">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{item.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-200">{item.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Services</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Everything you need to activate demand</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {services.map((service, index) => (
                <motion.span
                  key={service}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-orange-200"
                >
                  <CheckCircle className="h-3.5 w-3.5" />
                  {service}
                </motion.span>
              ))}
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="space-y-10"
          >
            <div>
              <p className="text-xs uppercase tracking-[0.3em] text-orange-200">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Tooling that keeps every channel accountable</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Data-rich execution, transparent ROI</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    From CRM alignment to creative production, our stack ensures every campaign is instrumented, measurable, and primed to scale.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
                        <SparklesIcon className="h-4 w-4 text-orange-200" />
                      </span>
                      Dynamic creative optimization pipelines refresh assets based on real-time performance.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-orange-500/20">
                        <ShieldIcon className="h-4 w-4 text-orange-200" />
                      </span>
                      Privacy-first data architecture and consent governance protect your brand and customers.
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={tech}
                      initial={{ opacity: 0, y: 12 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.03 }}
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-orange-200"
                    >
                      {tech}
                    </motion.span>
                  ))}
                </div>
              </div>
            </div>
          </motion.section>

          <motion.section
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-orange-500/30 via-pink-500/40 to-red-500/20 p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to light up your next quarter?</h2>
                  <p className="text-sm leading-relaxed text-orange-100">
                    We’ll partner with your team to ship high-performing campaigns, aligned dashboards, and growth that sticks.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-orange-100"
                >
                  Book a strategy session
                </a>
              </div>
            </div>
          </motion.section>
        </div>
      </div>

    </div>
  );
}
