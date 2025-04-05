import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { postType } from './postType';
import { authorType } from './authorType';
import { skillType } from './skillType';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContentType, postType, authorType, skillType],
};
