import { useEffect, useRef, useState } from 'react';
import { FiDownload, FiExternalLink, FiX } from 'react-icons/fi';

const resumeUrl = '/assets/Sachin-Kumar-Resume.pdf';
const burstItems = ['♡', '✦', '</>', '{ }', 'AI', '⚡'];

function randomPosition() {
  if (typeof window === 'undefined') return { x: 24, y: 120 };
  const maxX = Math.max(window.innerWidth - 110, 24);
  const maxY = Math.max(window.innerHeight - 160, 96);
  return {
    x: Math.floor(24 + Math.random() * (maxX - 24)),
    y: Math.floor(96 + Math.random() * (maxY - 96))
  };
}

export default function SmartBot() {
  const petCount = useRef(0);
  const lastPet = useRef(0);
  const [open, setOpen] = useState(false);
  const [flying, setFlying] = useState(true);
  const [showBubble, setShowBubble] = useState(true);
  const [position, setPosition] = useState(() => randomPosition());
  const [bursts, setBursts] = useState([]);

  useEffect(() => {
    const canAnimate = window.matchMedia('(prefers-reduced-motion: no-preference)').matches;
    if (!canAnimate) {
      setFlying(false);
      return undefined;
    }

    const move = window.setInterval(() => {
      setPosition(randomPosition());
    }, 1500);
    const dock = window.setTimeout(() => {
      window.clearInterval(move);
      setFlying(false);
    }, 3000);
    const hideBubble = window.setTimeout(() => {
      setShowBubble(false);
    }, 7000);

    return () => {
      window.clearInterval(move);
      window.clearTimeout(dock);
      window.clearTimeout(hideBubble);
    };
  }, []);

  const petBot = () => {
    const createdAt = Date.now();
    const particles = Array.from({ length: 18 }, (_, index) => {
      const angle = (Math.PI * 2 * index) / 18 + Math.random() * 0.45;
      const distance = 54 + Math.random() * 58;
      return {
        id: `${createdAt}-${index}`,
        label: burstItems[index % burstItems.length],
        x: Math.cos(angle) * distance,
        y: Math.sin(angle) * distance - 18,
        rotate: -35 + Math.random() * 70,
        delay: Math.random() * 0.08
      };
    });

    setBursts((items) => [...items, ...particles].slice(-54));
    window.setTimeout(() => {
      setBursts((items) => items.filter((item) => !particles.some((particle) => particle.id === item.id)));
    }, 1000);
  };

  const handlePetMove = (event) => {
    if (event.pointerType !== 'mouse') return;

    const now = Date.now();
    if (now - lastPet.current < 65) return;
    lastPet.current = now;
    petCount.current += 1;

    if (petCount.current >= 3) {
      petCount.current = 0;
      petBot();
    }
  };

  return (
    <div
      className={`smart-bot-widget ${flying ? 'is-flying' : 'is-docked'}`}
      style={flying ? { '--bot-x': `${position.x}px`, '--bot-y': `${position.y}px` } : undefined}
    >
      {open && (
        <div className="resume-buddy-panel" role="dialog" aria-label="Sachin Kumar resume preview">
          <div className="resume-buddy-panel__header">
            <div>
              <p className="resume-buddy-panel__eyebrow">Resume buddy</p>
              <h3>Sachin Kumar</h3>
              <p>Full Stack Developer | React.js | Node.js | AI Enthusiast</p>
            </div>
            <button type="button" aria-label="Close resume preview" onClick={() => setOpen(false)}>
              <FiX />
            </button>
          </div>

          <div className="resume-buddy-panel__preview">
            <iframe title="Sachin Kumar Resume" src={`${resumeUrl}#toolbar=0&navpanes=0`} />
          </div>

          <div className="resume-buddy-panel__actions">
            <a href={resumeUrl} target="_blank" rel="noreferrer">
              <FiExternalLink /> Open Resume
            </a>
            <a href={resumeUrl} download="Sachin-Kumar-Resume.pdf">
              <FiDownload /> Download
            </a>
          </div>
        </div>
      )}

      {!open && showBubble && <div className="smart-bot-bubble">Need my resume?</div>}

      <button
        type="button"
        className={`smart-bot ${open ? 'is-open mood-happy' : flying ? 'mood-happy' : 'mood-ready'}`}
        aria-label={open ? 'Close resume preview' : 'Open resume preview'}
        onPointerMove={handlePetMove}
        onPointerLeave={() => {
          petCount.current = 0;
        }}
        onClick={() => {
          setOpen((value) => !value);
        }}
      >
        <span className="smart-bot-burst" aria-hidden="true">
          {bursts.map((particle) => (
            <span
              key={particle.id}
              className="smart-bot-particle"
              style={{
                '--burst-x': `${particle.x}px`,
                '--burst-y': `${particle.y}px`,
                '--burst-rotate': `${particle.rotate}deg`,
                '--burst-delay': `${particle.delay}s`
              }}
            >
              {particle.label}
            </span>
          ))}
        </span>
        <span className="smart-bot__antenna" />
        <span className="smart-bot__head">
          <span className="smart-bot__eye smart-bot__eye--left" />
          <span className="smart-bot__eye smart-bot__eye--right" />
          <span className="smart-bot__mouth" />
        </span>
        <span className="smart-bot__body">
          <span />
          <span />
          <span />
        </span>
      </button>
    </div>
  );
}
