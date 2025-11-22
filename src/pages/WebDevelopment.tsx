import React from 'react';
import { Footer } from '../components/Footer';
import { CodeIcon, LayoutIcon, ZapIcon, ShieldIcon, SearchIcon, SmartphoneIcon, PaletteIcon, LayersIcon, SparklesIcon, ArrowRightIcon, CheckCircleIcon, TerminalIcon, CpuIcon, GlobeIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function WebDevelopment() {
  const features = [
    {
      icon: LayoutIcon,
      title: 'Experience-led UI',
      description: 'Responsive interfaces crafted to feel effortless across every device, resolution, and interaction.',
      accent: 'bg-blue-500',
    },
    {
      icon: ZapIcon,
      title: 'Performance Obsessed',
      description: 'Edge-optimized builds, code splitting, and smart caching ensure instant responses worldwide.',
      accent: 'bg-amber-500',
    },
    {
      icon: ShieldIcon,
      title: 'Secure Foundations',
      description: 'Audited security, hardened infrastructure, and compliance-first development baked into every release.',
      accent: 'bg-emerald-500',
    },
    {
      icon: SmartphoneIcon,
      title: 'Omnichannel Ready',
      description: 'Unified experiences that adapt gracefully to mobile, desktop, kiosks, and progressive web apps.',
      accent: 'bg-purple-500',
    },
    {
      icon: LayersIcon,
      title: 'Composable Systems',
      description: 'Modular architectures that expand with your roadmap and integrate seamlessly with existing platforms.',
      accent: 'bg-cyan-500',
    },
    {
      icon: SparklesIcon,
      title: 'Continuous Evolution',
      description: 'Experimentation frameworks and data-rich feedback loops to ship, learn, and iterate faster.',
      accent: 'bg-pink-500',
    },
  ];

  const processSteps = [
    {
      icon: SearchIcon,
      title: 'Strategy & Discovery',
      description: 'We unpack business goals, audience behaviors, and competitive insights to chart an intentional roadmap.',
      color: 'text-blue-400',
      borderColor: 'border-blue-500/30',
    },
    {
      icon: PaletteIcon,
      title: 'Experience Design',
      description: 'Collaborative workshops move from flows to prototypes, aligning aesthetics with measurable outcomes.',
      color: 'text-purple-400',
      borderColor: 'border-purple-500/30',
    },
    {
      icon: CodeIcon,
      title: 'Engineering Sprints',
      description: 'Reusable components, automated testing, and CI/CD pipelines keep velocity high without sacrificing quality.',
      color: 'text-emerald-400',
      borderColor: 'border-emerald-500/30',
    },
    {
      icon: SparklesIcon,
      title: 'Launch & Iterate',
      description: 'Telemetry, A/B testing, and growth experiments transform releases into continuous optimization cycles.',
      color: 'text-amber-400',
      borderColor: 'border-amber-500/30',
    },
  ];

  const heroMetrics = [
    { value: '3 weeks', label: 'Average launch window' },
    { value: '32% ↑', label: 'Retention uplift post-launch' },
    { value: '98+', label: 'Accessibility score benchmarks' },
  ];

  const technologies = [
    'React', 'Next.js', 'TypeScript', 'Node.js', 'Express', 'MongoDB',
    'PostgreSQL', 'Tailwind CSS', 'GraphQL', 'AWS', 'Docker', 'Kubernetes',
  ];

  return (
    <div className="relative w-full min-h-screen overflow-hidden bg-primary-black text-white font-sans">

      {/* --- HERO SECTION --- */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0B0B15]">
        {/* Background Elements */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#1e1b4b_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_left,#312e81_0%,transparent_40%)]" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light" />

        <div className="container mx-auto px-6 relative z-10 grid lg:grid-cols-2 gap-16 items-center pt-20">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-300 text-sm font-semibold tracking-wide uppercase">
              <TerminalIcon className="w-4 h-4" />
              <span>Web Development Studio</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              Building <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-400">Digital Empires</span> One Line at a Time.
            </h1>

            <p className="text-lg text-gray-400 max-w-xl leading-relaxed">
              We craft pixel-perfect, high-performance websites that drive growth. From complex web apps to stunning marketing sites, we deliver excellence.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                href="/contact"
                className="px-8 py-4 bg-white text-black font-bold rounded-full shadow-[0_0_20px_rgba(255,255,255,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.5)] transition-all"
              >
                Start Building
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
            <div className="relative z-10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl shadow-indigo-500/20">
              <img
                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop"
                alt="Coding Setup"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 p-8">
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
                <div className="font-mono text-sm text-gray-300 bg-black/50 p-4 rounded-xl backdrop-blur-md border border-white/10">
                  <p><span className="text-purple-400">const</span> <span className="text-blue-400">future</span> = <span className="text-yellow-400">await</span> build(<span className="text-green-400">'dream'</span>);</p>
                </div>
              </div>
            </div>

            {/* Decorative Elements */}
            <div className="absolute -top-10 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/30 rounded-full blur-3xl" />
          </motion.div>
        </div>
      </section>

      {/* --- CAPABILITIES SECTION --- */}
      <section className="py-32 bg-[#0F0F1A] relative overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-px bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent" />

        <div className="container mx-auto px-6">
          <div className="text-center max-w-3xl mx-auto mb-20">
            <h2 className="text-sm font-bold tracking-[0.3em] text-indigo-400 uppercase mb-4">Capabilities</h2>
            <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">Engineering Meets Artistry</h3>
            <p className="text-gray-400 text-lg">We don't just write code; we architect experiences that leave a lasting impression.</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group relative p-8 rounded-3xl bg-[#181825] border border-white/5 hover:border-white/10 transition-all overflow-hidden"
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
      <section id="process" className="py-32 bg-[#0B0B15] relative">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-sm font-bold tracking-[0.3em] text-purple-400 uppercase mb-4">Our Process</h2>
              <h3 className="text-4xl md:text-5xl font-bold text-white mb-8">From Concept to <br />Launch</h3>

              <div className="space-y-8">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="flex gap-6 group">
                    <div className="flex-shrink-0">
                      <div className={`w-12 h-12 rounded-xl border ${step.borderColor} bg-white/5 flex items-center justify-center group-hover:bg-white/10 transition-colors`}>
                        <step.icon className={`w-6 h-6 ${step.color}`} />
                      </div>
                      {index !== processSteps.length - 1 && (
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
                  src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop"
                  alt="Team Collaboration"
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-purple-900/20 mix-blend-overlay" />
              </div>

              {/* Floating Card */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -left-10 bg-[#181825] p-6 rounded-2xl border border-white/10 shadow-xl max-w-xs"
              >
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-10 h-10 rounded-full bg-green-500/20 flex items-center justify-center">
                    <CheckCircleIcon className="w-5 h-5 text-green-500" />
                  </div>
                  <div>
                    <div className="text-white font-bold">Project On Track</div>
                    <div className="text-xs text-gray-400">Milestone 3 Completed</div>
                  </div>
                </div>
                <div className="w-full bg-white/10 rounded-full h-2">
                  <div className="bg-green-500 h-2 rounded-full w-[85%]" />
                </div>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* --- TECH STACK --- */}
      <section className="py-32 bg-gradient-to-b from-[#0F0F1A] to-[#0B0B15]">
        <div className="container mx-auto px-6">
          <div className="rounded-[3rem] bg-[#181825] border border-white/5 p-12 md:p-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10" />
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-indigo-500/20 rounded-full blur-[100px]" />

            <div className="relative z-10 grid lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-4xl font-bold text-white mb-6">Powered by Modern Tech</h3>
                <p className="text-gray-400 text-lg mb-10">
                  We leverage the latest frameworks and tools to build scalable, maintainable, and future-proof applications.
                </p>

                <div className="flex gap-4">
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm">
                    <CpuIcon className="w-8 h-8 text-blue-400 mb-2" />
                    <div className="text-sm font-bold text-white">High Performance</div>
                  </div>
                  <div className="p-4 rounded-2xl bg-black/30 border border-white/10 backdrop-blur-sm">
                    <GlobeIcon className="w-8 h-8 text-purple-400 mb-2" />
                    <div className="text-sm font-bold text-white">Global Scale</div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap content-start gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.1)" }}
                    className="px-6 py-3 rounded-xl bg-white/5 border border-white/10 text-gray-300 font-medium hover:text-white hover:border-white/30 transition-all cursor-default"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* --- CTA SECTION --- */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-900 via-purple-900 to-black" />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />

        <div className="container mx-auto px-6 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-white mb-8">Ready to Transform Your Vision?</h2>
            <p className="text-xl text-indigo-200 mb-12">
              Let's collaborate to build something extraordinary. Your digital journey starts here.
            </p>

            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="/contact"
              className="inline-flex items-center gap-3 px-10 py-5 bg-white text-indigo-900 font-bold text-lg rounded-full shadow-2xl hover:shadow-white/20 transition-all"
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
