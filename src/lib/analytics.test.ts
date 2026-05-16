import { beforeEach, describe, expect, it, vi } from 'vitest';
import { initAnalytics, resetAnalyticsForTest, trackEvent } from './analytics';

const posthog = vi.hoisted(() => ({
  capture: vi.fn(),
  init: vi.fn(),
  reset: vi.fn()
}));

vi.mock('posthog-js', () => ({
  default: posthog
}));

describe('analytics', () => {
  beforeEach(() => {
    posthog.capture.mockClear();
    posthog.init.mockClear();
    posthog.reset.mockClear();
    resetAnalyticsForTest();
    window.history.replaceState({}, '', '/');
  });

  it('does not send events before analytics is initialized', () => {
    trackEvent('question_answered', {
      level_id: 'level-1',
      question_id: 'q1',
      correct: true
    });

    expect(posthog.capture).not.toHaveBeenCalled();
  });

  it('adds shared anonymous context when sending events', () => {
    window.history.replaceState({}, '', '/level-1#practice');
    initAnalytics({ provider: posthog, key: 'ph_test_key', host: 'https://eu.posthog.com' });

    trackEvent('question_answered', {
      level_id: 'level-1',
      question_id: 'q1',
      correct: true,
      error_tags: []
    });

    expect(posthog.init).toHaveBeenCalledWith(
      'ph_test_key',
      expect.objectContaining({
        api_host: 'https://eu.posthog.com',
        autocapture: false,
        capture_pageview: false,
        disable_session_recording: true,
        person_profiles: 'never'
      })
    );
    expect(posthog.capture).toHaveBeenCalledWith(
      'question_answered',
      expect.objectContaining({
        correct: true,
        device_type: 'desktop',
        error_tags: [],
        level_id: 'level-1',
        path: '/level-1',
        question_id: 'q1'
      })
    );
  });
});
