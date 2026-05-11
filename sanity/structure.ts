import type { StructureResolver } from 'sanity/structure';

// https://www.sanity.io/docs/structure-builder-cheat-sheet
export const structure: StructureResolver = (S) =>
    S.list()
        .title('Content')
        .items([
            S.listItem()
                .title('Profile')
                .id('profile')
                .child(
                    S.document()
                        .schemaType('profile')
                        .documentId('profile')
                        .title('Profile'),
                ),
            S.divider(),
            S.documentTypeListItem('post').title('Posts'),
            S.documentTypeListItem('author').title('Authors'),
            S.divider(),
            ...S.documentTypeListItems().filter(
                (item) =>
                    item.getId() &&
                    !['post', 'author', 'profile'].includes(item.getId()!),
            ),
        ]);
