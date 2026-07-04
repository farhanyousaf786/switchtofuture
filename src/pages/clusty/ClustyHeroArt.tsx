const STARS = [
  { x: 18, y: 22, s: 2.2, d: 0 },
  { x: 28, y: 38, s: 1.4, d: 0.4 },
  { x: 42, y: 18, s: 1.8, d: 0.8 },
  { x: 52, y: 32, s: 2.6, d: 1.2 },
  { x: 38, y: 48, s: 1.2, d: 1.6 },
  { x: 62, y: 24, s: 1.6, d: 0.2 },
  { x: 72, y: 42, s: 2, d: 0.9 },
  { x: 58, y: 52, s: 1.3, d: 1.4 },
  { x: 82, y: 30, s: 1.5, d: 0.5 },
  { x: 88, y: 46, s: 2.4, d: 1.1 },
  { x: 48, y: 62, s: 1.1, d: 1.8 },
  { x: 68, y: 58, s: 1.7, d: 0.7 },
];

export default function ClustyHeroArt() {
  return (
    <div className="clusty-art" aria-hidden>
      <div className="clusty-art__frame">
        <svg className="clusty-art__svg" viewBox="0 0 360 280" fill="none" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <radialGradient id="clusty-nebula" cx="75%" cy="35%" r="55%">
              <stop offset="0%" stopColor="#40AD64" stopOpacity="0.22" />
              <stop offset="100%" stopColor="#40AD64" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="clusty-beam" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#40AD64" stopOpacity="0" />
              <stop offset="40%" stopColor="#40AD64" stopOpacity="0.55" />
              <stop offset="100%" stopColor="#40AD64" stopOpacity="0.15" />
            </linearGradient>
            <linearGradient id="clusty-fringe" x1="0" y1="0" x2="1" y2="0">
              <stop offset="0%" stopColor="#40AD64" stopOpacity="0.05" />
              <stop offset="12%" stopColor="#40AD64" stopOpacity="0.45" />
              <stop offset="24%" stopColor="#40AD64" stopOpacity="0.08" />
              <stop offset="36%" stopColor="#40AD64" stopOpacity="0.55" />
              <stop offset="48%" stopColor="#40AD64" stopOpacity="0.1" />
              <stop offset="60%" stopColor="#40AD64" stopOpacity="0.5" />
              <stop offset="72%" stopColor="#40AD64" stopOpacity="0.08" />
              <stop offset="84%" stopColor="#40AD64" stopOpacity="0.4" />
              <stop offset="100%" stopColor="#40AD64" stopOpacity="0.05" />
            </linearGradient>
            <filter id="clusty-glow">
              <feGaussianBlur stdDeviation="2" result="blur" />
              <feMerge>
                <feMergeNode in="blur" />
                <feMergeNode in="SourceGraphic" />
              </feMerge>
            </filter>
          </defs>

          <rect width="360" height="280" fill="url(#clusty-nebula)" />

          {/* Star cluster */}
          <g className="clusty-art__cluster" filter="url(#clusty-glow)">
            <line x1="92" y1="58" x2="118" y2="72" stroke="#40AD64" strokeOpacity="0.15" strokeWidth="0.75" />
            <line x1="118" y1="72" x2="142" y2="54" stroke="#40AD64" strokeOpacity="0.12" strokeWidth="0.75" />
            <line x1="118" y1="72" x2="128" y2="98" stroke="#40AD64" strokeOpacity="0.1" strokeWidth="0.75" />
            <line x1="142" y1="54" x2="168" y2="68" stroke="#40AD64" strokeOpacity="0.12" strokeWidth="0.75" />
            <line x1="128" y1="98" x2="152" y2="112" stroke="#40AD64" strokeOpacity="0.1" strokeWidth="0.75" />
            <line x1="152" y1="112" x2="178" y2="88" stroke="#40AD64" strokeOpacity="0.08" strokeWidth="0.75" />
            <circle cx="92" cy="58" r="2.2" fill="#40AD64" fillOpacity="0.9" className="clusty-art__star" />
            <circle cx="118" cy="72" r="3" fill="#40AD64" className="clusty-art__star clusty-art__star--bright" />
            <circle cx="142" cy="54" r="2" fill="#40AD64" fillOpacity="0.85" className="clusty-art__star" />
            <circle cx="168" cy="68" r="1.6" fill="#40AD64" fillOpacity="0.7" className="clusty-art__star" />
            <circle cx="128" cy="98" r="2.4" fill="#40AD64" fillOpacity="0.8" className="clusty-art__star" />
            <circle cx="152" cy="112" r="1.8" fill="#40AD64" fillOpacity="0.75" className="clusty-art__star" />
            <circle cx="178" cy="88" r="2.6" fill="#40AD64" className="clusty-art__star clusty-art__star--bright" />
            <circle cx="108" cy="44" r="1.2" fill="#fff" fillOpacity="0.5" className="clusty-art__star" />
            <circle cx="156" cy="76" r="1" fill="#fff" fillOpacity="0.4" className="clusty-art__star" />
            <circle cx="134" cy="62" r="1.4" fill="#fff" fillOpacity="0.35" className="clusty-art__star" />
          </g>

          {/* Incoming wave */}
          <path
            className="clusty-art__wave clusty-art__wave--a"
            d="M8 140 C 40 120, 60 160, 88 140 S 120 120, 148 140"
            stroke="url(#clusty-beam)"
            strokeWidth="2"
            strokeLinecap="round"
          />
          <path
            className="clusty-art__wave clusty-art__wave--b"
            d="M8 148 C 42 168, 62 128, 88 148 S 122 168, 148 148"
            stroke="url(#clusty-beam)"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeOpacity="0.6"
          />

          {/* Double slit barrier */}
          <rect x="148" y="96" width="6" height="88" rx="2" fill="#1a1a1a" stroke="#40AD64" strokeOpacity="0.35" strokeWidth="1" />
          <rect x="148" y="108" width="6" height="14" rx="1" fill="#050505" />
          <rect x="148" y="158" width="6" height="14" rx="1" fill="#050505" />

          {/* Interference pattern */}
          <rect x="168" y="100" width="172" height="80" fill="url(#clusty-fringe)" className="clusty-art__fringe" rx="4" />
          <path
            className="clusty-art__wave clusty-art__wave--c"
            d="M168 140 C 210 118, 240 162, 280 140 S 320 118, 340 140"
            stroke="#40AD64"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
          />
          <path
            className="clusty-art__wave clusty-art__wave--d"
            d="M168 148 C 212 170, 242 126, 282 148 S 318 170, 340 148"
            stroke="#40AD64"
            strokeOpacity="0.25"
            strokeWidth="1.2"
            strokeLinecap="round"
          />

          {/* Pulse dots on map metaphor */}
          <circle cx="248" cy="132" r="4" fill="#40AD64" fillOpacity="0.35" className="clusty-art__pulse" />
          <circle cx="268" cy="152" r="3" fill="#40AD64" fillOpacity="0.5" className="clusty-art__pulse" />
          <circle cx="298" cy="128" r="3.5" fill="#40AD64" fillOpacity="0.4" className="clusty-art__pulse" />
        </svg>

        <div className="clusty-art__stars">
          {STARS.map((star) => (
            <span
              key={`${star.x}-${star.y}`}
              className="clusty-art__dust"
              style={{
                left: `${star.x}%`,
                top: `${star.y}%`,
                width: `${star.s}px`,
                height: `${star.s}px`,
                animationDelay: `${star.d}s`,
              }}
            />
          ))}
        </div>
      </div>

      <p className="clusty-art__caption">
        <span>Double slit</span>
        <span className="clusty-art__dot" />
        <span>Star cluster</span>
        <span className="clusty-art__dot" />
        <span>Nearby pulses</span>
      </p>
      <p className="clusty-art__sub">
        Feelings ripple outward. People cluster close. You&apos;re not alone in the pattern.
      </p>
    </div>
  );
}
