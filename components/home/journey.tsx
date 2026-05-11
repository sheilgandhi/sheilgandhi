import { accent } from './constants';

const journey = [
    {
        role: 'SENIOR FRONTEND ENGINEER',
        company: 'HHM Global Group',
        flags: ['🇳🇿', '🇨🇦'],
        period: 'Nov 2021 — Present (Full-Time / Remote)',
        highlight: true,
    },
    {
        role: 'CONSULTANT',
        company: 'Detour',
        flags: ['🇳🇿'],
        period: '2025 (Project)',
        highlight: false,
    },
];

export default function Journey() {
    return (
        <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-5">
                MY JOURNEY
            </h2>
            <ul className="list-none space-y-5">
                {journey.map((j) => (
                    <li key={`${j.company}-${j.period}`}>
                        <p
                            className="text-xs font-bold tracking-widest text-foreground"
                            style={
                                j.highlight ? { color: accent } : undefined
                            }
                        >
                            {j.role}
                        </p>
                        <p className="text-foreground flex items-center gap-2">
                            <span>{j.company}</span>
                            <span className="flex gap-1" aria-label="locations">
                                {j.flags.map((flag, i) => (
                                    <span key={i}>{flag}</span>
                                ))}
                            </span>
                        </p>
                        <p className="text-xs text-muted-foreground mt-0.5">
                            {j.period}
                        </p>
                    </li>
                ))}
            </ul>
        </div>
    );
}
