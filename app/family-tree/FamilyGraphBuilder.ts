import {
    Marriage,
    Person,
    Relationship,
} from '@/api/FamilyTree/FamilyTreeModels';

export function buildReactFlowGraph(
    persons: Person[],
    relationships: Relationship[],
    marriages: Marriage[]
) {
    // Make nodes
    const nodes = persons.map((p) => ({
        id: p.id,
        data: { label: `${p.first_name} ${p.last_name ?? ''}` },
        position: { x: Math.random() * 400, y: Math.random() * 400 },
    }));

    // Make edges
    const edges: unknown[] = [];

    relationships.forEach((rel) => {
        edges.push({
            id: `parent-${rel.parent_id}-${rel.child_id}`,
            source: rel.parent_id,
            target: rel.child_id,
            type: 'smoothstep',
        });
    });

    marriages.forEach((m) => {
        edges.push({
            id: `spouse-${m.spouse1_id}-${m.spouse2_id}`,
            source: m.spouse1_id,
            target: m.spouse2_id,
            type: 'smoothstep',
        });
    });

    return { nodes, edges };
}
