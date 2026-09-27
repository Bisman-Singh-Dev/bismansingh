import React from 'react';
import { Target, Compass, Award, Globe, Rocket, ArrowRight } from 'lucide-react';
import BorderGlow from './BorderGlow';
import './AspirationsSection.css';

export const AspirationsSection = () => {
  return (
    <section className="aspirations-section" id="aspirations">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Target size={14} />
            <span>The North Star</span>
          </span>
          <h2 className="section-title">Aspirations & Future Trajectory</h2>
          <p className="section-desc">
            Focused on world-class research, pioneering robotics innovation, and solving monumental physical and societal challenges.
          </p>
        </div>

        <div className="aspirations-grid">
          {/* Card 1: MIT */}
          <BorderGlow
            glowColor="0 80 55"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={28}
          >
            <div className="aspiration-card">
              <div className="aspiration-top">
                <div className="aspiration-logo-wrap" style={{ background: '#750014' }}>
                  <img src="/assets/mit_logo.svg" alt="MIT Logo" style={{ width: '100%', height: '100%' }} />
                </div>
                <span className="badge-pill badge-pill--orange">Dream Institution</span>
              </div>

              <div>
                <h3 className="aspiration-title">MIT</h3>
                <div className="aspiration-sub">Massachusetts Institute of Technology</div>
              </div>

              <p className="aspiration-desc">
                Dedicated to joining MIT's Mechanical Engineering and EECS labs to spearhead next-generation autonomous robotics, bio-inspired locomotion, sensor fusion, and micro-actuation systems.
              </p>

              <div className="aspiration-pillars">
                <span className="pillar-tag">Robotics & Mechatronics</span>
                <span className="pillar-tag">AI / Machine Learning</span>
                <span className="pillar-tag">Autonomous Systems</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 2: ISEF */}
          <BorderGlow
            glowColor="220 90 55"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={28}
          >
            <div className="aspiration-card">
              <div className="aspiration-top">
                <div className="aspiration-logo-wrap" style={{ color: '#38bdf8' }}>
                  <Award size={28} />
                </div>
                <span className="badge-pill badge-pill--cyan">Global Research</span>
              </div>

              <div>
                <h3 className="aspiration-title">Regeneron ISEF</h3>
                <div className="aspiration-sub">International Science & Engineering Fair</div>
              </div>

              <p className="aspiration-desc">
                Developing empirical peer-reviewed research papers and field-tested hardware prototypes (such as IPRV) to compete at the world's most prestigious pre-college STEM research fair.
              </p>

              <div className="aspiration-pillars">
                <span className="pillar-tag">Scientific Research</span>
                <span className="pillar-tag">Field Experimentation</span>
                <span className="pillar-tag">Civic Infrastructure</span>
              </div>
            </div>
          </BorderGlow>

          {/* Card 3: YYGS */}
          <BorderGlow
            glowColor="45 90 50"
            backgroundColor="rgba(16, 21, 29, 0.88)"
            borderRadius={28}
          >
            <div className="aspiration-card">
              <div className="aspiration-top">
                <div className="aspiration-logo-wrap" style={{ color: '#fbbf24' }}>
                  <Globe size={28} />
                </div>
                <span className="badge-pill" style={{ color: '#fbbf24' }}>Global Leadership</span>
              </div>

              <div>
                <h3 className="aspiration-title">YYGS</h3>
                <div className="aspiration-sub">Yale Young Global Scholars</div>
              </div>

              <p className="aspiration-desc">
                Engaging with international scholars to discuss science, global tech policy, ethics in autonomous systems, and scalable technological innovations that empower developing economies.
              </p>

              <div className="aspiration-pillars">
                <span className="pillar-tag">Global Community</span>
                <span className="pillar-tag">Academic Exploration</span>
                <span className="pillar-tag">Cross-Border Collaboration</span>
              </div>
            </div>
          </BorderGlow>
        </div>

        {/* Philosophy Banner */}
        <div className="north-star-banner">
          <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: 'var(--accent-orange)' }}>
            <Rocket size={18} />
            <span style={{ fontFamily: 'var(--font-mono)', fontSize: '0.8125rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 700 }}>
              The Engineering Creed
            </span>
          </div>
          <h3 className="north-star-quote">"Dream Big. Build Relentlessly. Create Impact."</h3>
          <div className="north-star-flow">
            <span>📚 Learn Deeply</span>
            <span>→</span>
            <span>🔬 Research Problems</span>
            <span>→</span>
            <span>🤖 Build Systems</span>
            <span>→</span>
            <span>🏆 Compete Globally</span>
            <span>→</span>
            <span style={{ color: '#ffffff', fontWeight: 700 }}>🌍 Create Impact</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AspirationsSection;
