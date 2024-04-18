import React, { useState } from 'react'



const App2 = () => {
    const  currTime = new Date().toLocaleTimeString();
    const [Time, setTime] = useState(currTime);
 
    function getTime(){
   return  setTime(new Date().toLocaleTimeString());
        
    }

  setInterval(getTime,1000);
  return (
    <div className='container'>
        <h1>the universal clock</h1>
        <h2>{Time}</h2>
        {/* <button onClick={getTime}>GET TIME</button> */}
        
    </div>
  )
}

export default App2