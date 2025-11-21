import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WebDevelopment } from './pages/WebDevelopment';
import { AppDevelopment } from './pages/AppDevelopment';
import { IoTDevelopment } from './pages/IoTDevelopment';
import { AIAutomations } from './pages/AIAutomations';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { Contact } from './pages/Contact';
import { AdminLogin } from './pages/AdminLogin';
import { AdminDashboard } from './pages/AdminDashboard';
import { Layout } from './components/Layout';

export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout><Home /></Layout>} />
        <Route path="/about" element={<Layout><About /></Layout>} />
        <Route path="/web-development" element={<Layout><WebDevelopment /></Layout>} />
        <Route path="/app-development" element={<Layout><AppDevelopment /></Layout>} />
        <Route path="/iot-development" element={<Layout><IoTDevelopment /></Layout>} />
        <Route path="/ai-automations" element={<Layout><AIAutomations /></Layout>} />
        <Route path="/digital-marketing" element={<Layout><DigitalMarketing /></Layout>} />
        <Route path="/contact" element={<Layout><Contact /></Layout>} />
      </Routes>
    </BrowserRouter>;
}