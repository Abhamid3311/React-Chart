import React from 'react';
import { Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const MyLineChart = () => {
    const myLineChart = [
        {
            name: 'Supplier A',
            Price: 4000,
            Sales: 2400,
            amt: 2400,
        },
        {
            name: 'Supplier B',
            Price: 3000,
            Sales: 1398,
            amt: 2210,
        },
        {
            name: 'Supplier C',
            Price: 2000,
            Sales: 9800,
            amt: 2290,
        },
        {
            name: 'Supplier D',
            Price: 2780,
            Sales: 3908,
            amt: 2000,
        },
        {
            name: 'Supplier E',
            Price: 1890,
            Sales: 4800,
            amt: 2181,
        },
        {
            name: 'Supplier F',
            Price: 2390,
            Sales: 3800,
            amt: 2500,
        },
        {
            name: 'Supplier G',
            Price: 3490,
            Sales: 4300,
            amt: 2100,
        },
    ];
    return (
        <LineChart width={800} height={400} data={myLineChart}>
            <Line dataKey={'Price'} stroke="#8884d8"></Line>
            <Line dataKey={'Sales'}></Line>
            <XAxis dataKey="name" />
            <YAxis />
            <Tooltip></Tooltip>
        </LineChart>
    );
};

export default MyLineChart;