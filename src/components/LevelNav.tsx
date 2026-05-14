import { useEffect, useState } from 'react';

const links = [
  { href: '#position', label: '本关定位' },
  { href: '#method', label: '考场判断法' },
  { href: '#scenes', label: '四六级场景' },
  { href: '#terms', label: '术语急救' },
  { href: '#examples', label: '例句拆解' },
  { href: '#traps', label: '常见坑' },
  { href: '#practice', label: '过关练习' },
  { href: '#review', label: '本关总结' }
];

interface LevelNavProps {
  ariaLabel?: string;
}

export default function LevelNav({ ariaLabel = '本关学习路线' }: LevelNavProps) {
  const [activeHref, setActiveHref] = useState(links[0].href);

  useEffect(() => {
    if (links.some((link) => link.href === window.location.hash)) {
      setActiveHref(window.location.hash);
    }

    if (!('IntersectionObserver' in window)) {
      return undefined;
    }

    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((first, second) => first.boundingClientRect.top - second.boundingClientRect.top)[0];

        if (visibleEntry?.target.id) {
          setActiveHref(`#${visibleEntry.target.id}`);
        }
      },
      {
        rootMargin: '-22% 0px -62% 0px',
        threshold: [0, 0.2, 0.6],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav className="level-nav" aria-label={ariaLabel}>
      <span className="level-nav-title">本关导航</span>
      {links.map((link) => (
        <a
          aria-current={activeHref === link.href ? 'location' : undefined}
          key={link.href}
          href={link.href}
          onClick={() => setActiveHref(link.href)}
        >
          {link.label}
        </a>
      ))}
    </nav>
  );
}
