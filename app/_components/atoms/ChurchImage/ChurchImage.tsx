import NextImage from 'next/image';

interface ChurchImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  fill?: boolean;
  priority?: boolean;
  className?: string;
}

export default function ChurchImage({
  src,
  alt,
  width,
  height,
  fill = false,
  priority = false,
  className = '',
}: ChurchImageProps) {
  return (
    <NextImage
      src={src}
      alt={alt}
      width={fill ? undefined : width}
      height={fill ? undefined : height}
      fill={fill}
      priority={priority}
      className={className}
    />
  );
}
