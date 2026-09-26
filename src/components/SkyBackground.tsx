type CloudSpec = {
  top: string;
  left: string;
  scale: number;
  duration: number;
  opacity: number;
};

const clouds: CloudSpec[] = [
  { top: "2%", left: "4%", scale: 1.3, duration: 70, opacity: 0.95 },
  { top: "8%", left: "62%", scale: 1.7, duration: 85, opacity: 0.9 },
  { top: "16%", left: "32%", scale: 1, duration: 60, opacity: 0.85 },
  { top: "24%", left: "82%", scale: 1.2, duration: 95, opacity: 0.8 },
  { top: "33%", left: "10%", scale: 0.9, duration: 75, opacity: 0.75 },
  { top: "40%", left: "50%", scale: 1.4, duration: 100, opacity: 0.7 },
  { top: "50%", left: "78%", scale: 1, duration: 65, opacity: 0.65 },
  { top: "58%", left: "22%", scale: 1.2, duration: 90, opacity: 0.6 },
  { top: "68%", left: "58%", scale: 0.9, duration: 80, opacity: 0.55 },
  { top: "78%", left: "6%", scale: 1.1, duration: 72, opacity: 0.5 },
  { top: "86%", left: "70%", scale: 1.3, duration: 105, opacity: 0.45 },
  { top: "94%", left: "38%", scale: 1, duration: 68, opacity: 0.4 },
];

function Cloud({ opacity }: { opacity: number }) {
  return (
    <svg
      viewBox="0 0 200 100"
      width={200}
      height={100}
      className="overflow-visible"
      style={{ opacity }}
    >
      <g filter="url(#cloud-shadow)">
        <ellipse cx="100" cy="70" rx="80" ry="24" fill="white" />
        <circle cx="55" cy="55" r="28" fill="white" />
        <circle cx="90" cy="42" r="34" fill="white" />
        <circle cx="130" cy="52" r="30" fill="white" />
        <circle cx="160" cy="62" r="22" fill="white" />
      </g>
    </svg>
  );
}

export function SkyBackground() {
  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <div className="absolute inset-0 bg-gradient-to-b from-pbc-blue/45 via-pbc-blue/15 to-white" />
      <svg width="0" height="0" className="absolute">
        <defs>
          <filter id="cloud-shadow" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="6"
              floodColor="#4d7cb8"
              floodOpacity="0.18"
            />
          </filter>
        </defs>
      </svg>
      {clouds.map((cloud, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            top: cloud.top,
            left: cloud.left,
            transform: `scale(${cloud.scale})`,
            animation: `cloud-drift ${cloud.duration}s ease-in-out infinite`,
            animationDelay: `${i * -9}s`,
          }}
        >
          <Cloud opacity={cloud.opacity} />
        </div>
      ))}
    </div>
  );
}
