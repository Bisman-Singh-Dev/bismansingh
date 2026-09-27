import React, { useState } from 'react';
import { Cpu, ArrowUpRight, CheckCircle2, Navigation, Radio, BatteryCharging, Eye, MousePointer } from 'lucide-react';
import { GithubIcon } from './Icons';
import BorderGlow from './BorderGlow';
import MotionPathCanvas from './MotionPathCanvas';
import './HardwareRoboticsSection.css';

export const HardwareRoboticsSection = () => {
  const [activeSchematic, setActiveSchematic] = useState('concept'); // 'concept' | 'chassis' | 'full'
  const [activeGesture, setActiveGesture] = useState('point');

  const gestures = [
    { id: 'point', name: '👆 Point Index Finger', action: 'Glide Mouse Smoothly', feedback: 'Tracking Active: Moving Cursor with 3.5px sub-pixel deadzone' },
    { id: 'click', name: '🤏 Touch Index + Thumb', action: 'Instant Left Click', feedback: '🖱️ Left Click Triggered • Contact debounce: Active' },
    { id: 'right', name: '✌️ Middle Finger + Thumb', action: 'Instant Right Click', feedback: '🖱️ Right Click Triggered • Context Menu Displayed' },
    { id: 'rock', name: '🤘 Rock Symbol (Horns)', action: 'Launch Custom App', feedback: '⚡ App Opener: Simulates movement & double-clicks target app' },
    { id: 'swipe', name: '✋ Handshake Swift Swipe', action: 'Alt + Tab Switcher', feedback: '🔀 Swiped Right: Cycles through open Windows applications' },
    { id: 'scroll', name: '✌️ Two Fingers Vertical', action: 'Page Smooth Scroll', feedback: '📜 Two-Finger Scroll: Fluid viewport scrolling engaged' }
  ];

  const currentGestureObj = gestures.find(g => g.id === activeGesture) || gestures[0];

  return (
    <section className="hardware-section" id="hardware">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Cpu size={14} />
            <span>Robotics & Physical Systems</span>
          </span>
          <h2 className="section-title">Hardware & Autonomous Machines</h2>
          <p className="section-desc">
            Bridging algorithmic intelligence with physical actuators. From Mars rover suspension kinematics to 360° LiDAR telemetry and real-time HCI.
          </p>
        </div>

        {/* Feature 1: IPRV Autonomous Vehicle (Primary Flagship Project) */}
        <BorderGlow
          glowColor="22 100 60"
          backgroundColor="rgba(15, 19, 27, 0.9)"
          borderRadius={32}
          glowRadius={46}
        >
          <div className="iprv-hero-panel">
            <div className="iprv-top-grid">
              <div className="iprv-info">
                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                  <span className="badge-pill badge-pill--orange">Flagship Autonomous Rover</span>
                  <span className="badge-pill">Indirapuram Patrol Perimeter</span>
                </div>

                <h3 style={{ fontSize: 'clamp(1.75rem, 3vw, 2.35rem)', color: '#ffffff', letterSpacing: '-0.02em' }}>
                  IPRV — Indian Pothole Recovery Vehicle
                </h3>

                {/* Step 1 Complete Banner */}
                <div className="iprv-step-banner">
                  <CheckCircle2 size={20} color="#10b981" style={{ flexShrink: 0 }} />
                  <div>
                    <strong>Step 1 Complete:</strong> Trained & validated high-accuracy YOLO Pothole Detection model with live HUD alerts.{' '}
                    <a
                      href="https://github.com/Bisman-Singh-Dev/YOLO-Pothole-Detection-Model"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="iprv-step-link"
                    >
                      <span>Explore YOLO Model Repo</span>
                      <ArrowUpRight size={14} />
                    </a>
                  </div>
                </div>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  <strong style={{ color: '#ffffff' }}>Problem Statement:</strong> Potholes cause thousands of fatal accidents, vehicular destruction, and traffic gridlocks across Indian roads. Municipal maintenance is manual, slow, and reactive — repairing roads only after severe damage occurs.
                </p>

                <p style={{ color: 'var(--text-secondary)', lineHeight: 1.65 }}>
                  <strong style={{ color: '#ffffff' }}>Autonomous Solution:</strong> IPRV patrols designated municipal zones (e.g. Indirapuram, Ghaziabad) using GPS and AI computer vision to scan road surfaces in real-time. Upon detection, it halts, aligns, and dispenses fast-setting cold-mix POP. When payload weight runs low, it autonomously returns to its industrial base station to refill, then resumes at the exact GPS coordinate.
                </p>

                {/* Specs Grid */}
                <div className="iprv-specs-grid">
                  <div className="iprv-spec-box">
                    <div className="iprv-spec-title">Dual Microcontrollers</div>
                    <div className="iprv-spec-desc">Raspberry Pi 4 (AI/Vision) + Arduino MEGA (L298N Motors)</div>
                  </div>
                  <div className="iprv-spec-box">
                    <div className="iprv-spec-title">Sensors & Telemetry</div>
                    <div className="iprv-spec-desc">RPiLIDAR A1M8 (360° 12m view) + Neo-6M GPS Module</div>
                  </div>
                  <div className="iprv-spec-box">
                    <div className="iprv-spec-title">Suspension System</div>
                    <div className="iprv-spec-desc">6-Wheel Rocker-Bogie Mars Rover design (Zero springs, pivot arms)</div>
                  </div>
                  <div className="iprv-spec-box">
                    <div className="iprv-spec-title">Payload & Power</div>
                    <div className="iprv-spec-desc">Dual Weight Sensors + 2x 12V 30Ah Batteries (Drive + Backup)</div>
                  </div>
                </div>
              </div>

              {/* Right: Authentic Schematics Viewer from Bisman's PDF */}
              <div className="schematic-viewer-pod">
                <div className="schematic-tabs">
                  <button
                    className={`schematic-tab-btn ${activeSchematic === 'concept' ? 'active' : ''}`}
                    onClick={() => setActiveSchematic('concept')}
                  >
                    Concept
                  </button>
                  <button
                    className={`schematic-tab-btn ${activeSchematic === 'chassis' ? 'active' : ''}`}
                    onClick={() => setActiveSchematic('chassis')}
                  >
                    Chassis
                  </button>
                  <button
                    className={`schematic-tab-btn ${activeSchematic === 'full' ? 'active' : ''}`}
                    onClick={() => setActiveSchematic('full')}
                  >
                    Specs
                  </button>
                </div>

                <div className="schematic-display-window">
                  {activeSchematic === 'concept' && (
                    <img
                      src="/assets/iprv_concept_schematic.png"
                      alt="IPRV Concept Schematic with Rocker-Bogie Suspension"
                    />
                  )}
                  {activeSchematic === 'chassis' && (
                    <img
                      src="/assets/iprv_chassis_sketch.png"
                      alt="IPRV Underside Systems & Dispenser Sketch"
                    />
                  )}
                  {activeSchematic === 'full' && (
                    <img
                      src="/assets/iprv_page_2.png"
                      alt="IPRV Complete Technical Document Page 2"
                    />
                  )}
                </div>

                <span className="schematic-caption">
                  Technical schematics & engineering concept drawings by Bisman Singh
                </span>
              </div>
            </div>

            {/* Live SVG Motion Path Navigation Simulator */}
            <MotionPathCanvas />
          </div>
        </BorderGlow>

        {/* Secondary Hardware Grid: Bloomy Virtual Mouse & Fast Line Follower */}
        <div className="hardware-secondary-grid">
          {/* Bloomy Gesture Virtual Mouse */}
          <BorderGlow
            glowColor="180 100 50"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={24}
          >
            <div className="hardware-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="badge-pill badge-pill--cyan">HCI & Computer Vision</span>
                </div>
                <a
                  href="https://github.com/Bisman-Singh-Dev/Hand-Movement-Detected-Working-Mouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn-icon"
                  title="View on GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  Bloomy — AI Virtual Gesture Mouse
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  Turns any standard webcam into a zero-latency desktop mouse with 21-point MediaPipe 3D tracking, sub-pixel deadzones (3.5px), and a floating Whisper Flow pill UI.
                </p>
              </div>

              {/* Interactive Gesture Simulator */}
              <div>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)', textTransform: 'uppercase' }}>
                  Interactive Gesture Simulator (Click to test):
                </span>
                <div className="gesture-interactive-grid">
                  {gestures.map((g) => (
                    <button
                      key={g.id}
                      onClick={() => setActiveGesture(g.id)}
                      className={`gesture-btn ${activeGesture === g.id ? 'active' : ''}`}
                    >
                      <span className="gesture-name">{g.name}</span>
                      <span className="gesture-action">{g.action}</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="gesture-feedback-box">
                <MousePointer size={16} color="#00e5ff" style={{ flexShrink: 0 }} />
                <span>{currentGestureObj.feedback}</span>
              </div>

              <div style={{ marginTop: 'auto' }}>
                <a
                  href="https://github.com/Bisman-Singh-Dev/Hand-Movement-Detected-Working-Mouse"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                  style={{ width: '100%' }}
                >
                  <GithubIcon size={16} />
                  <span>Explore Bloomy on GitHub ↗</span>
                </a>
              </div>
            </div>
          </BorderGlow>

          {/* Fast Line Follower Robot (With Reserved Image Slot) */}
          <BorderGlow
            glowColor="22 100 60"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={24}
          >
            <div className="hardware-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span className="badge-pill badge-pill--orange">High-Speed Robotics</span>
                <span className="badge-pill" style={{ color: '#10b981' }}>Active Prototyping</span>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  Fast Line Follower Robot
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  High-velocity autonomous line tracking bot engineered with customized PID control algorithms, high-resolution optical infrared reflectance sensor arrays, and low-latency motor driver circuitry.
                </p>
              </div>

              {/* Reserved Space for Image Upload */}
              <div className="flf-image-slot">
                <div className="flf-slot-icon">
                  <Cpu size={24} />
                </div>
                <div className="flf-slot-title">Hardware Prototype in Calibration</div>
                <p className="flf-slot-sub">
                  Bisman is currently fine-tuning motor driver PID response curves on physical track. Hardware photo slot reserved.
                </p>
              </div>

              <div className="iprv-specs-grid" style={{ marginTop: '0' }}>
                <div className="iprv-spec-box">
                  <div className="iprv-spec-title">Sensor Array</div>
                  <div className="iprv-spec-desc">8-Channel High Sensitivity Optical IR</div>
                </div>
                <div className="iprv-spec-box">
                  <div className="iprv-spec-title">Control Loop</div>
                  <div className="iprv-spec-desc">Microsecond Proportional-Integral-Derivative (PID)</div>
                </div>
                <div className="iprv-spec-box">
                  <div className="iprv-spec-title">Propulsion</div>
                  <div className="iprv-spec-desc">Coreless High-RPM DC Motors + Silicone Grip Tires</div>
                </div>
                <div className="iprv-spec-box">
                  <div className="iprv-spec-title">Driver IC</div>
                  <div className="iprv-spec-desc">Dual High-Current H-Bridge PWM Driver</div>
                </div>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default HardwareRoboticsSection;
