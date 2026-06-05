import Image from 'next/image';
import Link from 'next/link';

interface MinistryCardProps {
  title: string;
  imageSrc: string;
  imageAlt: string;
  href?: string;
}

export default function MinistryCard({ title, imageSrc, imageAlt, href = '#' }: MinistryCardProps) {
  return (
    <Link
      href={href}
      className="group relative block aspect-[3/4] rounded-2xl overflow-hidden shadow-sm"
    >
      <Image
        src={imageSrc}
        alt={imageAlt}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
        className="object-cover transition-transform duration-500 group-hover:scale-105"
      />
      {/* Capa oscura (baja opacidad de la foto) */}
      <div className="absolute inset-0 bg-black/55 transition-colors duration-300 group-hover:bg-black/45" />

      <div className="absolute inset-0 flex flex-col justify-between p-4 md:p-5 text-white">
        <h3 className="text-lg md:text-xl font-bold drop-shadow-md">{title}</h3>
        <span className="text-sm underline underline-offset-2 opacity-90 transition-opacity group-hover:opacity-100">
          Conocer más
        </span>
      </div>
    </Link>
  );
}
