import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import { ClientCarousel } from '../components/ClientCarousel';
import ThreeDScrollTriggerRow, { ThreeDScrollTriggerContainer } from '../components/ThreeDScrollTrigger';
import Galaxy from '../components/Galaxy';
import { CodeIcon, SmartphoneIcon, CpuIcon, BrainCircuitIcon, TrendingUpIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
import { animate, motion, useInView, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation as SwiperNavigation, EffectFade } from 'swiper/modules';
import aiAutomationImage from '../services/ai automation.jpg';
import iotImage from '../services/digital marketting.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

type Testimonial = {
  quote: string;
  name: string;
  role: string;
  company: string;
};

type Stat = {
  value: number;
  suffix?: string;
  label: string;
  duration?: number;
};

const CountUp: React.FC<{
  target: number;
  suffix?: string;
  duration?: number;
  className?: string;
}> = ({ target, suffix = '', duration = 2, className }) => {
  const ref = useRef<HTMLSpanElement | null>(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const controls = animate(0, target, {
      duration,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: latest => setCurrent(Math.round(latest)),
      onComplete: () => setCurrent(target)
    });
    return () => controls.stop();
  }, [inView, target, duration]);

  return (
    <span ref={ref} className={className}>
      {`${current.toLocaleString('en-US')}${suffix}`}
    </span>
  );
};

export function Home() {
  const services = [
    {
      title: 'Web Development',
      description: 'Custom websites and web applications built with modern technologies for exceptional user experiences.',
      icon: CodeIcon,
      link: '/web-development',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: 'https://images.unsplash.com/photo-1542831371-29b0f74f9713'
    },
    {
      title: 'App Development',
      description: 'Native and cross-platform mobile applications that engage users and drive business growth.',
      icon: SmartphoneIcon,
      link: '/app-development',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: 'https://images.unsplash.com/photo-1607252650355-f7fd0460ccdb'
    },
    {
      title: 'IoT Development',
      description: 'Connected devices and smart solutions that transform physical environments into intelligent ecosystems.',
      icon: CpuIcon,
      link: '/iot-development',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: iotImage
    },
    {
      title: 'AI Automations',
      description: 'Intelligent automation solutions that streamline operations and boost productivity.',
      icon: BrainCircuitIcon,
      link: '/ai-automations',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: aiAutomationImage
    },
    {
      title: 'Digital Marketing',
      description: 'Data-driven marketing strategies that amplify your brand and drive measurable results.',
      icon: TrendingUpIcon,
      link: '/digital-marketing',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: 'https://images.unsplash.com/photo-1557862921-37829c790f19'
    }
  ];

  const testimonials = useMemo<Testimonial[]>(
    () => [
      {
        quote: 'Innoaivators delivered a seamless automation suite that boosted our operational efficiency by 40%.',
        name: 'Aarav Menon',
        role: 'Director of Operations',
        company: 'Vertex Logistics'
      },
      {
        quote: 'The team turned our fragmented data into actionable insights within weeks.',
        name: 'Anika Sharma',
        role: 'Head of Product',
        company: 'NexWave Analytics'
      },
      {
        quote: 'Our app launch timeline was halved without compromising quality or performance.',
        name: 'Rahul Kapoor',
        role: 'CTO',
        company: 'Skyline Fintech'
      },
      {
        quote: 'Their design thinking and engineering excellence set a new bar for our digital initiatives.',
        name: 'Priya Desai',
        role: 'Chief Innovation Officer',
        company: 'Quantum Retail'
      },
      {
        quote: 'We now offer personalized experiences to millions of users thanks to their AI expertise.',
        name: 'Ishaan Verma',
        role: 'VP Customer Experience',
        company: 'Aura Media'
      },
      {
        quote: 'The IoT integration was flawless and future-proof, giving us confidence to scale.',
        name: 'Maya Krishnan',
        role: 'Head of Smart Infrastructure',
        company: 'UrbanGrid'
      },
      {
        quote: 'Their agile delivery ensured every stakeholder stayed aligned and confident.',
        name: 'Vikram Patel',
        role: 'Program Manager',
        company: 'Helios Manufacturing'
      },
      {
        quote: 'We saw a threefold increase in qualified leads after the new digital strategy launched.',
        name: 'Sneha Rao',
        role: 'Marketing Lead',
        company: 'Pulse Healthcare'
      },
      {
        quote: 'Their proactive support keeps our mission-critical systems resilient around the clock.',
        name: 'Rohan Iyer',
        role: 'Head of IT',
        company: 'BlueRiver Ventures'
      }
    ],
    []
  );

  const testimonialRows = useMemo<Testimonial[][]>(
    () => {
      const rows: Testimonial[][] = [[], [], []];
      testimonials.forEach((item, index) => {
        rows[index % 3].push(item);
      });
      return rows;
    },
    [testimonials]
  );

  const whatWeDo = useMemo(
    () => [
      {
        title: 'Discover',
        description: 'We partner with you to uncover opportunities through market research, competitor analysis, and stakeholder workshops.',
        icon: BrainCircuitIcon
      },
      {
        title: 'Design',
        description: 'We craft human-centered experiences backed by data-informed UX, visual prototyping, and rapid iteration.',
        icon: SmartphoneIcon
      },
      {
        title: 'Build',
        description: 'We engineer scalable platforms using resilient architectures, automation, and rigorous quality practices.',
        icon: CodeIcon
      },
      {
        title: 'Accelerate',
        description: 'We activate growth with targeted launches, intelligent analytics, and ongoing optimization initiatives.',
        icon: TrendingUpIcon
      }
    ],
    []
  );

  const stats = useMemo<Stat[]>(
    () => [
      { value: 500, suffix: '+', label: 'Projects Completed', duration: 2 },
      { value: 200, suffix: '+', label: 'Happy Clients', duration: 2.2 },
      { value: 50, suffix: '+', label: 'Team Members', duration: 2.4 },
      { value: 99, suffix: '%', label: 'Client Satisfaction', duration: 2.6 }
    ],
    []
  );

  const whyChooseUsRef = useRef(null);
  const { scrollYProgress: whyChooseUsScrollYProgress } = useScroll({
    target: whyChooseUsRef,
    offset: ['start end', 'end start'],
  });
  const whyChooseUsScale = useTransform(whyChooseUsScrollYProgress, [0, 1], [0.8, 1]);
  const whyChooseUsOpacity = useTransform(whyChooseUsScrollYProgress, [0, 1], [0.5, 1]);



  return (
    <div className="bg-primary-black text-white">

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center overflow-hidden">
        <Galaxy className="absolute inset-0 z-0" />
        <div className="absolute inset-0 -z-10 bg-black/40"></div>
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-secondary-silver mb-4"
          >
            Innovate, Create, Elevate
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl md:text-2xl text-gray-200 mb-8"
          >
            Your Partner in Digital Transformation and Intelligent Automation
          </motion.p>
          <motion.a
            href="/contact"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="bg-primary-black text-white px-8 py-4 rounded-full font-semibold hover:shadow-lg transition-all pointer-events-auto"
          >
            Start Your Project
          </motion.a>
        </div>
      </section>

      <section className="relative bg-black/80 backdrop-blur-sm border-y border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <p className="text-sm uppercase tracking-[0.3em] text-secondary-silver/70">What We Do</p>
              <h2 className="mt-4 text-4xl md:text-5xl font-bold text-secondary-silver">We guide digital growth from discovery to acceleration</h2>
              <p className="mt-6 text-lg text-gray-300 max-w-xl">
                Our multidisciplinary teams uncover opportunities, craft immersive experiences, and build resilient platforms that empower organizations to lead in their industries.
              </p>
            </motion.div>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              {whatWeDo.map((item, index) => (
                <div
                  key={item.title}
                  className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-900/70 to-black/80 p-6 border border-white/10 shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)]"
                >
                  <div className="flex items-center justify-center h-12 w-12 rounded-2xl bg-secondary-silver/10 text-secondary-silver">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold text-white">{item.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-gray-300">{item.description}</p>
                  <div className="absolute inset-0 rounded-3xl border border-white/5 pointer-events-none" />
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <CountUp
                  target={stat.value}
                  suffix={stat.suffix}
                  duration={stat.duration}
                  className="text-4xl font-bold text-secondary-silver"
                />
                <p className="text-gray-400">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8 bg-black bg-opacity-50">
        <div className="absolute inset-0 -z-10">
          <Swiper
            modules={[Autoplay, EffectFade]}
            effect="fade"
            autoplay={{
              delay: 3000,
              disableOnInteraction: false,
            }}
            loop={true}
            className="h-full w-full"
          >
            <SwiperSlide>
              <img src={aiAutomationImage} alt="AI Automation" className="h-full w-full object-cover" />
            </SwiperSlide>
            <SwiperSlide>
              <img src={iotImage} alt="IoT" className="h-full w-full object-cover" />
            </SwiperSlide>
          </Swiper>
        </div>
        <div className="absolute inset-0 bg-black bg-opacity-80 backdrop-blur-sm"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-secondary-silver mb-4">
              Our Services
            </h2>
            <p className="text-xl text-gray-200 max-w-2xl mx-auto">
              Comprehensive digital solutions tailored to your unique business
              needs
            </p>
          </motion.div>
          <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            slidesPerView={3}
            loop={true}
            coverflowEffect={{
              rotate: 30,
              stretch: 0,
              depth: 200,
              modifier: 1,
              slideShadows: true,
            }}
            pagination={{ clickable: true }}
            navigation={true}
            modules={[EffectCoverflow, Pagination, SwiperNavigation, Autoplay]}
            autoplay={{
              delay: 2000,
              disableOnInteraction: false,
            }}
            className="mySwiper"
          >
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard {...service} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* Why Choose Us */}
      <div ref={whyChooseUsRef} className="relative z-0">
        <motion.section
          style={{
            scale: whyChooseUsScale,
            opacity: whyChooseUsOpacity,
          }}
          className="bg-black py-20 px-4 sm:px-6 lg:px-8"
        >
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl md:text-5xl font-bold text-secondary-silver mb-6">
                Why Choose Innoaivators?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                We combine technical expertise with creative innovation to
                deliver exceptional results that exceed expectations.
              </p>
              <motion.div
                className="space-y-4"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.1 }}
              >
                {[
                  'Expert team with 10+ years of experience',
                  'Cutting-edge technology stack',
                  'Agile development methodology',
                  '24/7 support and maintenance',
                  'Transparent communication',
                  'On-time, on-budget delivery',
                ].map((item, index) => (
                  <motion.div
                    key={index}
                    className="flex items-center space-x-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <CheckCircleIcon className="w-6 h-6 text-secondary-silver flex-shrink-0" />
                    <span className="text-white">{item}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="rounded-3xl p-8 text-primary-black bg-gray-800">
                <h3 className="text-2xl font-bold mb-4 text-white">Ready to innovate?</h3>
                <p className="mb-6 text-gray-300">
                  Let's discuss how we can help transform your business with
                  technology.
                </p>
                <a href="/contact" className="inline-flex items-center bg-primary-black text-white px-6 py-3 rounded-full font-semibold hover:shadow-lg transition-all group">
                  <span>Get in Touch</span>
                  <ArrowRightIcon className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </a>
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>
      </div>

      <ClientCarousel />

      <section className="bg-black py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl md:text-4xl font-bold text-secondary-silver">Testimonials</h3>
            <p className="mt-4 text-gray-400">What our partners say about collaborating with Innoaivators</p>
          </div>
          <ThreeDScrollTriggerContainer className="space-y-8">
            {testimonialRows.map((row, rowIndex) => (
              <ThreeDScrollTriggerRow
                key={rowIndex}
                baseVelocity={rowIndex % 2 === 0 ? 22 : 16}
                direction={rowIndex % 2 === 0 ? 1 : -1}
                className="py-4"
              >
                {row.map((testimonial, index) => (
                  <div
                    key={`${testimonial.name}-${index}`}
                    className="mx-4 w-80 max-w-sm rounded-3xl border border-white/10 bg-gradient-to-br from-gray-900/80 via-gray-800/60 to-black/80 p-6 backdrop-blur-lg shadow-[0_24px_48px_-24px_rgba(0,0,0,0.85)] flex flex-col justify-between overflow-hidden"
                  >
                    <p className="mb-6 text-sm leading-relaxed text-gray-200 text-pretty">{testimonial.quote}</p>
                    <div className="space-y-1">
                      <p className="text-lg font-semibold text-secondary-silver">{testimonial.name}</p>
                      <p className="text-sm text-gray-400">{testimonial.role}</p>
                      <p className="text-xs uppercase tracking-[0.3em] text-gray-500">{testimonial.company}</p>
                    </div>
                  </div>
                ))}
              </ThreeDScrollTriggerRow>
            ))}
          </ThreeDScrollTriggerContainer>
        </div>
      </section>

    </div>
  );
}