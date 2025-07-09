'use server';
import React from 'react';
import { Background, ReactFlow } from '@xyflow/react';
import Navbar from '@/components/navbar';
import { getFamilyTree } from '@/api/FamilyTree/FamilyTree';
import { buildReactFlowGraph } from './FamilyGraphBuilder';
import FamilyNode from './Node';
import '@xyflow/react/dist/style.css';

export default async function FamilyTree() {
    const { persons, relationships, marriages } = await getFamilyTree();
    const { nodes, edges } = buildReactFlowGraph(
        persons,
        relationships,
        marriages
    );
    const nodeTypes = { familyNode: FamilyNode };

    return (
        <div className="page">
            <Navbar />
            <div className="w-full h-[80vh] border rounded shadow">
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    nodeTypes={nodeTypes}
                    fitView
                    style={{ color: 'black' }}
                    nodesDraggable={true}
                >
                    {/* <MiniMap /> */}
                    {/* <Controls /> */}
                    <Background />
                </ReactFlow>
            </div>
        </div>
    );
}
