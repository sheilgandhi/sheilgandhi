import { client } from '@/sanity/lib/client';

const SKILLS_QUERY = `*[_type == "profile"][0].skills`;

const options = { next: { revalidate: 30 } };

export default async function SkillsList() {
    const skills =
        (await client.fetch<string[] | null>(SKILLS_QUERY, {}, options)) ?? [];

    return (
        <div className="text-left md:text-right">
            <h2 className="text-[var(--accent-poster)] text-sm font-bold tracking-widest mb-4">
                SKILLS
            </h2>
            <ul className="list-none grid grid-cols-2 gap-x-4 gap-y-1 md:grid-cols-1 text-foreground text-base">
                {skills.map((skill) => (
                    <li key={skill}>{skill}</li>
                ))}
            </ul>
        </div>
    );
}
