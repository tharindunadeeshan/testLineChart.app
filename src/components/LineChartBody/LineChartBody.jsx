import React from 'react'
import './LineChartBody.css'


import {
  LineChart,
  Line,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import LineChartHeader
 from '../LineChartHeader/LineChartHeader';

 import LineChartFooter
 from '../LineChartFooter/LineChartFooter';
  
const data = [
  {
    task1: 200,
    task3: 200,
    task2: 200,
    task4: 200,
  },
  {
    task1: 490,
    task3: 490,
    task2: 510,
    task4: 510,
  },
  {
    task1: 510,
    task3: 510,
    task2: 490,
    task4: 490,
  },
  {
    task1: 480,
    task3: 480,
    task2: 160,
    task4: 160,
  },
  {
    task1: 220,
    task3: 220,
    task2: 180,
    task4: 180,
  },
  {
    task1: 600,
    task3: 600,
    task2: 510,
    task4: 510,
  },
  {
    task1: 180, 
    task3: 180,
    task2: 80,
    task4: 80,
  },
  {
    task1: 590,
    task2: 440,
  },
  {
    task1: 430,
    task3: 430,
    task2: 590,
    task4: 590,
  },
  {
    task1: 80,
    task3: 80,
    task2: 520,
    task4: 520,
  },
  {
    task1: 0,
    task3: 0,
    task2: 80,
    task4: 80,
  },
  {
    task1: 450,
    task3: 450,
    task2: 100,
    task4: 100,
  },
  {
    task1: 600,
    task3: 600,
    task2: 400,
    task4: 400,
  },
  {
    task1: 500,
    task3: 500,
    task2: 600,
    task4: 600,
  },
  {
    task1: 180,
    task3: 180,
    task2: 170,
    task4: 170,
  },
];

  
const CustomTooltip = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div className="custom-tooltip">
       
        
          <br />
          <div className="toolst">
          <span class="lastmonthdot"></span>&nbsp; Last Month &nbsp;

         
          <i className="fa fa-long-arrow-up up"> &nbsp; {`${label} : ${payload[0].value}`}</i>
          <br/>
          <br/>
          <span class="thismonthDot"></span>&nbsp; This Month &nbsp;
          <i className="fa fa-long-arrow-down down"> &nbsp;  {`${label} : ${payload[2].value}`}</i>
          </div>
        
        
          
        
      </div>
    );
  }

  return null;
};
const LineChartBody = () => {
  return (
    
    <div className='linechartBody' >
       
      <LineChartHeader/>
       <ResponsiveContainer  className='linesss'  aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={data}
          margin={{
            top: 35,
            right: 30,
            left: 20,
            bottom: 50,
          }}
        >
          <CartesianGrid
            strokeDasharray="10"
            horizontal="true"
            vertical=""
            stroke="#243240"
          />

          <span class="view1"></span>

          <YAxis tick={{ fill: "#3C4254" }} 
          axisLine={false}/>
          <Tooltip
            content={<CustomTooltip />} 
          />
          <Line
            type="line"
            dataKey="task1"
            stroke="#246CF9"
            strokeWidth="5"
            dot={{ fill: "#246CF9", stroke: "#246CF9", strokeWidth: 2, r: 0 }}
            activeDot={{
              fill: "#246CF9",
              stroke: "#246CF9",
              strokeWidth: 6,
              r: 10,
            }}
          />

          <Line
            type="line"
            dataKey="task1"
            filter="blur(24px)"
            stroke="#246CF9"
            strokeWidth="6"
          />

          <Line
            type="line"
            dataKey="task2"
            stroke="#FA2256"
            strokeWidth="6"
            dot={{ fill: "#FA2256", stroke: "#FA2256", strokeWidth: 2, r: 1 }}
            activeDot={{
              fill: "#FA2256",
              stroke: "#FA2256",
              strokeWidth: 5,
              r: 10,
            }}
          />
          <Line
            type="line"
            dataKey="task2"
            filter="blur(24px)"
            stroke="#FA2256"
            strokeWidth="6"
          />
        </LineChart>
      </ResponsiveContainer>
            <LineChartFooter />
    </div>
    
  )
  
}

export default LineChartBody