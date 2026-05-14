import { levels } from '../data/levels';

interface CourseSidebarProps {
  currentLevelId: string;
  onBackHome: () => void;
  onOpenLevel: (levelId: string) => void;
}

const courseGroups = [
  { title: 'DAY 1 · 句子骨架', levels: levels.slice(0, 3) },
  { title: 'DAY 2 · 长难句扩展', levels: levels.slice(3, 7) },
  { title: 'DAY 3 · 写译与冲刺', levels: levels.slice(7) },
];

export default function CourseSidebar({ currentLevelId, onBackHome, onOpenLevel }: CourseSidebarProps) {
  return (
    <aside className="course-sidebar">
      <button type="button" className="course-back" onClick={onBackHome}>
        返回首页
      </button>
      <nav className="course-menu" aria-label="课程目录">
        <p className="course-sidebar-kicker">Crush Grammar</p>
        <h2>课程目录</h2>
        <div className="course-menu-list">
          {courseGroups.map((group) => (
            <section className="course-menu-section" key={group.title}>
              <p className="course-menu-layer">{group.title}</p>
              {group.levels.map((level) => (
                <button
                  type="button"
                  className="course-menu-item"
                  aria-current={level.id === currentLevelId ? 'page' : undefined}
                  key={level.id}
                  onClick={() => onOpenLevel(level.id)}
                >
                  <span className="course-menu-index">0-{level.number}</span>
                  <span>{level.title}</span>
                </button>
              ))}
            </section>
          ))}
        </div>
      </nav>
    </aside>
  );
}
