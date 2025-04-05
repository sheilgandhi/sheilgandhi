import Navbar from '@/components/navbar';
import React from 'react';

const Resume = () => {
    return (
        <div className="page">
            <Navbar />
            <iframe src="/Sheil_Resume.pdf" className="h-screen" />
        </div>
    );
};

export default Resume;
