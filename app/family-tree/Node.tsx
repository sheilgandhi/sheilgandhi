'use server';
import Image from 'next/image';
import { Handle, Position } from '@xyflow/react';
import { Person } from '@/api/FamilyTree/FamilyTreeModels';

export default async function Node({ data }: { data: Person }) {
    const name = `${data.first_name} ${data.last_name ?? ''}`.trim();

    return (
        <div className="bg-white border shadow rounded-lg p-2 text-center w-32">
            {data.photo_url && (
                <Image
                    src={data.photo_url}
                    alt={name}
                    className="w-16 h-16 rounded-full mx-auto mb-2 object-cover"
                />
            )}
            <div className="font-bold text-sm text-black">{name}</div>
            {data.birth_date && (
                <div className="text-xs text-gray-500">
                    {data.birth_date}{' '}
                    {data.death_date && `- ${data.death_date}`}
                </div>
            )}

            <Handle type="target" position={Position.Top} />
            <Handle type="source" position={Position.Bottom} />
        </div>
    );
}
