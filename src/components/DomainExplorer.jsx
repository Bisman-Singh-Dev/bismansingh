import React, { useState } from 'react';
import OptionWheel from './OptionWheel';
import BorderGlow from './BorderGlow';
import { Layers, ArrowRight } from 'lucide-react';
import './DomainExplorer.css';

const DOMAIN_DATA = [
  {
    tag: 'Autonomous Robotics',
    title: 'IPRV — Indian Pothole Recovery Vehicle',
    desc: 'An autonomous road patrolling rover with Rocker-Bogie Mars rover suspension, 360° RPLIDAR A1M8 mapping, Raspberry Pi 4 vision processing, and automatic POP cold-mix dispensing nozzle for pothole recovery in Ghaziabad/Indirapuram.',
    pills: ['Raspberry Pi 4', 'Arduino MEGA', 'RPLIDAR A1M8', 'Neo-6M GPS', 'POP Dispenser', '2x 12V 30Ah'],
    link: '#hardware'
  },
  {
    tag: 'Computer Vision & Deep Learning',
    title: 'YOLO11 Road Hazard Detection & Scoring',
    desc: 'Trained on 4,719 high-resolution road frames with 7,340 annotations. Implements C3k2 attention blocks, anchor-free heads, real-time FPS telemetry HUD, and automated Critical/Moderate/Minor damage surface area classifier.',
    pills: ['YOLO11 / YOLOv8', 'PyTorch 2.x', '4,719 Images', 'GIS Telemetry', 'ONNX / TensorRT'],
    link: '#software'
  },
  {
    tag: 'HCI & Computer Vision',
    title: 'Bloomy — AI Virtual Gesture Mouse Studio',
    desc: 'Converts any standard webcam into a zero-latency desktop mouse using MediaPipe 21-point 3D hand tracking, anti-jitter deadzones (3.5px), handshake swift Alt+Tab switcher, and rock-gesture app launcher.',
    pills: ['MediaPipe 3D', 'OpenCV', 'Python', 'Sub-Pixel Deadzone', 'Whisper Flow UI'],
    link: 'https://github.com/Bisman-Singh-Dev/Hand-Movement-Detected-Working-Mouse'
  },
  {
    tag: 'EdTech Venture & Startup',
    title: 'DreamCollege — Pathway to Your Dream School',
    desc: 'A comprehensive college application guidance ecosystem founded by Bisman Singh. Connecting high-school students with top university guidance, scholarship roadmaps, mentor matching, and peer community.',
    pills: ['Founder & Dev', 'React / Next.js', 'Guidance Platform', 'Global Universities'],
    link: 'https://www.dreamcollege.co.in'
  },
  {
    tag: 'Edge Healthcare AI',
    title: 'VitalLens (RoboDoc) Diagnostic Assistant',
    desc: 'A browser-based AI medical assistant powered by Groq Whisper API for lightning-fast speech recognition, MediaPipe vision gestures, camera-based emergency triage scanning, and bilingual English/Hindi command parsing.',
    pills: ['Next.js App Router', 'Groq Whisper', 'MediaPipe Tasks', 'Bilingual AI'],
    link: 'https://vitallens-eight.vercel.app'
  },
  {
    tag: 'Olympiad Mathematics',
    title: 'IOQM 2026 & Mathematical Community',
    desc: 'Achieved 31/100 in the prestigious Indian Olympiad Qualifier in Mathematics (IOQM 2026). Founded and curated a high-level mathematics community on Telegram with 640+ active student problem solvers.',
    pills: ['IOQM: 31/100', '640+ Subscribers', 'Number Theory', 'Combinatorics', 'Geometry'],
    link: 'https://t.me/Olympians_India'
  },
  {
    tag: 'Aspirations & Future',
    title: 'Target: MIT, ISEF & Regeneron Innovation',
    desc: 'Dedicated to pursuing research and engineering at MIT in Robotics & Mechatronics. Preparing groundbreaking autonomous infrastructure solutions for the Regeneron International Science and Engineering Fair (ISEF).',
    pills: ['MIT Aspirant', 'ISEF Research', 'YYGS Scholar', 'Global Impact'],
    link: '#aspirations'
  }
];

const WHEEL_ITEMS = [
  '🤖 Robotics',
  '🧠 Vision',
  '🖱️ Gestures',
  '🎓 Venture',
  '🏥 Healthcare',
  '📐 Olympiad',
  '🎯 Aspirations'
];

export const DomainExplorer = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const activeDomain = DOMAIN_DATA[selectedIndex] || DOMAIN_DATA[0];

  return (
    <section className="domain-explorer-section">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Layers size={14} />
            <span>Interactive Domain Selector</span>
          </span>
          <h2 className="section-title">Core Engineering & Ventures</h2>
          <p className="section-desc">
            Use the kinetic rotary dial or drag with your mouse/touchpad to explore my primary focus areas across autonomous hardware, computer vision, startups, and mathematics.
          </p>
        </div>

        <div className="domain-grid">
          {/* Left: OptionWheel */}
          <div className="domain-wheel-container">
            <OptionWheel
              items={WHEEL_ITEMS}
              defaultSelected={0}
              onChange={(index) => setSelectedIndex(index)}
              fontSize={1.3}
              spacing={2.8}
              tilt={3}
              curve={0.5}
              blur={0.5}
              loop={true}
            />
            <div className="domain-wheel-hint">
              <span>↑ Scroll wheel, drag, or click items to switch</span>
            </div>
          </div>

          {/* Right: BorderGlow Dynamic Card */}
          <BorderGlow
            glowColor="22 100 60"
            backgroundColor="rgba(16, 20, 28, 0.9)"
            glowRadius={38}
          >
            <div className="domain-details-card">
              <span className="domain-tag">{activeDomain.tag}</span>
              <h3 className="domain-title">{activeDomain.title}</h3>
              <p className="domain-description">{activeDomain.desc}</p>

              <div className="domain-pill-list">
                {activeDomain.pills.map((pill, i) => (
                  <span key={i} className="domain-pill-item">
                    {pill}
                  </span>
                ))}
              </div>

              <div style={{ marginTop: '8px' }}>
                <a
                  href={activeDomain.link}
                  target={activeDomain.link.startsWith('http') ? '_blank' : '_self'}
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ padding: '10px 20px', fontSize: '0.875rem' }}
                >
                  <span>Explore In-Depth</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default DomainExplorer;
