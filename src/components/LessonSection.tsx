import type { ReactNode } from 'react';

interface LessonSectionProps {
  id: string;
  title: string;
  kicker?: string;
  children: ReactNode;
}

export default function LessonSection({ id, title, kicker, children }: LessonSectionProps) {
  return (
    <section className="lesson-section" id={id}>
      {kicker ? <p className="eyebrow">{kicker}</p> : null}
      <h2>{title}</h2>
      {children}
    </section>
  );
}
