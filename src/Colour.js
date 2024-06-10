import React, { useState } from 'react'

function Colour() {
const [colorst,setColour] = useState(false)

const handleChange = ()=>
    {
setColour(!colorst)
}

  return (
    <>
    <div style={{backgroundColor:colorst? "red":"blue" , width:"200px", height:"200px", transition:"2s" }}> </div>
    <br/>
    <button onClick={handleChange}>Change</button>

    </>
  )
}

export default Colour