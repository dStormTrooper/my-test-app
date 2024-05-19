'use client'
import React, { useState, useEffect } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log(`count is ${count}`);
  }, [count]);

  const buttonStyle = {
    margin: '10px',
    padding: '10px',
    fontSize: '16px'
  };

  return (
    <div>
      <p style={{fontSize: '20px'}}>clicked {count}</p>
      <button className="border border-gray-400 focus:outline-none hover:bg-blue-500 hover:text-white" onClick={() => setCount(count + 1)}>add</button>
<button className="border border-gray-400 focus:outline-none hover:bg-blue-500 hover:text-white" onClick={() => setCount(count - 1)}>minus</button>

    </div>
  );
}

export default Counter;
