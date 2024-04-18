
// const name = "Oyinda";
// const Greet = () => {
//   return (
//     <div>Hello, {name}</div>
//   )
// }

// export default Greet

import React, { useState } from 'react';




export const Greet = () => {
  const [count, setCount] = useState(0);
function Increase(){
  setCount(count+1);
}
function Decrease(){
  setCount(count-1);
}
  return (
    <div className='container'>
      <h1>it's really just a counter</h1>
      <h2>{count}</h2>
      <button onClick={Decrease}>-</button>
      <button onClick={Increase}>+</button>
    </div>
  );
}
export default Greet
