export function StoreButtons({ className = "" }: { className?: string }) {
  return (
    <div className={`flex flex-col items-start gap-3 sm:flex-row sm:items-center ${className}`}>
      <a
        href="#"
        aria-label="Download Quoto on the App Store"
        className="inline-block transition hover:opacity-85"
      >
        <img
          src="/stores/app-store-badge.svg"
          alt="Download on the App Store"
          width={144}
          height={48}
          className="h-auto w-40"
        />
      </a>
      <a
        href="#"
        aria-label="Get Quoto on Google Play"
        className="inline-block transition hover:opacity-85"
      >
        <img
          src="/stores/google-play-badge.png"
          alt="Get it on Google Play"
          width={181}
          height={70}
          className="h-auto w-40"
        />
      </a>
    </div>
  );
}
