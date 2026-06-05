import ChurchImage from '../../atoms/ChurchImage/ChurchImage';

interface GalleryImage {
  id: string;
  src: string;
  alt: string;
}

interface GalleryProps {
  images: GalleryImage[];
  className?: string;
}

export default function Gallery({ images, className = '' }: GalleryProps) {
  return (
    <section aria-label="Photo gallery" className={className}>
      <ul>
        {images.map((image) => (
          <li key={image.id}>
            <ChurchImage src={image.src} alt={image.alt} width={400} height={300} />
          </li>
        ))}
      </ul>
    </section>
  );
}
