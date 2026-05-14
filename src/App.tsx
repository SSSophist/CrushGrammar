import { useEffect, useState } from 'react';
import CourseSidebar from './components/CourseSidebar';
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
import LevelTenPage from './pages/LevelTenPage';
import { useProgress } from './lib/useProgress';

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
  | 'level-9'
  | 'level-10';

const levelScreens = [
  'level-1',
  'level-2',
  'level-3',
  'level-4',
  'level-5',
  'level-6',
  'level-7',
  'level-8',
  'level-9',
  'level-10',
] as const;

type LevelScreen = (typeof levelScreens)[number];

const isLevelScreen = (value: string): value is LevelScreen =>
  levelScreens.some((levelScreen) => levelScreen === value);

export default function App() {
  const [screen, setScreen] = useState<Screen>('home');
  const [dismissedIntroFor, setDismissedIntroFor] = useState<Screen | null>(null);
  const { unlockedLevels, unlockNext, unlockAll, unlockThrough } = useProgress();

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }, [screen]);

  useEffect(() => {
    setDismissedIntroFor(null);
  }, [screen]);

  const activeIntro = screen === 'home' ? null : levelIntros[screen];
  const showIntro = Boolean(activeIntro && dismissedIntroFor !== screen);
  const openLevel = (levelId: string) => {
    if (isLevelScreen(levelId)) {
      setScreen(levelId);
    }
  };
  const backHome = () => setScreen('home');

  const renderWithIntro = (page: JSX.Element) => (
    <>
      {screen === 'home' ? (
        page
      ) : (
        <div className="course-layout">
          <CourseSidebar currentLevelId={screen} onBackHome={backHome} onOpenLevel={openLevel} />
          <main className="course-content">{page}</main>
        </div>
      )}
      {showIntro && activeIntro ? (
        <LevelIntroModal intro={activeIntro} onConfirm={() => setDismissedIntroFor(screen)} />
      ) : null}
    </>
  );

  if (screen === 'level-1') {
    return renderWithIntro(
      <LevelOnePage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-1')}
        onNextLevel={() => setScreen('level-2')}
      />
    );
  }

  if (screen === 'level-2') {
    return renderWithIntro(
      <LevelTwoPage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-2')}
        onNextLevel={() => setScreen('level-3')}
      />
    );
  }

  if (screen === 'level-3') {
    return renderWithIntro(
      <LevelThreePage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-3')}
        onNextLevel={() => setScreen('level-4')}
      />
    );
  }

  if (screen === 'level-4') {
    return renderWithIntro(
      <LevelFourPage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-4')}
        onNextLevel={() => setScreen('level-5')}
      />
    );
  }

  if (screen === 'level-5') {
    return renderWithIntro(
      <LevelFivePage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-5')}
        onNextLevel={() => setScreen('level-6')}
      />
    );
  }

  if (screen === 'level-6') {
    return renderWithIntro(
      <LevelSixPage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-6')}
        onNextLevel={() => setScreen('level-7')}
      />
    );
  }

  if (screen === 'level-7') {
    return renderWithIntro(
      <LevelSevenPage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-7')}
        onNextLevel={() => setScreen('level-8')}
      />
    );
  }

  if (screen === 'level-8') {
    return renderWithIntro(
      <LevelEightPage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-8')}
        onNextLevel={() => setScreen('level-9')}
      />
    );
  }

  if (screen === 'level-9') {
    return renderWithIntro(
      <LevelNinePage
        onBack={backHome}
        onLevelComplete={() => unlockNext('level-9')}
        onNextLevel={() => setScreen('level-10')}
      />
    );
  }

  if (screen === 'level-10') {
    return renderWithIntro(<LevelTenPage onBack={backHome} onLevelComplete={() => unlockNext('level-10')} />);
  }

  return (
    <HomePage
      unlockedLevels={unlockedLevels}
      onUnlockAll={unlockAll}
      onUnlockThrough={unlockThrough}
      onOpenLevel={openLevel}
    />
  );
}
