import { PieChart, Pie, ResponsiveContainer, Tooltip } from 'recharts';
import { AreaChart, Area, XAxis, YAxis } from 'recharts';
import { LineChart, Line, CartesianGrid, Legend } from 'recharts';

import '../App.css'

const data2 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
    },
    {
        name: 'Page E',
        uv: 1890,
        pv: 4800,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
    },
];


const data1 = [
    {
        name: 'Page A',
        uv: 4000,
        pv: 2400,
    },
    {
        name: 'Page B',
        uv: 3000,
        pv: 1398,
    },
    {
        name: 'Page C',
        uv: 2000,
        pv: 9800,
    },
    {
        name: 'Page D',
        uv: 2780,
        pv: 3908,
    },
    {
        name: 'Page E',
        uv: 3200,
        pv: 4800,
    },
    {
        name: 'Page F',
        uv: 2390,
        pv: 3800,
    },
    {
        name: 'Page G',
        uv: 3490,
        pv: 4300,
    },
];

const data = [
    { name: "Telugu", value: 95 },
    { name: "English", value: 98 },
    { name: "Hindhi", value: 80 },
    { name: "Maths", value: 90 },
    { name: "Physics", value: 88 },
    { name: "Chemistry", value: 82 },
    { name: "Biology", value: 94 },
    { name: "Social", value: 76 },
    { name: "History", value: 79 },
    { name: "Environmental Studies", value: 87 },

]

function Piechart() {

    return (
        <div>
            <h1 >Recharts Task</h1>

            <div className='for-container'>
                <ResponsiveContainer width="50%" height="50%">
                    <PieChart width={400} height={400}>
                        <Pie data={data} dataKey="value" cx={200} cy={200} outerRadius={80} fill="#dea84b" label />
                        <Tooltip />
                    </PieChart>
                </ResponsiveContainer>

                <ResponsiveContainer width="50%" height="50%">
                    <LineChart
                        width={250}
                        height={150}
                        data={data2}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5,
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis yAxisId="left" />
                        <YAxis yAxisId="right" orientation="right" />
                        <Tooltip />
                        <Legend />
                        <Line yAxisId="left" type="monotone" dataKey="pv" stroke="#2f52d4" activeDot={{ r: 8 }} />
                        <Line yAxisId="right" type="monotone" dataKey="uv" stroke="#d41ca9" />
                    </LineChart>
                </ResponsiveContainer>

                <ResponsiveContainer className="grap" width="50%" height="50%">
                    <AreaChart
                        width={100}
                        height={40}
                        data={data1}
                        margin={{
                            top: 5,
                            right: 0,
                            left: 0,
                            bottom: 5,
                        }}
                    >
                        <Area type="monotone" dataKey="uv" stroke="#58d7e0" fill="#9cf043" />
                    </AreaChart>
                </ResponsiveContainer>
            </div>
        </div>
    );
}
export default Piechart