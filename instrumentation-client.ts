import posthog from 'posthog-js';

posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
    api_host: '/ingest',
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    capture_exceptions: true,
    debug: process.env.NODE_ENV === 'development',
    // GDPR: don't drop cookies or capture anything until the user accepts.
    // The CookieConsent component flips these on via opt_in_capturing()
    // + set_config({ persistence }) when consent is granted.
    persistence: 'memory',
    opt_out_capturing_by_default: true,
    disable_session_recording: true,
});
