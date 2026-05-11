import Image from 'next/image';
import { accent } from './constants';

export default function ProfilePhoto() {
    return (
        <div className="hidden xl:flex xl:col-span-4 justify-center pt-4">
            <div className="relative">
                <Image
                    src="https://pbs.twimg.com/profile_images/1675812499306819585/OR2xz4uq_400x400.jpg"
                    alt="Sheil Gandhi"
                    width={320}
                    height={400}
                    priority
                    loading="eager"
                    className="rounded-2xl object-cover h-[400px] w-[320px] grayscale contrast-110"
                />
                <svg
                    viewBox="0 0 100 120"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="7"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    aria-hidden="true"
                    className="absolute -top-12 -right-8 h-24 w-20 rotate-[8deg]"
                    style={{ color: accent }}
                >
                    <path d="M 78 6 Q 30 22, 60 56 Q 82 92, 30 100" />
                    <path d="M 38 88 L 28 100 L 42 110" />
                </svg>
            </div>
        </div>
    );
}
