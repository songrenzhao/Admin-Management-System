import React from 'react';
import { RadarChart, PolarGrid, PolarAngleAxis, Radar, Legend, PolarRadiusAxis } from 'recharts';

const RadarCharts = () => {
    
    const data = [
        { subject: 'Math', A: 120, B: 110 },
        { subject: 'Chinese', A: 98, B: 130 },
        { subject: 'English', A: 86, B: 130 },
        { subject: 'Geography', A: 99, B: 100 },
        { subject: 'Physics', A: 85, B: 90 },
        { subject: 'History', A: 65, B: 85 },
    ];
    return (
        <div>
            <RadarChart outerRadius={105} width={300} height={438} data={data}>
                <PolarGrid />
                <PolarAngleAxis dataKey="subject" />
                <PolarRadiusAxis angle={30} domain={[0, 150]} />
                <Radar name="Mike" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.1} />
                <Radar name="Lily" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.1} />
                <Legend />
            </RadarChart>
        </div>
    )
}

export default RadarCharts;
