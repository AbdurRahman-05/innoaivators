import React, { useRef, useEffect } from 'react';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { ServiceCard } from '../components/ServiceCard';
import { ClientCarousel } from '../components/ClientCarousel';
import { Testimonials } from '../components/Testimonials';
import { CodeIcon, SmartphoneIcon, CpuIcon, BrainCircuitIcon, SparklesIcon, TrendingUpIcon, CheckCircleIcon, ArrowRightIcon } from 'lucide-react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Swiper, SwiperSlide } from 'swiper/react';
import { EffectCoverflow, Pagination, Autoplay, Navigation as SwiperNavigation, EffectFade } from 'swiper/modules';
import aiAutomationImage from '../services/ai automation.jpg';
import aiAgentsImage from '../services/aiagents.jpg';
import iotImage from '../services/digital marketting.jpg';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

export function Home() {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
    }
  }, []);

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
      title: 'Agentic AI',
      description: 'Advanced AI agents that autonomously solve complex problems and make intelligent decisions.',
      icon: SparklesIcon,
      link: '/agentic-ai',
      gradient: 'from-gray-700 to-gray-900',
      backgroundImage: aiAgentsImage
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

  const stats = [
    { value: '500+', label: 'Projects Completed' },
    { value: '200+', label: 'Happy Clients' },
    { value: '50+', label: 'Team Members' },
    { value: '99%', label: 'Client Satisfaction' }
  ];

  const whyChooseUsRef = useRef(null);
  const { scrollYProgress: whyChooseUsScrollYProgress } = useScroll({
    target: whyChooseUsRef,
    offset: ["start end", "center center"],
  });

  const whyChooseUsScale = useTransform(
    whyChooseUsScrollYProgress,
    [0, 1],
    [0.8, 1]
  );
  const whyChooseUsOpacity = useTransform(
    whyChooseUsScrollYProgress,
    [0, 1],
    [0.5, 1]
  );

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center">
        <motion.video
          ref={videoRef}
          autoPlay
          loop
          muted
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.5, ease: "easeInOut" }}
          style={{
            position: "absolute",
            width: "100%",
            left: "50%",
            top: "50%",
            height: "100%",
            objectFit: "cover",
            transform: "translate(-50%, -50%)",
            zIndex: -1
          }}
        >
          <source src="/backgroundeffects/12922667_1920_1080_30fps.mp4" type="video/mp4" />
        </motion.video>
        
        <div className="relative z-20 max-w-7xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">
              <span className="text-secondary-silver">
                Innovation Meets
              </span>
              <br />
              <span className="text-white">Technology</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Transform your business with cutting-edge digital solutions. From
              AI to IoT, we bring your boldest ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="/contact" className="bg-secondary-silver text-primary-black px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl transition-all transform hover:scale-105">
                Start Your Project
              </a>
              <a href="/about" className="bg-primary-black text-white px-8 py-4 rounded-full text-lg font-semibold border-2 border-secondary-silver hover:border-white hover:text-white transition-all">
                Learn More
              </a>
            </div>
          </motion.div>

          {/* Stats */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-20"
          >
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl md:text-5xl font-bold text-secondary-silver mb-2">
                  {stat.value}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section
        className="py-20 px-4 sm:px-6 lg:px-8 relative"
      >
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
              <img src={aiAgentsImage} alt="AI Agents" className="h-full w-full object-cover" />
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

      <Testimonials />

      <Footer />
    </div>
  );
}