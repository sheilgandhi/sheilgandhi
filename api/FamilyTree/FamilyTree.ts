import { supabase } from '../supabase';
import { FamilyTree } from './FamilyTreeModels';

export async function getFamilyTree(): Promise<FamilyTree> {
    const { data: persons, error: personsError } = await supabase
        .from('persons')
        .select('*');
    if (personsError) {
        throw personsError;
    }

    const { data: relationships, error: relsError } = await supabase
        .from('relationships')
        .select('*');
    if (relsError) {
        throw relsError;
    }

    const { data: marriages, error: marriagesError } = await supabase
        .from('marriages')
        .select('*');
    if (marriagesError) {
        throw marriagesError;
    }

    return {
        persons,
        relationships,
        marriages,
    };
}
