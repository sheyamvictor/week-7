import { useState } from "react";


function Random()
{

var[number, setrandom] = useState(0)

function ranpic()
{

setrandom(Math.floor(Math.random()*100))
}

return(
    <div>
        <h2>{number}</h2>

        <button onClick={ranpic}>RandomNumber</button>
    </div>
)

}

export default Random