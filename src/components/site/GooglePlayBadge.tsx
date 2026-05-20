type Props = { className?: string };

export function GooglePlayBadge({ className = "" }: Props) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 119.66407 40"
      className={className}
      role="img"
      aria-label="Get it on Google Play"
    >
      <rect
        x="0.5"
        y="0.5"
        width="118.66407"
        height="39"
        rx="5"
        fill="#000"
        stroke="#A6A6A6"
        strokeWidth="1"
      />

      <g transform="translate(10 7)">
        <defs>
          <linearGradient id="gp-blue" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00A0FF" />
            <stop offset="1" stopColor="#00E2FF" />
          </linearGradient>
          <linearGradient id="gp-green" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#00F076" />
            <stop offset="1" stopColor="#00A95C" />
          </linearGradient>
          <linearGradient id="gp-yellow" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FFE000" />
            <stop offset="1" stopColor="#FFBD00" />
          </linearGradient>
          <linearGradient id="gp-red" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#FF3A44" />
            <stop offset="1" stopColor="#C31162" />
          </linearGradient>
        </defs>

        <path d="M0 0 L0 26 L13 13 Z" fill="url(#gp-blue)" />
        <path d="M0 0 L13 13 L22 6.5 Z" fill="url(#gp-green)" />
        <path d="M0 26 L13 13 L22 19.5 Z" fill="url(#gp-red)" />
        <path d="M13 13 L22 6.5 L22 19.5 Z" fill="url(#gp-yellow)" />
      </g>

      <text
        x="38"
        y="17"
        fill="#FFFFFF"
        fontSize="7"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
        letterSpacing="0.5"
      >
        GET IT ON
      </text>
      <text
        x="38"
        y="32"
        fill="#FFFFFF"
        fontSize="14"
        fontWeight="600"
        fontFamily="-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif"
      >
        Google Play
      </text>
    </svg>
  );
}
