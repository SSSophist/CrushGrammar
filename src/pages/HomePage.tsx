import { useState, useEffect } from 'react';
import LevelMap from '../components/LevelMap';
import RouteSelector from '../components/RouteSelector';
import { levels } from '../data/levels';
import type { RouteMode } from '../types';

interface HomePageProps {
  unlockedLevels: string[];
  onUnlockAll: () => void;
  onOpenLevel: (levelId: string) => void;
}

export default function HomePage({ unlockedLevels, onUnlockAll, onOpenLevel }: HomePageProps) {
  const [routeMode, setRouteMode] = useState<RouteMode>('three-day');
  const [clicks, setClicks] = useState(0);

  const handleCheatClick = () => {
    if (clicks + 1 >= 3) {
      onUnlockAll();
      setClicks(0);
    } else {
      setClicks(c => c + 1);
    }
  };

  useEffect(() => {
    if (clicks > 0) {
      const timer = setTimeout(() => setClicks(0), 1000);
      return () => clearTimeout(timer);
    }
  }, [clicks]);

  // Dynamically override level status and group based on unlockedLevels array and routeMode
  const dynamicLevels = levels.map(level => ({
    ...level,
    group: level.group[routeMode],
    status: unlockedLevels.includes(level.id) ? 'open' : 'locked'
  }));

  return (
    <main className="page-shell" style={{ position: 'relative' }}>
      <button 
        onClick={handleCheatClick}
        style={{
          position: 'fixed',
          top: 0,
          right: 0,
          width: '50px',
          height: '50px',
          background: 'transparent',
          border: 'none',
          cursor: 'default',
          outline: 'none',
          zIndex: 9999
        }}
        aria-hidden="true"
        title="Secret area"
      />
      <section className="home-intro">
        <div>
          <p className="eyebrow">Crush Grammar</p>
          <h1>四六级语法闯关地图</h1>
          <p className="home-lede">不研究语法规则，只训练读懂句子、写对句子、翻译顺句子。</p>
        </div>
        <div className="intro-actions">
          <RouteSelector value={routeMode} onChange={setRouteMode} />
          <button type="button" className="primary-action" onClick={() => onOpenLevel('level-1')}>
            开始第 1 关
          </button>
        </div>
      </section>

      <section className="route-note" aria-live="polite">
        当前路线：
        <strong>{routeMode === 'three-day' ? '3 天极限版' : '5 天稳妥版'}</strong>
        <span>核心内容相同，区别在每日任务量和补救练习密度。</span>
      </section>

      <LevelMap levels={dynamicLevels} onOpenLevel={onOpenLevel} />
    </main>
  );
}
