import {ResponsiveContainer, PieChart, Pie, Sector, Cell, Tooltip, BarChart, Bar, LineChart, Line, XAxis, YAxis, CartesianGrid, Legend} from 'recharts'
import './../App.css';

function NewCharts() {
  const data = [
    {name:"Facebook", value:300000000},
    {name:"Whatsapp", value:4000000000},
    {name:"Twitter", value:2000000000},
    {name:"Instagram", value:1500000000}
  ]

  const data02 = [
    {
      name : "Insta",
      activeUsers : 200000000,
      inactiveUsers : 4500000000,

    },
    {
      name : "Fbook",
      activeUsers : 800000000,
      inactiveUsers : 2500000000,
      
    }
    ,
    {
      name : "whatsup",
      activeUsers : 70000000000,
      inactiveUsers: 300000000
    }
    ,
    {
      name : "telegram",
      activeUsers : 3000000000,
      inactiveUsers: 60000000000
    }

  ]
  return (
    <div>
      <h1 className='heading'>Graphs</h1>
    <div className='container'> 
    
    
        <PieChart width={300} height={300}>
          <Pie data={data} dataKey="value" cx="50%" cy="50%" outerRadius={60} fill="#fcb103" />
          <Pie data={data} dataKey="value" cx="50%" cy="50%" innerRadius={70} outerRadius={90} fill="#82a5bf" label />
          <Tooltip/>
        </PieChart>
      

      <BarChart width={400} height={400} data={data}>
          <Bar dataKey="value" fill="#2a2a5e" />
        </BarChart>

        <LineChart
          width={600}
          height={300}
          data={data02}
          margin={{
            top: 5,
            right: 20,
            left: 20,
            bottom: 10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="activeUsers" stroke="#44ad2d" activeDot={{ r: 8 }} />
          <Line type="monotone" dataKey="inactiveUsers" stroke="#e8410e" />
        </LineChart>
      </div>
      </div>
  );
}

export default NewCharts;
