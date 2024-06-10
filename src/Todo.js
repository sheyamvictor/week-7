import React, { useState } from 'react'

const Todo=()=>
    {
  const [mylist,setmylist] = useState(["car","bike","helicopte","bus"])

  const [item,setItem]= useState("")

  const handleChange =(evt)=>{

    setItem(evt.target.value)
  }

  const handleAdd =()=>{

    setmylist([...mylist,item])
    setItem(" ")
  }

        return (
    <div>
        <input value={item} onChange={handleChange}  placeholder='enter'/>
        <button onClick={handleAdd}>Add</button>
        <ul>
{mylist.map(function(item){

    return<li>{item}</li>
})}
        </ul>
    </div>
  )
}

export default Todo