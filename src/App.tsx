import { useState } from 'react';
import HomePage from './pages/HomePage';

type Screen = 'home' | 'level-1';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  if (screen === 'level-1') {
    return (
      <main className="page-shell">
        <button type="button" className="text-action" onClick={() => setScreen('home')}>
          返回闯关地图
        </button>
        <section className="lesson-preview">
          <p className="eyebrow">Level 1</p>
          <h1>先会看句子骨架</h1>
          <p>关卡学习页会在下一步接入完整内容。</p>
        </section>
      </main>
    );
  }

  return <HomePage onOpenLevel={(levelId) => levelId === 'level-1' && setScreen('level-1')} />;
}
