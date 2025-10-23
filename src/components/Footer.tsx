import React from 'react';
import { Link } from 'react-router-dom';
import { FacebookIcon, TwitterIcon, LinkedinIcon, InstagramIcon, MailIcon, PhoneIcon, MapPinIcon } from 'lucide-react';
import { TextCarousel } from './TextCarousel';

export function Footer() {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-primary-black to-gray-900 text-secondary-silver">
      <TextCarousel />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Innoaivators
            </h3>
            <p className="text-sm text-gray-400 mb-4">
              Transforming ideas into innovative digital solutions through
              cutting-edge technology and creative excellence.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-white transition">
                <FacebookIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <TwitterIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <LinkedinIcon className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-white transition">
                <InstagramIcon className="w-5 h-5" />
              </a>
            </div>
          </div>
          <div className="text-sm">
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/web-development" className="text-gray-400 hover:text-white transition">
                  Web Development
                </Link>
              </li>
              <li>
                <Link to="/app-development" className="text-gray-400 hover:text-white transition">
                  App Development
                </Link>
              </li>
              <li>
                <Link to="/iot-development" className="text-gray-400 hover:text-white transition">
                  IoT Development
                </Link>
              </li>
              <li>
                <Link to="/ai-automations" className="text-gray-400 hover:text-white transition">
                  AI Automations
                </Link>
              </li>
              <li>
                <Link to="/agentic-ai" className="text-gray-400 hover:text-white transition">
                  Agentic AI
                </Link>
              </li>
              <li>
                <Link to="/digital-marketing" className="text-gray-400 hover:text-white transition">
                  Digital Marketing
                </Link>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-400 hover:text-white transition">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </Link>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-white transition">
                  Blog
                </a>
              </li>
            </ul>
          </div>
          <div className="text-sm">
            <h4 className="text-white font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-3">
              <li className="flex items-start space-x-2">
                <MapPinIcon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <span className="text-gray-400">123 Innovation Street, Tech City, TC 12345</span>
              </li>
              <li className="flex items-center space-x-2">
                <PhoneIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <MailIcon className="w-5 h-5 flex-shrink-0" />
                <span className="text-gray-400">hello@innoaivators.com</span>
              </li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8 text-sm text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Innoaivators. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}