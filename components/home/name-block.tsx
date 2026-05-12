import { MapPin } from 'lucide-react';

export default function NameBlock() {
    return (
        <div className="xl:col-span-8 relative">
            <h1 className="text-[3.5rem] sm:text-[5rem] md:text-[6rem] lg:text-[7rem] xl:text-[9rem] leading-[0.85] font-black text-foreground/30 dark:text-foreground/10 select-none">
                SHEIL
                <br />
                GANDHI
            </h1>
            <p className="mt-4 text-sm tracking-[0.3em] text-muted-foreground font-semibold">
                SOFTWARE ENGINEER
            </p>
            <p className="mt-2 text-sm text-muted-foreground flex items-center gap-2">
                <MapPin className="h-3.5 w-3.5" aria-hidden="true" />
                Toronto, Canada
            </p>
        </div>
    );
}
