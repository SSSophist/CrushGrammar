import { useEffect, useState } from 'react';

const links = [
  { href: '#position', label: '本关定位' },
  { href: '#method', label: '考场判断法' },
  { href: '#scenes', label: '四六级场景' },
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

    const sections = links
      .map((link) => document.getElementById(link.href.slice(1)))
      .filter((section): section is HTMLElement => Boolean(section));

    if (sections.length === 0) {
      return undefined;
    }

    let animationFrame: number | null = null;

    const updateActiveSection = () => {
      animationFrame = null;
      const activationLine = Math.min(220, Math.max(120, window.innerHeight * 0.28));
      const activeSection = sections.reduce((current, section) => {
        const rect = section.getBoundingClientRect();

        if (rect.top <= activationLine && rect.bottom > 24) {
          return section;
        }

        return current;
      }, sections[0]);

      setActiveHref(`#${activeSection.id}`);
    };

    const scheduleUpdate = () => {
      if (animationFrame !== null) {
        return;
      }

      animationFrame = window.requestAnimationFrame(updateActiveSection);
    };

    scheduleUpdate();
    window.addEventListener('scroll', scheduleUpdate, { passive: true });
    window.addEventListener('resize', scheduleUpdate);
    window.addEventListener('hashchange', scheduleUpdate);

    return () => {
      if (animationFrame !== null) {
        window.cancelAnimationFrame(animationFrame);
      }

      window.removeEventListener('scroll', scheduleUpdate);
      window.removeEventListener('resize', scheduleUpdate);
      window.removeEventListener('hashchange', scheduleUpdate);
    };
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
