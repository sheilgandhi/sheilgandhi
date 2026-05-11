'use client';

import { useEffect, useState } from 'react';
import posthog from 'posthog-js';

const CONSENT_KEY = 'analytics_consent';

type Choice = 'accepted' | 'declined';

export default function CookieConsent() {
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        const choice = localStorage.getItem(CONSENT_KEY) as Choice | null;
        if (choice === 'accepted') {
            posthog.set_config({ persistence: 'localStorage+cookie' });
            posthog.opt_in_capturing();
        } else if (!choice) {
            setVisible(true);
        }
    }, []);

    const accept = () => {
        localStorage.setItem(CONSENT_KEY, 'accepted');
        posthog.set_config({ persistence: 'localStorage+cookie' });
        posthog.opt_in_capturing();
        posthog.capture('consent_given');
        setVisible(false);
    };

    const decline = () => {
        localStorage.setItem(CONSENT_KEY, 'declined');
        posthog.opt_out_capturing();
        setVisible(false);
    };

    if (!visible) return null;

    return (
        <div
            role="dialog"
            aria-label="Analytics consent"
            className="fixed bottom-4 inset-x-4 sm:bottom-6 sm:right-6 sm:left-auto sm:max-w-md z-50 bg-background/95 backdrop-blur-md rounded-2xl border border-border p-5 shadow-2xl"
        >
            <h2 className="text-xs font-bold tracking-[0.2em] text-[var(--accent-poster)] mb-2">
                ANALYTICS
            </h2>
            <p className="text-sm text-foreground/90 leading-relaxed mb-4">
                I use cookies to understand how this site is used (page views,
                clicks, errors). No personal data is sold or shared. You can
                change your mind anytime by clearing site data.
            </p>
            <div className="flex gap-2">
                <button
                    type="button"
                    onClick={accept}
                    className="text-sm font-semibold text-background bg-foreground rounded-lg px-4 py-2 hover:opacity-90 transition-opacity"
                >
                    Accept
                </button>
                <button
                    type="button"
                    onClick={decline}
                    className="text-sm font-semibold text-foreground border border-border rounded-lg px-4 py-2 hover:bg-muted/40 transition-colors"
                >
                    Decline
                </button>
            </div>
        </div>
    );
}
