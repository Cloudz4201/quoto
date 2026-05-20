type Props = { className?: string };

export function GooglePlayBadge({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 144 48"
      className={className}
      role="img"
      aria-label="Get it on Google Play"
    >
      <rect width="144" height="48" rx="7" fill="#000" />
      <rect
        x="0.5"
        y="0.5"
        width="143"
        height="47"
        rx="6.5"
        fill="none"
        stroke="#A6A6A6"
        strokeWidth="1"
      />

      <g transform="translate(11 11)">
        <defs>
          <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00A0FF" />
            <stop offset="1" stopColor="#00E2FF" />
          </linearGradient>
          <linearGradient id="gp-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
          <linearGradient id="gp-yellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE000" />
            <stop offset="1" stopColor="#FFBD00" />
          </linearGradient>
          <linearGradient id="gp-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00F076" />
            <stop offset="1" stopColor="#00A95C" />
          </linearGradient>
        </defs>

        <path d="M0 0 L0 26 L13 13 Z" fill="url(#gp-blue)" />
        <path d="M0 0 L13 13 L22 6.5 Z" fill="url(#gp-green)" />
        <path d="M0 26 L13 13 L22 19.5 Z" fill="url(#gp-red)" />
        <path d="M13 13 L22 6.5 L22 19.5 Z" fill="url(#gp-yellow)" />
      </g>

      <text
        x="42"
        y="19"
        fill="#FFFFFF"
        fontSize="7.5"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        letterSpacing="0.6"
      >
        GET IT ON
      </text>
      <text
        x="42"
        y="36"
        fill="#FFFFFF"
        fontSize="16"
        fontWeight="500"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      >
        Google Play
      </text>
    </svg>
  );
}
