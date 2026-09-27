import React from 'react';
import { Award, Trophy, BookOpen, Send, Sparkles, Languages, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';
import BorderGlow from './BorderGlow';
import './AchievementsSection.css';

export const AchievementsSection = () => {
  const triggerConfetti = (e) => {
    if (e && e.clientX) {
      const x = e.clientX / window.innerWidth;
      const y = e.clientY / window.innerHeight;
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { x, y },
        colors: ['#ff6b35', '#00e5ff', '#10b981', '#f59e0b']
      });
    } else {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
        colors: ['#ff6b35', '#00e5ff', '#10b981', '#f59e0b']
      });
    }
  };

  const achievements = [
    {
      icon: <Trophy size={22} />,
      metric: '31 / 100',
      title: 'IOQM 2026 Olympiad',
      desc: 'Achieved an outstanding score in the Indian Olympiad Qualifier in Mathematics (IOQM 2026), testing advanced non-routine geometry, number theory, and combinatorics.',
      tag: 'Mathematics Olympiad'
    },
    {
      icon: <Award size={22} />,
      metric: '94.9%',
      title: 'Class 9th CBSE Board',
      desc: 'Earned 94.9% overall academic excellence in Class 9 CBSE curriculum at Delhi Public School Indirapuram, excelling across core sciences, mathematics, and computing.',
      tag: 'DPS Indirapuram Academic Rank'
    },
    {
      icon: <Send size={22} />,
      metric: '640+ Members',
      title: 'Telegram Math Community',
      desc: 'Founded, curates, and leads an active community of 640+ students discussing advanced Olympiad mathematics, competitive proofs, and problem-solving techniques.',
      tag: 'Community Founder & Leader'
    },
    {
      icon: <BookOpen size={22} />,
      metric: 'Alumnus',
      title: 'Ashoka YSP Summer Programme',
      desc: 'Selected for and completed the rigorous Ashoka University Young Scholars Programme (YSP), engaging in collegiate-level scientific inquiry and interdisciplinary humanities.',
      tag: 'Ashoka University YSP'
    },
    {
      icon: <Languages size={22} />,
      metric: 'A1 • A2 • B1',
      title: 'French Graduate Diplomas',
      desc: 'Certified trilingual graduate having completed comprehensive French diplomas across CEFR levels A1, A2, and B1 in written comprehension, oral expression, and grammar.',
      tag: 'CEFR French Diplomas'
    },
    {
      icon: <Sparkles size={22} />,
      metric: 'Multi-Trophy Winner',
      title: 'Multiple time Science fest Winner',
      desc: 'Won top honors and pyramid trophies across prestigious inter-school Science, Robotics, and AI festivals representing DPS Indirapuram with autonomous rover prototypes and vision models.',
      tag: 'Multiple Science Fest Winner'
    }
  ];

  return (
    <section className="achievements-section" id="achievements">
      <div className="container">
        <div className="section-header">
          <span className="section-label">
            <Trophy size={14} />
            <span>Honors & Track Record</span>
          </span>
          <h2 className="section-title">Academic & Competitive Distinction</h2>
          <p className="section-desc">
            A relentless commitment to rigorous mathematics, linguistics, academic scholarship, and STEM competitions. Click any card to celebrate!
          </p>
        </div>

        <div className="achievements-grid">
          {achievements.map((item, idx) => (
            <div
              key={idx}
              className="achievement-card"
              onClick={triggerConfetti}
              title="Click to celebrate!"
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div className="achievement-icon-wrap">{item.icon}</div>
                <span className="badge-pill" style={{ fontSize: '0.6875rem' }}>Verified</span>
              </div>

              <div>
                <div className="achievement-score-badge">{item.metric}</div>
                <h3 className="achievement-title">{item.title}</h3>
              </div>

              <p className="achievement-desc">{item.desc}</p>

              <div className="achievement-footer-tag">
                <CheckCircle2 size={13} color="#ff6b35" />
                <span>{item.tag}</span>
              </div>
            </div>
          ))}

          {/* Authentic Trophy Photo Showcase */}
          <div className="award-photo-banner">
            <div className="award-img-box">
              <img
                src="/assets/award_scientia.jpg"
                alt="Bisman Singh - Multiple time Science fest Winner at DPS Indirapuram"
              />
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', textAlign: 'left' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                <span className="badge-pill badge-pill--orange">Competition Winner</span>
                <span className="badge-pill">Delhi Public School Indirapuram</span>
              </div>

              <h3 style={{ fontSize: '1.625rem', color: '#ffffff', letterSpacing: '-0.02em' }}>
                Multiple time Science fest Winner
              </h3>

              <p style={{ color: 'var(--text-secondary)', fontSize: '0.9375rem', lineHeight: 1.65 }}>
                Pictured above: Bisman Singh and his project partner with the iconic pyramid trophies following the award ceremony at DPS Indirapuram. Demonstrating hands-on applied AI and physical sciences before an expert panel.
              </p>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center', marginTop: '6px' }}>
                <button
                  onClick={triggerConfetti}
                  className="btn-primary"
                  style={{ padding: '8px 18px', fontSize: '0.8125rem' }}
                >
                  <Sparkles size={14} />
                  <span>Confetti Blast 🎉</span>
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="celebrate-btn-wrap">
          <button onClick={triggerConfetti} className="btn-secondary" style={{ gap: '10px' }}>
            <Sparkles size={16} color="#ff6b35" />
            <span>Celebrate All Achievements 🎊</span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default AchievementsSection;
