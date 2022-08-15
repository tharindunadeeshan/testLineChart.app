import React from 'react';
import './LineChartHeader.css';
import MediaQuery from 'react-responsive';
const LineChartHeader = () => {
  return (

    <div>

   
    <div className='container'>
         



    
<h3 className='YourWorkSummary'> &nbsp; Your work summary</h3>

  <div className="new">
 
  <span class="dot1"></span>&nbsp; This Month &nbsp;&nbsp;&nbsp;&nbsp;
  <span class="dot">
    </span>&nbsp; Last Month &nbsp;&nbsp;&nbsp;&nbsp;
    </div>

  <div class="daily">
    
    <button className="btn1" type="submit">Daily</button>
    <button className="btn2">Monthly</button>&nbsp;&nbsp;&nbsp;&nbsp;

 



    </div>
    </div>
     <div className="novJuly">
<h4>&nbsp; Nov - July</h4>
    </div>
    </div>
    
  )
}

export default LineChartHeader