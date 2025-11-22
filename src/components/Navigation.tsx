import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'IoT Development', path: '/iot-development' },
    { name: 'AI Automations', path: '/ai-automations' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
  ];

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled
          ? 'bg-primary-black/80 backdrop-blur-md border-b border-white/10 shadow-lg'
          : 'bg-transparent'
        }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link to="/" className="text-2xl font-bold text-secondary-silver hover:text-white transition-colors">
            Innoaivators
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`text-sm font-medium transition-colors duration-200 ${isActive(link.path) ? 'text-white' : 'text-secondary-silver hover:text-white'
                  }`}
              >
                {link.name}
              </Link>
            ))}

            {/* Services Dropdown */}
            <div className="relative group" onMouseEnter={() => setServicesOpen(true)} onMouseLeave={() => setServicesOpen(false)}>
              <button
                className={`flex items-center space-x-1 text-sm font-medium transition-colors duration-200 ${services.some(s => isActive(s.path)) ? 'text-white' : 'text-secondary-silver hover:text-white'
                  }`}
              >
                <span>Services</span>
                <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>

              <AnimatePresence>
                {servicesOpen && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 10 }}
                    transition={{ duration: 0.2 }}
                    className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-64 bg-primary-black/95 backdrop-blur-xl border border-white/10 rounded-xl shadow-2xl overflow-hidden"
                  >
                    <div className="py-2">
                      {services.map((service) => (
                        <Link
                          key={service.path}
                          to={service.path}
                          className={`block px-4 py-3 text-sm transition-colors ${isActive(service.path)
                              ? 'bg-white/10 text-white'
                              : 'text-secondary-silver hover:bg-white/5 hover:text-white'
                            }`}
                        >
                          {service.name}
                        </Link>
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            <Link
              to="/contact"
              className={`text-sm font-medium transition-colors duration-200 ${isActive('/contact') ? 'text-white' : 'text-secondary-silver hover:text-white'
                }`}
            >
              Contact
            </Link>

            <Link
              to="/contact"
              className="px-6 py-2.5 bg-white text-primary-black text-sm font-semibold rounded-full hover:bg-secondary-silver transition-all transform hover:scale-105 shadow-lg hover:shadow-white/20"
            >
              Get Started
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-secondary-silver hover:text-white transition-colors"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="md:hidden bg-primary-black/95 backdrop-blur-xl border-b border-white/10 overflow-hidden"
          >
            <div className="px-4 py-6 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className={`block text-lg font-medium ${isActive(link.path) ? 'text-white' : 'text-secondary-silver'
                    }`}
                >
                  {link.name}
                </Link>
              ))}

              <div className="space-y-3">
                <div className="text-lg font-medium text-secondary-silver">Services</div>
                <div className="pl-4 space-y-3 border-l border-white/10">
                  {services.map((service) => (
                    <Link
                      key={service.path}
                      to={service.path}
                      onClick={() => setIsOpen(false)}
                      className={`block text-base ${isActive(service.path) ? 'text-white' : 'text-gray-400'
                        }`}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              </div>

              <Link
                to="/contact"
                onClick={() => setIsOpen(false)}
                className={`block text-lg font-medium ${isActive('/contact') ? 'text-white' : 'text-secondary-silver'
                  }`}
              >
                Contact
              </Link>

              <div className="pt-4">
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="block w-full text-center px-6 py-3 bg-white text-primary-black font-bold rounded-xl hover:bg-secondary-silver transition-colors"
                >
                  Get Started
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
