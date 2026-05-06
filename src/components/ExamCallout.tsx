import type { ReactNode } from 'react';

interface ExamCalloutProps {
  tone?: 'info' | 'warning' | 'success';
  title: string;
  children: ReactNode;
}

export default function ExamCallout({ tone = 'info', title, children }: ExamCalloutProps) {
  return (
    <aside className={`exam-callout exam-callout-${tone}`}>
      <strong>{title}</strong>
      <div>{children}</div>
    </aside>
  );
}
