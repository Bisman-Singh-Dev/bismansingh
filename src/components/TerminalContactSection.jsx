import React, { useState, useRef, useEffect } from 'react';
import { Terminal, Mail, Globe, Send, Copy, Check, MapPin, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';
import BorderGlow from './BorderGlow';
import './TerminalContactSection.css';

export const TerminalContactSection = () => {
  const [terminalHistory, setTerminalHistory] = useState([
    {
      cmd: 'init',
      out: 'BismanOS v3.8 [Robotics & Deep Learning Console]\nType "help" for a list of available diagnostic commands.'
    },
    {
      cmd: 'whoami',
      out: 'Bisman Singh (Age 15) • Delhi Public School Indirapuram\nRobotics Engineer | AI/ML Researcher | Founder of Wish College'
    }
  ]);
  const [inputVal, setInputVal] = useState('');
  const [copiedEmail, setCopiedEmail] = useState(false);
  const terminalBodyRef = useRef(null);
  const isInitialMount = useRef(true);

  const commandResponses = {
    help: 'Available commands:\n- whoami       : Summary bio and school affiliation\n- projects     : All featured robotics & software projects\n- iprv         : Technical specs of Indian Pothole Recovery Vehicle\n- wishcollege  : Venture overview and link\n- achievements : Academic rank, IOQM 2026, French certifications\n- telegram     : 640+ Member Olympiad Math Community\n- mit          : Target labs and North Star vision\n- contact      : Official email and handles\n- clear        : Clear terminal output',
    whoami: 'Bisman Singh (Age 15) • Delhi Public School Indirapuram\nRole: Robotics & Autonomous Systems Builder | Founder @ Wish College\nFocus: Edge AI, YOLO Computer Vision, Mechatronics, Mathematical Olympiads',
    projects: 'Featured Projects:\n1. IPRV (Indian Pothole Recovery Vehicle) - 6WD Rocker-Bogie Rover\n2. YOLO Pothole Detection Model - 4,719 images, 7,340 annotations\n3. Bloomy - MediaPipe 21-point Virtual Gesture Mouse\n4. Wish College - Global Admissions Platform (wishcollege.co.in)\n5. VitalLens (RoboDoc) - Groq Whisper AI Medical Diagnostics\n6. Fast Line Follower - 8-Ch Optical IR closed-loop PID bot',
    iprv: 'IPRV Specs:\n- Controller : Raspberry Pi 4 + Arduino MEGA (L298N PWM)\n- Sensors    : 360° RPLIDAR A1M8 (12m range) + Neo-6M GPS\n- Dispersion : Jam-proof auger POP cold-mix dispenser\n- Power      : 2x 12V 30Ah high-capacity battery bank\n- Step 1     : YOLO11 detection model trained & deployed ✅',
    wishcollege: 'Wish College (www.wishcollege.co.in):\nPathway To Your Dream School — Comprehensive university admissions directory, scholarship roadmaps, and community for aspiring applicants.',
    dreamcollege: 'Wish College (www.wishcollege.co.in):\nPathway To Your Dream School — Comprehensive university admissions directory, scholarship roadmaps, and community for aspiring applicants.',
    achievements: 'Honors:\n- Scored 31/100 in IOQM 2026 Olympiad\n- 94.9% in Class 9th CBSE Board (DPS Indirapuram)\n- 640+ Member Math Community on Telegram (t.me/Olympians_India)\n- French Diplomas: CEFR A1, A2, B1 Graduate\n- Ashoka University Young Scholars Programme (YSP)\n- Multiple time Science fest Winner across inter-school competitions',
    telegram: 'Olympians India (Telegram Community):\nLink: https://t.me/Olympians_India\nFounded and curated by Bisman Singh. Active discussion group of 640+ students solving Olympiad mathematics, IOQM, and algorithmic problems.',
    mit: 'North Star: Massachusetts Institute of Technology (MIT)\nDepartment: Mechanical Engineering & EECS\nResearch Target: Bio-inspired autonomous systems and field robotics for developing infrastructure.',
    contact: 'Direct Contact:\n- Email    : Millinia70@gmail.com\n- Telegram : https://t.me/Olympians_India\n- GitHub   : https://github.com/Bisman-Singh-Dev\n- ORCID    : 0009-0009-6133-223X\n- Venture  : https://www.wishcollege.co.in'
  };

  const handleCommandSubmit = (e) => {
    e.preventDefault();
    const cleanCmd = inputVal.trim().toLowerCase();
    if (!cleanCmd) return;

    if (cleanCmd === 'clear') {
      setTerminalHistory([]);
      setInputVal('');
      return;
    }

    const response = commandResponses[cleanCmd] || `Command not found: "${cleanCmd}". Type "help" for valid commands.`;
    setTerminalHistory(prev => [...prev, { cmd: cleanCmd, out: response }]);
    setInputVal('');
  };

  const executeChip = (chipCmd) => {
    if (chipCmd === 'clear') {
      setTerminalHistory([]);
      return;
    }
    const response = commandResponses[chipCmd];
    setTerminalHistory(prev => [...prev, { cmd: chipCmd, out: response }]);
  };

  // Only scroll the terminal container on user interaction, NEVER on mount and NEVER scrolling the window
  useEffect(() => {
    if (isInitialMount.current) {
      isInitialMount.current = false;
      return;
    }
    if (terminalBodyRef.current) {
      terminalBodyRef.current.scrollTop = terminalBodyRef.current.scrollHeight;
    }
  }, [terminalHistory]);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2500);
  };

  return (
    <section className="contact-section" id="terminal">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Terminal size={14} />
            <span>Developer Shell & Connect</span>
          </span>
          <h2 className="section-title">Terminal & Collaboration</h2>
          <p className="section-desc">
            Interact with the simulated terminal environment or get in touch for robotics research, high school collaborations, and venture inquiries.
          </p>
        </div>

        <div className="terminal-contact-grid">
          {/* Left: Interactive CLI Console */}
          <div className="terminal-console">
            <div className="terminal-topbar">
              <div className="terminal-dots">
                <span className="terminal-dot terminal-dot--red" />
                <span className="terminal-dot terminal-dot--yellow" />
                <span className="terminal-dot terminal-dot--green" />
              </div>
              <span className="terminal-title">bisman@dps-robotics: ~</span>
              <span style={{ width: '40px' }} />
            </div>

            <div ref={terminalBodyRef} className="terminal-body">
              {terminalHistory.map((entry, idx) => (
                <div key={idx} className="terminal-line">
                  <div>
                    <span className="terminal-prompt-prefix">bisman@dps:~$</span>
                    <span>{entry.cmd}</span>
                  </div>
                  <div className="terminal-output">{entry.out}</div>
                </div>
              ))}

              <form onSubmit={handleCommandSubmit} className="terminal-input-row">
                <span className="terminal-prompt-prefix">bisman@dps:~$</span>
                <input
                  type="text"
                  value={inputVal}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder="type help, iprv, projects, mit..."
                  className="terminal-input"
                  autoComplete="off"
                  spellCheck="false"
                />
              </form>
            </div>

            {/* Quick Command Chips */}
            <div className="terminal-quick-chips">
              <span style={{ fontSize: '0.6875rem', fontFamily: 'var(--font-mono)', color: 'var(--text-muted)' }}>
                Presets:
              </span>
              {['help', 'iprv', 'projects', 'achievements', 'mit', 'wishcollege', 'clear'].map((cmd) => (
                <button
                  key={cmd}
                  onClick={() => executeChip(cmd)}
                  className="terminal-chip"
                >
                  {cmd}
                </button>
              ))}
            </div>
          </div>

          {/* Right: Contact & Verification Dossier */}
          <BorderGlow
            glowColor="22 100 60"
            backgroundColor="rgba(16, 21, 29, 0.9)"
            borderRadius={28}
          >
            <div className="contact-details-panel">
              <div>
                <span className="badge-pill badge-pill--orange" style={{ marginBottom: '12px' }}>
                  Open for Research &amp; Inquiries
                </span>
                <h3 style={{ fontSize: '1.5rem', color: '#ffffff', letterSpacing: '-0.02em', marginBottom: '6px' }}>
                  Let's Build Something Impactful
                </h3>
                <p style={{ color: 'var(--text-secondary)', fontSize: '0.875rem', lineHeight: 1.6 }}>
                  Whether discussing autonomous systems research, mathematical problem solving, or expanding Wish College, feel free to reach out directly.
                </p>
              </div>

              <div className="contact-channels-list">
                {/* Email */}
                <div
                  className="contact-channel-item"
                  onClick={() => copyToClipboard('Millinia70@gmail.com')}
                  style={{ cursor: 'pointer' }}
                  title="Click to copy email"
                >
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Mail size={18} />
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Direct Email</span>
                      <span className="channel-val">Millinia70@gmail.com</span>
                    </div>
                  </div>
                  <button className="nav-btn-icon" style={{ width: '32px', height: '32px' }}>
                    {copiedEmail ? <Check size={14} color="#10b981" /> : <Copy size={14} />}
                  </button>
                </div>

                {/* GitHub */}
                <a
                  href="https://github.com/Bisman-Singh-Dev"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-left">
                    <div className="channel-icon">
                      <GithubIcon size={18} />
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">GitHub Profile</span>
                      <span className="channel-val">@Bisman-Singh-Dev</span>
                    </div>
                  </div>
                  <ExternalLink size={16} color="var(--text-muted)" />
                </a>

                {/* Venture */}
                <a
                  href="https://www.wishcollege.co.in"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-left">
                    <div className="channel-icon">
                      <Globe size={18} />
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Wish College</span>
                      <span className="channel-val">www.wishcollege.co.in</span>
                    </div>
                  </div>
                  <ExternalLink size={16} color="var(--text-muted)" />
                </a>

                {/* Telegram Math Community */}
                <a
                  href="https://t.me/Olympians_India"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-channel-item"
                >
                  <div className="channel-left">
                    <div className="channel-icon" style={{ color: '#0088cc' }}>
                      <Send size={18} />
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Math Community</span>
                      <span className="channel-val">t.me/Olympians_India (640+ Members)</span>
                    </div>
                  </div>
                  <ExternalLink size={16} color="var(--text-muted)" />
                </a>

                {/* Location & School */}
                <div className="contact-channel-item">
                  <div className="channel-left">
                    <div className="channel-icon">
                      <MapPin size={18} />
                    </div>
                    <div className="channel-text">
                      <span className="channel-title">Affiliation &amp; Base</span>
                      <span className="channel-val">Delhi Public School Indirapuram, India</span>
                    </div>
                  </div>
                  <span className="badge-pill" style={{ fontSize: '0.65rem' }}>Class of '26</span>
                </div>
              </div>

              <div>
                <a
                  href="mailto:Millinia70@gmail.com?subject=Collaborating%20with%20Bisman%20Singh"
                  className="btn-primary"
                  style={{ width: '100%' }}
                >
                  <Send size={16} />
                  <span>Send an Email Dispatch ↗</span>
                </a>
              </div>
            </div>
          </BorderGlow>
        </div>
      </div>

      {copiedEmail && (
        <div className="copy-toast">
          ✓ Copied Millinia70@gmail.com to clipboard!
        </div>
      )}
    </section>
  );
};

export default TerminalContactSection;
