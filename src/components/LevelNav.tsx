const links = [
  { href: '#position', label: '本关定位' },
  { href: '#method', label: '考场判断法' },
  { href: '#scenes', label: '四六级场景' },
  { href: '#terms', label: '术语急救' },
  { href: '#examples', label: '例句拆解' },
  { href: '#traps', label: '常见坑' },
  { href: '#practice', label: '过关练习' },
  { href: '#review', label: '最后速记' }
];

export default function LevelNav() {
  return (
    <nav className="level-nav" aria-label="第 1 关学习路线">
      {links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
}
