import { UserIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const profileType = defineType({
    name: 'profile',
    title: 'Profile',
    type: 'document',
    icon: UserIcon,
    fields: [
        defineField({
            name: 'photo',
            title: 'Hero Photo',
            type: 'image',
            description:
                'The portrait shown on the home page poster (centre column at xl+).',
            options: { hotspot: true },
            fields: [
                defineField({
                    name: 'alt',
                    type: 'string',
                    title: 'Alt text',
                }),
            ],
        }),
        defineField({
            name: 'resume',
            title: 'Resume',
            type: 'file',
            description: 'Upload a PDF (or any file you want linked from the site footer).',
            options: {
                accept: 'application/pdf',
            },
        }),
        defineField({
            name: 'skills',
            title: 'Skills',
            type: 'array',
            of: [{ type: 'string' }],
            options: {
                layout: 'tags',
            },
        }),
        defineField({
            name: 'apps',
            title: 'Apps',
            type: 'array',
            of: [
                {
                    type: 'image',
                    options: { hotspot: true },
                    fields: [
                        defineField({
                            name: 'alt',
                            type: 'string',
                            title: 'Alt text',
                        }),
                        defineField({
                            name: 'url',
                            type: 'url',
                            title: 'Link',
                            description:
                                'Optional — link out to the App Store, Play Store, web, etc.',
                        }),
                    ],
                },
            ],
            options: {
                layout: 'grid',
            },
        }),
    ],
    preview: {
        prepare: () => ({ title: 'Profile' }),
    },
});
