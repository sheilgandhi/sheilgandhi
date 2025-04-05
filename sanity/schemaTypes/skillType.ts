import { DocumentTextIcon } from '@sanity/icons';
import { defineField, defineType } from 'sanity';

export const skillType = defineType({
    name: 'skill',
    title: 'Skill',
    type: 'document',
    icon: DocumentTextIcon,
    fields: [
        defineField({
            name: 'title',
            type: 'string',
        }),
        defineField({
            name: 'description',
            type: 'string',
        }),
        defineField({
            name: 'logo_url',
            type: 'string',
        }),
    ],
    preview: {
        select: {
            title: 'title',
            description: 'description',
        },
    },
});
