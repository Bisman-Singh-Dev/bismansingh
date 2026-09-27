import React from 'react';
import { ArrowUp, Heart, Globe, Mail } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Footer.css';

export const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer-wrap">
      <div className="container">
        <div className="footer-top">
          <div className="footer-brand">
            <div className="footer-logo-row">
              <div className="footer-logo-box">BS</div>
              <div>
                <div className="footer-brand-title">Bisman Singh</div>
                <div style={{ fontFamily: 'var(--font-mono)', fontSize: '0.72rem', color: 'var(--accent-orange)' }}>
                  DPS INDIRAPURAM • CLASS OF '26
                </div>
              </div>
            </div>
            <p className="footer-brand-motto">
              "Building today for the engineer I want to become tomorrow." Exploring autonomous robotics, computer vision, and real-world intelligence.
            </p>
          </div>

          <div className="footer-links-group">
            <div className="footer-col">
              <span className="footer-col-title">Navigation</span>
              <a href="#about" className="footer-link-item">About &amp; Dossier</a>
              <a href="#venture" className="footer-link-item">DreamCollege</a>
              <a href="#hardware" className="footer-link-item">Robotics &amp; IPRV</a>
              <a href="#software" className="footer-link-item">Computer Vision</a>
              <a href="#achievements" className="footer-link-item">Honors &amp; IOQM</a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Ventures &amp; Apps</span>
              <a href="https://www.dreamcollege.co.in" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                DreamCollege ↗
              </a>
              <a href="https://vitallens-eight.vercel.app" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                VitalLens (RoboDoc) ↗
              </a>
              <a href="https://github.com/Bisman-Singh-Dev/YOLO-Pothole-Detection-Model" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                YOLO Pothole Model ↗
              </a>
              <a href="https://github.com/Bisman-Singh-Dev/Hand-Movement-Detected-Working-Mouse" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                Bloomy Gesture Mouse ↗
              </a>
            </div>

            <div className="footer-col">
              <span className="footer-col-title">Connect</span>
              <a href="https://github.com/Bisman-Singh-Dev" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                GitHub (@Bisman-Singh-Dev)
              </a>
              <a href="mailto:Millinia70@gmail.com" className="footer-link-item">
                Millinia70@gmail.com
              </a>
              <a href="https://orcid.org/0009-0009-6133-223X" target="_blank" rel="noopener noreferrer" className="footer-link-item">
                ORCID: 0009-0009-6133-223X
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span className="footer-copy">
            © {new Date().getFullYear()} Bisman Singh • Designed &amp; Engineered with Precision
          </span>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <span className="footer-meta-pill">
              <span className="status-dot" />
              <span>Ghaziabad / Indirapuram, India</span>
            </span>

            <button
              onClick={scrollToTop}
              className="nav-btn-icon"
              style={{ width: '32px', height: '32px' }}
              title="Scroll to top"
            >
              <ArrowUp size={14} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
