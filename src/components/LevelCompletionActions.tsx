interface LevelCompletionActionsProps {
  onBack: () => void;
  onNextLevel?: () => void;
  nextLevelNumber?: number;
}

export default function LevelCompletionActions({ onBack, onNextLevel, nextLevelNumber }: LevelCompletionActionsProps) {
  return (
    <div className="level-completion-actions">
      <button type="button" className="secondary-action" onClick={onBack}>
        返回闯关地图
      </button>
      {onNextLevel && nextLevelNumber ? (
        <button type="button" className="primary-action" onClick={onNextLevel}>
          继续第 {nextLevelNumber} 关
        </button>
      ) : null}
    </div>
  );
}
