import React from 'react';
import { ArrowUpRight, Compass, Users, Award, BookOpen, Globe } from 'lucide-react';
import { GithubIcon } from './Icons';
import BorderGlow from './BorderGlow';
import './VentureSection.css';

export const VentureSection = () => {
  return (
    <section className="venture-section" id="venture">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Compass size={14} />
            <span>Founder & Venture</span>
          </span>
          <h2 className="section-title">DreamCollege 🎓</h2>
          <p className="section-desc">
            Empowering students worldwide to navigate the hyper-competitive global college admissions landscape with clarity, community, and curated roadmaps.
          </p>
        </div>

        <BorderGlow
          glowColor="22 100 60"
          backgroundColor="rgba(16, 21, 29, 0.88)"
          borderRadius={28}
          glowRadius={44}
        >
          <div className="venture-card">
            {/* Left Column: Details */}
            <div className="venture-content">
              <div className="venture-badge-row">
                <span className="badge-pill badge-pill--orange">Founded by Bisman Singh</span>
                <span className="badge-pill">Live Production Platform</span>
              </div>

              <div>
                <h3 className="venture-heading">DreamCollege</h3>
                <p className="venture-tagline">Pathway To Your Dream School</p>
              </div>

              <p className="venture-text">
                DreamCollege is a dedicated student-first guidance ecosystem engineered around the end-to-end college application journey. It bridges the information gap for ambitious high school students, offering comprehensive university profiles, scholarship directories, portfolio building guidance, and peer-to-peer mentorship.
              </p>

              {/* Feature Highlights Grid */}
              <div className="venture-features-grid">
                <div className="venture-feature-item">
                  <div className="venture-feature-icon">
                    <BookOpen size={16} />
                  </div>
                  <div>
                    <h4 className="venture-feature-title">University Roadmaps</h4>
                    <p className="venture-feature-desc">Curated profiles for MIT, Ivy League, Stanford, Caltech & top global institutes.</p>
                  </div>
                </div>

                <div className="venture-feature-item">
                  <div className="venture-feature-icon">
                    <Award size={16} />
                  </div>
                  <div>
                    <h4 className="venture-feature-title">Scholarship Matching</h4>
                    <p className="venture-feature-desc">Discover high-value research grants, olympiad pathways, and global financial aid.</p>
                  </div>
                </div>

                <div className="venture-feature-item">
                  <div className="venture-feature-icon">
                    <Users size={16} />
                  </div>
                  <div>
                    <h4 className="venture-feature-title">Collaborative Community</h4>
                    <p className="venture-feature-desc">Peer feedback channels for essays, extracurriculars, and STEM projects.</p>
                  </div>
                </div>

                <div className="venture-feature-item">
                  <div className="venture-feature-icon">
                    <Globe size={16} />
                  </div>
                  <div>
                    <h4 className="venture-feature-title">Cross-Platform Sync</h4>
                    <p className="venture-feature-desc">High-performance responsive web experience with iOS/Android mobile architectures.</p>
                  </div>
                </div>
              </div>

              <div className="venture-actions">
                <a
                  href="https://www.dreamcollege.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-primary"
                >
                  <Globe size={16} />
                  <span>Visit www.dreamcollege.co.in</span>
                  <ArrowUpRight size={16} />
                </a>

                <a
                  href="https://github.com/Bisman-Singh-Dev/Dream-College"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-secondary"
                >
                  <GithubIcon size={16} />
                  <span>GitHub Repository</span>
                </a>
              </div>
            </div>

            {/* Right Column: Visual Logo Podium */}
            <div className="venture-visual-container">
              <div className="venture-logo-pod">
                <div className="venture-logo-glow" />
                <img
                  src="/assets/dreamcollege_logo.png"
                  alt="Dream College Official Logo"
                  className="venture-logo-img"
                />
              </div>

              <div className="venture-status-pill">
                <span className="status-dot" />
                <span>Active Venture • dreamcollege.co.in</span>
              </div>
            </div>
          </div>
        </BorderGlow>
      </div>
    </section>
  );
};

export default VentureSection;
