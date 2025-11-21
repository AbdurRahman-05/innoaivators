import React from 'react';
import { Footer } from '../components/Footer';
import { CodeIcon, LayoutIcon, ZapIcon, ShieldIcon, SearchIcon, SmartphoneIcon, PaletteIcon, LayersIcon, SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function WebDevelopment() {
  const features = [
    {
      icon: LayoutIcon,
      title: 'Experience-led UI',
      description: 'Responsive interfaces crafted to feel effortless across every device, resolution, and interaction.',
      accent: 'from-purple-500/60 via-indigo-500/50 to-blue-500/40',
    },
    {
      icon: ZapIcon,
      title: 'Performance Obsessed',
      description: 'Edge-optimized builds, code splitting, and smart caching ensure instant responses worldwide.',
      accent: 'from-amber-400/60 via-orange-500/50 to-pink-500/40',
    },
    {
      icon: ShieldIcon,
      title: 'Secure Foundations',
      description: 'Audited security, hardened infrastructure, and compliance-first development baked into every release.',
      accent: 'from-emerald-400/60 via-teal-500/50 to-blue-500/40',
    },
    {
      icon: SmartphoneIcon,
      title: 'Omnichannel Ready',
      description: 'Unified experiences that adapt gracefully to mobile, desktop, kiosks, and progressive web apps.',
      accent: 'from-fuchsia-500/60 via-purple-500/50 to-indigo-500/40',
    },
    {
      icon: LayersIcon,
      title: 'Composable Systems',
      description: 'Modular architectures that expand with your roadmap and integrate seamlessly with existing platforms.',
      accent: 'from-sky-400/60 via-cyan-500/50 to-teal-500/40',
    },
    {
      icon: SparklesIcon,
      title: 'Continuous Evolution',
      description: 'Experimentation frameworks and data-rich feedback loops to ship, learn, and iterate faster.',
      accent: 'from-purple-500/60 via-violet-500/50 to-slate-500/40',
    },
  ];

  const processSteps = [
    {
      icon: SearchIcon,
      title: 'Strategy & Discovery',
      description: 'We unpack business goals, audience behaviors, and competitive insights to chart an intentional roadmap.',
    },
    {
      icon: PaletteIcon,
      title: 'Experience Design',
      description: 'Collaborative workshops move from flows to prototypes, aligning aesthetics with measurable outcomes.',
    },
    {
      icon: CodeIcon,
      title: 'Engineering Sprints',
      description: 'Reusable components, automated testing, and CI/CD pipelines keep velocity high without sacrificing quality.',
    },
    {
      icon: SparklesIcon,
      title: 'Launch & Iterate',
      description: 'Telemetry, A/B testing, and growth experiments transform releases into continuous optimization cycles.',
    },
  ];

  const heroMetrics = [
    { value: '3 weeks', label: 'Average launch window' },
    { value: '32% ↑', label: 'Retention uplift post-launch' },
    { value: '98+', label: 'Accessibility score benchmarks' },
  ];

  const experienceHighlights = [
    {
      icon: LayersIcon,
      title: 'Composable Delivery',
      description: 'Design systems and micro frontends that unlock rapid feature deployment across teams.',
    },
    {
      icon: ZapIcon,
      title: 'Insight-driven Decisions',
      description: 'Instrumentation pipelines fuel decisions with real-time product analytics and user intelligence.',
    },
    {
      icon: SmartphoneIcon,
      title: 'Adaptive Journeys',
      description: 'Context-aware personalization keeps every user journey relevant, delightful, and conversion-ready.',
    },
    {
      icon: ShieldIcon,
      title: 'Resilient Operations',
      description: 'Autoscaling infrastructure, zero-downtime deployments, and compliance-first workflows.',
    },
  ];

  const technologies = [
    'React',
    'Next.js',
    'TypeScript',
    'Node.js',
    'Express',
    'MongoDB',
    'PostgreSQL',
    'Tailwind CSS',
    'GraphQL',
    'AWS',
    'Docker',
    'Kubernetes',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white">
      <motion.div
        className="absolute -top-40 left-[-18rem] h-[28rem] w-[28rem] rounded-full bg-purple-500/20 blur-3xl"
        animate={{ scale: [1, 1.2, 1] }}
        transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-[-12rem] h-[30rem] w-[30rem] rounded-full bg-indigo-500/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 32, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-14rem] left-1/3 h-[26rem] w-[26rem] rounded-full bg-emerald-400/10 blur-3xl"
        animate={{ opacity: [0.5, 0.9, 0.5] }}
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-purple-200">
                <span className="h-2 w-2 rounded-full bg-purple-400" />
                Web Development Studio
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Architecting digital products that customers can’t put down
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
                We transform ambitious ideas into high-performing platforms with human-centered design, reliable engineering, and measurable impact built into every sprint.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-purple-200">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-purple-100"
                >
                  Start a project
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
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/30 via-indigo-600/20 to-black/40 p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <CodeIcon className="h-8 w-8 text-purple-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Blueprint to Build</h2>
                <p className="text-sm leading-relaxed text-gray-200">
                  Modular design systems, atomic components, and robust pipelines keep releases predictable while enabling bold experimentation.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Stack</p>
                    <p className="mt-3 text-base font-medium">TypeScript • Next.js • Tailwind</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Focus</p>
                    <p className="mt-3 text-base font-medium">Conversion • Accessibility • Speed</p>
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Capabilities</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Where strategy meets craft</h2>
              </div>
            </div>
            <div className="grid gap-8 md:grid-cols-2 xl:grid-cols-3">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.accent}`} />
                  <div className="relative z-10 space-y-5">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-black/40">
                      <feature.icon className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-200">{feature.description}</p>
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Process</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">A lifecycle tuned for velocity</h2>
              </div>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {processSteps.map((step, index) => (
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
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-200 transition group-hover:bg-purple-500/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Phase 0{index + 1}</p>
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
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Technology</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Stack engineered for scale</h2>
              </div>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Future-proof tooling</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    We assemble the right blend of frameworks, infra, and automation to accelerate launches today while keeping you flexible for tomorrow.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                        <ZapIcon className="h-4 w-4 text-purple-200" />
                      </span>
                      Edge-ready deployment, observability, and automated QA baked into every stack.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-purple-500/20">
                        <ShieldIcon className="h-4 w-4 text-purple-200" />
                      </span>
                      Security-first coding standards and DevSecOps guardrails protect every release.
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
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-purple-200"
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
            className="space-y-10"
          >
            <div className="flex items-center justify-between">
              <div>
                <p className="text-xs uppercase tracking-[0.3em] text-purple-200">Experience Enhancers</p>
                <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Real moments that make products unforgettable</h2>
              </div>
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
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-purple-500/20 text-purple-200">
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
          >
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-purple-500/30 via-indigo-600/40 to-blue-500/20 p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to accelerate your next release?</h2>
                  <p className="text-sm leading-relaxed text-purple-100">
                    Let’s partner on experiences that marry bold creative with bulletproof engineering. We’ll co-create a launch plan around your KPIs and keep momentum strong long after shipping.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-purple-100"
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
