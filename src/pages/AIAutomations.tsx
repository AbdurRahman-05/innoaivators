import React from 'react';
import { Footer } from '../components/Footer';
import { BrainCircuitIcon, BotIcon, WorkflowIcon, ClockIcon, BarChart3Icon, ZapIcon, GaugeCircleIcon, ShieldIcon, Share2Icon, ArrowRightIcon, SparklesIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechStackCarousel } from '../components/TechStackCarousel';

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
      accent: 'bg-violet-500',
    },
    {
      icon: WorkflowIcon,
      title: 'Workflow Orchestration',
      description: 'Event-driven automation that sequences complex, cross-team processes with zero friction.',
      accent: 'bg-fuchsia-500',
    },
    {
      icon: ClockIcon,
      title: 'Realtime Decisions',
      description: 'Stream processing and rule engines that respond to triggers in milliseconds.',
      accent: 'bg-rose-500',
    },
    {
      icon: BarChart3Icon,
      title: 'Predictive Insights',
      description: 'Forecasting models that surface optimizations, anomalies, and proactive interventions.',
      accent: 'bg-amber-500',
    },
  ];

  const automationJourney = [
    {
      icon: Share2Icon,
      title: 'Discovery & Mapping',
      description: 'Identify high-leverage automation candidates, personas, and handoffs with measurable ROI targets.',
      color: 'text-violet-400',
      borderColor: 'border-violet-500/30',
    },
    {
      icon: WorkflowIcon,
      title: 'Blueprint & Prototype',
      description: 'Design user journeys, data contracts, and governance rules before validating with live pilots.',
      color: 'text-fuchsia-400',
      borderColor: 'border-fuchsia-500/30',
    },
    {
      icon: ShieldIcon,
      title: 'Secure Deployment',
      description: 'Implement automations with RBAC, audit trails, and compliance guardrails baked in.',
      color: 'text-rose-400',
      borderColor: 'border-rose-500/30',
    },
    {
      icon: BarChart3Icon,
      title: 'Scale & Optimize',
      description: 'Instrument success metrics, run experiments, and expand automations across the enterprise.',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
  ];

  const technologies = [
    'Make (Integromat)', 'n8n', 'Temporal', 'AWS Step Functions', 'Azure Logic Apps',
    'LangChain', 'Dialogflow', 'Rasa', 'FastAPI', 'TypeScript', 'Pinecone', 'Kafka',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0A050A]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#4c1d95_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#be185d_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-300 text-sm font-semibold tracking-wide uppercase">
              <BrainCircuitIcon className="w-4 h-4" />
              <span>Intelligent Automation Studio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Orchestrate <span className="text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-rose-400">Intelligence</span> at Scale.
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We design AI-first automations that empower teams. From conversational agents to complex workflows, we make your business run audibly fast.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Start Pilot
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
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-violet-500/20">
              <img
                src="https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop"
                alt="AI Automation"
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
                  <div className="w-10 h-10 rounded-full bg-violet-500/20 flex items-center justify-center">
                    <SparklesIcon className="w-5 h-5 text-violet-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">AI Active</div>
                    <div className="text-xs text-gray-400">Processing...</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-violet-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -right-10 w-40 h-40 bg-rose-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 bg-[#0F050F] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-violet-400 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Intelligent Automation</h3>
            <p className="text-gray-400 text-lg">We combine orchestrators, LLMs, and custom integrations to deliver scalable efficiency.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-[#150A15] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
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

      {/* --- PROCESS SECTION (VERTICAL TIMELINE) --- */}
      <section id="process" className="py-32 bg-[#0A050A] relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-rose-400 uppercase mb-4">Our Process</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white">From Strategy to Scaled AI</h3>
          </div>

          <div className="relative max-w-4xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-violet-500/50 to-transparent -translate-x-1/2 hidden md:block" />

            <div className="space-y-12 md:space-y-24">
              {automationJourney.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className={`relative flex flex-col md:flex-row gap-8 md:gap-0 items-center ${index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'}`}
                >
                  {/* Content Side */}
                  <div className={`flex-1 ${index % 2 === 0 ? 'md:text-right md:pr-12' : 'md:text-left md:pl-12'}`}>
                    <h4 className={`text-2xl font-bold text-white mb-2 group-hover:${step.color} transition-colors`}>{step.title}</h4>
                    <p className="text-gray-400">{step.description}</p>
                  </div>

                  {/* Center Node */}
                  <div className="relative z-10 flex-shrink-0">
                    <div className={`w-16 h-16 rounded-full border-2 ${step.borderColor} bg-[#0A050A] flex items-center justify-center shadow-[0_0_20px_rgba(139,92,246,0.3)]`}>
                      <step.icon className={`w-6 h-6 ${step.color}`} />
                    </div>
                  </div>

                  {/* Empty Side for Balance */}
                  <div className="flex-1 hidden md:block" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <section className="py-32 bg-gradient-to-b from-[#0F050F] to-[#0A050A]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Powered by Next-Gen AI</h3>
            <p className="text-gray-400">Orchestrators, LLMs, and custom integrations.</p>
          </div>

          <TechStackCarousel technologies={technologies} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900 via-fuchsia-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Automate?</h2>
            <p className="text-xl text-violet-200 mb-12">
              Unlock the power of AI for your business. Let's design a pilot that proves the value.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-violet-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
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
