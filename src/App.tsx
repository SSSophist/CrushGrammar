import { useState } from 'react';
import HomePage from './pages/HomePage';
import LevelOnePage from './pages/LevelOnePage';

type Screen = 'home' | 'level-1';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');

  if (screen === 'level-1') {
    return <LevelOnePage onBack={() => setScreen('home')} />;
  }

  return <HomePage onOpenLevel={(levelId) => levelId === 'level-1' && setScreen('level-1')} />;
}
