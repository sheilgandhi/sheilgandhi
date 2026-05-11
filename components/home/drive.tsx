import { accent } from './constants';

const stats = [
    { value: '100+', label: 'Apps.' },
    { value: '4+', label: 'Years.' },
];

export default function Drive() {
    return (
        <div className="bg-muted/40 backdrop-blur-sm rounded-2xl p-6 border border-border">
            <h2 className="text-2xl font-bold text-foreground mb-4">
                AMBITIOUS <span style={{ color: accent }}>DRIVE</span>
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
                Engineer with a passion for learning new skills. Proven track
                record of migrating projects and delivering multi-tenant mobile
                apps at scale. Experienced in hiring, with a focus on raising
                the bar. Currently learning analytics.
            </p>
        </div>
    );
}
