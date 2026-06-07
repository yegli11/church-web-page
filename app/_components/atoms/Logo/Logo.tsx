import Image from 'next/image';

interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
      <div className="relative w-14 h-14 flex-shrink-0">
        <Image
          src="/images/logos/logo-antorcha-no-info.png"
          alt="Iglesia Evangélica Antorcha de Cristo"
          fill
          sizes="56px"
          className="object-contain"
          priority
        />
      </div>
      <div className="flex flex-col leading-tight">
        <span className="text-[11px] text-[#7B817F] font-medium tracking-widest uppercase">
          Iglesia Evangélica
        </span>
        <span className="text-sm font-bold text-[#7B817F] tracking-widest uppercase">
          Antorcha de Cristo
        </span>
      </div>
    </div>
  );
}
