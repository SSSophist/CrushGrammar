import { useEffect, useState } from 'react';
import LevelIntroModal from './components/LevelIntroModal';
import { levelIntros } from './data/levelIntros';
import HomePage from './pages/HomePage';
import LevelFivePage from './pages/LevelFivePage';
import LevelFourPage from './pages/LevelFourPage';
import LevelEightPage from './pages/LevelEightPage';
import LevelNinePage from './pages/LevelNinePage';
import LevelOnePage from './pages/LevelOnePage';
import LevelSevenPage from './pages/LevelSevenPage';
import LevelSixPage from './pages/LevelSixPage';
import LevelThreePage from './pages/LevelThreePage';
import LevelTwoPage from './pages/LevelTwoPage';

type Screen =
  | 'home'
  | 'level-1'
  | 'level-2'
  | 'level-3'
  | 'level-4'
  | 'level-5'
  | 'level-6'
  | 'level-7'
  | 'level-8'
  | 'level-9';

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [dismissedIntroFor, setDismissedIntroFor] = useState<Screen | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [screen]);

  useEffect(() => {
    setDismissedIntroFor(null);
  }, [screen]);

  const activeIntro = screen === 'home' ? null : levelIntros[screen];
  const showIntro = Boolean(activeIntro && dismissedIntroFor !== screen);

  const renderWithIntro = (page: JSX.Element) => (
    <>
      {page}
      {showIntro && activeIntro ? (
        <LevelIntroModal intro={activeIntro} onConfirm={() => setDismissedIntroFor(screen)} />
      ) : null}
    </>
  );

  if (screen === 'level-1') {
    return renderWithIntro(<LevelOnePage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-2') {
    return renderWithIntro(<LevelTwoPage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-3') {
    return renderWithIntro(<LevelThreePage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-4') {
    return renderWithIntro(<LevelFourPage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-5') {
    return renderWithIntro(<LevelFivePage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-6') {
    return renderWithIntro(<LevelSixPage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-7') {
    return renderWithIntro(<LevelSevenPage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-8') {
    return renderWithIntro(<LevelEightPage onBack={() => setScreen('home')} />);
  }

  if (screen === 'level-9') {
    return renderWithIntro(<LevelNinePage onBack={() => setScreen('home')} />);
  }

  return (
    <HomePage
      onOpenLevel={(levelId) => {
        if (
          levelId === 'level-1' ||
          levelId === 'level-2' ||
          levelId === 'level-3' ||
          levelId === 'level-4' ||
          levelId === 'level-5' ||
          levelId === 'level-6' ||
          levelId === 'level-7' ||
          levelId === 'level-8' ||
          levelId === 'level-9'
        ) {
          setScreen(levelId);
        }
      }}
    />
  );
}
