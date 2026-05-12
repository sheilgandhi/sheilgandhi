import { accent } from './constants';

const stats = [
    { value: '100+', label: 'Apps.' },
    { value: '4+', label: 'Years.' },
];

export default function Drive() {
    return (
        <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
                NATIVE & <span style={{ color: accent }}>FRONTEND</span>
            </h2>
            <ul className="list-none space-y-1 mb-5">
                {stats.map((stat) => (
                    <li key={stat.value} className="text-lg text-foreground">
                        <span className="font-bold" style={{ color: accent }}>
                            {stat.value}
                        </span>{' '}
                        {stat.label}
                    </li>
                ))}
            </ul>
            <p className="text-muted-foreground text-sm leading-relaxed">
                I&apos;m working as a Senior Frontend Engineer @ HHM Global
                Group (a.k.a.{' '}
                <a
                    href="https://www.mobihq.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="underline hover:text-[var(--accent-poster)] transition-colors"
                >
                    MOBI HQ
                </a>{' '}
                or mobi2go). In my tenure, I migrated legacy projects, shipped
                multi-tenant mobile apps, and hired and mentored engineers.
                Now, I&apos;m focused on building a new Native app to better
                serve our clients operationally with improved analytics.
            </p>
        </div>
    );
}
