import React, { useRef, useEffect, useState, useCallback } from 'react';
import './InteractiveLanyard.css';

export const InteractiveLanyard = ({
  name = 'Bisman Singh',
  role = 'Robotics & AI/ML Engineer',
  school = 'Delhi Public School Indirapuram',
  avatarUrl = '/assets/bisman_portrait.png',
  age = '15',
  idNumber = 'DPS-IND-2026-0926'
}) => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const badgeWrapRef = useRef(null);

  // Physics state
  const physicsRef = useRef({
    // Resting position of badge top-center relative to container top-center
    restX: 0,
    restY: 140,
    // Current position
    x: 0,
    y: 140,
    // Velocities
    vx: 0,
    vy: 0,
    // Target (when dragging)
    targetX: 0,
    targetY: 140,
    isDragging: false,
    dragStartX: 0,
    dragStartY: 0,
    pointerStartX: 0,
    pointerStartY: 0
  });

  const [isInteracting, setIsInteracting] = useState(false);

  // Run physics animation loop
  useEffect(() => {
    let animId;
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const resizeCanvas = () => {
      if (!canvas || !containerRef.current) return;
      const rect = containerRef.current.getBoundingClientRect();
      canvas.width = rect.width * dpr;
      canvas.height = rect.height * dpr;
      ctx.scale(dpr, dpr);
    };
    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    let lastTime = performance.now();

    const loop = (now) => {
      const dt = Math.min((now - lastTime) / 1000, 0.05);
      lastTime = now;

      const p = physicsRef.current;
      const rect = containerRef.current?.getBoundingClientRect();
      const w = rect?.width || 380;
      const h = rect?.height || 520;
      const anchorX = w / 2;
      const anchorY = 14;

      if (p.isDragging) {
        // Direct tracking with inertia damping
        p.x += (p.targetX - p.x) * 0.35;
        p.y += (p.targetY - p.y) * 0.35;
      } else {
        // Spring physics toward rest position
        const k = 48.0;      // spring stiffness
        const damping = 4.2; // friction/damping

        const fx = -k * (p.x - p.restX) - damping * p.vx;
        const fy = -k * (p.y - p.restY) - damping * p.vy;

        p.vx += fx * dt;
        p.vy += fy * dt;

        p.x += p.vx * dt;
        p.y += p.vy * dt;
      }

      // Compute dynamic tilt based on velocity and displacement
      const angleZ = Math.max(-28, Math.min(28, (p.x - p.restX) * 0.18 + p.vx * 0.04));
      const angleX = Math.max(-20, Math.min(20, (p.y - p.restY) * 0.12 - p.vy * 0.03));
      const angleY = Math.max(-25, Math.min(25, -(p.x - p.restX) * 0.15));

      if (badgeWrapRef.current) {
        badgeWrapRef.current.style.transform = `translate3d(calc(-50% + ${p.x}px), ${p.y}px, 0) rotateZ(${angleZ}deg) rotateX(${angleX}deg) rotateY(${angleY}deg)`;
      }

      // Draw dynamic lanyard strap on 2D canvas
      ctx.clearRect(0, 0, w, h);

      const badgeTopCenterX = anchorX + p.x;
      const badgeTopCenterY = p.y;

      // Draw fabric strap with realistic bezier slack & curve
      const cp1X = anchorX + (p.x * 0.25);
      const cp1Y = anchorY + (badgeTopCenterY - anchorY) * 0.45;
      const cp2X = badgeTopCenterX;
      const cp2Y = badgeTopCenterY - 20;

      // Strap outline shadow
      ctx.beginPath();
      ctx.moveTo(anchorX, anchorY);
      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, badgeTopCenterX, badgeTopCenterY);
      ctx.lineWidth = 14;
      ctx.strokeStyle = 'rgba(0, 0, 0, 0.45)';
      ctx.lineCap = 'round';
      ctx.stroke();

      // Main vibrant lanyard fabric (DreamCollege orange / DPS navy styling)
      const grad = ctx.createLinearGradient(anchorX, anchorY, badgeTopCenterX, badgeTopCenterY);
      grad.addColorStop(0, '#ff6b35');
      grad.addColorStop(0.5, '#ea580c');
      grad.addColorStop(1, '#ff8a50');

      ctx.beginPath();
      ctx.moveTo(anchorX, anchorY);
      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, badgeTopCenterX, badgeTopCenterY);
      ctx.lineWidth = 10;
      ctx.strokeStyle = grad;
      ctx.stroke();

      // Inner stitch accent
      ctx.beginPath();
      ctx.setLineDash([4, 6]);
      ctx.moveTo(anchorX, anchorY);
      ctx.bezierCurveTo(cp1X, cp1Y, cp2X, cp2Y, badgeTopCenterX, badgeTopCenterY);
      ctx.lineWidth = 1.5;
      ctx.strokeStyle = 'rgba(255, 255, 255, 0.65)';
      ctx.stroke();
      ctx.setLineDash([]); // reset

      animId = requestAnimationFrame(loop);
    };

    animId = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(animId);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  const handlePointerDown = useCallback((e) => {
    e.preventDefault();
    setIsInteracting(true);
    const p = physicsRef.current;
    p.isDragging = true;
    p.pointerStartX = e.clientX;
    p.pointerStartY = e.clientY;
    p.dragStartX = p.x;
    p.dragStartY = p.y;
    containerRef.current?.setPointerCapture(e.pointerId);
  }, []);

  const handlePointerMove = useCallback((e) => {
    const p = physicsRef.current;
    if (!p.isDragging) return;

    const dx = e.clientX - p.pointerStartX;
    const dy = e.clientY - p.pointerStartY;

    // Apply soft rubber-band resistance
    const maxDragX = 140;
    const maxDragY = 160;

    p.targetX = Math.max(-maxDragX, Math.min(maxDragX, p.dragStartX + dx * 0.75));
    p.targetY = Math.max(80, Math.min(280, p.dragStartY + dy * 0.75));
  }, []);

  const handlePointerUp = useCallback((e) => {
    setIsInteracting(false);
    const p = physicsRef.current;
    if (p.isDragging) {
      p.isDragging = false;
      // Impart release flick momentum
      p.vx = (p.targetX - p.dragStartX) * 3.5;
      p.vy = (p.targetY - p.dragStartY) * 3.5;
    }
  }, []);

  // Idle gentle swinging
  const handleMouseEnter = () => {
    const p = physicsRef.current;
    if (!p.isDragging) {
      p.vx += 35;
    }
  };

  return (
    <div
      ref={containerRef}
      className="lanyard-container"
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
      onMouseEnter={handleMouseEnter}
    >
      <div className="lanyard-anchor" />
      <canvas ref={canvasRef} className="lanyard-strap-canvas" />

      <div ref={badgeWrapRef} className="lanyard-badge-wrap" style={{ left: '50%' }}>
        <div className="lanyard-badge">
          <div className="lanyard-badge-clip" />
          <div className="badge-sheen" />

          {/* Header */}
          <div className="badge-header">
            <div className="badge-school-info">
              <span className="badge-school-title">DPS Indirapuram</span>
              <span className="badge-school-sub">Official Student Researcher ID</span>
            </div>
            <div className="badge-crest" title="Delhi Public School">
              DPS
            </div>
          </div>

          {/* Photo */}
          <div className="badge-photo-container">
            <img src={avatarUrl} alt={name} />
            <div className="badge-hologram">VERIFIED '26</div>
          </div>

          {/* Body Details */}
          <div className="badge-body">
            <div className="badge-name">{name}</div>
            <div className="badge-role">{role}</div>

            <div className="badge-meta-grid">
              <div className="badge-meta-item">
                <span className="badge-meta-label">Age / Grade</span>
                <span className="badge-meta-val">{age} yrs • Class 10</span>
              </div>
              <div className="badge-meta-item">
                <span className="badge-meta-label">Academic Score</span>
                <span className="badge-meta-val">94.9% (CBSE)</span>
              </div>
              <div className="badge-meta-item">
                <span className="badge-meta-label">Math Olympiad</span>
                <span className="badge-meta-val">IOQM '26: 31/100</span>
              </div>
              <div className="badge-meta-item">
                <span className="badge-meta-label">Diplomas</span>
                <span className="badge-meta-val">French A1-B1</span>
              </div>
            </div>
          </div>

          {/* Footer Barcode */}
          <div className="badge-footer">
            <div className="badge-barcode">
              {[4, 2, 6, 2, 8, 3, 2, 5, 2, 7, 3, 4, 6, 2, 4, 3, 5, 2, 8, 2, 4].map((h, i) => (
                <div
                  key={i}
                  className="barcode-bar"
                  style={{ width: `${(i % 3) + 1}px`, height: `${h * 3}px` }}
                />
              ))}
            </div>
            <div className="badge-id-num">{idNumber}</div>
          </div>
        </div>
      </div>

      <div className="lanyard-hint">
        <span>↔ Click & drag badge to swing with physics</span>
      </div>
    </div>
  );
};

export default InteractiveLanyard;
