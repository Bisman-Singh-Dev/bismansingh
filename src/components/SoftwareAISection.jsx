import React from 'react';
import { Eye, HeartPulse, ArrowUpRight, Activity, ShieldAlert, Mic, Camera } from 'lucide-react';
import { GithubIcon } from './Icons';
import BorderGlow from './BorderGlow';
import './SoftwareAISection.css';

export const SoftwareAISection = () => {
  return (
    <section className="software-section" id="software">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Eye size={14} />
            <span>AI & Deep Learning</span>
          </span>
          <h2 className="section-title">Computer Vision & Intelligence</h2>
          <p className="section-desc">
            Production-grade neural networks, edge inference optimizations, and intelligent applications built to solve urgent real-world problems.
          </p>
        </div>

        <div className="software-grid">
          {/* Card 1: YOLO Pothole Detection */}
          <BorderGlow
            glowColor="180 100 50"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={28}
          >
            <div className="software-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="badge-pill badge-pill--cyan">PyTorch & YOLO11</span>
                  <span className="badge-pill">Step 1 of IPRV</span>
                </div>
                <a
                  href="https://github.com/Bisman-Singh-Dev/YOLO-Pothole-Detection-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn-icon"
                  title="View Model on GitHub"
                >
                  <GithubIcon size={18} />
                </a>
              </div>

              {/* Real Prediction Visual from Bisman's Model */}
              <div className="software-visual-window">
                <img
                  src="/assets/yolo_pothole_prediction.jpg"
                  alt="YOLO Pothole Detection Model Predictions on Real Road"
                />
                <div className="yolo-overlay-hud">
                  <span className="yolo-hud-pill">YOLO11 • FPS: 62.4</span>
                  <span className="yolo-hud-pill" style={{ color: '#10b981' }}>NMS Conf: 0.89</span>
                </div>
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  YOLO Pothole & Road Hazard Detection
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  An industrial-grade deep learning pipeline trained on <strong>4,719 high-resolution images</strong> with <strong>7,340 ground-truth annotations</strong>. Features C3k2 attention blocks and multi-scale feature pyramids (PAN-FPN).
                </p>
              </div>

              {/* Hazard Scoring Breakdown */}
              <div className="hazard-metrics-row">
                <div className="hazard-box" style={{ borderColor: 'rgba(239, 68, 68, 0.4)' }}>
                  <span className="hazard-label" style={{ color: '#ef4444' }}>Critical</span>
                  <span className="hazard-val">Area ≥ 8.0%</span>
                </div>
                <div className="hazard-box" style={{ borderColor: 'rgba(245, 158, 11, 0.4)' }}>
                  <span className="hazard-label" style={{ color: '#f59e0b' }}>Moderate</span>
                  <span className="hazard-val">Area 2.5–8.0%</span>
                </div>
                <div className="hazard-box" style={{ borderColor: 'rgba(234, 179, 8, 0.4)' }}>
                  <span className="hazard-label" style={{ color: '#eab308' }}>Minor</span>
                  <span className="hazard-val">Area &lt; 2.5%</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                <a
                  href="https://github.com/Bisman-Singh-Dev/YOLO-Pothole-Detection-Model"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository ↗</span>
                </a>
              </div>
            </div>
          </BorderGlow>

          {/* Card 2: VitalLens Healthcare App */}
          <BorderGlow
            glowColor="150 90 45"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={28}
          >
            <div className="software-card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ display: 'flex', gap: '8px' }}>
                  <span className="badge-pill badge-pill--emerald">Healthcare AI Assistant</span>
                  <span className="badge-pill">Groq Whisper API</span>
                </div>
                <a
                  href="https://vitallens-eight.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="nav-btn-icon"
                  title="Open Live App"
                >
                  <ArrowUpRight size={18} />
                </a>
              </div>

              {/* Mascot / Visual preview */}
              <div
                className="software-visual-window"
                style={{
                  background: 'radial-gradient(circle at 50% 50%, rgba(16, 185, 129, 0.15) 0%, #0d121a 75%)',
                  padding: '20px'
                }}
              >
                <img
                  src="/assets/vitallens_mascot.png"
                  alt="RoboDoc VitalLens Mascot"
                  style={{ width: '140px', height: '140px', objectFit: 'contain' }}
                />
              </div>

              <div>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '8px' }}>
                  VitalLens (RoboDoc) Health Assistant
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.6 }}>
                  A browser-based AI medical diagnostics lab designed for rapid emergency triage. Runs on any device (including Raspberry Pi!) by leveraging state-of-the-art vision and speech models.
                </p>
              </div>

              {/* Features List */}
              <div className="vitallens-pill-list">
                <div className="vitallens-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Mic size={14} color="#10b981" />
                    <span className="vitallens-item-title">Groq Whisper Voice</span>
                  </div>
                  <span className="vitallens-item-sub">Sub-second STT in English &amp; Hindi</span>
                </div>

                <div className="vitallens-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Camera size={14} color="#10b981" />
                    <span className="vitallens-item-title">Emergency Vision</span>
                  </div>
                  <span className="vitallens-item-sub">Auto-scans injuries &amp; pulls first-aid</span>
                </div>

                <div className="vitallens-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <Activity size={14} color="#10b981" />
                    <span className="vitallens-item-title">MediaPipe Gestures</span>
                  </div>
                  <span className="vitallens-item-sub">Edge hands-free camera shutter</span>
                </div>

                <div className="vitallens-item">
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <ShieldAlert size={14} color="#10b981" />
                    <span className="vitallens-item-title">Edge Device Ready</span>
                  </div>
                  <span className="vitallens-item-sub">Optimized for low-spec SBC hardware</span>
                </div>
              </div>

              <div style={{ marginTop: 'auto', display: 'flex', gap: '12px' }}>
                <a
                  href="https://vitallens-eight.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                  style={{ width: '100%', background: 'linear-gradient(135deg, #10b981, #059669)', boxShadow: '0 4px 20px rgba(16, 185, 129, 0.35)' }}
                >
                  <Activity size={16} />
                  <span>Launch Live App ↗</span>
                </a>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>
    </section>
  );
};

export default SoftwareAISection;
