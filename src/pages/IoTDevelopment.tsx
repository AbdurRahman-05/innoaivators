import React from 'react';
import { Footer } from '../components/Footer';
import { CpuIcon, WifiIcon, DatabaseIcon, GaugeIcon, ShieldCheckIcon, NetworkIcon, RadarIcon, WavesIcon, SatelliteIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function IoTDevelopment() {
  const heroMetrics = [
    { value: '99.9%', label: 'Device uptime achieved' },
    { value: '60 days', label: 'Average deployment cycle' },
    { value: '12TB+', label: 'Data processed daily' },
  ];

  const capabilities = [
    {
      icon: CpuIcon,
      title: 'Edge Intelligence',
      description: 'Embedded ML models and rule engines that operate autonomously at the device layer.',
      accent: 'from-cyan-500/60 via-teal-500/50 to-blue-500/40',
    },
    {
      icon: WifiIcon,
      title: 'Adaptive Connectivity',
      description: 'Multi-network orchestration across Wi-Fi, BLE, LoRaWAN, NB-IoT, and private 5G.',
      accent: 'from-blue-500/60 via-indigo-500/50 to-slate-500/40',
    },
    {
      icon: DatabaseIcon,
      title: 'Data Platforms',
      description: 'Streaming pipelines, time-series stores, and analytics dashboards tailored to each use case.',
      accent: 'from-sky-400/60 via-cyan-500/50 to-teal-500/40',
    },
    {
      icon: GaugeIcon,
      title: 'Operational Visibility',
      description: 'Command centers, alerting, and remote device management for global fleets.',
      accent: 'from-emerald-500/60 via-teal-500/50 to-blue-500/40',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure by Design',
      description: 'Hardware attestation, encrypted transport, and zero-trust policies guard every packet.',
      accent: 'from-slate-500/60 via-blue-500/50 to-indigo-500/40',
    },
    {
      icon: NetworkIcon,
      title: 'Scalable Architecture',
      description: 'Modular microservices, digital twins, and APIs built to evolve with your roadmap.',
      accent: 'from-cyan-500/60 via-blue-500/50 to-purple-500/40',
    },
  ];

  const deploymentJourney = [
    {
      icon: RadarIcon,
      title: 'Discovery & Blueprint',
      description: 'Assess environments, compliance requirements, and ROI targets to architect the right solution.',
    },
    {
      icon: CpuIcon,
      title: 'Prototype & Validate',
      description: 'Rapid PoCs align hardware, firmware, and cloud integrations before scaling to pilots.',
    },
    {
      icon: WavesIcon,
      title: 'Connect & Orchestrate',
      description: 'Provision secure fleets, implement observability, and automate device lifecycle management.',
    },
    {
      icon: SatelliteIcon,
      title: 'Scale & Optimize',
      description: 'Expand coverage, fine-tune models, and maximize insights with continuous improvement loops.',
    },
  ];

  const solutionLayers = [
    {
      icon: RadarIcon,
      title: 'Edge Processing',
      description: 'Local inference, buffering, and policy enforcement reduce latency and bandwidth costs.',
    },
    {
      icon: WavesIcon,
      title: 'Connectivity Mesh',
      description: 'Self-healing networks automatically reroute traffic across cellular, satellite, and LPWAN.',
    },
    {
      icon: DatabaseIcon,
      title: 'Data Fabric',
      description: 'Unified data pipelines feed analytics, AI models, and enterprise systems in real time.',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Security Envelope',
      description: 'Device identity, firmware signing, and continuous monitoring protect every layer.',
    },
  ];

  const industries = [
    'Smart Manufacturing',
    'Energy & Utilities',
    'Supply Chain & Logistics',
    'Smart Cities',
    'Healthcare & MedTech',
    'Agriculture',
  ];

  const technologies = [
    'AWS IoT Core',
    'Azure IoT Hub',
    'Google Cloud IoT',
    'MQTT',
    'OPC UA',
    'Grafana',
    'Kubernetes',
    'Rust',
    'Node-RED',
    'InfluxDB',
    'TensorFlow Lite',
    'Fleet Hub',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white">
      <motion.div
        className="absolute -top-48 right-[-18rem] h-[30rem] w-[30rem] rounded-full bg-cyan-500/20 blur-3xl"
        animate={{ scale: [1, 1.18, 1] }}
        transition={{ duration: 16, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute top-1/3 left-[-14rem] h-[34rem] w-[34rem] rounded-full bg-blue-500/20 blur-3xl"
        animate={{ rotate: 360 }}
        transition={{ duration: 38, repeat: Infinity, ease: 'linear' }}
      />
      <motion.div
        className="absolute bottom-[-16rem] left-1/2 h-[28rem] w-[28rem] -translate-x-1/2 rounded-full bg-sky-400/10 blur-3xl"
        animate={{ opacity: [0.5, 0.85, 0.5] }}
        transition={{ duration: 20, repeat: Infinity, ease: 'easeInOut' }}
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
              <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-1 text-xs uppercase tracking-[0.3em] text-cyan-200">
                <span className="h-2 w-2 rounded-full bg-cyan-400" />
                IoT Innovation Studio
              </span>
              <h1 className="text-4xl font-semibold leading-tight sm:text-5xl md:text-6xl">
                Connect, monitor, and automate the physical world with confidence
              </h1>
              <p className="max-w-xl text-lg text-gray-200">
                We design and deploy secure IoT ecosystems—from edge devices to cloud analytics—that deliver actionable intelligence and transformative efficiency.
              </p>
              <div className="grid gap-6 sm:grid-cols-3">
                {heroMetrics.map((metric) => (
                  <motion.div
                    key={metric.label}
                    whileHover={{ y: -4 }}
                    className="rounded-2xl border border-white/10 bg-white/5 p-6"
                  >
                    <p className="text-3xl font-semibold text-white">{metric.value}</p>
                    <p className="mt-3 text-xs uppercase tracking-[0.25em] text-cyan-200">{metric.label}</p>
                  </motion.div>
                ))}
              </div>
              <div className="flex flex-wrap gap-4">
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-cyan-100"
                >
                  Launch an IoT initiative
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
              className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/30 via-blue-500/20 to-black/40 p-10 backdrop-blur-xl"
            >
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-10">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-white/10">
                  <CpuIcon className="h-8 w-8 text-cyan-200" />
                </div>
                <h2 className="text-2xl font-semibold text-white">Fleet observability at your fingertips</h2>
                <p className="text-sm leading-relaxed text-gray-200">
                  Custom telemetry dashboards, health scoring, and predictive maintenance workflows keep your operations proactive.
                </p>
                <div className="grid grid-cols-2 gap-4 text-sm text-gray-200">
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Focus</p>
                    <p className="mt-3 text-base font-medium">Industrial • Energy • Logistics</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Scale</p>
                    <p className="mt-3 text-base font-medium">From pilots to millions of devices</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Capabilities</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Engineered for resilience, security, and scale</h2>
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Journey</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">From prototype to full-scale IoT ecosystem</h2>
            </div>
            <div className="grid gap-6 lg:grid-cols-2">
              {deploymentJourney.map((step, index) => (
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
                      <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-200 transition group-hover:bg-cyan-500/30">
                        <step.icon className="h-6 w-6" />
                      </div>
                      <div>
                        <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Phase 0{index + 1}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Solution Layers</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Full-stack coverage from device to cloud</h2>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {solutionLayers.map((layer, index) => (
                <motion.div
                  key={layer.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -6 }}
                  className="relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
                >
                  <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/10 to-transparent" />
                  <div className="relative z-10 space-y-4">
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl bg-cyan-500/20 text-cyan-200">
                      <layer.icon className="h-6 w-6" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">{layer.title}</h3>
                    <p className="text-sm leading-relaxed text-gray-200">{layer.description}</p>
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Industry Expertise</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Purpose-built solutions for complex environments</h2>
            </div>
            <div className="flex flex-wrap gap-3">
              {industries.map((industry, index) => (
                <motion.span
                  key={industry}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.04 }}
                  className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200"
                >
                  {industry}
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
              <p className="text-xs uppercase tracking-[0.3em] text-cyan-200">Technology</p>
              <h2 className="mt-4 text-3xl font-semibold text-white sm:text-4xl">Stack tuned for resilient IoT operations</h2>
            </div>
            <div className="rounded-3xl border border-white/10 bg-white/5 p-10 backdrop-blur-xl">
              <div className="grid gap-8 lg:grid-cols-[1fr,1.3fr]">
                <div className="space-y-6">
                  <h3 className="text-2xl font-semibold text-white">Connected infrastructure, end to end</h3>
                  <p className="text-sm leading-relaxed text-gray-200">
                    From device firmware to cloud orchestration, we leverage proven platforms and custom engineering to keep your IoT ecosystem dependable.
                  </p>
                  <div className="flex flex-col gap-4 text-sm text-gray-200">
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20">
                        <GaugeIcon className="h-4 w-4 text-cyan-200" />
                      </span>
                      Real-time monitoring and predictive maintenance guard every production line.
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-cyan-500/20">
                        <ShieldCheckIcon className="h-4 w-4 text-cyan-200" />
                      </span>
                      Security automation keeps firmware, certificates, and policies continuously updated.
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
                      className="rounded-full border border-white/10 bg-black/40 px-4 py-2 text-xs font-medium uppercase tracking-[0.25em] text-cyan-200"
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
            <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-br from-cyan-500/30 via-blue-500/40 to-indigo-500/20 p-12 backdrop-blur-xl">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.18),rgba(0,0,0,0))]" />
              <div className="relative flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
                <div className="max-w-2xl space-y-4">
                  <h2 className="text-3xl font-semibold text-white sm:text-4xl">Ready to orchestrate the connected enterprise?</h2>
                  <p className="text-sm leading-relaxed text-cyan-100">
                    Partner with us to design secure, scalable IoT ecosystems that deliver measurable business outcomes.
                  </p>
                </div>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-primary-black transition hover:-translate-y-1 hover:bg-cyan-100"
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
