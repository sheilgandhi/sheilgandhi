import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Blog')
        .items([
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('author').title('Authors'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() && !['post', 'author'].includes(item.getId()!)
            ),
        ]);
