import Image from 'next/image';

interface MediaReelProps {
  images: string[];
  label?: string;
}

function ReelRow({ imgs, direction }: { imgs: string[]; direction: 'ltr' | 'rtl' }) {
  const doubled = [...imgs, ...imgs];
  return (
    <div className="flex gap-3 overflow-hidden">
      <div
        className={`flex gap-3 flex-nowrap ${direction === 'ltr' ? 'animate-reel-ltr' : 'animate-reel-rtl'}`}
        aria-hidden="true"
      >
        {doubled.map((src, i) => (
          <div key={i} className="relative h-44 w-64 flex-shrink-0 rounded-2xl overflow-hidden">
            <Image
              src={src}
              alt=""
              fill
              sizes="256px"
              className="object-cover opacity-50 hover:opacity-80 transition-opacity duration-500"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MediaReel({ images, label }: MediaReelProps) {
  const half = Math.ceil(images.length / 2);
  const row1 = images.slice(0, half);
  const row2 = images.slice(half);

  return (
    <section className="bg-[#060773] py-16 overflow-hidden">
      {label && (
        <p className="text-center text-xs font-bold uppercase tracking-[0.3em] text-white/35 mb-10">
          {label}
        </p>
      )}
      <div className="space-y-3">
        <ReelRow imgs={row1} direction="ltr" />
        <ReelRow imgs={row2} direction="rtl" />
      </div>
    </section>
  );
}
