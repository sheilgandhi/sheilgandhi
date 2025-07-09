export interface Person {
    id: string;
    first_name: string;
    last_name: string | null;
    birth_date: string | null;
    death_date: string | null;
    bio: string | null;
    photo_url: string | null;
    created_at: string;
}

export interface Relationship {
    id: string;
    parent_id: string;
    child_id: string;
    created_at: string;
}

export interface Marriage {
    id: string;
    spouse1_id: string;
    spouse2_id: string;
    marriage_date: string | null;
    divorce_date: string | null;
    created_at: string;
}

export interface FamilyTree {
    persons: Person[];
    relationships: Relationship[];
    marriages: Marriage[];
}
