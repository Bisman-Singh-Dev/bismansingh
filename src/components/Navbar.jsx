import React, { useState, useEffect } from 'react';
import { Sun, Moon, Menu, X, ArrowUpRight, Code2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import './Navbar.css';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar-header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container">
        <div className="navbar-inner">
          {/* Brand */}
          <a href="#" className="nav-brand">
            <div className="nav-logo-badge">
              <img
                src="/assets/bisman_avatar.png"
                alt="Bisman Singh"
                className="nav-logo-img"
              />
            </div>
            <div className="nav-brand-text">
              <span className="nav-brand-name">Bisman Singh</span>
              <span className="nav-brand-meta">DPS INDIRAPURAM • AGE 15</span>
            </div>
          </a>

          {/* Nav links */}
          <nav>
            <ul className={`nav-links ${mobileMenuOpen ? 'open' : ''}`}>
              <li>
                <a href="#about" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  About
                </a>
              </li>
              <li>
                <a href="#venture" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Venture
                </a>
              </li>
              <li>
                <a href="#hardware" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Robotics
                </a>
              </li>
              <li>
                <a href="#software" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  AI
                </a>
              </li>
              <li>
                <a href="#achievements" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Honors
                </a>
              </li>
              <li>
                <a href="#aspirations" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Aspirations
                </a>
              </li>
              <li>
                <a href="#terminal" className="nav-link" onClick={() => setMobileMenuOpen(false)}>
                  Terminal
                </a>
              </li>
            </ul>
          </nav>

          {/* Right Actions */}
          <div className="nav-actions">
            <div className="nav-status-badge">
              <span className="status-dot" />
              <span>Available for Research</span>
            </div>

            <a
              href="https://github.com/Bisman-Singh-Dev"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-btn-icon"
              title="GitHub Profile"
            >
              <GithubIcon size={18} />
            </a>

            <button
              className="nav-btn-icon nav-menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
