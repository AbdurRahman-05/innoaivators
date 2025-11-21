import React from 'react';
import { Footer } from '../components/Footer';
import { BrainCircuitIcon, BotIcon, WorkflowIcon, ClockIcon, BarChart3Icon, ZapIcon, GaugeCircleIcon, ShieldIcon, Share2Icon } from 'lucide-react';
import { motion } from 'framer-motion';

export function AIAutomations() {
  const heroMetrics = [
    { value: '80%', label: 'Manual effort reduced' },
    { value: '4x', label: 'Throughput increase' },
    { value: '30 days', label: 'Average automation rollout' },
  ];

  const capabilities = [
    {
      icon: BotIcon,
      title: 'Autonomous Assistants',
      description: 'Conversational agents that triage, resolve, and escalate with natural language fluency.',
      accent: 'from-blue-500/60 via-indigo-500/50 to-purple-500/40',
    },
    {
      icon: WorkflowIcon,
      title: 'Workflow Orchestration',
      description: 'Event-driven automation that sequences complex, cross-team processes with zero friction.',
      accent: 'from-cyan-400/60 via-sky-500/50 to-emerald-500/40',
    },
    {
      icon: ClockIcon,
      title: 'Realtime Decisions',
      description: 'Stream processing and rule engines that respond to triggers in milliseconds.',
      accent: 'from-amber-400/60 via-orange-500/50 to-red-500/40',
    },
    {
      icon: BarChart3Icon,
      title: 'Predictive Insights',
      description: 'Forecasting models that surface optimizations, anomalies, and proactive interventions.',
      accent: 'from-violet-500/60 via-purple-500/50 to-blue-500/40',
    },
    {
      icon: GaugeCircleIcon,
      title: 'Observability',
      description: 'Unified dashboards with KPIs, SLAs, and feedback loops for every automation.',
      accent: 'from-slate-500/60 via-sky-500/50 to-cyan-500/40',
    },
    {
      icon: BrainCircuitIcon,
      title: 'Learning Systems',
      description: 'Continuous improvement through reinforcement learning and human-in-the-loop review.',
      accent: 'from-teal-400/60 via-emerald-500/50 to-lime-500/40',
    },
  ];

  const automationJourney = [
    {
      icon: Share2Icon,
      title: 'Discovery & Mapping',
      description: 'Identify high-leverage automation candidates, personas, and handoffs with measurable ROI targets.',
    },
    {
      icon: WorkflowIcon,
      title: 'Blueprint & Prototype',
      description: 'Design user journeys, data contracts, and governance rules before validating with live pilots.',
    },
    {
      icon: ShieldIcon,
      title: 'Secure Deployment',
      description: 'Implement automations with RBAC, audit trails, and compliance guardrails baked in.',
    },
    {
      icon: BarChart3Icon,
      title: 'Scale & Optimize',
      description: 'Instrument success metrics, run experiments, and expand automations across the enterprise.',
    },
  ];

  const automationPillars = [
    {
      icon: GaugeCircleIcon,
      title: 'Autonomous Monitoring',
      description: 'Closed-loop observability that self-heals workflows and prevents downtime.',
    },
    {
      icon: ShieldIcon,
      title: 'Trusted Governance',
      description: 'Policy-driven automations with audit trails, role-based access, and compliance controls.',
    },
    {
      icon: Share2Icon,
      title: 'Connected Ecosystems',
      description: 'Unified orchestration across CRMs, ERPs, and custom tools through secure APIs.',
    },
  ];

  const technologies = [
    'Make (Integromat)',
    'n8n',
    'Temporal',
    'AWS Step Functions',
    'Azure Logic Apps',
    'LangChain',
    'Dialogflow',
    'Rasa',
    'FastAPI',
    'TypeScript',
    'Pinecone',
    'Kafka',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white">
      <motion.div
        className="absolute -top-48 left-[-18rem] h-[30rem] w-[30rem] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/4 right-[-14rem] h-[34rem] w-[34rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 36, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-purple-500/10 blur-3xl"
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-blue-200">
                <span className="h-2 w-2 rounded-full bg-blue-400" />
                Automation Studio
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Orchestrate intelligent automation that never sleeps
              </h1>
              <p className="max-w-xl text-lg text-gray-300">
                We design and deploy AI-first automations that connect systems, empower teams, and keep operations running audibly fast.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-blue-200">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-blue-100"
                >
                  Start an automation pilot
                </a>
                <a
                  href="/process"
                  className="inline-flex items-center justify-center rounded-full border border-white/30 px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-1 hover:border-white"
                >
                  See how we work
                </a>
              </div>
            </div>
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/30 via-cyan-500/20 to-black/40 p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <BrainCircuitIcon className="h-8 w-8 text-blue-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Automation control tower</h2>
                <p className="text-sm leading-relaxed text-gray-200">
                  Unified monitoring, alerting, and override flows let humans supervise mission-critical automations without slowing velocity.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Focus</p>
                    <p className="mt-3 text-base font-medium">Customer ops • RevOps • ITSM</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Impact</p>
                    <p className="mt-3 text-base font-medium">Lower costs • Faster cycles</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">AI-powered automation without compromise</h2>
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
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Journey</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">From strategy to scaled automation</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {automationJourney.map((step, index) => (
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
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200 transition group-hover:bg-blue-500/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Phase 0{index + 1}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Pillars</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Resilient automation foundations</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {automationPillars.map((item, index) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-blue-500/20 text-blue-200">
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
              <p className="text-xs uppercase tracking-[0.3em] text-blue-200">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Stack built for intelligent automation</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Composable tooling, enterprise grade</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    We combine orchestrators, LLM platforms, and custom integrations to deliver scalable automations with uncompromising governance.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                        <ZapIcon className="h-4 w-4 text-blue-200" />
                      </span>
                      Event-driven triggers and fast feedback loops keep experiences responsive and adaptive.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-500/20">
                        <ShieldIcon className="h-4 w-4 text-blue-200" />
                      </span>
                      Enterprise security, compliance, and observability ensure trust at every step.
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
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-blue-200"
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-blue-500/30 via-cyan-500/40 to-purple-500/20 p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to unlock intelligent automation?</h2>
                  <p className="text-sm leading-relaxed text-blue-100">
                    Partner with us to deliver measurable ROI—from automated support funnels to mission-critical back-office workflows.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-blue-100"
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
