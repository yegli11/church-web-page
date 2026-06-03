import Link from 'next/link';
import SocialLinks from '../../molecules/SocialLinks/SocialLinks';

const SOCIAL_LINKS = [
  { platform: 'Facebook', href: '#', label: 'Visit us on Facebook' },
  { platform: 'Instagram', href: '#', label: 'Visit us on Instagram' },
  { platform: 'YouTube', href: '#', label: 'Visit us on YouTube' },
];

export default function Footer() {
  return (
    <footer>
      <div>
        <div>
          <h3>Antorcha</h3>
          <p>A community of faith, hope, and love.</p>
        </div>

        <nav aria-label="Footer navigation">
          <ul>
            <li><Link href="/">Home</Link></li>
            <li><Link href="/history">History</Link></li>
            <li><Link href="/teachings">Teachings</Link></li>
            <li><Link href="/departments">Departments</Link></li>
            <li><Link href="/ministries">Ministries</Link></li>
          </ul>
        </nav>

        <SocialLinks links={SOCIAL_LINKS} />
      </div>

      <div>
        <p>&copy; {new Date().getFullYear()} Antorcha. All rights reserved.</p>
      </div>
    </footer>
  );
}
