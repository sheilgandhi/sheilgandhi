import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from '../ui/card';
import Image from 'next/image';

const Experience = () => {
    return (
        <Tabs defaultValue="work" className="w-full">
            <TabsList className="w-full">
                <TabsTrigger value="work">Work</TabsTrigger>
                <TabsTrigger value="education">Education</TabsTrigger>
            </TabsList>
            <TabsContent value="work">
                <Card>
                    <div className="flex pl-4">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNXSifZZJDSCEptKD09YVjmcQlFyMNA448jw&s"
                            alt="MOBI HQ"
                            width={65}
                            height={65}
                            className="rounded-full "
                        />
                        <CardHeader className="w-full">
                            <CardDescription>
                                Nov 2021 - Present
                            </CardDescription>
                            <CardTitle>MOBI HQ</CardTitle>
                            <CardDescription>Software Engineer</CardDescription>
                        </CardHeader>
                    </div>
                    <CardContent className="pl-10">
                        <ul>
                            <li>
                                Developed the infrastructure to build and
                                deliver Native Apps scalably through the use of
                                a React Native template app
                            </li>
                            <li>
                                Mentored and guided junior engineers, providing
                                technical support, code reviews, and career
                                development advice, resulting in improved team
                                efficiency
                            </li>
                        </ul>
                    </CardContent>
                </Card>
            </TabsContent>
            <TabsContent value="education">
                <Card>
                    <div className="flex pl-4">
                        <Image
                            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGciZFzdotbEDm6fTilIEwousjNp13KC9P8A&s"
                            alt="MOBI HQ"
                            width={65}
                            height={65}
                            className="rounded-full "
                        />
                        <CardHeader className="w-full">
                            <CardDescription>
                                Feb 2019 - Nov 2022
                            </CardDescription>
                            <CardTitle>
                                Victoria University of Wellington
                            </CardTitle>
                            <CardDescription>
                                First Class BE(Hons) in Software Engineering
                            </CardDescription>
                        </CardHeader>
                    </div>
                </Card>
            </TabsContent>
        </Tabs>
    );
};

export default Experience;
