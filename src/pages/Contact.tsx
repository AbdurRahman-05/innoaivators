import React, { useState, useRef, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon, MessageSquareIcon, GithubIcon, LinkedinIcon, TwitterIcon, ChevronDownIcon, GlobeIcon, RefreshCwIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Contact() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([]);
  const [isTyping, setIsTyping] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [inputValue, setInputValue] = useState('');
  const chatContainerRef = useRef<null | HTMLDivElement>(null);
  const [activeAccordion, setActiveAccordion] = useState<number | null>(null);

  const botQuestions = [
    "Hello there! 👋 I'm the InnoAI assistant. What's your name?",
    (name: string) => `Nice to meet you, ${name}! Could you share your email address so we can get back to you?`,
    "Perfect. Now, how can we help you today? Tell us about your project or inquiry.",
    "Thanks! We've received your message and will be in touch shortly. 🚀"
  ];

  const faqs = [
    {
      question: "What is your typical project timeline?",
      answer: "Timelines vary by scope, but a typical MVP takes 8-12 weeks. We work in 2-week sprints to deliver value fast."
    },
    {
      question: "Do you work with startups?",
      answer: "Absolutely! We love partnering with ambitious founders to build scalable products from day one."
    },
    {
      question: "What tech stack do you use?",
      answer: "We are experts in React, Node.js, Python/AI, and cloud platforms like AWS and Azure. We pick the right tool for the job."
    },
    {
      question: "How do you handle post-launch support?",
      answer: "We offer flexible retainer packages for maintenance, updates, and scaling your infrastructure as you grow."
    }
  ];

  useEffect(() => {
    if (messages.length === 0) {
      setIsTyping(true);
      setTimeout(() => {
        setIsTyping(false);
        setMessages([{ sender: 'bot', text: botQuestions[0] }]);
      }, 1000);
    }
  }, [messages.length]);

  // Scroll to bottom whenever messages change or typing starts
  useEffect(() => {
    if (chatContainerRef.current) {
      const { scrollHeight, clientHeight } = chatContainerRef.current;
      chatContainerRef.current.scrollTo({
        top: scrollHeight - clientHeight,
        behavior: 'smooth'
      });
    }
  }, [messages, isTyping]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user' as const, text: inputValue };
    const newMessages = [...messages, userMessage];
    setMessages(newMessages);
    setInputValue('');
    setIsTyping(true);

    // Simulate bot typing delay
    setTimeout(() => {
      setIsTyping(false);
      if (step === 0) {
        setFormData({ ...formData, name: inputValue });
        const nextQuestion = typeof botQuestions[1] === 'function' ? botQuestions[1](inputValue) : botQuestions[1];
        setMessages(prev => [...prev, { sender: 'bot', text: nextQuestion }]);
        setStep(1);
      } else if (step === 1) {
        setFormData({ ...formData, email: inputValue });
        setMessages(prev => [...prev, { sender: 'bot', text: botQuestions[2] as string }]);
        setStep(2);
      } else if (step === 2) {
        setFormData({ ...formData, message: inputValue });
        setMessages(prev => [...prev, { sender: 'bot', text: botQuestions[3] as string }]);
        setStep(3);
        console.log('Form submitted:', { ...formData, message: inputValue });
      }
    }, 1500);
  };

  const handleRestart = () => {
    setMessages([]);
    setStep(0);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <div className="relative w-full min-h-screen bg-[#05050A] text-white font-sans overflow-hidden">

      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/20 rounded-full blur-[120px] mix-blend-screen animate-pulse" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen animate-pulse" style={{ animationDelay: '2s' }} />
        <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay" />
      </div>

      <section className="relative pt-24 pb-12 md:pt-32 md:pb-20 px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-7xl mx-auto">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 md:mb-20"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium mb-6 backdrop-blur-sm">
              <MessageSquareIcon className="w-4 h-4 text-purple-400" />
              <span>Let's Start a Conversation</span>
            </div>
            <h1 className="text-4xl md:text-7xl font-bold mb-6 tracking-tight">
              Get in <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400">Touch</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Have a project in mind? We'd love to hear about it. Let's discuss how we can help bring your vision to life.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-12 gap-8 lg:gap-12">

            {/* Chat Interface */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
              className="lg:col-span-7 space-y-8"
            >
              <div className="bg-[#0F0F16]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-[60vh] min-h-[400px] flex flex-col relative group">
                {/* Chat Header */}
                <div className="p-4 md:p-6 border-b border-white/5 bg-white/5 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-gradient-to-br from-purple-500 to-blue-500 flex items-center justify-center text-white font-bold text-lg shadow-lg">
                        AI
                      </div>
                      <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#0F0F16]" />
                    </div>
                    <div>
                      <h3 className="font-bold text-white text-sm md:text-base">InnoAssistant</h3>
                      <p className="text-xs text-purple-300 flex items-center gap-1">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                        Online Now
                      </p>
                    </div>
                  </div>
                  <button
                    onClick={handleRestart}
                    className="p-2 rounded-full hover:bg-white/10 transition-colors text-gray-400 hover:text-white"
                    title="Restart Chat"
                  >
                    <RefreshCwIcon className="w-5 h-5" />
                  </button>
                </div>

                {/* Messages Area */}
                <div
                  ref={chatContainerRef}
                  className="flex-grow p-4 md:p-6 overflow-y-auto space-y-4 md:space-y-6 scrollbar-thin scrollbar-thumb-white/10 scrollbar-track-transparent"
                >
                  <AnimatePresence mode='popLayout'>
                    {messages.map((msg, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'}`}
                      >
                        <div className={`max-w-[85%] px-5 py-3 md:px-6 md:py-4 rounded-2xl text-sm md:text-base leading-relaxed shadow-lg ${msg.sender === 'bot'
                          ? 'bg-[#1A1A24] text-gray-200 rounded-tl-none border border-white/5'
                          : 'bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-tr-none'
                          }`}>
                          {msg.text}
                        </div>
                      </motion.div>
                    ))}
                    {isTyping && (
                      <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.9 }}
                        className="flex justify-start"
                      >
                        <div className="bg-[#1A1A24] px-4 py-3 rounded-2xl rounded-tl-none border border-white/5 flex items-center gap-1">
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
                          <span className="w-2 h-2 bg-gray-500 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                {/* Input Area */}
                <div className="p-4 bg-white/5 border-t border-white/5">
                  <form onSubmit={handleSendMessage} className="relative flex items-center gap-2 md:gap-3">
                    <input
                      type="text"
                      value={inputValue}
                      onChange={handleInputChange}
                      disabled={step > 2 || isTyping}
                      className="w-full px-4 py-3 md:px-6 md:py-4 bg-[#0A0A10] border border-white/10 rounded-full focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 outline-none transition-all text-white placeholder-gray-500 disabled:opacity-50 disabled:cursor-not-allowed text-sm md:text-base"
                      placeholder={step > 2 ? "Conversation complete" : "Type your message..."}
                      autoFocus
                    />
                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      disabled={!inputValue.trim() || step > 2 || isTyping}
                      className="p-3 md:p-4 bg-white text-black rounded-full font-bold hover:bg-gray-200 transition-colors disabled:opacity-50 disabled:cursor-not-allowed shadow-lg shadow-white/10 flex-shrink-0"
                    >
                      <SendIcon className="w-5 h-5" />
                    </motion.button>
                  </form>
                </div>
              </div>

              {/* Map Section */}
              <div className="bg-[#0F0F16]/80 backdrop-blur-xl rounded-3xl border border-white/10 shadow-2xl overflow-hidden h-80 relative group">
                <iframe
                  src="https://maps.google.com/maps?q=Madurai&t=&z=13&ie=UTF8&iwloc=&output=embed"
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: 'invert(90%) hue-rotate(180deg)' }}
                  allowFullScreen
                  loading="lazy"
                  title="Madurai Location"
                ></iframe>
              </div>
            </motion.div>

            {/* Info & FAQ Side */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="lg:col-span-5 space-y-6 md:space-y-8"
            >
              {/* Contact Card */}
              <div className="bg-[#0F0F16]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10 hover:border-white/20 transition-colors group">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6 md:mb-8 flex items-center gap-3">
                  <GlobeIcon className="w-5 h-5 md:w-6 md:h-6 text-blue-400" />
                  Contact Info
                </h3>

                <div className="space-y-4 md:space-y-6">
                  <a href="mailto:hello@innoaivators.com" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group/item">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-blue-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <MailIcon className="w-5 h-5 text-blue-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Email Us</div>
                      <div className="text-white font-medium text-sm md:text-base">hello@innoaivators.com</div>
                    </div>
                  </a>

                  <a href="tel:+15551234567" className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group/item">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-purple-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <PhoneIcon className="w-5 h-5 text-purple-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Call Us</div>
                      <div className="text-white font-medium text-sm md:text-base">+1 (555) 123-4567</div>
                    </div>
                  </a>

                  <div className="flex items-center gap-4 p-4 rounded-xl bg-white/5 hover:bg-white/10 transition-all group/item">
                    <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-pink-500/20 flex items-center justify-center group-hover/item:scale-110 transition-transform">
                      <MapPinIcon className="w-5 h-5 text-pink-400" />
                    </div>
                    <div>
                      <div className="text-xs text-gray-500 uppercase tracking-wider font-semibold">Visit Us</div>
                      <div className="text-white font-medium text-sm md:text-base">123 Innovation St, Tech City</div>
                    </div>
                  </div>
                </div>

                {/* Socials */}
                <div className="flex gap-4 mt-6 md:mt-8 pt-6 md:pt-8 border-t border-white/10">
                  {[GithubIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
                    <motion.a
                      key={i}
                      href="#"
                      whileHover={{ y: -5 }}
                      className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-white hover:text-black transition-all border border-white/10"
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  ))}
                </div>
              </div>

              {/* FAQ Accordion */}
              <div className="bg-[#0F0F16]/60 backdrop-blur-md rounded-3xl p-6 md:p-8 border border-white/10">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-6">Common Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="border-b border-white/5 last:border-0 pb-4 last:pb-0">
                      <button
                        onClick={() => setActiveAccordion(activeAccordion === index ? null : index)}
                        className="w-full flex justify-between items-center text-left py-2 hover:text-purple-400 transition-colors"
                      >
                        <span className="font-medium text-gray-200 text-sm md:text-base">{faq.question}</span>
                        <ChevronDownIcon
                          className={`w-5 h-5 text-gray-500 transition-transform duration-300 ${activeAccordion === index ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {activeAccordion === index && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: 'auto', opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden"
                          >
                            <p className="text-gray-400 text-sm py-2 leading-relaxed">
                              {faq.answer}
                            </p>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
