import { type SchemaTypeDefinition } from 'sanity';

import { blockContentType } from './blockContentType';
import { postType } from './postType';
import { authorType } from './authorType';
import { profileType } from './profileType';

export const schema: { types: SchemaTypeDefinition[] } = {
    types: [blockContentType, postType, authorType, profileType],
};
