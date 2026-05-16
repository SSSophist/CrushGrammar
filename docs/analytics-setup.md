# Analytics Setup

This project uses two analytics layers:

1. Netlify Web Analytics for basic traffic, referrers, popular pages, and deployment-level visibility.
2. PostHog for anonymous product events that explain how learners move through the diagnostic, lessons, practice, and remediation.

## Privacy Defaults

The app does not collect names, phone numbers, email addresses, free-text answers, or student identity.

PostHog is configured with:

- `autocapture: false`
- `capture_pageview: false`
- `disable_session_recording: true`
- `person_profiles: never`
- `persistence: localStorage`

Only explicit learning events are sent.

## Netlify Setup

Enable Netlify Web Analytics in the Netlify project dashboard.

Use Netlify Analytics for:

- visits
- referrers
- top pages
- bandwidth
- 404s

## PostHog Setup

Create a PostHog project, then add these environment variables in Netlify:

```text
VITE_POSTHOG_KEY=your_project_api_key
VITE_POSTHOG_HOST=https://app.posthog.com
```

If the project is hosted in PostHog EU, set:

```text
VITE_POSTHOG_HOST=https://eu.posthog.com
```

Leave `VITE_POSTHOG_KEY` empty in local development unless you are testing events.

## Event Catalog

Core onboarding events:

- `diagnostic_modal_shown`
- `diagnostic_started`
- `diagnostic_answered`
- `diagnostic_completed`
- `beginner_path_selected`
- `route_mode_selected`

Lesson and practice events:

- `level_opened`
- `level_intro_confirmed`
- `section_nav_clicked`
- `practice_started`
- `question_answered`
- `practice_completed`
- `remediation_started`
- `remediation_completed`
- `return_home_clicked`

Common properties:

- `level_id`
- `question_id`
- `question_index`
- `correct`
- `error_tags`
- `selected_option_id`
- `route_mode`
- `recommended_level_id`
- `device_type`
- `path`

## First Dashboard

Build these PostHog insights first:

- Diagnostic start rate: `diagnostic_started / diagnostic_modal_shown`
- Diagnostic completion rate: `diagnostic_completed / diagnostic_started`
- Beginner route selection count: `beginner_path_selected`
- Practice completion by level: `practice_completed`, grouped by `level_id`
- Question wrong rate: `question_answered`, filtered by `correct = false`, grouped by `question_id`
- Error tag distribution: `question_answered`, grouped by `error_tags`
- Remediation conversion: `remediation_completed / remediation_started`
- Mobile vs desktop completion: `practice_completed`, grouped by `device_type`
