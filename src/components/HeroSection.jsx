import React, { useState } from 'react';
import { ArrowUpRight, Sparkles, GraduationCap, Compass, ChevronDown } from 'lucide-react';
import { GithubIcon } from './Icons';
import ProfileCard from './ProfileCard';
import InteractiveLanyard from './InteractiveLanyard';
import './HeroSection.css';

export const HeroSection = () => {
  const [visualMode, setVisualMode] = useState('card'); // 'card' or 'lanyard'

  return (
    <section className="hero-section" id="about">
      <div className="container">
        <div className="hero-grid">
          {/* Left Column: Bio & Highlights */}
          <div className="hero-content">
            <div className="hero-badge-group">
              <span className="badge-pill badge-pill--orange">
                <span className="status-dot" />
                <span>15 y/o Builder & Founder</span>
              </span>
              <span className="badge-pill">
                <GraduationCap size={14} />
                <span>DPS Indirapuram</span>
              </span>
            </div>

            <h1 className="hero-title">
              Hi, I'm <span className="hero-title-highlight">Bisman Singh</span>.<br />
              Building robots that do more than move.
            </h1>

            <p className="hero-description">
              High school engineer and researcher passionate about the intersection of{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Autonomous Robotics, Computer Vision (YOLO), Edge AI,</strong> and{' '}
              <strong style={{ color: 'var(--text-primary)' }}>Mechatronics</strong>. Founder of{' '}
              <a href="https://www.dreamcollege.co.in" target="_blank" rel="noopener noreferrer" style={{ color: 'var(--accent-orange)', textDecoration: 'underline' }}>
                DreamCollege
              </a>.
            </p>

            <div className="hero-formula">
              <span>Idea</span>
              <span>→</span>
              <span>Prototype</span>
              <span>→</span>
              <span>Code</span>
              <span>→</span>
              <span>Hardware</span>
              <span>→</span>
              <span>Intelligence</span>
              <span>→</span>
              <span style={{ fontWeight: 700, color: 'var(--accent-orange)' }}>Impact 🚀</span>
            </div>

            <div className="hero-actions">
              <a href="#hardware" className="btn-primary">
                <span>Explore Projects</span>
                <ArrowUpRight size={16} />
              </a>

              <a
                href="https://www.dreamcollege.co.in"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>DreamCollege ↗</span>
              </a>

              <a
                href="https://github.com/Bisman-Singh-Dev"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <GithubIcon size={16} />
                <span>GitHub</span>
              </a>
            </div>

            {/* Metric Ticker */}
            <div className="hero-metrics-banner">
              <div className="hero-metric-item">
                <span className="metric-val">94.9%</span>
                <span className="metric-label">CBSE Class 9</span>
              </div>
              <div className="hero-metric-item">
                <span className="metric-val">31/100</span>
                <span className="metric-label">IOQM 2026</span>
              </div>
              <div className="hero-metric-item">
                <span className="metric-val">640+</span>
                <span className="metric-label">Telegram Math</span>
              </div>
              <div className="hero-metric-item">
                <span className="metric-val">B1 Dip.</span>
                <span className="metric-label">French Graduate</span>
              </div>
            </div>
          </div>

          {/* Right Column: Visual Component Switcher (3D Card or Lanyard Badge) */}
          <div className="hero-visual-col">
            <div className="card-view-switcher">
              <button
                className={`switcher-btn ${visualMode === 'card' ? 'active' : ''}`}
                onClick={() => setVisualMode('card')}
              >
                Card
              </button>
              <button
                className={`switcher-btn ${visualMode === 'lanyard' ? 'active' : ''}`}
                onClick={() => setVisualMode('lanyard')}
              >
                Badge
              </button>
            </div>

            {visualMode === 'card' ? (
              <ProfileCard
                name="Bisman Singh"
                title="Robotics & AI/ML Engineer"
                handle="Bisman-Singh-Dev"
                status="DPS Indirapuram • Age 15"
                avatarUrl="/assets/bisman_portrait.png"
                miniAvatarUrl="/assets/bisman_cutout.png"
                contactText="Connect ↗"
                behindGlowColor="rgba(255, 107, 53, 0.45)"
              />
            ) : (
              <InteractiveLanyard
                name="Bisman Singh"
                role="Autonomous Systems Researcher"
                school="DPS Indirapuram"
                avatarUrl="/assets/bisman_portrait.png"
                age="15"
                idNumber="DPS-IND-2026-0926"
              />
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
