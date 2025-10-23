import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home } from './pages/Home';
import { About } from './pages/About';
import { WebDevelopment } from './pages/WebDevelopment';
import { AppDevelopment } from './pages/AppDevelopment';
import { IoTDevelopment } from './pages/IoTDevelopment';
import { AIAutomations } from './pages/AIAutomations';
import { AgenticAI } from './pages/AgenticAI';
import { DigitalMarketing } from './pages/DigitalMarketing';
import { Contact } from './pages/Contact';
export function AppRouter() {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/web-development" element={<WebDevelopment />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/iot-development" element={<IoTDevelopment />} />
        <Route path="/ai-automations" element={<AIAutomations />} />
        <Route path="/agentic-ai" element={<AgenticAI />} />
        <Route path="/digital-marketing" element={<DigitalMarketing />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>;
}