import Image from 'next/image';

interface MediaReelProps {
  images: string[];
  label?: string;
  colors?: string[];
  bg?: string;
}

function ReelRow({ imgs, direction, colors }: { imgs: string[]; direction: 'ltr' | 'rtl'; colors?: string[] }) {
  const doubled = [...imgs, ...imgs];
  return (
    <div className="flex gap-3 overflow-hidden">
      <div
        className={`flex gap-3 flex-nowrap ${direction === 'ltr' ? 'animate-reel-ltr' : 'animate-reel-rtl'}`}
        aria-hidden="true"
      >
        {doubled.map((src, i) => {
          const ringColor = colors ? colors[i % colors.length] : undefined;
          return (
            <div
              key={i}
              className="relative h-44 w-64 flex-shrink-0 rounded-2xl overflow-hidden"
              style={ringColor ? { boxShadow: `0 0 0 3px ${ringColor}` } : undefined}
            >
              <Image
                src={src}
                alt=""
                fill
                sizes="256px"
                className={`object-cover transition-opacity duration-500 ${colors ? 'opacity-80 hover:opacity-100' : 'opacity-50 hover:opacity-80'}`}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function MediaReel({ images, label, colors, bg }: MediaReelProps) {
  const half = Math.ceil(images.length / 2);
  const row1 = images.slice(0, half);
  const row2 = images.slice(half);

  return (
    <section className="py-16 overflow-hidden" style={{ background: bg ?? '#060773' }}>
      {label && (
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/35 mb-10">
          {label}
        </p>
      )}
      <div className="space-y-3">
        <ReelRow imgs={row1} direction="ltr" colors={colors} />
        <ReelRow imgs={row2} direction="rtl" colors={colors} />
      </div>
    </section>
  );
}
