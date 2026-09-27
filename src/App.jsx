import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import DomainExplorer from './components/DomainExplorer';
import VentureSection from './components/VentureSection';
import HardwareRoboticsSection from './components/HardwareRoboticsSection';
import SoftwareAISection from './components/SoftwareAISection';
import AchievementsSection from './components/AchievementsSection';
import AspirationsSection from './components/AspirationsSection';
import TerminalContactSection from './components/TerminalContactSection';
import Footer from './components/Footer';
import './App.css';

export function App() {
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', 'dark');
  }, []);

  return (
    <div className="portfolio-app-root">
      <Navbar />
      <main>
        <HeroSection />
        <DomainExplorer />
        <VentureSection />
        <HardwareRoboticsSection />
        <SoftwareAISection />
        <AchievementsSection />
        <AspirationsSection />
        <TerminalContactSection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
