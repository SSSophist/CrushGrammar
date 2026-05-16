import type { LevelIntro } from '../data/levelIntros';
import { trackEvent } from '../lib/analytics';

interface LevelIntroModalProps {
  intro: LevelIntro;
  onConfirm: () => void;
}

export default function LevelIntroModal({ intro, onConfirm }: LevelIntroModalProps) {
  const titleId = `level-${intro.levelNumber}-intro-title`;
  const handleConfirm = () => {
    trackEvent('level_intro_confirmed', {
      level_id: `level-${intro.levelNumber}`,
      level_number: intro.levelNumber
    });
    onConfirm();
  };

  return (
    <div className="intro-modal-backdrop">
      <section className="intro-modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <p className="eyebrow">进入本关前先读完</p>
        <h2 id={titleId}>第 {intro.levelNumber} 关必读</h2>
        <h3>{intro.title}</h3>
        <p className="intro-modal-body">{intro.body}</p>
        <button type="button" className="primary-action" onClick={handleConfirm}>
          我已读完，开始本关
        </button>
      </section>
    </div>
  );
}
