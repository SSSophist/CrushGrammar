import { Lock, PlayCircle } from 'lucide-react';
import type { LevelMeta } from '../types';

interface LevelMapProps {
  levels: LevelMeta[];
  onOpenLevel: (levelId: string) => void;
}

export default function LevelMap({ levels, onOpenLevel }: LevelMapProps) {
  const groups = Array.from(new Set(levels.map((level) => level.group)));

  return (
    <div className="level-map">
      {groups.map((group) => (
        <section className="level-group" key={group} aria-labelledby={`group-${group}`}>
          <div className="level-group-header">
            <p className="eyebrow">Stage</p>
            <h2 id={`group-${group}`}>{group}</h2>
          </div>
          <div className="level-grid">
            {levels
              .filter((level) => level.group === group)
              .map((level) => {
                const locked = level.status === 'locked';
                return (
                  <article className={`level-card ${locked ? 'is-locked' : 'is-open'}`} key={level.id}>
                    <div className="level-number">第 {level.number} 关</div>
                    <h3>{level.title}</h3>
                    <p>{level.promise}</p>
                    <button
                      type="button"
                      className="level-action"
                      disabled={locked}
                      onClick={() => onOpenLevel(level.id)}
                    >
                      {locked ? <Lock size={18} aria-hidden="true" /> : <PlayCircle size={18} aria-hidden="true" />}
                      {locked ? `第 ${level.number} 关未解锁` : `进入第 ${level.number} 关`}
                    </button>
                  </article>
                );
              })}
          </div>
        </section>
      ))}
    </div>
  );
}
