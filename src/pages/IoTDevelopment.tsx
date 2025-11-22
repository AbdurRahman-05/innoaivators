import React from 'react';
import { Footer } from '../components/Footer';
import { CpuIcon, WifiIcon, DatabaseIcon, GaugeIcon, ShieldCheckIcon, NetworkIcon, RadarIcon, WavesIcon, SatelliteIcon, ArrowRightIcon } from 'lucide-react';
import { motion } from 'framer-motion';
import { TechStackCarousel } from '../components/TechStackCarousel';

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
      accent: 'bg-emerald-500',
      span: 'md:col-span-2',
    },
    {
      icon: WifiIcon,
      title: 'Adaptive Connectivity',
      description: 'Multi-network orchestration across Wi-Fi, BLE, LoRaWAN, NB-IoT, and private 5G.',
      accent: 'bg-teal-500',
      span: 'md:col-span-1',
    },
    {
      icon: DatabaseIcon,
      title: 'Data Platforms',
      description: 'Streaming pipelines, time-series stores, and analytics dashboards tailored to each use case.',
      accent: 'bg-cyan-500',
      span: 'md:col-span-1',
    },
    {
      icon: GaugeIcon,
      title: 'Operational Visibility',
      description: 'Command centers, alerting, and remote device management for global fleets.',
      accent: 'bg-lime-500',
      span: 'md:col-span-2',
    },
    {
      icon: ShieldCheckIcon,
      title: 'Secure by Design',
      description: 'Hardware attestation, encrypted transport, and zero-trust policies guard every packet.',
      accent: 'bg-green-500',
      span: 'md:col-span-1',
    },
    {
      icon: NetworkIcon,
      title: 'Scalable Architecture',
      description: 'Modular microservices, digital twins, and APIs built to evolve with your roadmap.',
      accent: 'bg-sky-500',
      span: 'md:col-span-2',
    },
  ];

  const deploymentJourney = [
    {
      icon: RadarIcon,
      title: 'Discovery & Blueprint',
      description: 'Assess environments, compliance requirements, and ROI targets to architect the right solution.',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: CpuIcon,
      title: 'Prototype & Validate',
      description: 'Rapid PoCs align hardware, firmware, and cloud integrations before scaling to pilots.',
      color: 'text-teal-400',
      borderColor: 'border-teal-500/30',
    },
    {
      icon: WavesIcon,
      title: 'Connect & Orchestrate',
      description: 'Provision secure fleets, implement observability, and automate device lifecycle management.',
      color: 'text-cyan-400',
      borderColor: 'border-cyan-500/30',
    },
    {
      icon: SatelliteIcon,
      title: 'Scale & Optimize',
      description: 'Expand coverage, fine-tune models, and maximize insights with continuous improvement loops.',
      color: 'text-lime-400',
      borderColor: 'border-lime-500/30',
    },
  ];

  const technologies = [
    'AWS IoT Core', 'Azure IoT Hub', 'Google Cloud IoT', 'MQTT', 'OPC UA',
    'Grafana', 'Kubernetes', 'Rust', 'Node-RED', 'InfluxDB', 'TensorFlow Lite', 'Fleet Hub',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#050A05]">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#064e3b_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#0f766e_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 text-sm font-semibold tracking-wide uppercase">
              <CpuIcon className="w-4 h-4" />
              <span>IoT Innovation Studio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Connecting the <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-teal-400">Physical World</span> to Digital Intelligence.
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We design secure, scalable IoT ecosystems that drive efficiency. From edge devices to cloud analytics, we orchestrate the future of connected operations.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Launch Initiative
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
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-emerald-500/20">
              <img
                src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop"
                alt="IoT Hardware"
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
                  <div className="w-10 h-10 rounded-full bg-emerald-500/20 flex items-center justify-center">
                    <WifiIcon className="w-5 h-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm font-bold text-white">Signal Strong</div>
                    <div className="text-xs text-gray-400">Latency: 12ms</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-emerald-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-teal-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION (BENTO GRID) --- */}
      <section className="py-32 bg-[#050A08] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-emerald-500/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-emerald-400 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineered for Resilience</h3>
            <p className="text-gray-400 text-lg">Robust solutions built to withstand the demands of industrial and commercial environments.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {capabilities.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ scale: 1.02 }}
                className={`group relative p-8 rounded-3xl bg-[#0A120F] border border-white/5 hover:border-white/10 transition-all overflow-hidden flex flex-col justify-between ${feature.span}`}
              >
                <div className={`absolute top-0 right-0 w-32 h-32 ${feature.accent} opacity-10 blur-[50px] group-hover:opacity-20 transition-opacity`} />

                <div className="relative z-10">
                  <div className={`w-12 h-12 rounded-xl ${feature.accent} bg-opacity-10 flex items-center justify-center mb-6`}>
                    <feature.icon className={`w-6 h-6 text-white`} />
                  </div>

                  <h4 className="text-xl font-bold text-white mb-2">{feature.title}</h4>
                  <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* --- PROCESS SECTION --- */}
      <section id="process" className="py-32 bg-[#050A05] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-teal-400 uppercase mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">From Prototype to <br />Global Fleet</h3>

              <div className="space-y-8">
                {deploymentJourney.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl border ${step.borderColor} bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== deploymentJourney.length - 1 && (
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
                  src="https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop"
                  alt="IoT Deployment"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-emerald-900/20 mix-blend-overlay" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK CAROUSEL --- */}
      <section className="py-32 bg-gradient-to-b from-[#050A08] to-[#050A05]">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-white mb-4">Powered by Industrial Grade Tech</h3>
            <p className="text-gray-400">Battle-tested protocols and infrastructure.</p>
          </div>

          <TechStackCarousel technologies={technologies} />
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-emerald-900 via-teal-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Connect?</h2>
            <p className="text-xl text-emerald-200 mb-12">
              Let's build the connected infrastructure that powers your business. Schedule a strategy session today.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-emerald-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
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
