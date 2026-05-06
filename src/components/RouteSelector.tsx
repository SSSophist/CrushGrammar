import type { RouteMode } from '../types';

interface RouteSelectorProps {
  value: RouteMode;
  onChange: (value: RouteMode) => void;
}

const routes: Array<{ id: RouteMode; title: string; detail: string }> = [
  { id: 'three-day', title: '3 天极限版', detail: '每天 3-4 关，考前救急' },
  { id: 'five-day', title: '5 天稳妥版', detail: '每天约 2 关，台阶更稳' }
];

export default function RouteSelector({ value, onChange }: RouteSelectorProps) {
  return (
    <div className="route-selector" aria-label="选择学习路线">
      {routes.map((route) => (
        <button
          key={route.id}
          type="button"
          className="route-option"
          aria-pressed={value === route.id}
          onClick={() => onChange(route.id)}
        >
          <strong>{route.title}</strong>
          <span>{route.detail}</span>
        </button>
      ))}
    </div>
  );
}
