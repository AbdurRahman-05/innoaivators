import React from 'react';
import { StaggeredMenu } from './StaggeredMenu';
import { Footer } from './Footer';

export function Layout({ children }: { children: React.ReactNode }) {
  const menuItems = [
    { label: 'Home', ariaLabel: 'Home', link: '/' },
    { label: 'About', ariaLabel: 'About', link: '/about' },
    { label: 'Web Development', ariaLabel: 'Web Development', link: '/web-development' },
    { label: 'App Development', ariaLabel: 'App Development', link: '/app-development' },
    { label: 'IoT Development', ariaLabel: 'IoT Development', link: '/iot-development' },
    { label: 'AI Automations', ariaLabel: 'AI Automations', link: '/ai-automations' },
    { label: 'Digital Marketing', ariaLabel: 'Digital Marketing', link: '/digital-marketing' },
    { label: 'Contact', ariaLabel: 'Contact', link: '/contact' },
  ];

  const socialItems = [
      { label: 'Twitter', link: '#' },
      { label: 'Instagram', link: '#' },
      { label: 'LinkedIn', link: '#' },
  ];

  return (
    <div>
      <StaggeredMenu items={menuItems} socialItems={socialItems} isFixed={true} />
      <main>{children}</main>
      <Footer />
    </div>
  );
}
