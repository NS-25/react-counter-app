import React, { useState } from "react"
import './App.css';

function App() {
  // Create a state variable to track the count
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Counter App</h1>
      <h2>Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)} style={{ marginLeft: "10px" }}>Decrement</button>
    </div>


  );
}

export default App;
