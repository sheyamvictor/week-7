import { useState } from "react";


function Counter()

{

var [count,setcount]=useState(0)

function increment()
{

setcount(count+1)
}


function decrement()
{

  setcount(count-1)
}

return(
  <div>
    <h2>{count}</h2>
<button onClick={increment}>+</button>
<button onClick={decrement}>-</button>


  </div>
)



}



export default Counter