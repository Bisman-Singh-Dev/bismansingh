import React, { useEffect, useRef, useState } from 'react';
import { Play, Pause, RotateCw, Activity, Compass, Cpu } from 'lucide-react';
import './MotionPathCanvas.css';

export const MotionPathCanvas = () => {
  const pathRef = useRef(null);
  const vehicleRef = useRef(null);
  const [isRunning, setIsRunning] = useState(true);
  const [activeWaypoint, setActiveWaypoint] = useState(1);
  const [patrolMetrics, setPatrolMetrics] = useState({
    distance: 428,
    potholesFound: 3,
    materialRemaining: '82%',
    currentSpeed: '4.2 km/h'
  });

  const animProgressRef = useRef(0);
  const animFrameRef = useRef(null);

  useEffect(() => {
    const path = pathRef.current;
    const vehicle = vehicleRef.current;
    if (!path || !vehicle) return;

    const pathLength = path.getTotalLength();
    let lastTime = performance.now();

    const animateLoop = (now) => {
      const dt = (now - lastTime) / 1000;
      lastTime = now;

      if (isRunning) {
        animProgressRef.current = (animProgressRef.current + dt * 0.08) % 1;
        const currentDistance = animProgressRef.current * pathLength;
        const point = path.getPointAtLength(currentDistance);

        // Next point for heading angle
        const nextDist = (currentDistance + 2) % pathLength;
        const nextPoint = path.getPointAtLength(nextDist);
        const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * (180 / Math.PI);

        vehicle.style.transform = `translate(${point.x}px, ${point.y}px) rotate(${angle}deg)`;

        // Waypoint triggers based on progress
        if (animProgressRef.current < 0.25) setActiveWaypoint(1);
        else if (animProgressRef.current < 0.5) setActiveWaypoint(2);
        else if (animProgressRef.current < 0.75) setActiveWaypoint(3);
        else setActiveWaypoint(4);
      }

      animFrameRef.current = requestAnimationFrame(animateLoop);
    };

    animFrameRef.current = requestAnimationFrame(animateLoop);

    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isRunning]);

  return (
    <div className="motion-path-container glass-panel">
      {/* Header telemetry HUD */}
      <div className="motion-hud-header">
        <div className="hud-title-wrap">
          <div className="hud-status-indicator">
            <span className="hud-dot" />
            <span className="hud-label">IPRV PATROL SIMULATOR • INDIRAPURAM ZONE</span>
          </div>
          <p className="hud-subtitle">Real-time GPS waypoint tracking & autonomous road dispenser path</p>
        </div>

        <div className="hud-controls">
          <button
            onClick={() => setIsRunning(!isRunning)}
            className="hud-btn"
            title={isRunning ? "Pause Simulation" : "Resume Simulation"}
          >
            {isRunning ? <Pause size={14} /> : <Play size={14} />}
            <span>{isRunning ? 'Pause' : 'Resume'}</span>
          </button>
        </div>
      </div>

      {/* SVG Canvas Map */}
      <div className="motion-map-wrap">
        <svg
          viewBox="0 0 740 280"
          className="motion-svg"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Subtle grid lines */}
          <defs>
            <pattern id="road-grid" width="30" height="30" patternUnits="userSpaceOnUse">
              <path d="M 30 0 L 0 0 0 30" fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1"/>
            </pattern>
            <linearGradient id="pathGradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#ff6b35" stopOpacity="0.8"/>
              <stop offset="50%" stopColor="#00e5ff" stopOpacity="0.9"/>
              <stop offset="100%" stopColor="#10b981" stopOpacity="0.8"/>
            </linearGradient>
            <filter id="glow" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          <rect width="100%" height="100%" fill="url(#road-grid)" />

          {/* Road Corridor outline */}
          <path
            d="M 60 140 C 140 40, 220 220, 340 120 C 440 30, 520 240, 680 140"
            fill="none"
            stroke="rgba(255, 255, 255, 0.08)"
            strokeWidth="24"
            strokeLinecap="round"
          />

          {/* Center dashed road line */}
          <path
            d="M 60 140 C 140 40, 220 220, 340 120 C 440 30, 520 240, 680 140"
            fill="none"
            stroke="rgba(255, 255, 255, 0.2)"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />

          {/* Active Navigation Motion Path */}
          <path
            ref={pathRef}
            id="iprv-patrol-route"
            d="M 60 140 C 140 40, 220 220, 340 120 C 440 30, 520 240, 680 140"
            fill="none"
            stroke="url(#pathGradient)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#glow)"
          />

          {/* Waypoint 1: Base Station */}
          <g transform="translate(60, 140)" className="waypoint-marker">
            <circle r="12" fill="rgba(255, 107, 53, 0.2)" />
            <circle r="5" fill="#ff6b35" />
            <text x="0" y="-18" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">
              WP-01: Base Station
            </text>
          </g>

          {/* Waypoint 2: YOLO Scan Zone */}
          <g transform="translate(220, 155)" className="waypoint-marker">
            <circle r="14" fill="rgba(0, 229, 255, 0.2)" />
            <circle r="5" fill="#00e5ff" />
            <text x="0" y="-18" textAnchor="middle" fill="#00e5ff" fontSize="10" fontFamily="var(--font-mono)">
              WP-02: YOLO Scan Point
            </text>
          </g>

          {/* Waypoint 3: Pothole Detected & Dispense */}
          <g transform="translate(420, 95)" className="waypoint-marker">
            <circle r="16" fill="rgba(239, 68, 68, 0.25)" />
            <circle r="6" fill="#ef4444" />
            <text x="0" y="-18" textAnchor="middle" fill="#ef4444" fontSize="10" fontFamily="var(--font-mono)">
              WP-03: Hazard Dispense
            </text>
          </g>

          {/* Waypoint 4: Area Boundary */}
          <g transform="translate(680, 140)" className="waypoint-marker">
            <circle r="12" fill="rgba(16, 185, 129, 0.2)" />
            <circle r="5" fill="#10b981" />
            <text x="0" y="-18" textAnchor="middle" fill="#94a3b8" fontSize="10" fontFamily="var(--font-mono)">
              WP-04: Perimeter Turn
            </text>
          </g>

          {/* Autonomous Vehicle Icon on Motion Path */}
          <g ref={vehicleRef} className="rover-vehicle" style={{ transformOrigin: '0px 0px' }}>
            {/* Rover Chassis */}
            <rect x="-18" y="-10" width="36" height="20" rx="5" fill="#ff6b35" stroke="#ffffff" strokeWidth="1.5" />
            {/* 6 Rocker-Bogie wheels */}
            <circle cx="-12" cy="-12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="0" cy="-12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="12" cy="-12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="-12" cy="12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="0" cy="12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            <circle cx="12" cy="12" r="3.5" fill="#334155" stroke="#94a3b8" strokeWidth="1" />
            {/* LiDAR Dome */}
            <circle cx="0" cy="0" r="5" fill="#00e5ff" />
            <circle cx="0" cy="0" r="2.5" fill="#ffffff" />
            {/* Forward Headlight Beam */}
            <polygon points="18,-4 34,-12 34,12 18,4" fill="rgba(0, 229, 255, 0.3)" />
          </g>
        </svg>
      </div>

      {/* Live Telemetry Ticker */}
      <div className="motion-telemetry-grid">
        <div className={`telemetry-card ${activeWaypoint === 1 ? 'active' : ''}`}>
          <div className="telemetry-label">CURRENT PHASE</div>
          <div className="telemetry-value">
            {activeWaypoint === 1 && 'Base Coordinates (Refill)'}
            {activeWaypoint === 2 && 'AI Pothole Sweep (PiCam)'}
            {activeWaypoint === 3 && 'Auger Dispensing (Cold-Mix)'}
            {activeWaypoint === 4 && 'Perimeter Checkpoint'}
          </div>
        </div>

        <div className="telemetry-card">
          <div className="telemetry-label">POP TANK PAYLOAD</div>
          <div className="telemetry-value">{patrolMetrics.materialRemaining} (Weight Sensor OK)</div>
        </div>

        <div className="telemetry-card">
          <div className="telemetry-label">LIDAR TELEMETRY</div>
          <div className="telemetry-value">RPiLIDAR A1M8 • 360° Clear</div>
        </div>

        <div className="telemetry-card">
          <div className="telemetry-label">CONTROLLERS</div>
          <div className="telemetry-value">RPi 4 + Arduino MEGA</div>
        </div>
      </div>
    </div>
  );
};

export default MotionPathCanvas;
