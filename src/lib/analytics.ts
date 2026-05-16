export type AnalyticsEventName =
  | 'diagnostic_modal_shown'
  | 'diagnostic_started'
  | 'diagnostic_answered'
  | 'diagnostic_completed'
  | 'beginner_path_selected'
  | 'route_mode_selected'
  | 'level_opened'
  | 'level_intro_confirmed'
  | 'section_nav_clicked'
  | 'practice_started'
  | 'question_answered'
  | 'practice_completed'
  | 'remediation_started'
  | 'remediation_completed'
  | 'level_completed'
  | 'next_level_clicked'
  | 'return_home_clicked';

type AnalyticsValue = string | number | boolean | string[] | number[] | null | undefined;

export type AnalyticsProperties = Record<string, AnalyticsValue>;

type AnalyticsProvider = {
  capture: (eventName: string, properties?: AnalyticsProperties) => void;
  init?: (key: string, options?: Record<string, unknown>) => void;
};

interface InitAnalyticsOptions {
  key?: string;
  host?: string;
  provider?: AnalyticsProvider;
}

let activeProvider: AnalyticsProvider | null = null;
let initialized = false;
let configured = false;
let pendingEvents: Array<[AnalyticsEventName, AnalyticsProperties]> = [];

const getEnv = () => {
  const env = import.meta.env;

  return {
    host: env.VITE_POSTHOG_HOST || 'https://app.posthog.com',
    key: env.VITE_POSTHOG_KEY
  };
};

const getDeviceType = () => {
  if (typeof window === 'undefined') {
    return 'server';
  }

  return window.matchMedia?.('(max-width: 767px)').matches ? 'mobile' : 'desktop';
};

const getPath = () => {
  if (typeof window === 'undefined') {
    return '';
  }

  return window.location.pathname;
};

export function initAnalytics(options: InitAnalyticsOptions = {}) {
  if (typeof window === 'undefined') {
    return;
  }

  const env = getEnv();
  const key = options.key ?? env.key;
  const host = options.host ?? env.host;
  const provider = options.provider;

  if (!key || configured) {
    return;
  }

  configured = true;

  const activateProvider = (resolvedProvider: AnalyticsProvider) => {
    resolvedProvider.init?.(key, {
      api_host: host,
      autocapture: false,
      capture_pageview: false,
      disable_session_recording: true,
      person_profiles: 'never',
      persistence: 'localStorage'
    });

    activeProvider = resolvedProvider;
    initialized = true;
    pendingEvents.forEach(([pendingEventName, pendingProperties]) => {
      trackEvent(pendingEventName, pendingProperties);
    });
    pendingEvents = [];
  };

  if (provider) {
    activateProvider(provider);
    return;
  }

  void import('posthog-js').then((module) => {
    activateProvider(module.default as AnalyticsProvider);
  });
}

export function trackEvent(eventName: AnalyticsEventName, properties: AnalyticsProperties = {}) {
  if (!activeProvider) {
    if (configured) {
      pendingEvents.push([eventName, properties]);
    }
    return;
  }

  activeProvider.capture(eventName, {
    ...properties,
    device_type: getDeviceType(),
    path: getPath()
  });
}

export function resetAnalyticsForTest() {
  activeProvider = null;
  configured = false;
  initialized = false;
  pendingEvents = [];
}
