import Link from 'next/link';
import GithubIcon from './github-icon';

const GITHUB_URL = 'https://github.com/sheilgandhi';

export default function PortfolioLink() {
    return (
        <div className="flex items-start gap-4">
            <Link
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub portfolio"
                className="flex-shrink-0 inline-flex items-center justify-center h-14 w-14 rounded-xl bg-foreground border border-border hover:border-[var(--accent-poster)] transition-colors"
            >
                <GithubIcon className="h-7 w-7 text-background" />
            </Link>
            <div>
                <h3 className="text-xl font-bold text-foreground">PORTFOLIO</h3>
                <a
                    href={GITHUB_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-muted-foreground underline hover:text-[var(--accent-poster)]"
                >
                    github.com/sheilgandhi
                </a>
            </div>
        </div>
    );
}
