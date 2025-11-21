import React, { useState, useRef, useEffect } from 'react';
import { Footer } from '../components/Footer';
import { MailIcon, PhoneIcon, MapPinIcon, SendIcon } from 'lucide-react';
import { motion } from 'framer-motion';

export function Contact() {
  const [step, setStep] = useState(0);
  const [messages, setMessages] = useState<{ sender: 'bot' | 'user'; text: string }[]>([]);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [inputValue, setInputValue] = useState('');
  const chatEndRef = useRef<null | HTMLDivElement>(null);

  const botQuestions = [
    "Hello! What's your name?",
    (name: string) => `Nice to meet you, ${name}! What's your email address?`,
    "Great! What can we help you with today?",
    "Thanks for your message! We'll get back to you soon."
  ];

  useEffect(() => {
    if (messages.length === 0) {
      setMessages([{ sender: 'bot', text: botQuestions[0] }]);
    }
  }, [messages.length]);

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
  };

  const handleSendMessage = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputValue.trim()) return;

    const userMessage = { sender: 'user' as 'user', text: inputValue };
    const newMessages = [...messages, userMessage];

    if (step === 0) {
      setFormData({ ...formData, name: inputValue });
      const nextQuestion = botQuestions[1](inputValue);
      newMessages.push({ sender: 'bot', text: nextQuestion });
      setStep(1);
    } else if (step === 1) {
      setFormData({ ...formData, email: inputValue });
      newMessages.push({ sender: 'bot', text: botQuestions[2] });
      setStep(2);
    } else if (step === 2) {
      setFormData({ ...formData, message: inputValue });
      newMessages.push({ sender: 'bot', text: botQuestions[3] });
      setStep(3);
      // Here you would typically send the form data to your backend
      console.log('Form submitted:', { ...formData, message: inputValue });
    }

    setMessages(newMessages);
    setInputValue('');
  };

  return (
    <div className="w-full min-h-screen bg-primary-black text-white">
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-secondary-silver">
                Get In Touch
              </span>
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Ready to start your next project? Let's discuss how we can help
              bring your ideas to life.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="bg-gray-800 rounded-2xl p-8 shadow-xl border border-secondary-silver h-full flex flex-col">
                <h2 className="text-3xl font-bold text-white mb-6 text-center">
                  Send us a message
                </h2>
                <div className="flex-grow bg-gray-900 rounded-lg flex flex-col h-96">
                  <div className="flex-grow p-4 overflow-y-auto">
                    {messages.map((msg, index) => (
                      <div key={index} className={`flex ${msg.sender === 'bot' ? 'justify-start' : 'justify-end'} mb-4`}>
                        <div className={`px-4 py-2 rounded-lg max-w-xs ${msg.sender === 'bot' ? 'bg-gray-700' : 'bg-secondary-silver text-primary-black'}`}>
                          {typeof msg.text === 'function' ? msg.text(formData.name) : msg.text}
                        </div>
                      </div>
                    ))}
                    <div ref={chatEndRef} />
                  </div>
                  {step < 3 && (
                    <div className="p-4">
                      <form onSubmit={handleSendMessage} className="flex items-center">
                        <input
                          type="text"
                          value={inputValue}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 bg-gray-700 border border-secondary-silver rounded-l-lg focus:ring-2 focus:ring-secondary-silver focus:border-transparent outline-none transition"
                          placeholder={step === 0 ? "Your name..." : (step === 1 ? "Your email..." : "Type your message...")}
                          autoFocus
                        />
                        <button
                          type="submit"
                          className="bg-secondary-silver text-primary-black px-6 py-3 rounded-r-lg font-semibold hover:shadow-xl transition-all"
                        >
                          <SendIcon className="w-6 h-6" />
                        </button>
                      </form>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4 }}
              className="space-y-8"
            >
              <div className="bg-secondary-silver rounded-2xl p-8 text-primary-black">
                <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Address</h4>
                      <p className="text-gray-800">
                        123 Innovation Street
                        <br />
                        Tech City, TC 12345
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Phone</h4>
                      <p className="text-gray-800">+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-primary-black/20 rounded-lg flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">Email</h4>
                      <p className="text-gray-800">hello@innoaivators.com</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="bg-primary-black rounded-2xl p-8 shadow-xl border border-secondary-silver">
                <h3 className="text-2xl font-bold text-white mb-4">
                  Office Hours
                </h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex justify-between">
                    <span>Monday - Friday</span>
                    <span className="font-semibold">9:00 AM - 6:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Saturday</span>
                    <span className="font-semibold">10:00 AM - 4:00 PM</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sunday</span>
                    <span className="font-semibold">Closed</span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

    </div>
  );
}
