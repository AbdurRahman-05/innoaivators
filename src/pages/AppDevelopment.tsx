import React from 'react';
import { Footer } from '../components/Footer';
import { SmartphoneIcon, RocketIcon, CpuIcon, SparklesIcon, LayersIcon, PaletteIcon, ShieldIcon, ZapIcon } from 'lucide-react';
import { motion } from 'framer-motion';

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
      accent: 'from-emerald-500/60 via-teal-500/50 to-sky-500/40',
    },
    {
      icon: LayersIcon,
      title: 'Modular Architecture',
      description: 'Composable design systems and scalable feature modules keep apps evolving without rewrites.',
      accent: 'from-green-400/60 via-emerald-500/50 to-lime-500/40',
    },
    {
      icon: RocketIcon,
      title: 'Velocity & Quality',
      description: 'CI/CD, feature flags, and automated QA deliver rapid releases with confidence.',
      accent: 'from-amber-400/60 via-orange-500/50 to-red-500/40',
    },
    {
      icon: CpuIcon,
      title: 'Performance Obsessed',
      description: 'Optimized rendering, background sync, and battery-conscious engineering keep experiences smooth.',
      accent: 'from-slate-500/60 via-blue-500/50 to-indigo-500/40',
    },
    {
      icon: ShieldIcon,
      title: 'Enterprise Security',
      description: 'Zero-trust auth, encrypted storage, and compliance-first pipelines guard user data.',
      accent: 'from-emerald-500/60 via-teal-500/50 to-blue-500/40',
    },
    {
      icon: SparklesIcon,
      title: 'Delightful Interactions',
      description: 'Motion design, tactile feedback, and personalization create memorable product moments.',
      accent: 'from-teal-400/60 via-emerald-500/50 to-blue-500/40',
    },
  ];

  const productJourney = [
    {
      icon: PaletteIcon,
      title: 'Insight & Vision',
      description: 'Define business goals, user personas, and success metrics through collaborative product workshops.',
    },
    {
      icon: SmartphoneIcon,
      title: 'Experience Design',
      description: 'Wireframes, prototypes, and usability testing align aesthetic ambition with user delight.',
    },
    {
      icon: CpuIcon,
      title: 'Engineering Sprints',
      description: 'Iterative development with automated testing, analytics hooks, and infrastructure ready to scale.',
    },
    {
      icon: RocketIcon,
      title: 'Launch & Growth',
      description: 'Store submissions, growth loops, and data-informed enhancements keep momentum strong post-launch.',
    },
  ];

  const experienceHighlights = [
    {
      icon: SparklesIcon,
      title: 'Micro-Interactions',
      description: 'Subtle animations and haptics engineered to reward key actions and boost engagement.',
    },
    {
      icon: LayersIcon,
      title: 'Offline-First',
      description: 'Seamless data sync, conflict resolution, and progressive enhancement keep users productive anywhere.',
    },
    {
      icon: ShieldIcon,
      title: 'Compliance Ready',
      description: 'SOC2, HIPAA, and GDPR mindful development with automated audits and monitoring.',
    },
    {
      icon: ZapIcon,
      title: 'Lifecycle Automation',
      description: 'Push campaigns, in-app messaging, and experimentation wired for continuous growth.',
    },
  ];

  const technologies = [
    'React Native',
    'SwiftUI',
    'Kotlin Multiplatform',
    'Flutter',
    'TypeScript',
    'GraphQL',
    'Firebase',
    'AWS Amplify',
    'Supabase',
    'App Center',
    'Detox',
    'Storybook',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white">
      <motion.div
        className="absolute -top-48 right-[-18rem] h-[30rem] w-[30rem] rounded-full bg-emerald-500/20 blur-3xl"
        animate={{ scale: [1, 1.15, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-[-14rem] h-[34rem] w-[34rem] rounded-full bg-green-500/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 34, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-teal-400/10 blur-3xl"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-emerald-200">
                <span className="h-2 w-2 rounded-full bg-emerald-400" />
                Mobile Product Studio
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Crafting mobile products that feel human, fast, and future-ready
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
                We partner with you to build high-impact apps that unlock growth, deepen loyalty, and stay resilient as your roadmap scales.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-emerald-200">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-emerald-100"
                >
                  Start your build
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
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/30 via-green-500/20 to-black/40 p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <SmartphoneIcon className="h-8 w-8 text-emerald-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Accelerate with confidence</h2>
                <p className="text-sm leading-relaxed text-gray-200">
                  Integrated analytics, crash reporting, and feature flagging ensure every release ships with clarity and control.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Stacks</p>
                    <p className="mt-3 text-base font-medium">React Native • SwiftUI • Kotlin</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Focus</p>
                    <p className="mt-3 text-base font-medium">Retention • Performance • Growth</p>
                  </div>
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
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Mobile craftsmanship from architecture to polish</h2>
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
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Journey</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A lifecycle tuned for sustainable growth</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {productJourney.map((step, index) => (
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
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200 transition group-hover:bg-emerald-500/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Phase 0{index + 1}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Experience Enhancers</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Add touches that customers rave about</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {experienceHighlights.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-emerald-500/10 to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-500/20 text-emerald-200">
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
              <p className="text-xs uppercase tracking-[0.3em] text-emerald-200">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Stack engineered for lasting products</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">The right tools for every release</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    Our toolkits blend native and cross-platform stacks with observability, experimentation, and secure DevOps practices baked in.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                        <ZapIcon className="h-4 w-4 text-emerald-200" />
                      </span>
                      Continuous delivery pipelines keep features flowing without disruption.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-500/20">
                        <ShieldIcon className="h-4 w-4 text-emerald-200" />
                      </span>
                      Security, privacy, and compliance checkpoints happen at every stage.
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
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-emerald-200"
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-emerald-500/30 via-green-500/40 to-teal-500/20 p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to launch a category-leading app?</h2>
                  <p className="text-sm leading-relaxed text-emerald-100">
                    Let’s build an experience your users can’t live without—from MVP validation to global rollouts.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-emerald-100"
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
