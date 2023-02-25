import React, {useState} from "react";


function App() {
  const [count, setCount] = useState(4)
  function decrementCount(){
    setCount(count -1);
  }
  function incrementCount(){
    setCount(count +2)
  }
  return (
  <div>
   <button onClick={decrementCount}>-</button>
   <span>{count}</span>
   <button onClick={incrementCount}>+</button>
  </div>
  );
}

export default App;
