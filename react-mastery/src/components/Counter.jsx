import { useState } from "react";

function Counter(){

  // let counter = 1;

  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter+1);
    console.log(setCounter(counter+1));
  }

  const removeValue = ()=>{
    if(counter>0){
      setCounter(counter-1);
    }
  }

  return(
    <>
       <div>
        <h1>Implementing Counter {counter}</h1>
        <h2>Counter: {counter}</h2>
        <button onClick={addValue}>Add Value</button>
        <button onClick={removeValue}>Remove Value</button>
       </div>
    </>
  )
}

export default Counter;