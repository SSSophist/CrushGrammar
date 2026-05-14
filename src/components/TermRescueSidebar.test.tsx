import { render, screen } from '@testing-library/react';
import { describe, expect, it } from 'vitest';
import TermRescueSidebar from './TermRescueSidebar';

describe('TermRescueSidebar', () => {
  it('renders compact two-part term rescue cards', () => {
    render(
      <TermRescueSidebar
        terms={[
          {
            id: 'subject',
            term: '主语',
            plain: '这句话主要在说的那个“人或东西”。',
            function: '通常负责发出动作。',
            examUse: '阅读长句里先找主语。',
            skipForNow: '先会问这句话在说谁。'
          }
        ]}
      />
    );

    expect(screen.getByText('主语')).toBeTruthy();
    expect(screen.getByText('一句人话')).toBeTruthy();
    expect(screen.getByText('做题时怎么用')).toBeTruthy();
    expect(screen.queryByText('它在句子里干嘛')).toBeNull();
    expect(screen.queryByText('别学太深')).toBeNull();
  });
});
