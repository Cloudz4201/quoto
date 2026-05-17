export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col gap-3 sm:flex-row ${className}`}>
      <a
        href="#"
        aria-label="Download JobSlip on the App Store"
        className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-90"
      >
        <svg viewBox="0 0 384 512" className="h-7 w-7 fill-current" aria-hidden="true">
          <path d="M318.7 268.7c-.2-37 16.6-65 50.5-85.6-19-27.2-47.8-42.2-85.6-45.1-35.9-2.8-75.1 21-89.4 21-15.1 0-49.9-20-77.3-19.5C72.1 140.9 24 184.3 24 273.7c0 26.5 4.9 53.8 14.6 81.9 13 36.4 59.7 125.6 108.4 124.1 25.4-.6 43.4-18.1 76.4-18.1 32.1 0 48.7 18.1 77.1 18.1 49.1-.7 91.4-81.8 103.8-118.4-66.5-31.3-66-91.7-66-92.6zM258.3 89.5c19.4-23.4 30.1-49.4 25-78.5-23.2 1.3-50.7 16.1-66.7 35.4-14.7 17.4-27.6 43.5-24.7 70.9 25.6 2 50.8-13.4 66.4-27.8z"/>
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-80">Download on the</span>
          <span className="text-lg font-semibold">App Store</span>
        </span>
      </a>
      <a
        href="#"
        aria-label="Get JobSlip on Google Play"
        className="group inline-flex items-center gap-3 rounded-2xl bg-foreground px-5 py-3 text-background transition hover:opacity-90"
      >
        <svg viewBox="0 0 512 512" className="h-7 w-7" aria-hidden="true">
          <path fill="#00d4ff" d="M325.3 234.3 104.3 13.4l257.4 148.6-36.4 72.3z"/>
          <path fill="#00f076" d="M104.3 13.4 325.3 234.3 104.3 455.2c-9.4-5.6-15.6-15.8-15.6-27.6V41c0-11.7 6.3-21.9 15.6-27.6z"/>
          <path fill="#ffce00" d="m430.8 268.6-69.1 39.9-36.4-72.3 36.4-72.3 69.1 39.9c14.7 8.5 14.7 27.9 0 36.4z"/>
          <path fill="#ff3a44" d="M361.7 308.5 104.3 455.2 325.3 234.3l36.4 74.2z"/>
        </svg>
        <span className="flex flex-col items-start leading-tight">
          <span className="text-[10px] uppercase tracking-wide opacity-80">Get it on</span>
          <span className="text-lg font-semibold">Google Play</span>
        </span>
      </a>
    </div>
  );
}
