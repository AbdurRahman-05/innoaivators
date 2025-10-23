import * as React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';

export function Navigation() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [servicesOpen, setServicesOpen] = React.useState(false);
  const location = useLocation();

  React.useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const services = [
    { name: 'Web Development', path: '/web-development' },
    { name: 'App Development', path: '/app-development' },
    { name: 'IoT Development', path: '/iot-development' },
    { name: 'AI Automations', path: '/ai-automations' },
    { name: 'Agentic AI', path: '/agentic-ai' },
    { name: 'Digital Marketing', path: '/digital-marketing' },
  ];

  const getLinkClass = (path) => {
    return `transition ${location.pathname === path ? 'text-white' : 'text-gray-300 hover:text-white'}`;
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-primary-black/80 backdrop-blur-lg shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <Link to="/" className="text-2xl font-bold text-secondary-silver">
            Innoaivators
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className={getLinkClass('/')}>
              Home
            </Link>
            <Link to="/about" className={getLinkClass('/about')}>
              About
            </Link>
            <div className="relative group">
              <button className="flex items-center space-x-1 text-gray-300 hover:text-white transition">
                <span>Services</span>
                <ChevronDownIcon className="w-4 h-4" />
              </button>
              <div className="absolute top-full left-0 mt-2 w-56 bg-primary-black rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                {services.map(service => (
                  <Link
                    key={service.path}
                    to={service.path}
                    className="block px-4 py-3 text-sm text-secondary-silver hover:bg-gray-800 hover:text-white first:rounded-t-lg last:rounded-b-lg transition"
                  >
                    {service.name}
                  </Link>
                ))}
              </div>
            </div>
            <Link to="/contact" className={getLinkClass('/contact')}>
              Contact
            </Link>
            <Link to="/contact" className="bg-secondary-silver text-primary-black px-6 py-2 rounded-full hover:bg-white hover:shadow-lg transition-all">
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <button onClick={() => setIsOpen(!isOpen)} className="md:hidden text-secondary-silver">
            {isOpen ? <XIcon className="w-6 h-6" /> : <MenuIcon className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <div className="md:hidden py-4 space-y-2 bg-primary-black/90 rounded-b-lg -mx-4 px-4">
            <Link to="/" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link to="/about" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
              About
            </Link>
            <div>
              <button onClick={() => setServicesOpen(!servicesOpen)} className="flex items-center justify-between w-full py-2 text-gray-300 hover:text-white">
                <span>Services</span>
                <ChevronDownIcon className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
              </button>
              {servicesOpen && (
                <div className="pl-4 space-y-1 mt-2">
                  {services.map(service => (
                    <Link
                      key={service.path}
                      to={service.path}
                      className="block py-2 text-sm text-secondary-silver hover:text-white"
                      onClick={() => setIsOpen(false)}
                    >
                      {service.name}
                    </Link>
                  ))}
                </div>
              )}
            </div>
            <Link to="/contact" className="block py-2 text-gray-300 hover:text-white" onClick={() => setIsOpen(false)}>
              Contact
            </Link>
            <Link
              to="/contact"
              className="block w-full bg-secondary-silver text-primary-black px-6 py-2 rounded-full text-center mt-4"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}
